---
permalink: "/blog/2012/03/spindicator/"
date: "2012-03-15"
title: "Spindicator"
tags: ["blog", "css", "html"]
excerpt: ""
eleventyExcludeFromCollections: true
---

> **_spin•di•ca•tor_**  
> **noun**
>
> A loading animation which allows the user to see how much longer they have to wait before progressing to the next stage.

Last week I was tasked with creating a loading animation created entirely in `HTML` and `CSS` but unfortunately my first attempt didn't quite go to plan and I ended up leaving it incomplete. However, not to be beaten I decided to go back and rework my code.

These `CSS` loading animations are nothing new, I remember seeing my first one back in 2010, but it doesn't hurt to test yourself by creating these sorts of things.

### Here's a quick rundown:

- Set up your containing `div` and `span`s within as child elements.
- Target each `span` using `nth-of-type` to rotate, translate and animate.
- Define and apply `keyframe`s to animate the `span`s

If you're interested in seeing the final result then feel free to check out my demo but please make sure you are using a modern browser.

[spindicator demo.](http://jackosborne.com/demos/2012/spindicator)
