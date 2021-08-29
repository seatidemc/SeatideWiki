module.exports = {
	title: 'SEATiDE Wiki',
	description: 'SEATiDE 模组服的官方维基项目',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: '官网', link: 'https://seatide.top' }
		],
		sidebar: [createSidebarGroup('入门', 'intro')],
		lastUpdated: '最后更新于',
		search: true,
		searchMaxSuggestions: 10
	},
	lastUpdated: '最后更新于',
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
		plugins: ['footnote', 'sup', 'sub'],
		lineNumbers: true
	},
	head: [['link', { rel: 'icon', href: 'https://fnmdp.oss-cn-beijing.aliyuncs.com/images/seatide-favicon.ico' }]]
};

function createSidebarGroup(title, name) {
	return {
		title,
		collapsable: false,
		children: getSidebar(name)
	};
}

function getSidebar(name) {
	let sidebar = {
		intro: [
			['/content/1.1', '1.1 插件的概念'],
			['/content/1.2', '1.2 我们的第一个插件']
		]
	};
	return sidebar[name];
}
