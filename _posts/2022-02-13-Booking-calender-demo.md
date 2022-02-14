---
title: "Booking calenders and web intergration"
layout: post
tags: ["jekyll", "website", "resources", "tools"]
published: true
cover-img: assets/img/canberra_pana_ballon.jpg
thumbnail-img: assets/img/canberra_pana_ballon.jpg
comments: true
---

Including calenders and other dynamic content can be as simple as using `<iframe>`s
# Booking calender google

Following the "embed" code from google the iframe looks like so:

<iframe src="https://calendar.google.com/calendar/embed?src=9hmas5pdt163gakl50kkjbf33g%40group.calendar.google.com&ctz=Australia%2FSydney" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

It is possible to modify this in several different ways.

## google maps iframe code

Within a `iframe` snippit there are several attributes that can be quickly modified, these include:

### `width`
### `height`
### frameborder
### `style`

These can apply style to the iframe using css. It is best to keep the css in a different file to html and markdown documents.