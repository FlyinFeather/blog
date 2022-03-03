---
title: "Creating business cards"
subtitle: "And why you might bother"
layout: post
tags: ["general", "overview", "website", "research", "cards", "business"]
#cover-img: assets/img/qrbanner.png
#thumbnail-img: assets/img/qrbanner.png
---

![QR codes can be a great way to pass links on](/assets/img/Businesscards2022.png)

## General steps
  
There are many different online tools that can be used to create design objects such as in [https://desygner.com/](https://desygner.com/) and [Canvas](https://www.canva.com/)

## Other blog posts

[coming]

<div class="post"><ul>
{% for post in site.tags["business"] %}
  <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
{% endfor %}
</ul></div>