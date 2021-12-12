---
title: Github hosting
published: true
---

Many of the challenges and blog posts I submitt here are based on using RMarkdown and other packages to render both documents such as pdf and word documents to ... This blog deals with a very small aspect of hrml documents that turns out to be the fundemental rules of internet web pages and the web more generally. The following headings represent the key aspects of this use. Followed by a simple step by step guide and a bunch of resources for other support and approaches to hosting web pages for all to find. If you mean you would like to use GitHub pages to publish or deploy your `bookdown` project and:

# Hosting

Hosting is the word given to the location of the files that people viewing your website will see. FOr people to access your content (even this content) the files need to be in a location and a type that is known and call able. For example, most locations where domain names can be brought, it is also possible to host sites at the locations/servers. However there can be better options to manage this. One way is to use an open source file server such as github. Below in the resource section there are addtional options but we will stick with github to begin with here.

# Guide

```
a) you would like to place the rendered book (i.e., the folder `_book` is not in your `.gitignore` file) on GitHub
b) further, you are OK with placing your rendered book in a folder on your "master" GitHub branch
c) even further, you are OK with using a project domain name like
`http(s)://<username>.github.io/<projectname>`

```
Then you can take advantage of a [neat trick with GitHub pages 9](https://blog.github.com/2016-08-17-simpler-github-pages-publishing/) which allows you publish to GH pages from the master branch `/docs` folder. 

To do that:

```
1. Configure source for GH pages through GitHub website as master branch `/docs` folder
2. Go to your `_bookdown.yml` file and add `output_dir: "docs"` on a line by itself
3. Serve/preview your book locally
4. Push to GitHub, you should see it there.
```



# Resources

**Here's the thread for [The Development of Shiny - Part 1 of the Shiny Developer Series](https://community.rstudio.com/t/shiny-developer-series-episode-1-thrad/29491)** using [https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4)

[Hosting bookdown in github](https://community.rstudio.com/t/hosting-bookdown-in-github/20427) uses [R Markdown](https://community.rstudio.com/c/R-Markdown), [bookdown](https://community.rstudio.com/tags/bookdown)
[![](../_resources/ea7d867477480a2d151f9773fa860c9c.png)](https://community.rstudio.com/u/itsmecevi)
[itsmecevi](https://community.rstudio.com/u/itsmecevi)
[2018-12-24](https://community.rstudio.com/t/hosting-bookdown-in-github/20427)



[![2018-12-24: "Anybody knows how to publish my bookdown into github? ... Thx"](../_resources/ae8d5a4ab9a965b2480698d1f5d0a63b.png)]()Jan 30](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/8)

Read all about it in [Publishing Bookdown to github 64](https://bookdown.org/yihui/bookdown/github.html) by [@yihui](https://community.rstudio.com/u/yihui)

[![](../_resources/6afc363c273f9b73ebbda69860cb813b.png)3]()
[![](../_resources/252dc519c347cf5d4f023bf392af4a92.png)]()
[![](../_resources/05382c6af4ec45d64d8fc8c58c04894d.png)]()
[(L)](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4)
[![](../_resources/ef3eb4c46b02f3022d0cdd68bbaf37cb.png)](https://community.rstudio.com/u/technocrat)
[technocrat](https://community.rstudio.com/u/technocrat)
[2018-12-24](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/2)
[(L)](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4)
[![](../_resources/ea7d867477480a2d151f9773fa860c9c.png)](https://community.rstudio.com/u/itsmecevi)
[itsmecevi](https://community.rstudio.com/u/itsmecevi)
[2018-12-24](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/3)

## Extended resources

Thank you. The link is a little bit confusing for me (a lot of technical terms). Do you have some of video or another simple tutorial [@technocrat](https://community.rstudio.com/u/technocrat)

[(L)](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4)
[![](../_resources/ef3eb4c46b02f3022d0cdd68bbaf37cb.png)](https://community.rstudio.com/u/technocrat)
[technocrat](https://community.rstudio.com/u/technocrat)
[2018-12-24](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4)
[rachaellappan.github.io 19](https://rachaellappan.github.io/bookdown/)

### [Using Bookdown for tidy documentation](https://rachaellappan.github.io/bookdown/)

In my last blog post, I described how I use R Markdown as a tool in my research to document the analyses I do. I find this very useful to keep a record of the mass of troubleshooting and trial and error I do when I start a new analysis, but when it...

- [http://seankross.com/2016/11/17/How-to-Start-a-Bookdown-Book.html 7](http://seankross.com/2016/11/17/How-to-Start-a-Bookdown-Book.html)
- [benmarwick.github.io 14](https://benmarwick.github.io/bookdown-ort/)

### [A Minimal Book Example](https://benmarwick.github.io/bookdown-ort/)

This is a minimal example of using the bookdown package to write a book. The output format for this example is bookdown::gitbook.

 ![](../_resources/36e47e74810a0d8c32a77f495c49cf8e.png)  [Data Science Heroes Blog – 28 Aug 18 20](https://blog.datascienceheroes.com/how-to-self-publish-a-book-customizing-bookdown/)

![](../_resources/f879dd505681482a0bd644d0dde835fa.jpg)

### [How to self-publish a book: Customizing Bookdown](https://blog.datascienceheroes.com/how-to-self-publish-a-book-customizing-bookdown/)

Centered around Bookdown, we will review some non-standard customizations in order to self-publish a book.

 [crumplab.github.io 4](https://crumplab.github.io/OER_bookdown/bookdown-1.html)

### [Open tools for writing open interactive textbooks (and more)](https://crumplab.github.io/OER_bookdown/bookdown-1.html)

A tutorial and working resources for writing open-source textbooks using open-source tools

and the collection of related videos at

[https://www.google.com/search?q=bookdown+github&source=lnms&tbm=vid&sa=X&ved=0ahUKEwjq5ve-yrffAhUqxlQKHfTKCLwQ_AUIDigB&biw=1290&bih=814 3](https://www.google.com/search?q=bookdown+github&source=lnms&tbm=vid&sa=X&ved=0ahUKEwjq5ve-yrffAhUqxlQKHfTKCLwQ_AUIDigB&biw=1290&bih=814)

However, there's really no substitute for DIY and sweating the small stuff from a minimal working example, such as the one given in the primary resource and working your way through increasing bells and whistles.

When, back in the second Reagan administration, I was a law student, my classmates spent a ton of money and time looking for the answers in a variety of so-called *hornbooks* and other study guides when they should have been paying attention to the `questions`. I was lucky. My contracts prof told us that everything we needed to know was in the table of contents of the casebook, and the rest was merely detail. Needless to say, I didn't believe him at first, and I kept looking for the answers until I was called to jury duty.

I looked around. There was the judge, the bailiff, the court clerk, the stenographer, the plaintiff's attorney and the defendant's attorney. I did the math. As a juror, it would be my job to give an answer guilt/not guilty or liable/not liable. I got paid $10/day plus parking. At that time, the lawyers were probably getting around $250/hour for knowing the right questions to asked. That's what tripped me to the realization that the questions are far more important than the answers. The same question will always have different answers.

[(L)](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4)

[![](../_resources/ea7d867477480a2d151f9773fa860c9c.png)](https://community.rstudio.com/u/itsmecevi)

[itsmecevi](https://community.rstudio.com/u/itsmecevi)

[2018-12-25](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/5)

![](data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='fa d-icon d-icon-circle svg-icon svg-node js-evernote-checked' aria-hidden='true' data-evernote-id='286'%3e%3c/svg%3e)

Thank you-[@technocrat](https://community.rstudio.com/u/technocrat). I will try it.

[(L)](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4)

[![](../_resources/3d9708a0dfd127f367a70b4a38641a17.png)](https://community.rstudio.com/u/cderv)

[cderv](https://community.rstudio.com/u/cderv)![](data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='fa d-icon d-icon-shield-alt svg-icon svg-node js-evernote-checked' aria-hidden='true' data-evernote-id='288'%3e%3cpath d='M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'%3e%3c/path%3e%3c/svg%3e)Sustainer

[2018-12-27](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/6)

![](data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='fa d-icon d-icon-circle svg-icon svg-node js-evernote-checked' aria-hidden='true' data-evernote-id='289'%3e%3c/svg%3e)

If your question's been answered (even by you!), would you mind choosing a solution? It helps other people see which questions still need help, or find solutions if they have similar problems. Here’s how to do it:

![](data:image/svg+xml,%3csvg class='fa d-icon d-icon-chevron-down svg-icon svg-string js-evernote-checked' xmlns='http://www.w3.org/2000/svg' data-evernote-id='291'%3e%3cpath d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'%3e%3c/path%3e%3c/svg%3e)

 ![](../_resources/887eeb8158f13abf70c091fc7dccbe94.png)  [FAQ: How do I mark a solution?](https://community.rstudio.com/t/faq-how-do-i-choose-a-solution/5633)  [meta](https://community.rstudio.com/c/meta)

>  If your question has been answered don't forget to mark the solution Folks in the future can come along and easily see what worked for you.

> You acknowledge the person who solved the issue.

> If you're the original poster and the category allows solutions to be marked there should be a little box at the bottom of replies that you can click to select that response as your "solution." Before:

> [image] After:

> [image] Based on replies by > [> @mara](https://community.rstudio.com/u/mara)>

12 days later

[(L)](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4)

[![](../_resources/6b653e93afc3d1b22729b4a084c00c79.png)](https://community.rstudio.com/u/apreshill)

[apreshill](https://community.rstudio.com/u/apreshill)![](data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='fa d-icon d-icon-shield-alt svg-icon svg-node js-evernote-checked' aria-hidden='true' data-evernote-id='293'%3e%3c/svg%3e)[RStudio Employee](https://community.rstudio.com/g/RStudioEmployee)

[Jan 9](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/7)

![](data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' class='fa d-icon d-icon-circle svg-icon svg-node js-evernote-checked' aria-hidden='true' data-evernote-id='294'%3e%3c/svg%3e)

### Suggested Topics

Want to read more? Browse other topics in [R Markdown](https://community.rstudio.com/c/R-Markdown) or [view latest topics](https://community.rstudio.com/latest).

| Topic | Replies | Activity |
| --- | --- | --- |
| ![](data:image/svg+xml,%3csvg class='fa d-icon d-icon-square-o svg-icon svg-string js-evernote-checked' xmlns='http://www.w3.org/2000/svg' data-evernote-id='296'%3e%3cpath d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z'%3e%3c/path%3e%3c/svg%3e)<br>[How do I convert R code to HTML?](https://community.rstudio.com/t/how-do-i-convert-r-code-to-html/15218)<br> [R Markdown](https://community.rstudio.com/c/R-Markdown) |  [7](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4) |  [2018-09-29](https://community.rstudio.com/t/how-do-i-convert-r-code-to-html/15218/8) |
| ![](data:image/svg+xml,%3csvg class='fa d-icon d-icon-square-o svg-icon svg-string js-evernote-checked' xmlns='http://www.w3.org/2000/svg' data-evernote-id='297'%3e%3c/svg%3e)<br>[r/css/md VS R markdown (in One)](https://community.rstudio.com/t/r-css-md-vs-r-markdown-in-one/27950)<br> [R Markdown](https://community.rstudio.com/c/R-Markdown)<br>[rmarkdown](https://community.rstudio.com/tags/rmarkdown) |  [13](https://community.rstudio.com/t/hosting-bookdown-in-github/20427/4) |  [8d](https://community.rstudio.com/t/r-css-md-vs-r-markdown-in-one/27950/14) |
