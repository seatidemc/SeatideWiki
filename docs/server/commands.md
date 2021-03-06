---
date: 2021/09/30
author: Subilan
---

# 常用指令

以下列出了一些常用指令，注 `*` 的为**收费指令**。

|指令名称|解释|备注|
|:-:|:-:|:-:|
|`/gc`|查询服务器 TPS 和消耗信息|-|
|`/setwarp <地域名>`*|在当前位置创建一个地域点|创建以后，所有人都可以通过 `/warp` 指令传送|
|`/warp <地域名>`*|传送至相应地域|单执行 `/warp` 可查看地域列表|
|`/co i`|启动或关闭方块变动查询模式|启动后，单击要查询的方块（也可以是箱子）即可看到对此方块进行修改的玩家名、操作及时间|
|`/tpauto`|启用或关闭自动接收 TPA 请求的功能|启用后，他人对你发出的 `/tpa` 或 `/tpahere` 将自动接受|
|`/itemdb`|查询当前手中物品的 ID|通常用于反馈一样物品的问题|
|`/tpr`*|随机传送|冷却时间为 10 秒|
|`/sethome [家名]`*|在当前位置设置一个家|每个玩家最多可设置 5 个。家名留空则为默认名称|
|`/home [家名]`|传送到相应的家|家名留空则为默认名称|
|`/delhome [家名]`*|删除家|家名留空则为默认名称|

## 指令价格

|指令|价格（$\int$）|
|:-:|:-:|
|`/warp`|30|
|`/setwarp`|1000|
|`/sethome`|50|
|`/delhome`|10|
|`/tpr`|20|