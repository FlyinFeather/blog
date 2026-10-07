---
layout: page
title: 'Archive Index'
---
<div class="text-center" style="margin-bottom: 20px;">
  <a href="#year-{{ site.posts.first.date | date: '%Y' }}" class="btn btn-primary tag-btn">
    <i class="fas fa-book" aria-hidden="true"></i>&nbsp;{{ site.posts | size }} 篇文章
  </a>
  <a href="/categories/" class="btn btn-primary tag-btn">
    <i class="fas fa-folder" aria-hidden="true"></i>&nbsp;{{ site.categories | size }} 个分类
  </a>
  <a href="/tags/" class="btn btn-primary tag-btn">
    <i class="fas fa-tag" aria-hidden="true"></i>&nbsp;{{ site.tags | size }} 个标签
  </a>
</div>

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
