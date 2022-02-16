---
title: "Collecting posts and tags on jekyll websites"
layout: page
image: /img/RStudio_library.jpg
permlink: /all-posts.html
---

A good way to manage and document a large number of resources. This is done in beautiful jekyll using liqud tags. TO include a full list of all my blog posts so far.

```
{% for post in site.posts %}
  <article>
    <h2> 
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    {{ post.content }}
  </article>
{% endfor %}
```

An easy way to find what I am on about is to use `ctrl/command + F` in chrome on any webpage and search....

[insert image here...]