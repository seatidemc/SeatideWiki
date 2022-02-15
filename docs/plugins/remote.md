---
author: Subilan
date: 2022/01/26
---
# Remote

:::tip
- **项目开始时间** — 2022/02/14
- **作者** — Subilan
- **支持最低 Java 版本** — 11
- **支持最低 Minecraft 版本** — 1.16
- **开源地址** — <https://github.com/seatidemc/remote>
:::

**Remote** 提供了使用 Web 与 Minecraft 服务器进行交互的方式，基于框架 [Spark](https://sparkjava.com) 和它所提供的 Eclipse Jetty。Remote 使你可以直接向 `服务器IP:端口/path/to/api` 发送 `GET` 和 `POST` 等请求来完成操作。

## 指令

Remote 暂不提供游戏内指令。

## 配置文件

```yml
port: 25575
password: ~
token-check-host: ~
index-page: index.html
```

|项目|解释|取值|
|:-:|:-:|:-:|
|`port`|HTTP 服务器运行的端口|Integer - 最大 65535|
|`password`|HTTP 服务器的密码[^1]|String|
|`token-check-host`|检查 Token 有效性的服务器地址|String - 以 `https?://` 开头|
|`index-page`|默认页面地址[^2]|String|

[^1]: 该密码用于在执行指令时的验证。将来可能用于更多方面的简单验证。
[^2]: 该地址是相对于插件配置文件夹而言的。例如直接填为 `index.html`，则代表跟 `config.yml` 放在一起。理论上这可以填写任何文本文件，不一定是 HTML。

## API 内容

### 返回的基本格式

```typescript
interface Response {
    status: "ok" | "ng",
    content: String | Object
}
```

下面的「返回值」都指的是 `content`

### *get* `/`

#### 返回

配置文件中所设置的 `index-page` 文件的内容

如果 `index-page` 未设置，或者文件对应不正确，则会返回 404。

### *get* `/device/constant/:type`

#### 参数
- `String type` — 获取的常量类型
  - `String cpu` — CPU 完整名称和频率
    - 例如：`Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz`
  - `String os` — 系统完整名称和构建号

#### 返回

常量的值。如果常量类型不正确，则返回 `"Invalid argument"`（无效参数）。

### *get* `/device/dynamic/:type`

#### 参数
- `String type` — 获取的变量类型
  - `String ramload` — String 系统内存使用百分比 $\in (0, 100)$
  - `String cpuload` — 系统 CPU 使用百分比 $\in (0, 100)$[^3]
  - `String tps` — 服务器 TPS $\in (0, 20)$[^3]
  - `String onlinePlayerCount` — 在线玩家数
  - `String totalPlayerCount` — 加入过服务器的玩家数
  - `String onlinePlayerList` — 在线玩家名称数组（JSON）
  - `String allPlayerList` — 加入过服务器的玩家名称数组（JSON）
  - `String uptime` — 服务器已运行的时间（秒）

[^3]: 统计的是一秒中的数据。若获取间隔小于一秒，则可能导致结果不准确。

#### 返回

变量的值。如果变量类型不正确，则返回 `"Invalid argument"`（无效参数）。

### *get* `/all-info`

#### 返回

返回所有常量和变量组成的组合对象。格式如下

```typescript
interface Response {
    device: {
        cpu: {
            usage: double,
            name: string,
            physical: {
                lcores: int,
                pcores: int
            }
        },
        ram: {
            max: long,
            avail: long,
            physical: {
                capacity: long,
                clocksp: long,
                type: string
            }
        }
    },
    server: {
        tps: double,
        online: string[],
        total: string[],
        uptime: int
    }
}
```

- `device` — 包含设备相关信息
  - `cpu` — CPU 相关
    - `usage` — 占用率[^3]，单位 %
    - `name` — 全名
    - `physical` — 实物信息
      - `lcores` — 逻辑核数
      - `pcores` — 物理核数
  - `ram` — RAM 相关
    - `max` — 系统总量，单位比特
    - `avail` — 系统空闲量，单位比特
    - `physical` — 实物信息
      - `capacity` — 内存条容量，单位比特
      - `clocksp` — 内存条时钟速度，相当于频率，单位赫兹
      - `type` — 内存条类型，例如 `DDR4`
- `server` — 包含服务器相关信息
  - `tps` — TPS[^3][^4]，单位 tick/s
  - `online` — 在线玩家名称列表
  - `total` — 登录过服务器的玩家名称列表
  - `uptime` — 服务器正常工作时间[^5]

[^4]: Remote 对 TPS 的统计采用自实现方法，所以结果可能与其他插件（如 Essentials）有偏差，但不会很大。
[^5]: 该计时任务没有使用 Java 自身的新线程，而使用的是 Bukkit 的 Scheduler，每隔 20 ticks 记为一秒。这代表着当服务器卡顿（即一秒内 tick 小于 20）时，此值将与实际运行时间产生偏差。

### *post* `/server/exec`

#### 参数

将参数放在 Body 内。格式：

```json
{
    "password": "testPassword",
    "command": "say 123"
}
```

- `String password` 密码 — 对应在配置文件中设置的密码。
- `String command` 要执行的指令 — 单行。将使用 `ConsoleSender` 即控制台的身份[^6]执行。

#### 返回

由于 API 限制，只返回一个布尔值，代表是否执行成功。

:::warning
请注意：有些时候即使指令本身执行成功，但可能并没有效果。这与指令本身在 `CommandHandler` 中的实现有关。
:::

### *ws* `/server/console`

:::tip
借助此 WebSocket，你可以实时获取到服务器控制台的内容。可以和 *get* `/server/exec` 搭配使用，这样结果就可以看到了。
:::

#### 参数

将参数放在连接时 URL 的 query string 部分[^7]。例如：

```javascript
const connection = new WebSocket("ws://localhost:25575/?token=abc")
```

- `String token` — **具有管理员权限的**连接凭证[^8]。可通过向 <https://seatide.leviatan.cn/api/user/v1/auth> 验证获取。

如果配置文件中的 `token-check-host` 为空，则不需要提供任何参数，届时任何人都可以连接上此 WebSocket。

#### 返回

输出到 `System.out` 的所有值，以<ruby>行<rt>háng</rt></ruby>为分隔。可以理解为是同步控制台的内容，即控制台发了什么，客户端就会收到什么。部分不使用 `System.out` 的内容无法获取。

:::warning
当连续 30 分钟没有任何返回信息时，连接会自动断开。
:::

[^6]: 这代表着：1. 具有任意权限；2. 无法执行玩家特有指令（也是应该的）； 3. 结果全部返回到服务器后台，就相当于是在控制台执行一样。提示：你可以使用 *ws* `/server/console` 获取控制台输出。
[^7]: WebSocket 目前不具有完善的验证方式（[唯一的 Basic Authorization 被现代浏览器禁止使用](https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api)），因而采用此种验证方法，类似于 JWT。
[^8]: 将来会提供自定义的验证 API。目前所使用的 API 及验证方式为 SEATiDE 特有。

### 注释