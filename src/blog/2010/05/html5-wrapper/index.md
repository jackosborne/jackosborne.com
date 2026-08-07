---
permalink: "/blog/2010/05/html5-wrapper/"
date: "2010-05-17"
title: "HTML5 Wrapper"
tags: ["blog", "html"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Recently I've been monitoring my mint stats and I've noticed a surge of people searching for the term "HTML5 wrapper", so I've decided to write up a quick post offering some suggestions to help combat this grey area.

## The Traditional Method

I think the main thing people fail to realise is that HTML5 isn't phasing out the much loved div tag, far from it. It's introducing a set of new elements to make standard based semantic code that should be easier for everyone to implement.

If a specific part of a website doesn't fall under the grouping of `section`, `article` or an `aside` tag then there is no problem with using a `div`. As a page wrapper doesn't fall into any of the above tag suggestions, there is nothing wrong using the tried and tested method of `<div id="wrapper">` or `<div class="wrap">`.

I've received countless emails where people have been asking if it would be appropriate to use a `section` tag as a wrapper but this is not the correct implementation for the tag. The [section spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#the-section-element) says

> The section element represents a generic document or application section…The section element is not a generic container element. When an element is needed for styling purposes or as a convenience for scripting, authors are encouraged to use the div element instead.

## Use the body

Another method to create a wrapper is to style the body tag. We style our body tags with properties such as `font-size`, `font-color` and `background-color` to name but a few, but something which I think many people may have overlooked is to add a width to the body tag, making it act as a div like container. Here's a very simple example

    body{ margin: 0 auto; width: 960px; }

But I would like to add, that for those who are not aware, you can also apply styles like background to the html tag. This means you can have a background that spans the full window width (html) and then apply your content background to body.

Hopefully I've been able to allay some of the concerns you have been having on how introduce a wrapper when making the jump to HTML5\. If you have any questions or would like to offer an alternative then please feel free to leave a comment or drop me an email by heading on over to the [contact page](/work/with-me/).
