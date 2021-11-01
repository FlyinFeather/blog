Mendeley and RStudio basic setup
================

I have now, after what seems like a lifetime, found a nice conceptial
way of working with the scientific workflow. The software and tools I
use are open-source and reproducible. This comes at some costs, the main
one that comes to mind is a general aspect of humanity that we can never
actually get away from….if your spelling isn’t right or you math doesn’t
match the current proof then its you not us…. This works for 99% of
projects. The real challenge is knowning when 1% of the projects are
coming up to support. Use these tools and you will work out how.

\[Manual coming soon….\]

Tools, software, hardware, its a lot to take in but dont try and
separate them anymore (cite cloud status of the world).

-   learning new tools (how to learn how to do things in R)

## Tips and tricks

[Video recording of walkthough](%22%22)

#### Local vs remote folders and files

Organisation is key….

``` r
## Local vs remote
```

## Downloads needed

These are the bits that help me once I got my head around the underlying
concepts:

### Hardware

Windows and mac so far. The linux learning curve is coming for me soon I
think but I have not worked extensively in lunix yet.

### Software

These are the extensions or almost shorthand names for the applications
and uses we are applying using the software. In an opensource enviroment
there are alot of tools but only a few decent Software frameworks to
achieve these tasks in the optonial manner (for the computer or the
human as it turns out). I just think of these as the actual programs or
files you have to add to your local/personal operating system to make
the code or program you want to work (before packages for specific
projects are added).

#### [R](http://www.r-project.org/)

[R](http://www.r-project.org/) is a programming language that is
especially powerful for data exploration, visualization, and statistical
analysis. To interact with R, we use [RStudio](http://www.rstudio.com/).

| Windows                                                                                                                                                                                                                                              | Mac OS X                                                                                                                                                                                                                                        | Linux                                                                                                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Install R by downloading and running [this .exe](http://cran.r-project.org/bin/windows/base/release.htm) file from [CRAN](http://cran.r-project.org/index.html). Please also install the [RStudio IDE](http://www.rstudio.com/ide/download/desktop). | Install R by downloading and running [this .pkg](http://cran.r-project.org/bin/macosx/R-latest.pkg) file from [CRAN](http://cran.r-project.org/index.html). Please also install the [RStudio IDE](http://www.rstudio.com/ide/download/desktop). | You can download the binary files for your distribution from [CRAN](http://cran.r-project.org/index.html). Please also install the [RStudio IDE](http://www.rstudio.com/ide/download/desktop) |

#### Note on version control (`git`)

Please install Git **before** installing R Studio. This allows seamless
integration between the two programs because R Studio looks for Git on
your computer, but Git does not look for R Studio. In the past,
installation in the opposite order has been known to create issues. If
you already installed R Studio and Git, but do not see the Git Tab in R
Studio then you can follow [this support
page](https://support.rstudio.com/hc/en-us/articles/200532077-Version-Control-with-Git-and-SVN)
to troubleshoot. Learning new tools (how to learn how to do things in
R).

-   GitHub (for tracking and documenting your work)
-   RMarkdown (to easily build webpages and pdfs with or without R code)
-   Beamer (pdf slides that blow away Powerpoint presentations)
-   Regular Expressions (find-and-replace on steroids)
-   LaTeX (for type-setting equations and improving your slides)
-   Git (version control)
