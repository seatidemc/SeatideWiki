const SIDEBAR = {
	新手: [
		['/getting-started/mod-starter', '模组入门'],
		['/getting-started/server-starter', '服务器入门']
	],
	服务器: [
		['/server/general', '通用设定'],
		['/server/commands', '常用指令'],
		['/server/rules', '服务器规则'],
		['/server/downloads', '下载内容']
	],
	维护和管理: [
		['/automation/tidelab-index', 'TiDELab 介绍'],
		['/automation/basics', '机制']
	],
	插件: [
		['/plugins/special-zone', 'SpecialZone']
	],
	关于: [
		['/about/operation', '运营理念'],
		['/about/ops', '管理团队']
	],
	'Wiki 相关': [['/wiki-commitment', '贡献指南']],
};

function sidebar() {
	let v;
	let sidebar = [];
	for (k of Object.keys(SIDEBAR)) {
		v = SIDEBAR[k];
		sidebar.push({
			title: k,
			collapsable: false,
			children: v
		});
	}
	return sidebar;
}

module.exports = {
	title: 'SEATiDE Wiki',
	description: 'SEATiDE 模组服的官方维基项目',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: '官网', link: 'https://seatide.top' }
		],
		sidebar: sidebar(),
		search: true,
		searchMaxSuggestions: 10,
		editLinks: true,
		editLinkText: '编辑此页面',
		repoLabel: '查看源码',
		repo: 'seatidemc/SeatideWiki',
		docsDir: 'docs',
		smoothScroll: true,
		logo: 'https://fnmdp.oss-cn-beijing.aliyuncs.com/images/st-white-small.png'
	},
	markdown: {
		plugins: ['footnote', 'sup', 'sub']
	},
	plugins: {
		'@vuepress/medium-zoom': {
			selector: '.theme-default-content :not(a) > img'
		},
		mathjax: {
			target: 'chtml'
		}
	},
	markdown: {
		plugins: ['footnote', 'sup', 'sub']
	},
	head: [['link', { rel: 'icon', href: 'https://fnmdp.oss-cn-beijing.aliyuncs.com/images/seatide-favicon.ico' }]]
};
