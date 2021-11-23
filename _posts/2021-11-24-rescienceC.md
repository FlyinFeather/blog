---
title: A journal for open science
layout: post
permlink: /reScienceC_blog1.html
published: true
---

# ReScience C



![image-20211123114716568](../assets/img/ReScienceScreenshot1.png)

## `Typora` text editor

There is a not and a trick to dealing with markdown files in a "what you see is what you get" type of editor. 

One option for this type of editor I like is called `typora`.

#### Quick NOTE: *The configuration of image file locations can be hard to get configured correctly if, in my case you don't have a good grip of the relationship between relative and absolute paths when configuring image paths.*

<div class="post"><ul>
{% for post in site.tags["CV"] %}
  <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
{% endfor %}
</ul></div>
