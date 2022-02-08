---
title: "A journal for open science `ReScienceC`"
layout: post
tags:
- reproducibility
- publication
- manuscript
---

# ReScience C

ReScienceC is a open source journal hosted and curated entirely on github. This journal has been active for over three years and is a interesting concept were computational reproducibility is reached and documented in a totally transparent and reproducible manner.

![Landing page for Reproducible Scientific Journal](/assets/img/ReScienceScreenshot1.png)

## Article submission process

I have been looking into this for some time with the hope that some of New Zealands amazing 

## Reviewing submissions

All this has been done on github commits and actions that allow for some of the editor tasks and curation to be done automatically.

## `Typora` text editor

There are many different markdown editors to pick from but generally they range from raw txt to a "what you see is what you get" type of editor. One option for this type of editor I like is called `typora`.

**Quick NOTE**: *The configuration of image file locations can be hard to get configured correctly if, in my case you don't have a good grip of the relationship between relative and absolute paths when configuring image paths.*

## Additional information

<div class="post"><ul>
{% for post in site.tags["CV"] %}
  <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
{% endfor %}
</ul></div>