---
permalink: "/blog/2010/11/modular-scale/"
date: "2010-11-25"
title: "Modular Scale"
tags: ["blog", "css", "design", "other websites", "website tips"]
excerpt: ""
---

Two weeks ago I sat and listened to a talk by [Tim Brown](http://tbrown.org/ "Tim Brown"), type manager of Typekit, at Build entitled "More perfect typography." Hand on heart I can honestly say that his talk was incredible, easily the highlight of my day and it was made all the more incredible due to the fact that this was the first talk Tim had ever presented in front of an audience.

Tim gave a brief introduction to the history of type working through to a few modern day examples i.e. Typekit but this isn't what I want to write about. Tim made it known that when he starts on any web project he begins with the body text size, as it sets the tone for the whole experience. He starts by looking at a type specimen within a font specimen tool - which allows him to see how the font itself looks and how it looks within the actual site he is developing. There are plenty of services which offer this but as Tim works for Typekit he suggests their own version.

By testing out the fonts you get to find the its sweet spot; the ideal size at which it starts to look really crisp. From there, Tim suggests moving onto the elements which give text personality; headings, captions, sub-captions etc.

Tim then put up a slide quoting Robert Bringhurst:

> A modular scale, like a muscial scale, is a prearranged set of harmonious proportions.

Modular scales are unique measurements per project. In essence modular scales are just groups of numbers, everything from size and spcacing of type to the proportions of letters, the thickness of certain parts of the letter or even the page layout as a whole. It was at this point that I seen the highlight of my day, Tim paused and decided it was time to show the audience something that he had been keeping to himself. [Modular scale](http://modularscale.com/). I reckon I have used this every day since I came back from Build.

## So what is modular scale and how can I use it?

{% responsiveImage "src/blog/2010/11/modular-scale/input.jpg", "input", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog" %} Earlier I mentioned the fact that every font has a "sweet spot" which you will have acquired through a font specimen tool, with this ideal font-size at your disposal you now have your default text size which will form the basis of your modular measurement. Lets say that our fonts sweet spot is 16 pixels.

As you can see from the image above there is also a second input box entitled important number, this can be used for anything from list items to blockquotes, something which you deem appropriate and important in your sites design. There are also three ratios to choose from but I've only kept it on the golden ratio/golden section as I don't understand the other two as well as I do with this one.

After hitting submit you are met with the following:

{% responsiveImage "src/blog/2010/11/modular-scale/results.jpg", "results", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog" %}At the very top of your document you can see the calculations that your ideal text size has been passed through. The information is then laid out in three columns; the first column shows variations in pixel sizes, the middle columns shows the same set of values but converted to em measurements with 1`em` being set to your ideal text size, in our case 16 pixels. The column on the far right shows the information as a percentage of thirteen. You might be wondering why the figure thirteen has been used but Tim pointed out that for his reset style sheets he uses <abbr>HTML</abbr>5 boilerplate which references yahoos font-sizing method which utilises similar percentage values.

## What now?

Well because everything is now in ratio you can pick appropriate numbers for heading levels which will obviously be larger than your default body-size, so use the chart to pick a value above the default body size of 16 pixels. If you were deciding how to style another tag, for example the small element then you would choose a value smaller than the default, which can also be selected from the scale. You can even use this scale for width values on divs and other containers, if you go much further up the scale you will start to see numbers going into three digits, experimenting with these values can also give you appropriate widths which will suit the size of text you have selected.

At this point Tim flashed up two examples; one which used the modular scale tool to calculate out the ratios of type and line-lengths and the other example which was based on guess work. Have a look and see if you can indentify which of the two used the modular scale. I would advise you to open up two seperate tabs to load the following examples and then flick between them to see if you can identify whether [example one](http://nicewebtype.com/fonts/ambroise-with-le-monde-sans/) had the modular scale tool used on it or whether it was [example two](http://nicewebtype.com/fonts/ambroise-with-le-monde-sans-960/).

If this post is something which interested you and is something which you would like to learn more about then head on over to Vimeo where Build have uploaded **all** of the recordings that were taken that day. The Build Vimeo page can be found [here](http://vimeo.com/build) but if you are more specifically interested in Tims talk you can watch that [here](http://vimeo.com/17079380). You won't be disappointed.

You should also follow Tim on Twitter [here](http://twitter.com/#!/nicewebtype).
