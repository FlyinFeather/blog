---
layout: post
title: 从零到一:记录我第一次搭建网站
subtitle: 终于把自己的主页跑起来了
cover-img: /assets/img/blog/from-zero-to-one-record-my-first-website/pexels-castorlystock-4112995.jpg
thumbnail-img: /assets/img/blog/from-zero-to-one-record-my-first-website/fabio-sasso-PmBb_Ywq02E-unsplash.jpg
share-img: /assets/img/blog/from-zero-to-one-record-my-first-website/pexels-castorlystock-4112995.jpg
tags: [Website building, Jekyll, Cloudflare, Diary, Homepage]
comments: true
author: SKJrpg
---

今天我第一次从零开始搭建了自己的个人网站，感觉挺新鲜的。

一开始我只是想有一个能放主页和博客的地方，后来慢慢变成了一次完整的实践：选主题、改配置、调页面、接域名、排查缓存问题。折腾了一阵子之后，终于看到了一个能正常访问的成品。

这次我用的是 Jekyll 和 Beautiful Jekyll 主题，部署在 Cloudflare Pages 上。整体过程不算复杂，但每一步都得一点点确认。比如主页最初和博客列表放在一起，后来我把主页和博客分开，让 `/` 专注做个人介绍，让 `/blog/` 专门展示文章流。这样结构更清楚，也更方便以后继续写内容。

过程中最让我印象深的是几个小问题：

1. 浏览器缓存会让你误以为修改没生效。
2. 字符编码问题会把简单的脚本错误放大成“页面怎么都不更新”。
3. 站点结构一旦理顺，后面添加内容就会轻松很多。

今天做完以后，我最大的感受不是“终于搭好了”，而是“我终于有了一个可以慢慢长大的地方”。接下来我会继续往里面写文章、整理笔记、慢慢补全个人介绍。

第一次搭站成功，算是给自己开了个好头。

<small>(本文章由AI生成)</small>
