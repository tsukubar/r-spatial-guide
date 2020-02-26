module.exports = {
  base: '/r-spatial-guide/',
  dest: 'docs',
  locales: {
    '/': {
      lang: 'ja',
      title: 'Rを使った地理空間データの可視化と分析',
      description: 'オープンソースソフトウェアのR環境を使い、地理空間データに関する操作や可視化、分析手法について解説します。'
    }
  },
  head: [[
    'link', 
    { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' },
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' },
    ]],
  
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "1. 地理空間データ操作", link: "/introduction" },
      { text: "2. 空間データ分析", link: "/statistical-learning" }
    ],
    
    sidebar:[
      '/',
        /* Geographic data in R */
       'introduction',
       'simple-feature-for-r',
       'spatial-data-handling',
       'spatial-data-mapping',
       'raster',
       'statistical-learning'
    ],
    
    repo: 'tsukubar/r-spatial-guide',
    repoLabel: 'GitHub',
    docsRepo: 'tsukubar/r-spatial-guide',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'このページを編集する',
    lastUpdated: true
  },

  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    anchor: { permalink: true },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};
