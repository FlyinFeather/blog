---
title: Adding links in Jekyll websites
layout: post
tags: ["jekyll", "website", "resources", "tools"]
published: true
cover-img: assets/img/canberra_pana_ballon.jpg
thumbnail-img: assets/img/canberra_pana_ballon.jpg
comments: true
published: true
tags:
  - jekyll
  - tips
  - rmd
  - code
---

There are many many great resources on the web but linking them to a website can be hard, nont to mention boring task. Here are my notes to try and reduce the instatbility of external web links within webpages and other online content.

## Page or post link

I am still not sure how this works exactly but here are some resources for this content.

```
[General tools](https://davan690.github.io/general-statistics.md)
# or
[General tools](./general-statistics.md)

```

## Content (page) links

Direct and indirect links??!

```
<div class="list-filters">
  <a href="/general-statistics" class="list-filter">Statistics</a>
  <a href="/ecological-statistics" class="list-filter">Ecology</a>
  <a href="/invasive-species-research" class="list-filter">PhD</a>
  <a href="https://www.ssnhub.com/beech-publication-wr" class="list-filter">Draft manuscript v1</a>
</div>
```

## Image links

```

![Landing page for Reproducible Scientific Journal](/assets/img/ReScienceScreenshot1.png)

```

## Additional information

<div class="post"><ul>
{% for post in site.tags["jekyll"] %}
  <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
{% endfor %}
</ul></div>