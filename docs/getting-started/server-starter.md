---
date: 2021/09/11
author: Subilan
---

# 服务器入门

本页面将引导你进入 SEATiDE 服务器并正式开始游玩。如果你先前已经玩过其它 Minecraft 服务器（无论类型），那么按照你所熟悉的操作进入即可，无需深入阅读本页。

## 获取 IP

**服务器的 IP 不是固定的**，原因是：服务器长期闲置将会自动停机，每次停机以后 IP 都会发生变化。因此，我们不会在任何地方写上一个固定的 IP，这也是为什么你不能在 MCBBS 等地方找到服务器的确切 IP。

简而言之，服务器的 IP 是动态变化的，你可以在[官网的状态页面](https://seatide.top/#/status)查看当前的 IP。若该页面显示「实例不存在」，则代表服务器由于长时间无人在线而被自动关闭。此时需要你或者其它玩家手动新开一个服务器，具体流程见[此处](/automation/tidelab-index.md)。

:::tip
我们的群友提供了一个自动获取 IP 的小模组 ServerIpUpdate。安装后，它将自动帮你刷新 IP，而无需每次都去查看状态页面。前往[下载内容](../server/downloads.md)页面或者在群内群文件中可下载到此模组。
:::

## 准备客户端 & 加入服务器

:::tip
**提示**

- 在准备客户端、开始游戏之前，请确保你的系统中已经安装了 Java。由于本服版本为 1.16.5，所以没有对 Java 16 的硬性要求。如果你还没有 Java，可以选择下面的一个链接下载。这些链接都是由清华大学开源软件镜像站提供的。此处仅提供 Windows 的 Java 下载，其它系统和版本的 Java 请在[这里](https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK)浏览。
  - [OpenJDK JRE 16 HotSpot (64 位)](https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/16/jre/x64/windows/OpenJDK16U-jre_x64_windows_hotspot_16.0.1_9.msi)
  - [OpenJDK JRE 16 OpenJ9 (64 位)](https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/16/jre/x64/windows/ibm-semeru-open-jre_x64_windows_16.0.2_7_openj9-0.27.0.msi)
  - [OpenJDK JRE 11 HotSpot (64 位)](https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/11/jre/x64/windows/OpenJDK11U-jre_x64_windows_hotspot_11.0.12_7.msi)
  - [OpenJDK JRE 11 OpenJ9 (64 位)](https://mirrors.tuna.tsinghua.edu.cn/AdoptOpenJDK/11/jre/x64/windows/OpenJDK11U-jre_x64_windows_openj9_windowsXL_11.0.10_9_openj9-0.24.0.msi)
- 下文中所有提供的文件仅适用于 Windows 操作系统。
:::

- **Plan A** — 我们准备了一个[简单的整合包](https://fnmdp.oss-cn-beijing.aliyuncs.com/seatide-public/client-simple.7z)，里面包含了当前周目的所有模组、小地图（JourneyMap）和 Optifine。如果你想快速开始游戏，可以直接下载这个整合包。解压后打开里面的 PCL 或者 HMCL（两者都是启动器，具体用哪个取决于个人喜好）填入你的正版账号信息即可。
- **Plan B** — 你也可以制作自己的整合包，或者使用自己当前所使用的整合包进入游戏。在进入之前，请保证你正确安装了当前周目的所有模组。我们准备了一个[模组包](https://fnmdp.oss-cn-beijing.aliyuncs.com/seatide-public/modpack.7z)，它包含了本周目的所有模组。将所有的模组拖入 `.minecraft` 文件夹下的 `mods` 即可。

如果你的游戏没有正常开启，可以**截图**发到讨论群内或者在讨论群内**准确表达你的问题**来寻求帮助。

游戏正常开启以后，在多人游戏中添加服务器，填入当前服务器的 IP 地址即可开始游戏。如果你的电脑内存小于或等于 4GB，游戏可能会卡顿。

## 服务器里的生活

进入服务器即可开始你的 SEATiDE 探索之旅。在探索之前，请务必阅读[服务器规则](../server/rules.md)，**进入服务器即代表已阅读并理解规则内容**。SEATiDE 是一个养老生存服务器，我们**不**提倡快餐服的游玩模式。

### 在 SEATiDE，你可以...

SEATiDE 想要带给你一个较高自由度的体验，从群内的不限制话题畅聊到服务器里的自由探索，我们希望「自由」的字眼可以在这里发挥到极致。因此，在这里你可以

- 随心所欲玩生存 —— 甚至无需接触任何模组
- 探索 Mod 玩法 —— 无需担心什么也不会
- 静心养老 —— 搭房子！搭房子！搭房子！

我们也推荐你多参与玩家之间的互动，结交游戏里的朋友。

### 你的领地你做主

**SEATiDE 没有，也不会提供圈地功能。** 取而代之的，是可以查询方块变动记录的 CoreProtect。CoreProtect 会记录每一名玩家对方块（包括箱子）的改动，并可以对其进行溯源和回滚。也就是说，如果有熊孩子烧了你的房子，那么我们既可以得知他是谁，也可以将这一切都还原。

**只要你有了建筑，无论是火柴盒还是美妙的楼阁，它周围的 50 格范围都会默认视为你的领地**，他人不能在没有说明的情况下侵犯。关于这一点的规定，可以在[规则中的相关内容](/server/rules.html#_2-%E4%B8%8D%E5%BE%97%E7%A7%81%E8%87%AA%E4%BF%AE%E6%94%B9%E3%80%81%E6%89%A9%E5%BB%BA%E4%BB%96%E4%BA%BA%E5%BB%BA%E7%AD%91-%E4%B8%8D%E5%BE%97%E6%9C%AA%E7%BB%8F%E5%85%81%E8%AE%B8%E5%9C%A8%E4%BB%96%E4%BA%BA%E5%BB%BA%E7%AD%91%E5%91%A8%E5%9B%B41%E6%90%AD%E5%BB%BA%E3%80%82)中找到。你的一切建筑，都会被视为你的个人作品，我们将尽全力保证其不受任何人的无理由拆除或者损害——更多依然在[服务器规则](../server/rules.md)中。

:::tip
**查询方块的变动记录**

若要查询，请输入指令 `/co i` 进入查询模式，然后点击要查询的方块，消息栏内会显示相应的信息。使用完毕后，再次输入指令 `/co i` 退出查询模式。
:::

### 灵活且*偏向永久*的周目

我们的周目分为多种类型，周目可以很短，也可以很长，这一切都取决于玩家的意向和服务器的发展路线。目前我们实行的是偏向永久的周目制。

在这种模式下，每一个周目不会因为模组的毕业就立即结束。周目的目标是以当前模组为主题，发展出一系列完整的家园体系。当一切都达到完美的饱和点，以及玩家大多数都乐意的情况下，我们才会更换周目。

每个周目结束以后，存档将会限时开放下载。
