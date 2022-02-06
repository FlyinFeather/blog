---
title: Markdown syntax
subtitle: Quick tips
layout: post
cover-img: assets/img/canberra_pana_ballon.jpg
thumbnail-img: assets/img/canberra_pana_ballon.jpg
comments: true
published: true
tags:
  - markdown
  - tips
  - rmd
  - code
  - reproducible
---

This is an extension of the demo post from [Dean's website](https://beautifuljekyll.com/) that demostrates some key markdown syntax to use in markdown blog posts for this site (and many other great tools).  

## Simple syntax

There are many resources and blogs about how to use markdown. Here is a [5 minutes guide to writing in markdown](https://markdowntutorial.com/) - it'll teach you how to transform regular text into `bold/italics/headings/tables/etc`. Here are some quick notes.

### Text modifications

Bold text is defined by `**`: **Here is some bold text**

Headings are defined by the number of `#` before a line of text. For example `##### Here is a fifth level heading` is needed and then the rendered document will have a fifth level heading as below.
##### Heading (Here is a secondary heading (`##`))

and a sixth heading by `######`. This is the max level for a heading by the way...

###### Here is a third heading

## Including code

One of the greatest strengths of markdown extensions such as RMarkdown is the ability to include code chunks within normal text as below:

```
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}

## Boxes

You can add notification, warning and error boxes like this:

### Notification, warning and error boxes

`{: .box-note} `; `{: .box-warning}`; `{: .box-error}` demos below:

{: .box-note} 
**Note:** This is a notification box.

### Working with images

{: .box-note} 
You can set following yaml variables: `layout: post`; `tags: <tagg_label>`

{: .box-warning} 

## Images

Images live in the `./assets/img/` folder following the same rules as the beautiful jekyll template. Overall jekyll uses liquid tags to and these usually found in the `assets` folder.

#### Classic markdown image syntax

How about a yummy crepe? Here are two sections of code for working with markdown syntax (code). It can also be centered using `{: .mx-auto.d-block :}`

![Crepe: It can also be centered!](https://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg){: .mx-auto.d-block :}

## Tables

Tables can be directly written using markdown syntax or can be built in code and rendered to markdown using a package like `knitr` in R.

### `Markdown` tables

Markdown tables can be difficult to keep formatted. Here's a demo markdown table:

| Number | Next number | Previous number |
| :------ |:--- | :--- |
| Five | Six | Four |
| Ten | Eleven | Nine |
| Seven | Eight | Six |
| Two | Three | One |

### `RMarkdown` tables

An advantage of `RMarkdown` is that you can build autogenerating markdown tables using a range of packages including `knitr`.
