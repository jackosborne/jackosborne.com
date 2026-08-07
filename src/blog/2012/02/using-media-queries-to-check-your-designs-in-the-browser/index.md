---
permalink: "/blog/2012/02/using-media-queries-to-check-your-designs-in-the-browser/"
date: "2012-02-05"
title: "Using Media Queries to check your designs in the browser"
tags: ["blog", "css"]
excerpt: ""
---

A company I used to work for were extremely anal when it came to creating websites that rendered the same across browsers. And as we all know, this can be an extremely painful process.

However, I'm not here to write about that, because we all know that is [nonsense](http://dowebsitesneedtolookexactlythesameineverybrowser.com/ "Do websites need to look exactly the same in every browser?"). What I'm going to write about is the process that I used to undertake in order to compare my coded design to that of the visual and the steps that I used to take before I started to code.

Before I typed in that opening line of `<div id="wrapper">` into my framework, I would insert something akin to

<!-- ![](mock-up.png "image of implementation") -->

This `div` would then be positioned absolutely, with a `z-index` and a set with a level of opacity. The reason I set the div/image to be slightly transparent was to allow me to see if my code was going off course or if it was remaining similar to that of the `.jpg`/`.png`.

Setting up this div with an image didn't take very long but it became somewhat tedious having to do it for every page within that project, not to mention for every single project. And it became ever more irksome when you had to go back through the code and remove them all when you had signed off the project with the client.

This weekend, before I started work on a new project, I downloaded my framework and I was about to stick in my usual code snippet. However, having recently returned from New Adventures with the mantra of "try new things and if it doesn't work, who cares" stuck in my head, I decided to opt for a different route.

I think it's safe to say that 2011 was the year of the media query, you couldn't escape from it. Everyone seemed to be writing about it but everyone seemed to be writing about the same thing. Of late, I had been wondering what else was achievable and decided to see if it was possible to take this technology and somehow integrate it into my old process.

In essence what I'm about to show you isn't a million miles away from what I outlined right at the start, it's just a method which tidies everything up, keeps everything together and is much more manageable.

    @media screen and (max-width: 1200px) { #wrapper {opacity: 0.4;} body {background: url('mock-up.png') no-repeat center top;} }

For this media query I've set the `max-width` of the viewport to be somewhat of a standard size for many laptops/desktop machines, however you can tweak this value if you are on a machine with a smaller viewport.

The above code above will basically render the image to an opacity of 0.4 within the `#wrapper` tag when you pull the viewport to a size smaller than 1200px but if you resize the browser to a width greater than 1200px it will simply disappear.

The nice thing about this code, is that you can turn the background image on and off as you please by simply resizing the viewport. Hurrah! No need to comment out specific bits of `html`. And to delete it completely, you just have to remove that one line from your `CSS` file, you no longer have to delve into every template and remove the code I mentioned at the start.

Another nice touch regarding this method is that because it's being controlled by `CSS` you can also switch different visual mock-ups, for different pages

    @media screen and (max-width: 1200px) { #wrapper {opacity: 0.4;} body#about {background: url('about-mock-up.png') no-repeat center top;} }

And different designs for different viewports

    @media screen and (max-width: 320px) { #wrapper {opacity: 0.4;} body#about {background: url('about-mock-up-iphone.png') no-repeat center top;} }

If you're interested in seeing a very basic demo of what this would looks like, click on the link below. Remember, resize the browser to witness the image appear/disappear.

[Demo | Using Media Queries to check your designs in the browser](http://jackosborne.com/demos/2012/media-query-previews/)
