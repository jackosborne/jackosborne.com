---
permalink: "/blog/2010/11/an-introduction-to-hsl-and-hsla/"
date: "2010-11-14"
title: "An Introduction to HSL and HSLa"
tags: ["blog", "css"]
excerpt: ""
eleventyExcludeFromCollections: true
---

When I find a nice website, I like to poke around the code and look at how everything is created. Over the last few months I've been seeing an increase in people declaring HSL (Hue, Saturation and Lightness) and HSLA (Hue, Saturation, Lightness and Alpha) for background colours. I'll be honest and admit to not knowing very much about this technique or how it was utilised, so I decided to do some research and present my findings in a blog post for people who were in the same situation as myself.

If we take a look back through how people were able to declare colour in their CSS, then we will see that it was a fairly bogstandard process of only being able to utilise hexidecimal values. However, over the last couple of years, we are now able to declare colour values in a few different ways ways;

## Using the opacity selector

    #div{ background: #000; color: #fff; opacity: 60%; }

The opacity property will set an opacity value for everything contained within that div. Meaning that the background colour on the div and the text contained within the div will all lighten.

## Using RGBa

    #div{ background-color: #000; /* Fallback */ background: rgba(0,0,0,0.6); color: #fff; }

Much like the opacity example above, we have declared a black background with white text. However, with this example, only the black background has an opacity of 60%, leaving the text untouched and everything contained within the div untouched.

## So what is HSL and HSLa?

`HSL` and `HSLa` are similar to `RGBa` in that you declare three colour values and then a fourth value for transparency — the HSL declaration sets colour using Hue (H), Saturation (S) and Lightness (L).

- **Hue** is derived from a degree on the color wheel: 0 and 360 being red, 120 for the greens and 240 for the blues.
- **Saturation** is a percentage:0% is completely denatured (grayscale) and 100% is fully saturated (full color).
- **Lightness** is a percentage: 0% is completely dark (black). 100% is completely light (white). 50% is average lightness.
- **Alpha is a decimal value**: Opacity/Transparency value. 0 is fully transparent. 1 is fully opaque. 0.5 is 50% transparent.

Using the RGBa example above here is the HSLa version

    #div{ background-color: #000; /* Fallback */ background-color: hsla(0, 0%, 0%, 0.6); color: #fff; }

## Browser Support

Pretty much any browser that supports RGBa will also support HSLa:

- Chrome 5 & 6
- Firefox 3.6 +
- Opera 10.6 +
- Safari 4 & 5

And yes, you guessed it, no version of Internet Explorer.

## Further Reading

- [http://www.w3.org/TR/css3-color/#hsl-color](http://www.w3.org/TR/css3-color/#hsl-color)
- [http://css-tricks.com/yay-for-hsla/](http://css-tricks.com/yay-for-hsla/)
