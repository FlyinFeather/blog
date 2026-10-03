---
layout: page
title: 归档
subtitle: 全部文章按年份排列
---
(共 {{ site.posts | size }} 篇[文章](#year-{{ site.posts.first.date | date: "%Y" }}) · {{ site.categories | size }} 个[分类](/categories/) · {{ site.tags | size }} 个[标签](/tags/) )

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
  <h2 id="year-{{ year.name }}">{{ year.name }}&nbsp;({{ year.items | size }})
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
