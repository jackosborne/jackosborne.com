---
permalink: "/blog/2010/02/text-shadow-hover-states/"
date: "2010-02-19"
title: "Text Shadow Hover States"
tags: ["blog", "css"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Time for a quick Friday post before we all knock off for the weekend, this afternoon I was working with text shadow and it occured to me that I'd never seen it implemented on any links, so with this in mind I set about implementing a quick piece of code to see it in action.

    a, a:active { color:#4FCDFF; left:0; position:relative; top:0; text-decoration: none; text-shadow:1px 1px #004F6F, 2px 2px #004F6F, 3px 3px #004F6F; } a:hover, a:focus { color:#4FCDFF; left:-3px; text-shadow:1px 1px #004F6F, 2px 2px #004F6F, 3px 3px #004F6F, 4px 4px #004F6F, 5px 5px #004F6F, 6px 6px #004F6F; top:-3px; }

After playing about with this it seems to work better when you're putting this code on a large bold element ie, a heading. It also looks pretty good when you've also set the text to `text-transform:uppercase;`

Give it a go and watch your hrefs _pop_ | [Example](http://jackosborne.com/demos/2010/text-shadow/index.html "Text Shadow Pop")

**Update**: As pointed out by [Mitchell in the comments](/blog/2010/02/text-shadow-hover-states/), I forgot to add an `:active` state, so this has now been rectified.
