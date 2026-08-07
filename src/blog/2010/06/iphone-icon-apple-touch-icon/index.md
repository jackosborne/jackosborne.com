---
permalink: "/blog/2010/06/iphone-icon-apple-touch-icon/"
date: "2010-06-23"
title: "iPhone Icon | Apple Touch Icon"
tags: ["blog", "apple", "website tips"]
excerpt: ""
eleventyExcludeFromCollections: true
---

On the iPhone/iPod you have the ability to save a webpage to your home screen, which allows you to access said website using a speed dial type method, without having to launch Safari. Incase you were completely unaware of this feature let me give you a quick run down on how to do this; when browsing the web from within Safari press the plus icon on the blue bar that runs along the bottom of the screen, a window overlay will appear which will give you four suggests; add bookmark, add to homescreen, mail link to this page and cancel.

When you select the option add to home screen, you will be presented with a page with an icon and the name of the webpage, which you can choose to completely rename if you wish. Then click the add button at the top right of the window to add the page to your home screen. Once the page has been saved to your phone, you will then be able to use it like a normal app icon, without having to launch Safari like I mentioned above.

By default the icon used is a horrible screenshot of the page in question, totally illegible to everyone but Apple have provided a mechanism for site owners to specify an icon to be used instead called Apple touch icon, which I will explain in the next paragraph but thankfully website owners have the ability to change this.

## What is an Apple touch icon

In short, this icon is basically a favicon for iPhones/iPods and this is the icon which is displayed on the users homescreen, after they have added the website to their phone. For example, the Apple touch icon for this website looks like the icon below to the right. If you don't believe me, feel free to add my website to your home screen.

{% responsiveImage "src/blog/2010/06/iphone-icon-apple-touch-icon/apple-touch-icon.png", "Apple Touch Icon", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog-png" %}As you can see from the image, you don’t need any of the fancy rounded corners or glow effect on your icon as the iPhone/iPod will handle all of that for you.

When creating an Apple touch icon, you normally had to make sure that the images dimensions were 58 by 58 pixels and saved as a .png format but Dan Rubin recently pointed out:

> Remember: iPad needs a larger apple-touch-icon — I'm following Apple's lead and using a 129px icon (iPhone & iPad will resize properly).<cite>[Dan Rubin](http://twitter.com/danrubin/status/11886356758)</cite>

With the arrival of Apples iPad, this icon now needs to be larger to accommodate for large screen real-estate but fret not, as the icon will scale down perfectly for other devices.

## How do I implement this ?

So we've covered the basics of what the apple touch icon is, so how do you actually put it into your website? You will be pleased to know that Apple have actually made it pretty easy.

    <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />

The code above is to be put in the head of the document, with the correct file path specified. But you do not need to specify both:

- **apple-touch-icon**: The usual icon with gloss and rounded corners.
- **apple-touch-icon-precomposed**: Similar to the above but will not render the image with the gloss.

Hopefully I've been able to give you enough information to get started and you can implement your own Apple touch icon, so why don't you give it a shot and help brighten up other peoples iPhone/iPod home screens with your own icons.
