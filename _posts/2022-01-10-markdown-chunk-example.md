---
layout: post
title: Code chunks in RMarkdown
subtitle: Trying to link RMarkdown to Jekyll
tags:
  - test
  - tools
  - rmd
  - rstudio
  - home
image: img/testing-image.jpg
published: true
---

# `chunks`

In an RMarkdown document there are several aspects of the structure that help make many of the reproducible leverage points achievable. `chunks` are one of these aspects.

A `chunk is incapsulated in $```$ and $```$ where the language that will be exucted being wrapped in `{}` as below for a R chunk:

```

```{r}
```

```



## Option 1

~~~
var foo = function(x) {
  return(x + 5);
}
foo(3)
~~~

## Option 2

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

## Option 3

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}
