(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{282:function(t,s,a){"use strict";a.r(s);var r=a(13),v=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"模组入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模组入门"}},[t._v("#")]),t._v(" 模组入门")]),t._v(" "),s("p",[t._v("本页面将介绍一些 Minecraft Java 版模组领域的一些入门知识，不保证绝对专业性。如果你先前并不是一个模组服玩家，或者自认为对模组领域的了解不足，则可阅读本页。如果你发现了任何问题，也欢迎反馈给我们。")]),t._v(" "),s("h2",{attrs:{id:"什么是模组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是模组"}},[t._v("#")]),t._v(" 什么是模组？")]),t._v(" "),s("p",[s("strong",[t._v("模组")]),t._v("的英文是 "),s("strong",[t._v("Mod")]),t._v("，是单词 "),s("strong",[t._v("modification")]),t._v("（改动）的简写，一般指对原版游戏内容的拓展或者修改。模组广泛存在于游戏领域（不仅仅是 Minecraft），可以由官方制作，也可以由玩家制作。")]),t._v(" "),s("p",[t._v("有些游戏在开发的时候就已经将自由拓展游戏的功能考虑在内，在它们的开发者眼里，开发模组是预料之中的事情，所以他们对外提供工具，使模组的作者做起来更加方便。")]),t._v(" "),s("p",[t._v("而 Minecraft 并没有考虑到这一点，在 Minecraft 领域只有由玩家制作的模组。现今的所有模组和插件（包括服务端）的开发基础是对 Minecraft 本体的反编译。根据 EULA 的规定，只要不泄露源码即可随意制作插件和模组。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("但官方并不是从来没有开放游戏的拓展接口。基岩版的行为包、"),s("em",[t._v("mcfunction")]),t._v(" 等也算是对游戏本体的拓展。同时也有一个叫 "),s("a",{attrs:{href:"https://www.minecraft.net/en-us/article/scripting-api-now-public-beta",target:"_blank",rel:"noopener noreferrer"}},[t._v("Scripting API"),s("OutboundLink")],1),t._v(" 的东西。")])]),t._v(" "),s("p",[t._v("Minecraft 模组诞生的标志是 Forge 等 API（"),s("strong",[s("em",[t._v("i.e.")])]),t._v(" 应用程序接口）的诞生。这些 API 的诞生使其它开发者制作模组、将自己的创意应用到实践上有了可能。它相当于一座桥，使得模组开发者能够与 Minecraft 本体以规整、有组织的方式进行通讯。这也是为什么在安装模组之前都需要安装一个 Forge。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[s("strong",[t._v("概念注释")])]),t._v(" "),s("p",[t._v("我们安装上的那个 Forge 其实是一个 "),s("strong",[t._v("loader")]),t._v("（加载器），它负责将模组加载到 Minecraft 游戏中。而 Forge 所提供的 API 是模组开发者制作模组时使用的一套规范。")])]),t._v(" "),s("h2",{attrs:{id:"开始我的模组世界"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始我的模组世界"}},[t._v("#")]),t._v(" 开始我的模组世界")]),t._v(" "),s("p",[t._v("首先，我们开始玩模组的第一步都是给自己的游戏装上 Forge（或 Fabric，目前不推荐）。至于如何安装，网上的教程有很多，在这里提供两种方式。")]),t._v(" "),s("ul",[s("li",[t._v("（推荐）"),s("strong",[t._v("使用启动器")]),t._v(" — 启动器是由 Minecraft 玩家制作的第三方客户端，但其本质仍然是 Minecraft。启动器里提供了很多实用的功能，其中也包含了游戏下载和安装。常见的启动器如 "),s("a",{attrs:{href:"https://www.mcbbs.net/thread-142335-1-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HMCL"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://www.mcbbs.net/thread-719579-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PCL"),s("OutboundLink")],1),t._v("，在安装游戏的时候都支持自动安装 Forge、Liteloader、Optifine 等额外内容。")]),t._v(" "),s("li",[s("strong",[t._v("自行安装")]),t._v(" — 前往"),s("a",{attrs:{href:"https://files.minecraftforge.net/net/minecraftforge/forge/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("下载对应版本的模组安装器，打开后会自动识别你的游戏地址（如果你的游戏不在默认路径下，则需要自行选择），安装即可。请确保安装之前已经安装过一次游戏本体的某个版本。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("strong",[t._v("Forge 版本的意义")])]),t._v(" "),s("p",[t._v("Minecraft 有它的版本，Forge 也有它的版本。版本代表着对软件本体的一种删改，大部分情况下是为了提升软件的品质。")]),t._v(" "),s("p",[t._v("Forge 作为一个 API 的存在，它对外提供了开发者访问游戏的很多方法。开发者如果使用的方法只在某一个版本中存在，那么如果想要运行这个模组，就必须使用那个版本的 Forge。但这种情况一般不存在，通常的情况是开发者所用到的方法如果只在"),s("strong",[t._v("较高版本")]),t._v("中存在，那么这个时候的模组就存在一个对 Forge "),s("strong",[t._v("最低版本")]),t._v("的要求。")]),t._v(" "),s("p",[t._v("例如，A 模组依赖的版本是 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),t._v("，B 模组依赖的版本是 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"y"}})],1)],1)],1),t._v("，且 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:">"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"y"}})],1)],1)],1),t._v("，要想使它们都正常运行，则需要安装的版本是较高的 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"x"}})],1)],1)],1),t._v("。")],1),t._v(" "),s("p",[s("strong",[t._v("为什么高版本的方法低版本不一定有，而低版本的方法高版本一定有？")])]),t._v(" "),s("p",[t._v("这是因为在开发的过程中，为了降低其它开发者的维护成本，不会轻易地删除某一个方法。即使某一方法过时了，也不会将其删除，而是标记为"),s("strong",[t._v("已弃用")]),t._v("（仍能使用），这是因为将其删除的后果很严重。")])]),t._v(" "),s("p",[t._v("安装上 Forge 以后，你的 Minecraft 就拥有了运行模组的能力。只需要将模组文件放入游戏目录下的 "),s("code",[t._v("mods")]),t._v(" 文件夹里即可将其加载"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),t._v("到游戏中。模组加载遇到的任何问题，在当今版本的 Forge 中都会友好地"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),t._v("呈现在游戏界面中，以便你去排查。")]),t._v(" "),s("h2",{attrs:{id:"模组的依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模组的依赖"}},[t._v("#")]),t._v(" 模组的依赖")]),t._v(" "),s("p",[s("strong",[t._v("依赖")]),t._v("（dependency）是指模组运行时所依赖的其它程序，这些程序是任意的 Java 程序。有些模组引入了其它模组的内容或者特性，这两个模组互为依赖。模组所依赖的模组必须与其本身同时安装，且彼此都是匹配的版本。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("有些模组所依赖的模组并不具备任何玩法，它们的唯一作用就是为模组的开发者提供更多好用的「方法」来实现它们想要实现的功能，这些模组也属于依赖。")])]),t._v(" "),s("p",[t._v("通常在 Minecraft 玩家内部称模组所依赖的模组为"),s("strong",[t._v("这个模组的前置模组")]),t._v("。前置模组就好比是零件，本体模组就好比是核心，只有把它们拼在一起，才能成为一个可以发挥作用的集合体。如果不安装前置模组，本体将不能运行，引发崩溃。")]),t._v(" "),s("h2",{attrs:{id:"模组的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模组的配置"}},[t._v("#")]),t._v(" 模组的配置")]),t._v(" "),s("p",[t._v("模组的存在就是为了对游戏本体进行修改和拓展，大部分的模组也允许玩家自由地对模组本身进行修改和拓展。一个模组会对外开放一部分可供自定义的内容，存储在"),s("strong",[t._v("配置文件")]),t._v("（configuration）中。改变配置文件的内容即可改变对应的部分在游戏内的体现。模组的配置文件一般在模组被加载以后出现，存储在游戏目录下的 "),s("code",[t._v("config")]),t._v(" 文件夹中。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://z3.ax1x.com/2021/08/29/hGqgqe.png",alt:""}}),t._v(" "),s("em",[s("code",[t._v("config")]),t._v(" 文件夹在游戏目录中的位置")])]),t._v(" "),s("p",[t._v("以"),s("strong",[t._v("意志坚定")]),t._v("（Tough as Nails）为例，我们来观察配置文件是如何影响模组表现的。不同的模组内容不一样，所以配置文件会千差万别，一个模组的配置文件里也只可能是与这个模组有关的内容。这里演示的意志坚定 1.16.5 的功能，简单来说就是让饮水变得更加刁钻，水质影响口渴度。")]),t._v(" "),s("p",[t._v("打开 "),s("code",[t._v("config")]),t._v("，根据名称可以找到其配置文件所在的地方。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://z3.ax1x.com/2021/08/29/hGL9MT.png",alt:""}}),t._v(" "),s("em",[t._v("寻找模组英文名 "),s("em",[t._v("toughasnails")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("有些模组的配置文件存在文件夹里，有些则直接存在文件里。大多数模组的配置文件是 "),s("code",[t._v("toml")]),t._v(" 格式，大多数插件的配置文件是 "),s("code",[t._v("yml")]),t._v(" 格式。")])]),t._v(" "),s("p",[t._v("打开文件夹以后，发现有一个 "),s("code",[t._v("client.toml")]),t._v(" 和一个 "),s("code",[t._v("thirst.toml")]),t._v("，根据名称我们可以知道，对于客户端的配置在 "),s("code",[t._v("client.toml")]),t._v(" 里，对于口渴相关的配置在 "),s("code",[t._v("thirst.toml")]),t._v(" 里。打开 "),s("code",[t._v("thirst.toml")]),t._v("，根据其注释（大多数都有，如果没有且不能从字面意思解读出，则需要请教他人或者查阅教程）模仿着进行修改即可。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://z3.ax1x.com/2021/08/29/hGLGFA.png",alt:""}}),t._v(" "),s("em",[s("code",[t._v("thirst.toml")]),t._v(" 配置文件内容")])]),t._v(" "),s("p",[t._v("在这个例子中，配置文件允许我们修改「多大程度（"),s("code",[t._v("exhaustion_threshold")]),t._v("，疲劳阈值）的疲劳会导致口渴」以及不同生物群系对应的水质。")]),t._v(" "),s("p",[t._v("我们可以发现，这个过程是比较考验英语能力的（但其实都不是什么高大上的单词），如果不熟悉英语则可能需要费力去找翻译。但是配置文件可以让游戏体验独特许多，也让模组的自定义功能发挥到了极致。")]),t._v(" "),s("hr",{staticClass:"footnotes-sep"}),t._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[t._v("这个加载就是由 Forge 等 loader 完成的。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[s("p",[s("strong",[t._v("友好")]),t._v("（user-friendly）是指用户易读、易用。比如如果遇到模组重复的问题，程序直接告诉你是「"),s("strong",[t._v("模组重复")]),t._v("」而不是「"),s("em",[s("strong",[t._v("Caught Exception in "),s("code",[t._v("Loader.java")]),t._v(": DuplicatedModException")])]),t._v("」，这就叫友好。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);