(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{284:function(t,s,a){"use strict";a.r(s);var e=a(13),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"remote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote"}},[t._v("#")]),t._v(" Remote")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("项目开始时间")]),t._v(" — 2022/02/14")]),t._v(" "),s("li",[s("strong",[t._v("作者")]),t._v(" — Subilan")]),t._v(" "),s("li",[s("strong",[t._v("支持最低 Java 版本")]),t._v(" — 11")]),t._v(" "),s("li",[s("strong",[t._v("支持最低 Minecraft 版本")]),t._v(" — 1.16")]),t._v(" "),s("li",[s("strong",[t._v("开源地址")]),t._v(" — "),s("a",{attrs:{href:"https://github.com/seatidemc/remote",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/seatidemc/remote"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[s("strong",[t._v("Remote")]),t._v(" 提供了使用 Web 与 Minecraft 服务器进行交互的方式，基于框架 "),s("a",{attrs:{href:"https://sparkjava.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spark"),s("OutboundLink")],1),t._v(" 和它所提供的 Eclipse Jetty。Remote 使你可以直接向 "),s("code",[t._v("服务器IP:端口/path/to/api")]),t._v(" 发送 "),s("code",[t._v("GET")]),t._v(" 和 "),s("code",[t._v("POST")]),t._v(" 等请求来完成操作。")]),t._v(" "),s("h2",{attrs:{id:"指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),s("p",[t._v("Remote 暂不提供游戏内指令。")]),t._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25575")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("token-check-host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("index-page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" index.html\n")])])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("项目")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("解释")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("取值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("port")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("HTTP 服务器运行的端口")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Integer - 最大 65535")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("password")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("HTTP 服务器的密码"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("token-check-host")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("检查 Token 有效性的服务器地址")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String - 以 "),s("code",[t._v("https?://")]),t._v(" 开头")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v("index-page")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("默认页面地址"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String")])])])]),t._v(" "),s("h2",{attrs:{id:"api-内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-内容"}},[t._v("#")]),t._v(" API 内容")]),t._v(" "),s("h3",{attrs:{id:"返回的基本格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回的基本格式"}},[t._v("#")]),t._v(" 返回的基本格式")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ng"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Object\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("下面的「返回值」都指的是 "),s("code",[t._v("content")])]),t._v(" "),s("h3",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" "),s("em",[t._v("get")]),t._v(" "),s("code",[t._v("/")])]),t._v(" "),s("h4",{attrs:{id:"返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("配置文件中所设置的 "),s("code",[t._v("index-page")]),t._v(" 文件的内容")]),t._v(" "),s("p",[t._v("如果 "),s("code",[t._v("index-page")]),t._v(" 未设置，或者文件对应不正确，则会返回 404。")]),t._v(" "),s("h3",{attrs:{id:"get-device-constant-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-device-constant-type"}},[t._v("#")]),t._v(" "),s("em",[t._v("get")]),t._v(" "),s("code",[t._v("/device/constant/:type")])]),t._v(" "),s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("String type")]),t._v(" — 获取的常量类型\n"),s("ul",[s("li",[s("code",[t._v("String cpu")]),t._v(" — CPU 完整名称和频率\n"),s("ul",[s("li",[t._v("例如："),s("code",[t._v("Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz")])])])]),t._v(" "),s("li",[s("code",[t._v("String os")]),t._v(" — 系统完整名称和构建号")])])])]),t._v(" "),s("h4",{attrs:{id:"返回-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回-2"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("常量的值。如果常量类型不正确，则返回 "),s("code",[t._v('"Invalid argument"')]),t._v("（无效参数）。")]),t._v(" "),s("h3",{attrs:{id:"get-device-dynamic-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-device-dynamic-type"}},[t._v("#")]),t._v(" "),s("em",[t._v("get")]),t._v(" "),s("code",[t._v("/device/dynamic/:type")])]),t._v(" "),s("h4",{attrs:{id:"参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-2"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("String type")]),t._v(" — 获取的变量类型\n"),s("ul",[s("li",[s("code",[t._v("String ramload")]),t._v(" — String 系统内存使用百分比 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2208"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"1"}}),s("mjx-c",{attrs:{c:"0"}}),s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),t._v(" "),s("li",[s("code",[t._v("String cpuload")]),t._v(" — 系统 CPU 使用百分比 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2208"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"1"}}),s("mjx-c",{attrs:{c:"0"}}),s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn3",id:"fnref3"}},[t._v("[3]")])])],1),t._v(" "),s("li",[s("code",[t._v("String tps")]),t._v(" — 服务器 TPS "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:"MJX-TEX"},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2208"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:","}})],1),s("mjx-mn",{staticClass:"mjx-n",attrs:{space:"2"}},[s("mjx-c",{attrs:{c:"2"}}),s("mjx-c",{attrs:{c:"0"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn3",id:"fnref3:1"}},[t._v("[3:1]")])])],1),t._v(" "),s("li",[s("code",[t._v("String onlinePlayerCount")]),t._v(" — 在线玩家数")]),t._v(" "),s("li",[s("code",[t._v("String totalPlayerCount")]),t._v(" — 加入过服务器的玩家数")]),t._v(" "),s("li",[s("code",[t._v("String onlinePlayerList")]),t._v(" — 在线玩家名称数组（JSON）")]),t._v(" "),s("li",[s("code",[t._v("String allPlayerList")]),t._v(" — 加入过服务器的玩家名称数组（JSON）")]),t._v(" "),s("li",[s("code",[t._v("String uptime")]),t._v(" — 服务器已运行的时间（秒）")])])])]),t._v(" "),s("h4",{attrs:{id:"返回-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回-3"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("变量的值。如果变量类型不正确，则返回 "),s("code",[t._v('"Invalid argument"')]),t._v("（无效参数）。")]),t._v(" "),s("h3",{attrs:{id:"get-all-info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-all-info"}},[t._v("#")]),t._v(" "),s("em",[t._v("get")]),t._v(" "),s("code",[t._v("/all-info")])]),t._v(" "),s("h4",{attrs:{id:"返回-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回-4"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("返回所有常量和变量组成的组合对象。格式如下")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    device"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cpu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            usage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" double"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            physical"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                lcores"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                pcores"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ram"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            max"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            avail"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            physical"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                capacity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                clocksp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" long"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    server"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        tps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" double"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        online"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        total"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        uptime"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" int\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("device")]),t._v(" — 包含设备相关信息\n"),s("ul",[s("li",[s("code",[t._v("cpu")]),t._v(" — CPU 相关\n"),s("ul",[s("li",[s("code",[t._v("usage")]),t._v(" — 占用率"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn3",id:"fnref3:2"}},[t._v("[3:2]")])]),t._v("，单位 %")]),t._v(" "),s("li",[s("code",[t._v("name")]),t._v(" — 全名")]),t._v(" "),s("li",[s("code",[t._v("physical")]),t._v(" — 实物信息\n"),s("ul",[s("li",[s("code",[t._v("lcores")]),t._v(" — 逻辑核数")]),t._v(" "),s("li",[s("code",[t._v("pcores")]),t._v(" — 物理核数")])])])])]),t._v(" "),s("li",[s("code",[t._v("ram")]),t._v(" — RAM 相关\n"),s("ul",[s("li",[s("code",[t._v("max")]),t._v(" — 系统总量，单位比特")]),t._v(" "),s("li",[s("code",[t._v("avail")]),t._v(" — 系统空闲量，单位比特")]),t._v(" "),s("li",[s("code",[t._v("physical")]),t._v(" — 实物信息\n"),s("ul",[s("li",[s("code",[t._v("capacity")]),t._v(" — 内存条容量，单位比特")]),t._v(" "),s("li",[s("code",[t._v("clocksp")]),t._v(" — 内存条时钟速度，相当于频率，单位赫兹")]),t._v(" "),s("li",[s("code",[t._v("type")]),t._v(" — 内存条类型，例如 "),s("code",[t._v("DDR4")])])])])])])])]),t._v(" "),s("li",[s("code",[t._v("server")]),t._v(" — 包含服务器相关信息\n"),s("ul",[s("li",[s("code",[t._v("tps")]),t._v(" — TPS"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn3",id:"fnref3:3"}},[t._v("[3:3]")])]),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn4",id:"fnref4"}},[t._v("[4]")])]),t._v("，单位 tick/s")]),t._v(" "),s("li",[s("code",[t._v("online")]),t._v(" — 在线玩家名称列表")]),t._v(" "),s("li",[s("code",[t._v("total")]),t._v(" — 登录过服务器的玩家名称列表")]),t._v(" "),s("li",[s("code",[t._v("uptime")]),t._v(" — 服务器正常工作时间"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn5",id:"fnref5"}},[t._v("[5]")])])])])])]),t._v(" "),s("h3",{attrs:{id:"post-server-exec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-server-exec"}},[t._v("#")]),t._v(" "),s("em",[t._v("post")]),t._v(" "),s("code",[t._v("/server/exec")])]),t._v(" "),s("h4",{attrs:{id:"参数-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-3"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("p",[t._v("将参数放在 Body 内。格式：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testPassword"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"say 123"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("String password")]),t._v(" 密码 — 对应在配置文件中设置的密码。")]),t._v(" "),s("li",[s("code",[t._v("String command")]),t._v(" 要执行的指令 — 单行。将使用 "),s("code",[t._v("ConsoleSender")]),t._v(" 即控制台的身份"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn6",id:"fnref6"}},[t._v("[6]")])]),t._v("执行。")])]),t._v(" "),s("h4",{attrs:{id:"返回-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回-5"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("由于 API 限制，只返回一个布尔值，代表是否执行成功。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("请注意：有些时候即使指令本身执行成功，但可能并没有效果。这与指令本身在 "),s("code",[t._v("CommandHandler")]),t._v(" 中的实现有关。")])]),t._v(" "),s("h3",{attrs:{id:"ws-server-console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ws-server-console"}},[t._v("#")]),t._v(" "),s("em",[t._v("ws")]),t._v(" "),s("code",[t._v("/server/console")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("借助此 WebSocket，你可以实时获取到服务器控制台的内容。可以和 "),s("em",[t._v("get")]),t._v(" "),s("code",[t._v("/server/exec")]),t._v(" 搭配使用，这样结果就可以看到了。")])]),t._v(" "),s("h4",{attrs:{id:"参数-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-4"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("p",[t._v("将参数放在连接时 URL 的 query string 部分"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn7",id:"fnref7"}},[t._v("[7]")])]),t._v("。例如：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" connection "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws://localhost:25575/?token=abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("String token")]),t._v(" — "),s("strong",[t._v("具有管理员权限的")]),t._v("连接凭证"),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn8",id:"fnref8"}},[t._v("[8]")])]),t._v("。可通过向 "),s("a",{attrs:{href:"https://seatide.leviatan.cn/api/user/v1/auth",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://seatide.leviatan.cn/api/user/v1/auth"),s("OutboundLink")],1),t._v(" 验证获取。")])]),t._v(" "),s("p",[t._v("如果配置文件中的 "),s("code",[t._v("token-check-host")]),t._v(" 为空，则不需要提供任何参数，届时任何人都可以连接上此 WebSocket。")]),t._v(" "),s("h4",{attrs:{id:"返回-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回-6"}},[t._v("#")]),t._v(" 返回")]),t._v(" "),s("p",[t._v("输出到 "),s("code",[t._v("System.out")]),t._v(" 的所有值，以"),s("ruby",[t._v("行"),s("rt",[t._v("háng")])]),t._v("为分隔。可以理解为是同步控制台的内容，即控制台发了什么，客户端就会收到什么。部分不使用 "),s("code",[t._v("System.out")]),t._v(" 的内容无法获取。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("当连续 30 分钟没有任何返回信息时，连接会自动断开。")])]),t._v(" "),s("h3",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),s("hr",{staticClass:"footnotes-sep"}),t._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[t._v("该密码用于在执行指令时的验证。将来可能用于更多方面的简单验证。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[s("p",[t._v("该地址是相对于插件配置文件夹而言的。例如直接填为 "),s("code",[t._v("index.html")]),t._v("，则代表跟 "),s("code",[t._v("config.yml")]),t._v(" 放在一起。理论上这可以填写任何文本文件，不一定是 HTML。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[s("p",[t._v("统计的是一秒中的数据。若获取间隔小于一秒，则可能导致结果不准确。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[t._v("↩︎")]),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3:1"}},[t._v("↩︎")]),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3:2"}},[t._v("↩︎")]),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3:3"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[s("p",[t._v("Remote 对 TPS 的统计采用自实现方法，所以结果可能与其他插件（如 Essentials）有偏差，但不会很大。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[s("p",[t._v("该计时任务没有使用 Java 自身的新线程，而使用的是 Bukkit 的 Scheduler，每隔 20 ticks 记为一秒。这代表着当服务器卡顿（即一秒内 tick 小于 20）时，此值将与实际运行时间产生偏差。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[s("p",[t._v("这代表着：1. 具有任意权限；2. 无法执行玩家特有指令（也是应该的）； 3. 结果全部返回到服务器后台，就相当于是在控制台执行一样。提示：你可以使用 "),s("em",[t._v("ws")]),t._v(" "),s("code",[t._v("/server/console")]),t._v(" 获取控制台输出。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[s("p",[t._v("WebSocket 目前不具有完善的验证方式（"),s("a",{attrs:{href:"https://stackoverflow.com/questions/4361173/http-headers-in-websockets-client-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("唯一的 Basic Authorization 被现代浏览器禁止使用"),s("OutboundLink")],1),t._v("），因而采用此种验证方法，类似于 JWT。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn8"}},[s("p",[t._v("将来会提供自定义的验证 API。目前所使用的 API 及验证方式为 SEATiDE 特有。 "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref8"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);