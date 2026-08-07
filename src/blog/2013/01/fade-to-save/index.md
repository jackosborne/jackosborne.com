---
permalink: "/blog/2013/01/fade-to-save/"
date: "2013-01-11"
title: "Fade To Save"
tags: ["blog", "css", "html"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Although this technique has been around for quite some time I've started to see it cropping up in a lot of websites.

The technique I am referring to is when a user saves a particular piece of information and the area turns yellow and fades out to its regular colour, indicating that that particular portion of content has been saved/updated. You might have seen this on sites such as; Facebook, Google, Basecamp and Wordpress blogs. To be honest, it's just about everywhere.

37 signals first brought it to peoples attention back in 2003 with this [following blog post](http://37signals.com/svn/archives/000558.php). Wow, 2003! I'm writing about a technique that has been easily achievable for ten years... However, this was done with `JavaScript` and I wanted to see if I could recreate it with only `HTML` and `CSS`.

To make it something which is easily recognisable I decided to base my example on one of Facebooks comment modules. Have a look at the [demo](http://jackosborne.com/demos/2013/fade/) and see what you think. Unfortunately because the form is hooked up to the div, when you click the button the hash gets appended to the URL. This means that you can only see the background colour of the div change once, until the page gets refreshed again.

Currently I can't see a way round this problem without the use of some prevent default magic by JavaScript. If you know of a solution to this problem, please feel free to email me and I'll add your solution into this post and update the example.

---

**Update 03/03/2013:** [Joao Paulo](https://twitter.com/joplomacedo) got in touch with me to offering up two solutions:

- **Example One**: [A hack with two buttons](http://jsfiddle.net/dtdc5/2/).
- **Example Two**: [One button, a label, a checkbox and a few span elements inside the label](http://jsfiddle.net/joplomacedo/JJwsf/2/).

Both examples should hopefully be self explanatory but Joao points out that his second example might throw up a few issues

> It works good, except for a few seconds - the time you gave the animation - after the page loads. Before that time period ends, you aren't able to see the animation when you click the "save" button.
>
> This is because I'm putting a cover in front of the animated background during the unwanted animation that happens on each page refresh. Only after it finishes do I remove the cover. Since the cover is there for the first few seconds after a page refresh, you won't be able to see the animation if you click the save button during that time.
>
> This usually won't be a problem since an user won't probably click the save button during the first seconds on a page, but it might happen. Even though, and even if there were another way to stop the animation from happening that first time (with pure css), I would go with the "two buttons" solution. This one is just a little too tricky. It might end up interfering with other parts of your css.

If you have any other solutions, I'd love to hear them.
