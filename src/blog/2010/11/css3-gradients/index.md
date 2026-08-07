---
permalink: "/blog/2010/11/css3-gradients/"
date: "2010-11-21"
title: "CSS3 Gradients"
tags: ["blog", "css"]
excerpt: ""
eleventyExcludeFromCollections: true
---

I've wrote about CSS gradients briefly, when writing about [the redesign of this site at the beginning of the year](http://jackosborne.com/articles/if-youre-not-using-webkit-youre-doing-it-wrong/) but because I was writing about all the various aspects of the design and build I never spent much time on how to actually implement `CSS` gradients other than just writing down the example code.

## So what are CSS gradients?

For years we've become accustomed to producing gradients on our sites with the help of high quality `jpg`s and `png`s but now we can do this on modern browsers - Firefox, Safari and Chrome - with `CSS`.

## Why use CSS gradients

There are many different reasons why you should use `CSS` gradients but I’m just going focus on what I believe are the main reasons and why I use them. Because you can specify the gradients quickly with a few lines of code implementation time is shorter and allows for you to prototype your ideas within the browser. This in turns means less hassle as you no longer have to open up your favourite image editor software to create the gradients.

As well as quicker implementation time you also have more flexibility as the gradients can span the width and height of the browser window if you so desire, whereas you would have to specify several different images for different sizes of browser.

One of the excellent things about `CSS3` gradients is that you can define them along with fallback images, so that browsers that don’t support gradients will just render the image instead, meaning fewer `HTTP` requests which in turn means that the page will load quicker.

## How do I code a CSS gradients

There are two different ways to code `CSS` gradients, due to browser vendors - mozilla and safari - implementing the gradients differently.

### Mozilla

    -moz-linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* )

### Safari and Chrome

    -webkit-gradient(<type>, <point> [, <radius>]?, <point> [, <radius>]? [, <stop>]*)

## Putting it all together

    div { background-color: #1a82f7; /* fallback colour */ background-image: url(images/gradient.png); /* fallback image */ background-image: -moz-linear-gradient(100% 100% 90deg, #F5F5F5, #FFF); background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#FFF), to(#F5F5F5)); }

## Different types of gradient

Below are a few basic examples of CSS gradients:

### Linear gradients

#### Vertical - [View Example](http://jackosborne.com/demos/2010/css-gradients/index.html#vertical)

    .vertical-gradient { height: 100px; background-color: #FF0000; /* fallback colour */ background-image: url(images/gradient.png); /* fallback image */ background: -moz-linear-gradient(top, #FF0000 0%, #FFF 100%); background: -webkit-gradient(linear, left top, left bottom, from(#FF0000), to(#FFF)); }

#### Horizontal - [View Example](http://jackosborne.com/demos/2010/css-gradients/index.html#horizontal)

    .horizontal-gradient { height: 100px; background-color: #FF0000; /* fallback colour */ background-image: url(images/gradient.png); /* fallback image */ background: -moz-linear-gradient(left, #FF0000 25%, #FFF 100%); background: -webkit-gradient(linear, left top, left bottom, from(#FF0000), to(#FFF)); }

### Radial gradients

#### Radial - [View Example](http://jackosborne.com/demos/2010/css-gradients/index.html#radial)

    .radial-gradient { height: 250px; background-color: #FF0000; /* fallback colour */ background-image: url(images/gradient.png); /* fallback image */ background: -moz-radial-gradient(50% 50%, farthest-side, #FF0000, #FFF); background: -webkit-gradient(radial, 50% 50%, 0, 50% 50%, 350, from(#FF0000), to(#FFF)); }

**Update (30/11/2010):** Gradients are [changing](http://lists.w3.org/Archives/Public/www-style/2010Nov/0275.html).
