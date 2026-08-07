---
permalink: "/blog/2012/10/webkit-box-reflect/"
date: "2012-10-03"
title: "-webkit-box-reflect"
tags: ["blog", "css", "design"]
excerpt: ""
eleventyExcludeFromCollections: true
---

The Apple website is synonymous for its use of reflections. Go on any page and you will see at least one instance of this effect on the page, it could be on product or a simple module box, it is everywhere. There is no escaping it.

A few months ago—yes this has been sitting as a draft for quite some time—whilst scanning through Twitter, I noticed that someone had posted a link to the Path website, as they had been rolling out a few subtle improvements and upon clicking the link I immediately noticed the "Apple reflection" being used on certain elements. Intrigued to see how they created this I fired up my console and discovered, to my amazement, that it was actually `CSS` which was being used.

<figure><a href="https://path.com/p/2xS4MB">{% responsiveImage "src/blog/2012/10/webkit-box-reflect/webkit-box-reflect.png", "Click to view the effect", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog-png" %}</a>

<figcaption>Path using something similar to Apples coverflow.</figcaption>

</figure>

Below is the exact code which, at the time of writing, they are using to achieve this technique.

    .moments_book .book-artwork { -webkit-box-reflect: below 1px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(50%,transparent),to(rgba(255,255,255,0.5))); text-align: center; margin-top: 53px; margin-bottom: 64px; }

The above code is all fairly self explanatory with the exception of perhaps the top attribute `-webkit-box-reflect`. If we break it down it, here is what is happening;

`-webkit-box-reflect: <direction> <offset> <mask-box-image>`.

<dl>

<dd>`<direction>`</dd>

<dt>The direction in which you would like the reflection to appear. As you might expect, it can be stipulated as above, below, left or right.</dt>

<dd>`<offset>`</dd>

<dt>Is a length or percentage which specifies the distance of the reflection from the edge of the element, in the direction which you would like the reflection to appear.</dt>

<dd>`<mask-box-image>`</dd>

<dt>A mask-box-image that can be used to overlay the reflection. If omitted, the reflection has no mask.</dt>

</dl>

It's probably worth noting that CSS reflections are nothing new, in fact here is an article on the Surfin' Safari blog, from [2008](http://www.webkit.org/blog/182/css-reflections/), which I stumbled across when researching this topic.

It is interesting that reflections haven't seen as large an uptake as other attributes like `border-radius` have. One thing is for sure though, `box-reflect` looks like an amazing feature which will undoubtedly make our jobs a lot easier in the future. Unofrtunately one can only guess as to how long it will take before it is rolled out into the the working draft.
