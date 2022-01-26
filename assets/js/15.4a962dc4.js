(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{420:function(t,e,a){"use strict";a.r(e);var s=a(58),c=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"seatide-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seatide-core"}},[t._v("#")]),t._v(" seatide-core")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("项目开始时间")]),t._v(" — 2021/08/30")]),t._v(" "),a("li",[a("strong",[t._v("作者")]),t._v(" — Subilan")]),t._v(" "),a("li",[a("strong",[t._v("支持最低 Java 版本")]),t._v(" — 11")]),t._v(" "),a("li",[a("strong",[t._v("支持最低 Minecraft 版本")]),t._v(" — 1.16")]),t._v(" "),a("li",[a("strong",[t._v("开源地址")]),t._v(" — "),a("a",{attrs:{href:"https://github.com/seatidemc/seatide-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/seatidemc/seatide-core"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[a("strong",[t._v("seatide-core")]),t._v(" 是用于管理 SEATiDE 服务器的定制 Bukkit 插件，使用 Java 11 编写。开源地址为 "),a("a",{attrs:{href:"https://github.com/seatidemc/seatide-core",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/seatidemc/seatide-core"),a("OutboundLink")],1),t._v("。我们会通过该插件实现一些我们所需要的功能。当前实现的功能有")]),t._v(" "),a("ul",[a("li",[t._v("随机传送指令")]),t._v(" "),a("li",[t._v("更好的防爆（不修改 "),a("code",[t._v("mobGriefing")]),t._v(" 导致副作用）")]),t._v(" "),a("li",[t._v("服务器 0 人在线自动关服")])]),t._v(" "),a("p",[t._v("将来根据需要还会增添更多。")]),t._v(" "),a("h2",{attrs:{id:"指令和权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令和权限"}},[t._v("#")]),t._v(" 指令和权限")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("权限名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("默认给予")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("对象")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("seatidecore.command")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("所有人")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("允许执行指令")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("seatidecore.command.x")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("rt")]),t._v(" 默认所有人，其余默认 OP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指令 "),a("code",[t._v("/seatidecore x")]),t._v(" 的执行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("seatidecore.admin")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("OP")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("执行管理员类指令")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("/seatidecore")]),t._v(" 可简写为 "),a("code",[t._v("/st")]),t._v("。以下指令均省略了开头。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("指令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("权限")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("解释")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("backup")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("seatidecore.command.backup")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("立即进行一次全量备份。不影响自动备份的周期。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("archive")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("seatidecore.command.archive")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("立即进行一次全量归档。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("reload")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("seatidecore.command.reload")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("重载配置文件。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("rt [方圆边长]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("seatidecore.command.rt")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("进行随机传送。方圆边长不填按配置文件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("get <项目>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("seatidecore.command.get")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("获取相应项目的值。可供获取的项目见下表")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("可供获取的项目")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("解释")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("deltime")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("实例释放时间。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("backuptime")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("下次备份时间。")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("若指令 "),a("code",[t._v("/st rt [方圆边长]")]),t._v(" 中的方圆边长为 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msqrt",[a("mjx-sqrt",[a("mjx-surd",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"221A"}})],1)],1),a("mjx-box",{staticStyle:{"padding-top":"0.237em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1)],1)],1)],1)],1)],1),t._v("，则方圆 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1)],1)],1),t._v(" 指可能传送到的所有格所构成的面积大小。例如当 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"1"}}),a("mjx-c",{attrs:{c:"0"}}),a("mjx-c",{attrs:{c:"0"}}),a("mjx-c",{attrs:{c:"0"}}),a("mjx-c",{attrs:{c:"0"}})],1)],1)],1),t._v("（"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msqrt",[a("mjx-sqrt",[a("mjx-surd",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"221A"}})],1)],1),a("mjx-box",{staticStyle:{"padding-top":"0.237em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"1"}}),a("mjx-c",{attrs:{c:"0"}}),a("mjx-c",{attrs:{c:"0"}})],1)],1)],1),t._v("）时表示当前随机传送所能传送到的面积图形为以当前站立位置为中心，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msqrt",[a("mjx-sqrt",[a("mjx-surd",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"221A"}})],1)],1),a("mjx-box",{staticStyle:{"padding-top":"0.237em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1)],1)],1)],1)],1)],1),t._v(" 为边长的正方形。")],1)]),t._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# API 设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("site")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("adminUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("adminPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ECS 备份和自动删除设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ecs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("saveCountdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backupScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("archiveScript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("maxEmptyTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backupPeriod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 随机传送设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("random-tp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default-range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[t._v("~")]),t._v("\n")])])]),a("h3",{attrs:{id:"api-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-设置"}},[t._v("#")]),t._v(" API 设置")]),t._v(" "),a("p",[t._v("用于连接到 SEATiDE 后端（开源在 "),a("a",{attrs:{href:"https://github.com/seatidemc/backend",target:"_blank",rel:"noopener noreferrer"}},[t._v("seatidemc/backend"),a("OutboundLink")],1),t._v("）的信息。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("项目")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("解释")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("取值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("site")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("后端所在站点")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("adminUsername")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("管理员用户名")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("adminPassword")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("管理员密码")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String")])])])]),t._v(" "),a("h3",{attrs:{id:"ecs-备份和自动删除设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecs-备份和自动删除设置"}},[t._v("#")]),t._v(" ECS 备份和自动删除设置")]),t._v(" "),a("p",[t._v("插件对 ECS 的备份和自动删除操作的相关内容。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("项目")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("解释")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("取值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("saveCountdown")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是否在服务器关闭时储存计时信息，以便下次再开启时承接")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("true")]),t._v(" or "),a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("backupScript")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("备份所要执行的脚本")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String - 绝对路径指向脚本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("archiveScript")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("归档所要执行的脚本")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("String - 绝对路径指向脚本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("maxEmptyTime")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("服务器最大空闲时间，空闲时间超出则关闭、归档并删除服务器")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integer - 秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("backupPeriod")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("备份周期")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integer - 秒")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("strong",[t._v("备份")]),t._v("和"),a("strong",[t._v("归档")]),t._v("的区别在于存储的文件夹不相同。在 SEATiDE 中，备份是将服务器的所有文件复制到 "),a("code",[t._v("oss://seatidestatic/backups/YYYY-MM-DD_HH:mm:ss")]),t._v("，而归档是用当前服务器的所有文件替换 "),a("code",[t._v("oss://seatidestatic/archive")]),t._v(" 内的文件。")]),t._v(" "),a("p",[t._v("每一次开启实例的过程所使用的服务器文件均来自于归档所在的文件夹，备份仅仅用作备用，默认不被任何部署环节调用。")])]),t._v(" "),a("h3",{attrs:{id:"随机传送设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随机传送设置"}},[t._v("#")]),t._v(" 随机传送设置")]),t._v(" "),a("p",[t._v("对随机传送功能的设置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("项目")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("解释")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("取值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("default-range")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("随机传送的默认方圆边长 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msqrt",[a("mjx-sqrt",[a("mjx-surd",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"221A"}})],1)],1),a("mjx-box",{staticStyle:{"padding-top":"0.237em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integer - 格")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("max-range")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("所能接受的最大方圆边长 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msqrt",[a("mjx-sqrt",[a("mjx-surd",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"221A"}})],1)],1),a("mjx-box",{staticStyle:{"padding-top":"0.237em"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Integer - 格")])])])])])}),[],!1,null,null,null);e.default=c.exports}}]);