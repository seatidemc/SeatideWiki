---
author: Subilan
date: 2022/01/26
---

# seatide-core

:::tip
- **项目开始时间** — 2021/08/30
- **作者** — Subilan
- **支持最低 Java 版本** — 11
- **支持最低 Minecraft 版本** — 1.16
- **开源地址** — <https://github.com/seatidemc/seatide-core>
:::

**seatide-core** 是用于管理 SEATiDE 服务器的定制 Bukkit 插件，使用 Java 11 编写。开源地址为 <https://github.com/seatidemc/seatide-core>。我们会通过该插件实现一些我们所需要的功能。当前实现的功能有

- 随机传送指令
- 更好的防爆（不修改 `mobGriefing` 导致副作用）
- 服务器 0 人在线自动关服

将来根据需要还会增添更多。

## 指令和权限

|权限名|默认给予|对象|
|:-:|:-:|:-:|
|`seatidecore.command`|所有人|允许执行指令|
|`seatidecore.command.x`|`rt` 默认所有人，其余默认 OP|指令 `/seatidecore x` 的执行|
|`seatidecore.admin`|OP|执行管理员类指令|

:::tip
`/seatidecore` 可简写为 `/st`。以下指令均省略了开头。
:::

|指令|权限|解释|
|:-:|:-:|:-:|
|`backup`|`seatidecore.command.backup`|立即进行一次全量备份。不影响自动备份的周期。|
|`archive`|`seatidecore.command.archive`|立即进行一次全量归档。|
|`reload`|`seatidecore.command.reload`|重载配置文件。|
|`rt [方圆边长]`|`seatidecore.command.rt`|进行随机传送。方圆边长不填按配置文件|
|`get <项目>`|`seatidecore.command.get`|获取相应项目的值。可供获取的项目见下表|

|可供获取的项目|解释|
|:-:|:-:|
|`deltime`|实例释放时间。|
|`backuptime`|下次备份时间。|

:::tip
若指令 `/st rt [方圆边长]` 中的方圆边长为 $\sqrt{a}$，则方圆 $a$ 指可能传送到的所有格所构成的面积大小。例如当 $a=10000$（$\sqrt{a}=100$）时表示当前随机传送所能传送到的面积图形为以当前站立位置为中心，$\sqrt{a}$ 为边长的正方形。
:::

## 配置文件

```yml
# API 设置
api:
  site: ~
  adminUsername: ~
  adminPassword: ~
# ECS 备份和自动删除设置
ecs:
  saveCountdown: false
  backupScript: ~
  archiveScript: ~
  maxEmptyTime: ~
  backupPeriod: ~
# 随机传送设置
random-tp:
  default-range: ~
  max-range: ~
```

### API 设置

用于连接到 SEATiDE 后端（开源在 [seatidemc/backend](https://github.com/seatidemc/backend)）的信息。

|项目|解释|取值|
|:-:|:-:|:-:|
|`site`|后端所在站点|String|
|`adminUsername`|管理员用户名|String|
|`adminPassword`|管理员密码|String|

### ECS 备份和自动删除设置

插件对 ECS 的备份和自动删除操作的相关内容。
|项目|解释|取值|
|:-:|:-:|:-:|
|`saveCountdown`|是否在服务器关闭时储存计时信息，以便下次再开启时承接|`true` or `false`|
|`backupScript`|备份所要执行的脚本|String - 绝对路径指向脚本|
|`archiveScript`|归档所要执行的脚本|String - 绝对路径指向脚本|
|`maxEmptyTime`|服务器最大空闲时间，空闲时间超出则关闭、归档并删除服务器|Integer - 秒|
|`backupPeriod`|备份周期|Integer - 秒|

:::tip
**备份**和**归档**的区别在于存储的文件夹不相同。在 SEATiDE 中，备份是将服务器的所有文件复制到 `oss://seatidestatic/backups/YYYY-MM-DD_HH:mm:ss`，而归档是用当前服务器的所有文件替换 `oss://seatidestatic/archive` 内的文件。

每一次开启实例的过程所使用的服务器文件均来自于归档所在的文件夹，备份仅仅用作备用，默认不被任何部署环节调用。
:::

### 随机传送设置

对随机传送功能的设置

|项目|解释|取值|
|:-:|:-:|:-:|
|`default-range`|随机传送的默认方圆边长 $\sqrt{a}$|Integer - 格|
|`max-range`|所能接受的最大方圆边长 $\sqrt{a}$|Integer - 格|