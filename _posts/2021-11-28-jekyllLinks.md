---
title: Adding links in Jekyll websites
layout: post
published: true
---

There are many many great resources on the web but linking them to a website can be hard, nont to mention boring task. Here are my notes to try and reduce the instatbility of external web links within webpages and other online content.

## Page or post link

I am still not sure how this works exactly but here are some resources for this content.

```
[General tools](./general-statistics.md)
[Invasive species research](/invasive-species-research.md)
[PhD drafts](/thesis-overview.md)
[Mapping in R](/creating-maps-in-r/)
```

## Additional information

<div class="post"><ul>
{% for post in site.tags["jekyll"] %}
  <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
{% endfor %}
</ul></div>