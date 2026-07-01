'use strict'

hexo.extend.filter.register('before_generate', () => {
  const theme = hexo.theme.config

  theme.menu = {
    '首页': '/ || fas fa-home',
    '时间轴': '/archives/ || fas fa-clock',
    '标签': '/tags/ || fas fa-tags',
    '说吧': '/shuoba || fas fa-comment-dots',
    '歌单': '/gedan || fas fa-music',
    '游戏': '/game || fas fa-gamepad',
    '时光': '/artitalk || fa fa-heartbeat',
    '工具||fas fa-tools': {
      '镜像': '/google',
      'Json格式化': 'https://json.xbyzs.cf',
      'Draw画布': 'https://draw.xbyzs.cf',
      'EnKey': 'https://enkey.xbyzs.cf'
    }
  }

  theme.post_meta = theme.post_meta || {}
  theme.post_meta.page = Object.assign({}, theme.post_meta.page, {
    categories: false,
    tags: true
  })
  theme.post_meta.post = Object.assign({}, theme.post_meta.post, {
    categories: false,
    tags: true
  })

  theme.aside = theme.aside || {}
  theme.aside.card_categories = Object.assign({}, theme.aside.card_categories, {
    enable: false
  })
  theme.aside.card_tags = Object.assign({}, theme.aside.card_tags, {
    enable: true
  })

  theme.inject = theme.inject || {}
  theme.inject.head = theme.inject.head || []
  if (!theme.inject.head.includes('<link rel="stylesheet" href="/css/sidebar-tags.css">')) {
    theme.inject.head.push('<link rel="stylesheet" href="/css/sidebar-tags.css">')
  }
}, 99)
