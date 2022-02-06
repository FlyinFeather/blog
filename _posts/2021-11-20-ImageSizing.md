---
title: Image sizes
layout: post
permlink: /imageNEWtest.html
meta-title: Some ideas for using rstudio and dealing with images
bigimg:
  - /assets/img/RStudio-Logo.jpg: RStudio
published: true
---

Generating web content from different visual content types and sizes has been a challenging aspect of working with RMarkdown and document generation. I found myself saying too many times recently that I hate working with images! Image size, projection dimensions, and printing dimensions all seem to change differently at different times when working with these different image types. To break this down I have divided the different aspects and rules under each of the different content types available in RStudio using packages like `rmarkdown` and `bookdown` vs websites using `jekyll`.

## Web images

The file location of the images matters. For different website generators and other document generators (parsers) the location of the associated files is different meaning that if images can not be found the locations defined the rendered object will no longer have an image even though you know where it is. The `jekyll` template 

On top of this the code for accessing images and other content varies between programing languages. This means that if you do not want to use the setup I have describing here much of the content could be much more confusing than nessaracry. The tools I am using are:

- Pandoc
- RMarkdown
- HTML5 templates
- github hosting
- git version control

## For jekyll this works

![Landing page for Reproducible Scientific Journal](/assets/img/ReScienceScreenshot1.png)

## Overview

Currently I am working in a dynamic `HTML5` template and rendering different aspects of the original template into RMarkdown workflow for html_documents. As I have little background in such matters before now I have tried to work with existing packages and framework I manage to find in the open source community. I find it very challenging to frame up images for different blog posts, images and presentations without the following cheat guides and "work arounds".

### Logos and avatars

I thought hard and long about generating logos and other image content in R using packages like ImageMagic and others. Indeed I have opted for using a simple online editor to layout images and setting up content sizing etc for printing. For business cards and other image content it works well enough...

![Arjacent Projects business card demo](/assets/img/arjacentprojectsCard.png)

## Glossary of terms

### Size: 

### Pixels

### Scale

## Web apps/software



## Other software





## R packages

ImageMagic is accessed through a package called `imageMagic`. Working 

## Powerpoint

[coming]
