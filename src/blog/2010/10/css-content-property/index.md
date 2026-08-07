---
permalink: "/blog/2010/10/css-content-property/"
date: "2010-10-17"
title: "CSS Content Property"
tags: ["blog", "css"]
excerpt: ""
eleventyExcludeFromCollections: true
---

The CSS content property isn't new, it was in fact introduced in CSS 2.1\. Recently I seem to be using it quite often and have decided to write up a tutorial on how you can implement it in your own work. If you've never heard of the content property then you should head on over to the [CSS specification](http://www.w3.org/TR/CSS2/generate.html#content) and lose a few hours reading about it.

However, if you're too lazy to read the documentation, here is the short version. The CSS content property basically sets the content of an element via the CSS - meaning that content gets rendered on the page even thought it is not coded into the actual HTML/PHP/ASP document. You might be reading the previous sentence and wondering how this is even possible, so lets get cracking.

Before I start showing you examples it might be worth noting two thing:

The first thing you should take note of is that the content property can only be used with pseudo elements like `:after` and `:before`. Although it is written like a pseudo selector it’s called a pseudo element because it’s not actually selecting anything that exists on the page, instead it adds something new.

The second is that unless you are inserting text or numbers into the content property you will need to use special characters which can be converted from regular ascii code. To find out your ascii code, head over to this [webpage](http://www.ascii-code.com/). In the example that follows we will be using the colon, which is represented by the following ascii code '`&#58;`'. With this number, we then head over to the [entity conversion calculator](http://www.evotech.net/articles/testjsentities.html) which will convert it into the appropriate CSS format.

{% responsiveImage "src/blog/2010/10/css-content-property/entity-convertion-calculator.jpg", "entity-convertion-calculator", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog" %}

Moving on to the example, a scenario that I keep finding myself in lately is when I've been marking up tables to display users data. Below I have reconstructed a very simple example

    <dl> <dt>Name:</dt> <dd>John Smith</dd> <dt>Age:</dt> <dd>48</dd> </dl>

The above code will display the following:

    Name: John Smith Age: 48

However, I hope you will have noticed from the above that the fields are marked as 'Name:' and 'Age:', rather than 'Name' and 'Age' which I'm sure you will agree is neither clean nor accurate, as databases will become convoluted with extra unwarranted mark-up. So how can we overcome this problem and help tidy up our code and databases respectively?

With the introduction of the CSS format code from above.

    dt:after{ content:"\003A"; }

By utilising the above CSS, we can now code our example up as follows

    <dl> <dt>Name</dt> <dd>John Smith</dd> <dt>Age</dt> <dd>48</dd> </dl>

The above code will display exactly the same as our previous example because the CSS will tell the browser to render a colon after content located within the `<dt>`s.

This is just one example but the possibilities are endless, you can use the content property to inject left arrows, right arrows, em dashes, semi-colons, percentage symbols, pilcrows and braces. Although the content property might seem a little pointless at first, it soon becomes clear that it can be a very useful and powerful tool.

**Update (15/11/2010)**: I found this excellent little article which lists all [content codes](http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/) that are available.
