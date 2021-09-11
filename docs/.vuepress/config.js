const SIDEBAR = {
	新手: [['/getting-started/mod-starter', '模组入门'], ['/getting-started/server-starter', '服务器入门']],
	关于: [['/about/operation', '运营理念']],
	'Wiki 相关': [['/wiki-commitment', '贡献指南']]
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
		smoothScroll: true
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