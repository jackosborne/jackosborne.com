---
permalink: "/blog/2010/10/css3-rounded-corners-with-border-radius/"
date: "2010-10-31"
title: "Rounded Corners with Border Radius"
tags: ["blog", "css"]
excerpt: ""
eleventyExcludeFromCollections: true
---

CSS rounded corners, are quickly becoming the golden child of CSS. Previously designers and developers have utilised techniques such as [sliding doors](http://www.alistapart.com/articles/slidingdoors/) and javascript solutions like [Curvy Corners](http://www.curvycorners.net/) but these long winded implementations now seem to be dwindling in favour of the shorter and more efficient `border-radius`.

As you might expect, the `border-radius` property is used a lot like the regular `border` property. You can specify the value for a whole div `border-radius: 6px;`, target individual corners `border-radius: 1px 2px 3px 4px;` (top right, bottom right, bottom left, top left) or values for opposite corners `border-radius: 5px 10px` (top/bottom and left/right).

If you’re making a box with four corners of the same radius, the syntax is the same in Mozilla and Webkit:

    -moz-border-radius: 6px; -webkit-border-radius: 6px;

However, when specifing different radii for each corner, things change somewhat.

    /* Mozilla: */ -moz-border-radius-topleft: 1px; -moz-border-radius-topright: 2px; -moz-border-radius-bottomright: 3px; -moz-border-radius-bottomleft: 4px; /* Webkit: */ -webkit-border-top-left-radius: 1px; -webkit-border-top-right-radius: 2px; -webkit-border-bottom-right-radius: 3px; -webkit-border-bottom-left-radius: 4px;

Above we've focused on the two browsers who were the front runners in rolling out this technique but lets not forget about the other browsers; below is my bulletproof solution for rounded corners.

    -khtml-border-radius: 6px; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px;

`KHTML` targets the Konqueror browser, `moz` and `webkit` declarations have already been covered and `border-radius` targets all post 10.5 pre alpha versions. The `border-radius` declaration will also be the official way to declare rounded corners when all browser specific versions fall by the wayside as this technique becomes incorporated into the full spec.

To see an example of `border-radius` being used then look no further than this website, as I have utilised this technqiue on my main navigational elements, to create a button-like effect.

For further reading on the `border-radius` property [click here](http://www.w3.org/TR/css3-background/#border-radius).
