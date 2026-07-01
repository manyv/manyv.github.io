---
title: blog更新命令
date: 2026-07-01 08:40:52
tags: 步骤说明
cover: /img/12.JPG
---

进入博客目录

```
cd ~/blog
```

新建文章

```
hexo new "文章标题"
```

```
source/_posts/使用苹果礼品卡充值 ChatGPT 会员.md
```

本地预览

```
hexo clean
hexo generate
hexo server
```

然后浏览器打开：

```
http://localhost:4000
```

提交到 GitHub

```
git status
git add .
git commit -m "update blog"
git push
```

查看部署结果

去 GitHub 仓库：

```
Actions → Deploy Hexo to GitHub Pages
```

访问

```
https://manyv.github.io/
```
