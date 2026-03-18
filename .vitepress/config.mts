import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Blog",
  description: "A Blog Site",
  lang: 'zh-CN',
  themeConfig: {
    logo: '',

    nav: [
      { text: '首页', link: '/' },
      { text: '软件安装配置', link: '/software/git' },
      { text: '知识点', link: '/knowledge/tcpip/tcp' }
    ],

    sidebar: [
      {
        text: '软件安装与配置',
        items: [
          { text: 'Git', link: '/software/git' },
          { text: 'Go', link: '/software/go' }
        ]
      },
      // {
      //   text: '数据结构与算法',
      //   items: [
      //     {
      //       text: '数据结构',
      //       items: [
      //         { text: '线性表', link: '/data-struct/list' },
      //         { text: '栈与队列', link: '/data-struct/stack-and-queue' },
      //         { text: '串', link: '/data-struct/string' },
      //         { text: '树', link: '/data-struct/tree' },
      //         { text: '图', link: '/data-struct/graph' }
      //       ]
      //     },
      //     {
      //       text: '算法',
      //       items: [
      //         {
      //           text: '查找算法',
      //           items: [
      //           ]
      //         },
      //         {
      //           text: '排序算法',
      //           items: [
      //             { text: '直接插入排序', link: '/algorithms/sort/straight-insertion-sort' },
      //             { text: '快速排序', link: '/algorithms/sort/quick-sort' }
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        text: '知识点',
        items: [
          // {
          //   text: 'Go',
          //   items: [
          //     { text: 'goroutine', link: '/knowledge/go/goroutine' },
          //     { text: 'channel', link: '/knowledge/go/channel' },
          //     { text: '锁', link: '/knowledge/go/mutex' }
          //   ]
          // },
          {
            text: 'TCP/IP',
            items: [
              { text: 'TCP三次握手四次回收', link: '/knowledge/tcpip/tcp' },
            ]
          }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: "切换主题",
    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",

    //404页面的配置
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    }
  }
})
