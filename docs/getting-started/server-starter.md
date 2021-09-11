---
date: 2021/09/11
author: Subilan
---

# 服务器入门

本页面将引导你进入 SEATiDE 服务器并正式开始游玩。如果你先前已经玩过其它 Minecraft 服务器（无论类型），那么按照你所熟悉的操作进入即可，无需深入阅读本页。

## 获取 IP

**服务器的 IP 不是固定的**，原因是：服务器长期闲置将会自动停机，每次停机以后 IP 都会发生变化。因此，我们不会在任何地方写上一个固定的 IP，这也是为什么你不能在 MCBBS 等地方找到服务器的确切 IP。

简而言之，服务器的 IP 是动态变化的，你可以在[官网的状态页面](https://seatide.top/status)查看当前的 IP。

:::warning
**问题：状态页面不显示 IP 而显示「实例未开通」是什么情况？**

在官网页面查看服务器状态时，有的时候看不见 IP，替代之的是「实例未开通」「实例已被自动释放，请手动开启」的信息。这代表着服务器被自动停机，并且目前为止没有人再次开启。

但不要担心，此时你可以自己开启一个新的实例。请前往 [TiDELab](https://lab.seatide.top) 登录你的账号，然后点击，等候 5 分钟左右再刷新页面即可看到 IP。
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

为了玩家的方便，我们准备了一个[简单的整合包](https://fnmdp.oss-cn-beijing.aliyuncs.com/seatide-public/client-simple.7z)，里面包含了当前周目的所有模组、小地图（JourneyMap）和 Optifine。通常情况下，如果你想快速开始游戏，可以直接下载这个整合包，解压后打开里面的 PCL 或者 HMCL（两者都是启动器，具体用哪个取决于个人喜好）填入你的正版账号信息，即可开始游戏。

当然，你也可以制作自己的整合包，或者使用自己当前所使用的整合包进入游戏。在进入之前，请保证你正确安装了当前周目的所有模组。为此，我们准备了一个[模组包](https://fnmdp.oss-cn-beijing.aliyuncs.com/seatide-public/modpack.7z)，下载解压即可得到本周目的所有模组，将其拖入 `.minecraft` 文件夹下的 `mods` 即可。

:::danger
**如果你已经安装过其它模组**

建议使用版本隔离，以免影响你当前的游戏模组配置。如果不进行版本隔离，建议将先前的所有模组复制到另外的地方，然后将本周目的模组放入，再适当添加你认为需要的模组。

如果先前所安装的模组中含有本周目的模组，请以本周目模组（模组包内的模组）为准，否则可能导致无法进入服务器。
:::

如果你的游戏没有正常开启，或者有疑问，可以**截图**发到讨论群内或者在讨论群内**准确表达你的问题**来寻求帮助。

游戏正常开启以后，进入多人游戏，点击「添加服务器」或者「直接连接」，填入当前服务器的 IP 地址即可加入游戏。如果你的电脑内存小于或等于 4GB，游戏可能会卡顿。

## 服务器里的生活

SEATiDE 通俗来讲就是一个养老生存服务器。你可以随便在里面玩生存，探索 Mod 玩法，同时我们也推荐你多参与互动，结交游戏里的朋友。你在服务器内的一切建筑，都会被视为属于你的个人作品，我们将尽全力保证其不受任何人的无理由拆除或者损害。

服务器里没有领地，但你可以大胆建筑，因为有 CoreProtect 的保护。CoreProtect 会记录每一名玩家对方块的改动，并可以对其进行回滚。也就是说，如果有熊孩子烧了你的房子，那么我们既可以得知他是谁，也可以将这一切都还原。


:::tip
**你可以查询方块的变动记录**

若要查询，请输入指令 `/co i` 进入查询模式，然后点击要查询的方块，消息栏内会显示相应的信息。使用完毕后，再次输入指令 `/co i` 退出查询模式。
:::

每个周目都会根据发展情况和玩家反馈衡量持续时长。如果这个周目长期没有人玩，服务器长期闲置或者处于关闭状态，那么这个周目将会一直持续下去（除了某些必要情况直接取消周目以外）。

因此，如果你是学生并且服务器里大多数人都是学生，那么在上学的阶段就不会有很多人玩服务器，于是这个周目就会被「暂停」（非真正意义上的）。


每个周目结束以后，你都可以免费下载到该周目的存档。