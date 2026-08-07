---
permalink: "/blog/2010/06/css3-box-shadow-and-inset-shadow/"
date: "2010-06-13"
title: "CSS3 Box Shadow and Inset Shadow"
tags: ["blog", "css"]
excerpt: ""
eleventyExcludeFromCollections: true
---

I'm sure by now you will have seen multiple tutorials on how to create a `box-shadow` effect with CSS but I'm pretty sure that you will not have seen as many tutorials on how to go about creating an inner/inset shadow.

Before we get started it's probably worth mentioning two things:

1. Box Shadow was recently removed from the CSS3 borders and background module at the W3C for further discussion, although it will no doubt be resubmitted at some point in the not to distant future.
2. This tutorial won't work in any version of Internet Explorer that pre-dates IE9.

## Box Shadow

The basic `box-shadow` code is laid out as following `box-shadow: Apx Bpx Cpx #XXX;`

- The A pixel represents the x-axis (horizontal), a positive value means the shadow will be on the right of the box, a negative value will put the shadow on the left of the box.
- The B pixel represents the y-axis (vertical), a negative value means the box-shadow will be above the box and a positive value means the shadow will be below the box.
- The C pixel represents the blur radius, if set to 0 the shadow will be sharp, the higher the number, the more blurred it will be.
- The last part of the code represents the colour that you are choosing, which can be stipulated with either a `hex`, `rgb` or `rgba` value.

Lets say that you are wanting to add the `box-shadow` value to a div with an id of yellow, the following code would look like

    #yellow{ -webkit-box-shadow: 1px 1px 1px #FFFF00; -moz-box-shadow: 1px 1px 1px #FFFF00; box-shadow: 1px 1px 1px #FFFF00; }

You might be wondering why the above code example has three different declarations for the `box-shadow` property, well the reason is because we are trying to future proof our code. The `webkit` prefix will handle the chrome and safari browsers whilst `moz` will handle firefox.

So why did I then go one step further and declare `box-shadow` on its own? Simply because when the `box-shadow` property gets accepted and added to the full specification, it will no longer need the vendor specific prefixes in front of it. In fact, Opera is already supporting `box-shadow` on it's on, without the use of a vendor specific prefixes, as will Internet Explorer 9 when that launches.

If you always ensure that you use each vendor-specific prefix `-moz-`, `-ms-`, `-o-`, `– webkit-` and then use the non-prefixed property, you’ll target every browser.

Something that you might not be aware of, is the fact that you can actually stipulate up to six `box-shadow`s per element. Obviously this is something that you won't use very often but it is a handy piece of information to take note of, incase you are looking to create a complex shadow to recreate something like a flame effect [\*](#star).

This can be achieved with the following code

    #yellow{ box-shadow: 1px 1px 1px #FFFF00, 1px 1px 1px #FFCC00, 1px 1px 1px #FF9900, 1px 1px 1px #FF6600, 1px 1px 1px #FF3300, 1px 1px 1px #FF0000; }

Each new shadow will be seperated by a comma, with the final value ending in the usual semi colon.

## Inner Shadow

Similar to what we've already covered above but with one subtle difference. Lets go back to our first example:

    #yellow{ -webkit-box-shadow: inset 1px 1px 1px #FFFF00; -moz-box-shadow: inset 1px 1px 1px #FFFF00; box-shadow: inset 1px 1px 1px #FFFF00; }

The `inset` property will allow you to create an inner shadow/sunken well. Which means that the gradient effect will be on the inside of the div, as opposed to the outside, creating the effect that your div has been set back into the page.

## Little Extras

If you feel like mucking about with some more `box-shadow` goodness then head on over to [a working example page](http://www.westciv.com/tools/boxshadows/index.html "Box Shadow Working Example") set up by John Allsopp and his team and for more information please consult the [specification](http://www.w3.org/TR/css3-background/#the-box-shadow).

If you want to view any of the examples that I've went through above then head over to the [example page](http://jackosborne.com/demos/2010/box-shadow "Box Shadow Examples") that I've created.

<span id="star">\*</span> please never create a flame effect
