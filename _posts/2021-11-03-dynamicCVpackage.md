---
title: Dynamic CV and development page
layout: page
permlink: /dynamicCVreadme/
meta-title: A novel approach to the competitive job market for graduate research
cover-img: assets/img/canberra_pana_ballon.jpg
thumbnail-img: assets/img/canberra_pana_ballon.jpg
published: true
---
Over the past few months I have developed a a concept of intergrating `html` templates with RMarkdown to generate custom landing pages. I have used a collection of open source `HTML5` templates and modified the code to include aspects of RMarkdown using `$ <...> $` and custom `YAML` headeres associated with each of the new aspects. I have generated a template here for a dynamic CV and in the future I will extend this for other projects.

![[Check out the draft here](https://davan690.github.io/dynamic_rmd_CV)](/assets/img/method-graf.jpg)

## News

<div class="post"><ul>
{% for post in site.tags["CV"] %}
  <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date_to_string }})<br>
    {{ post.description }}
{% endfor %}
</ul></div>
