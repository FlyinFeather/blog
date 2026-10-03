---
layout: page
title: 归档
subtitle: 全部文章按年份排列
---
<h3 class="text-center">
  <i class="fas fa-book" aria-hidden="true"></i>
  &nbsp;共 {{ site.posts | size }} 篇<a href="#year-{{ site.posts.first.date | date: "%Y" }}">文章</a> · {{ site.categories | size }} 个<a href="/categories/">分类</a> · {{ site.tags | size }} 个<a href="/tags/">标签</a> 
</h3>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
  <h2 id="year-{{ year.name }}">
    <i class="fas fa-calendar-alt" aria-hidden="true"></i>
    &nbsp;{{ year.name }}&nbsp;({{ year.items | size }})
  </h2>
  <ul>
    {% for post in year.items %}
      <li>
        <span>{{ post.date | date: "%m-%d" }}</span>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
