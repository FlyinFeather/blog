---
title: "Building a QR code"
subtitle: "And why you might bother"
layout: post
tags: ["general", "overview", "website", "research", "tools"]
cover-img: assets/img/qrbanner.png
thumbnail-img: assets/img/qrbanner.png
---

[QR codes](https://en.wikipedia.org/wiki/QR_code) have been all the rage in the past few years. Below are my simple steps to quickly making a single QR code either online, using a design application (e.g. Canvas) or through R.

![QR codes can be a great way to pass links on](/assets/img/qr-banner.png)

## General steps
  
A straightforward way to generate a QR code is to pick one of the many online tools to do it. Here are a few I have used (note some of the links might be broken):

   - One option [here](https://www.qr-code-generator.com/)
   - Another one [here](https://www.the-qrcode-generator.com/): This one is a little simpler
   - I used this [one](https://www.qrcode-monkey.com/): I liked this one because of easy custom image insert but im sure they are all “much of a muchness”
   - Medium blog https://medium.com/@gliechtenstein/build-a-qrcode-barcode-scanning-app-with-26-lines-of-json-b83453d39197
   - https://www.qrcode-monkey.com/#about

![QR codes online](/assets/img/qrcodes.png)

##### Outcome

...try scanning it??

![1561093165857](/assets/img/1561093165857.png)

## Tutorials

There could be a bit to come here....

### Further points

- There are different things that QR codes can be used for including url links, pdfs,
- Here is an online [https://www.qrstuff.com/ scanner](https://www.qrstuff.com/scan)

### An extention

I have used a simple design app made for data scientists and social media advertisers to make simple and quick designs. It is called [desygner](https://desygner.com). This is not the only option and paint will do but this free (basics anyway) gets the image sizes closer than I know how with my mind and a "paint" brush.

##### And Another

This same tech is used for creating and catalogueing databases (even jekyll ones).

- [barcodelib](https://github.com/barnhill/barcodelib/)
- [zint](https://github.com/zint/zint)
- [QR-generator](https://github.com/nayuki/QR-Code-generator)
