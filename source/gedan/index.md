---
title: 走华师大
date: 2026-05-13
cover: /img/3.jpg

---

## 我的歌单

<!-- 引入依赖 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>

<!-- 播放器容器 -->
<div id="aplayer"></div>

<script>
const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: false,
  autoplay: false,
  loop: 'all',
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  listFolded: false,
  listMaxHeight: '600px',
  lrcType: 3,
  audio: []
});

// 拉取网易云歌单（替换你的歌单ID）
fetch(`https://api.injahow.cn/meting/?server=netease&type=playlist&id=7032232695`)
  .then(res => res.json())
  .then(data => {
    ap.list.add(data);
  });
</script>

