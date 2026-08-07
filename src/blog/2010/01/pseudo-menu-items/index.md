---
permalink: "/blog/2010/01/pseudo-menu-items/"
date: "2010-01-05"
title: "Pseudo Menu Items"
tags: ["blog", "css"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Back in September I wrote an article on [styling drop caps using pseudo elements](/blog/2009/09/pseudo-drop-caps/ "Styling drop caps"). Since then I've been thinking about what other elements of a website you could style in a similar fashion.

One such item that has always irritated me when creating a site is what to do with an inline menu system. I'm not sure about you but when I'm rapid prototyping and I'm tackling an inline menu I normally always style them the same way.

    <ul> <li><a href="#">Item One</a></li> <li>|</li> <li><a href="#">Item Two</a></li> <li>|</li> <li><a href="#">Item Three</a></li> <li>|</li> <li><a href="#">Item Four</a></li> </ul>

with the end result looking like the following

`Item One | Item Two | Item Three | Item Four`

However I'm sure you will all agree that this is far from ideal. In that example alone we're sticking in an extra three list items that contribute absolutely nothing other than presentation and as we're all told, we should be separating content from presentation with the use of css.

So where do the psuedo elements come in? Well, if we strip out the three redundant list items our code will now look like the following

    <ul> <li><a href="#">Item One</a></li> <li><a href="#">Item Two</a></li> <li><a href="#">Item Three</a></li> <li><a href="#">Item Four</a></li> </ul>

Now to add the presentation through our css

    ul li { list-style:none; display:inline; float:left; margin:0 5px 0 0; } ul li:after { content:"|"; margin:0 0 0 5px; } ul li:last-child:after { content:""; }

We could also code the last section like

    ul li:last-child:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }

But I'm not really sure of the advantages of each method. If anyone can tell me the proper way to do the `:last-child` example then that would be great.

Anyway I digress, by applying the following css to our code our example menu item now looks exactly like what we were aiming for

`Item One | Item Two | Item Three | Item Four`

Lets now breakdown the CSS and see what each part plays in order to achieve our final result?

The first section of css will set out a list like normal, removing all list styles, making the menu display inline, floating every list item left to make them all fall in line with each other and finally adding a margin to the right to add more spacing to the list items.

In the next section we make use of the `:after pseudo element` on the list elements. We use the content property to add the vertical line after each menu option and adding a margin to the left to make sure that the vertical line is evenly positioned between it's surrounding li elements.

Within the final section of our css code we make use of two final pseudo elements; `:last-child` and `:after`. The `:last-child` pseudo element will find the last element within any parent element. In the second section of our css we used the content property to add a vertical line after each li but because we are targeting the last element we can remove the vertical line by adding in another content property and leaving it blank and the `:after` element tells the browser which side of the element we are targeting.
