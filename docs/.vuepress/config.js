module.exports = {
  base: '/ts-axios-doc/',
  title: 'TypeScript 从零实现 axios',
  description: '学习使用 TypeScript 从零实现 axios 库',
  markdown: {
    lineNumber: true,
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/chapter01/introduction/' },
      { text: 'GitHub', link: 'https://github.com/carsonhuang520/ts-axios' },
    ],
    sidebar: [
      {
        title: '初识 TypeScript',
        collapsable: false,
        children: [
          '/chapter01/introduction/',
          '/chapter01/install/',
          '/chapter01/get-started/',
        ],
      },
      {
        title: 'TypeScript 常用语法',
        collapsable: false,
        children: [
          '/chapter02/type/',
          '/chapter02/declare/',
          '/chapter02/interface/',
          '/chapter02/class/',
          '/chapter02/function/',
          '/chapter02/generic/',
          '/chapter02/interface/',
          '/chapter02/advance/',
        ],
      },
      {
        title: 'ts-axios 项目初始化',
        collapsable: false,
        children: [
          '/chapter03/require/',
          '/chapter03/init/',
          '/chapter03/base/',
        ],
      },
      {
        title: 'ts-axios 功能实现',
        collapsable: false,
        children: [
          '/chapter04/url/',
          '/chapter04/data/',
          '/chapter04/header/',
          '/chapter04/response/',
          '/chapter04/response-header/',
          '/chapter04/response-data/',
        ],
      },
      {
        title: 'ts-axios 异常处理',
        collapsable: false,
        children: ['/chapter05/error/', '/chapter05/enhance/'],
      },
    ],
  },
}
