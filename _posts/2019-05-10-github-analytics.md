---
layout: post
title: "Tracking a github website using google analytics"
subtitle: "Business info for the smarts"
use-site-title: true
---

Somehow a few months ago I managed to add google analytics to both my blog website here and my first publication but I am unsure how I managed it.

I have now come back to this as I need to set up google analytics for a custom `html` website with a single landing page. 

## My notes

I was hesitant to get this all working due to having to get envolved with google and things like adwords. For now I only have inserted the single google analytics code for my personal site.

## Resources

I have collected a few resources to setup another page with google analytics.

- [A stack overflow discussion on the matter](https://stackoverflow.com/questions/17207458/how-to-add-google-analytics-tracking-id-to-github-pages)

<div class="post"><ul>
{% for post in site.tags["github"] %}
  <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
{% endfor %}
</ul></div>