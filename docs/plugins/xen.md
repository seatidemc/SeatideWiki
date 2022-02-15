---
author: Subilan
date: 2022/01/26
---
# Xen

:::tip
- **项目开始时间** — 2022/02/01
- **作者** — Subilan
- **支持最低 Java 版本** — 11
- **支持最低 Minecraft 版本** — 1.16
- **开源地址** — <https://github.com/seatidemc/xen>
:::

**Xen** 是一个简单的多世界管理插件。Xen 的重点在于简单，因为 SEATiDE 本身对多世界的需求仅仅止于跨世界传送，所以并没有计划添加很多高级的功能。Xen 可以作为一个最简化的世界管理插件投入使用。

## 指令


以下指令均以 `/xen` 或者 `/x` 开头。

|指令|权限|解释|
|:-:|:-:|:-:|
|`tp <世界名>`|`xen.command.tp`|传送到指定世界的出生点|
|`load <世界名> [世界类型] [环境]`|`xen.command.load`|加载已存在的世界。该世界需要放在 `worlds`（或者 `server.properties` 中规定的）目录下并有效|
|`create <世界名> [世界类型] [环境]`|`xen.command.create`|创建新的世界并加载|
|`unload <世界名>`|`xen.command.unload`|从已加载中卸载世界|
|`list`|`xen.command.list`|列出当前可以传送至的世界|
|`reloadPlugin`|`xen.command.reloadPlugin`|重载配置文件|
|`difficulty [set|get] <世界名> <值>`|设置或者获取指定世界的难度|
|`setworldspawn`|强制设置当前所处世界的**全局出生点**为脚下位置|
|`rule [set|get] <世界名> <规则名> <值>`|设置或者获取指定世界的游戏规则|

其中，对于**世界类型**和**环境**的解释如下：

- 世界类型 `WorldType`
  - 含义：决定世界的生成方式
  - 默认值：`NORMAL`
  - 可选值：
    - `NORMAL` — 主世界
    - `FLAT` — 超平坦
    - `LARGE_BIOMES` — 巨型生物群系
    - `AMPLIFIED` — 放大化
- 环境 `Environment`
  - 含义：决定世界所处维度
  - 默认值：`NORMAL`
  - 可选值：
    - `NORMAL` — 主世界
    - `NETHER` — 下界
    - `THE_END` — 末地

## 配置文件

```yml
allow-dimension: false
```

目前只有一项可配置。`allow-dimension` 决定是否允许用指令（`/xen tp <世界名>`）传送到 `DIM1` 和 `DIM-1` 这两个世界。这两个世界是默认世界的下界和末地。