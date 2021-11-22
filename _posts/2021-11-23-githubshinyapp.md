---
title: Github shiny app
layout: post
permlink: /githubshiny.html
published: true
---

# github packages

It is possible to host a R package on github and many authors have done this. There are a collection of functions that can access packages on github by using

```
install.library("devtools")
library(devtools)
install.github("package_here")
library(package_here)
```

Here is a great package from github to look at the leading github packages:

<iframe src="https://vikas.shinyapps.io/Repository_shiny_app/" width="600" height="450" allowfullscreen></iframe>