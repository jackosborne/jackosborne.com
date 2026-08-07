---
permalink: "/blog/2013/08/responsive-email-design/"
date: "2013-08-12"
title: "Responsive Email Design"
tags: ["blog", "css", "design", "html", "other websites"]
excerpt: ""
# eleventyExcludeFromCollections: true
---

Responsive Web Design (RWD) hasn't looked back since it was introduced to us by Ethan Marcotte in an [A List Apart](http://alistapart.com/article/responsive-web-design) article on Tuesday 25th May 2010, but in that same time frame the way we build email hasn't changed much. Thankfully, in the last year, the tides are turning as people have started to take what they have learned from their RWD builds and apply a similar approach to designing email.

Before we start, I would like to highlight some statistics in a recent talk from [Anna Yeaman](http://www.slideshare.net/stylecampaign/responsive-email-design) so that we know exactly what we're dealing with:

- 41% of emails were opened on mobile in 2nd half of 2012.
- Only 2% will reopen email on another device.
- Email that is not optimised for smaller screens suffer from a 28% lower conversion rate.
- And 1/3 of users will unsubscribe if they can’t read your messages on their small screens.

Now that you've seen just how important it is to get your email(s) looking their best, lets get started.

<!--
## Contents

1. [The basics](#thebasics)
2. [Getting started](#gettingstarted)
   1. [Doctype](#doctype)
   2. [Viewport meta tag](#viewportmetatag)
   3. [Resetting the body](#resettingthebody)
3. [Building](#building)
   1. [Layout](#layout)
   2. [Inline CSS](#inlinecss)
   3. [Media queries and CSS](#mediaqueriesandcss)
   4. [HTML](#html)
   5. [Typography and Calls to action](#typographyandcallstoaction)
   6. [Imagery](#imagery)
   7. [Copy](#copy)
4. [Testing](#testing)
5. [Conclusion](#conclusion)
6. [Demo](#demo)
7. [Useful Links](#usefullinks)
-->

## The basics

Having built only a couple of <abbr>HTML</abbr> emails in my career I decided that I'd document my responsive journey so that other people who are about to tackle this same task have a better starting point. I'm not claiming to have all the answers and I'm not saying that what you're about to read is the best approach but hopefully it'll be something which you can take and build upon.

Before starting out, I decided to search for information which would aid me in creating my first responsive email and time and time again I kept returning to this document from [Campaign Monitor](http://www.campaignmonitor.com/guides/mobile/ "Campaign Monitor Mobile Email Guide"), which laid out the basic building blocks of what was required.

However, as Campaign Monitor point out on their website, the techniques that I am about to list aren't universally supported by all mobile email clients. How an email displays can vary radically from inbox to inbox but thankfully for us, Campaign Monitor have pulled together useful tables to show us the [differing levels of <abbr>CSS</abbr> support across email clients and phones](http://www.campaignmonitor.com/css/) and the current [state of support for media queries](http://www.campaignmonitor.com/guides/mobile#mobile-support).

## Getting started

Remember, coding an email isn't like coding a web page, unless it's a web page from 1994\. It will trip you up, but take your time, keep referencing different materials and you will get there.

### Doctype

Some email clients are known to strip out the doctype but as Hotmail and Gmail automatically insert the `XHTML 1.0 Strict` doctype it's not a bad idea to put it in yourself and avoid any possible conflicts down the line.

`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`

### Viewport meta tag

Much like building a responsive web page, one of the first steps in getting it to play nicely is to add a specific meta tag in the head of your document. Without this meta tag a mobile browser will assume that you're viewing the content in a desktop environment and set the viewport at a larger width, thus squeezing everything into the tiny screen of your device.

    <head> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> </head>

To combat this problem, Apple introduced the viewport meta tag, which allows for [five basic states](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-dont-forget-the-viewport-meta-tag/) to be passed through it. In the code snippet above, we're only concerning ourselves with `device-width` and `initial-scale`. `device-width` sets the width of the viewport to the width of the device you are on while `initial-scale` will ensure that upon page load, your layout will be rendered properly at 1:1 scale with no zooming applied.

### Resetting the body

The next thing to do is zero out the paddings and margins on the `body`, if you don't the document will render with a white border around the content in iOS mail. We then disable automatic text size adjust on some mobile email clients with `-webkit-text-size-adjust` and `-ms-text-size-adjust`, which stops devices from reducing/increasing text sizes based on their defaults.

    <body bgcolor="#EAE8E4" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" style="height: auto; padding:0; margin:0; -webkit-text-size-adjust:none; -ms-text-size-adjust: 100%;">

And finally, we set a background colour.

## Building

### Layout

Drawing parallels with responsive web design it is often a good idea to employee a mobile first approach when starting out, as this allows you to better place your content, leading with the important stuff and then rework the stacking order if needed, before the design gets unwieldy.

### Inline CSS

Unfortunately, even with the introduction of these new responsive techniques we still have to declare our styling for elements inline.

    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; display: block; font-size: 15px; color: #4D4D4D; font-weight: lighter; line-height: 120%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

### Media queries and CSS

The only place where we stipulate <abbr>CSS</abbr> which is not inline, can be found in the `<head>`. This <abbr>CSS</abbr> is located within a media query and uses attribute selectors to help avoid an unusual glitch which appears in [Yahoo! Mail](http://www.campaignmonitor.com/blog/post/3457/media-query-issues-in-yahoo-mail-mobile-email/).

Distinct class names on these attribute selectors are also being utilised because some of the more obvious names get used in email clients and could result in conflicts with layouts going askew. One final thing to note, is that all declarations must end in `!important` to ensure that these take precedence over the inline code which is coded into the email.

    <style type="text/css"> @media only screen and (max-device-width: 480px) { table[class=tableContent] { width:320px !important; } img[class="headerImage"] { width:320px !important; } p[class="theDate"] { display: none !important; } } </style>

The first line of the media query sets the `max-device-width` at a threshold of 480px, this means that when the viewport is smaller than this size, all code within should be executed. Although we've only outlined one particular example, media queries can be quite specific and you can pass any number of [values through them](http://www.w3.org/TR/css3-mediaqueries/#media1).

### HTML

The outer container is the one of few places where we set a fixed width and this is only done because we need a fixed width for the desktop experience. You will also notice that a class called tableContent has been added which is what our media query, from above, will be referring to for smaller screens when the media query becomes active.

    <table cellspacing="0" cellpadding="0" border="0" align="center" width="700" class="tableContent"> <tbody> <tr> <td bgcolor="#FFFFFF"> <Insert your one or two column code below in here> </td> </tr> </tbody> </table>

The above code snippet shall act as the basis of our email, all further code regardless of whether you opt to go down the route of a one or two column layout will be nested within the emboldened `td`.

As I touched on earlier, when coding an <abbr>HTML</abbr> email, it's important to stick to principles which have been in place for years. Normally when designing a website we'd employ floats to align the content but we should forgo our usual `<div style="float: left;">` method to get the content sitting side by side for `<div align="left">`. We do this because attributes like `align="left"` and `cellpadding="10"` are far more reliable than their <abbr>CSS</abbr> equivalents `float: left;` and `padding: 10px`.

#### One Column Layout

    <table bgcolor="#FFFFFF" cellspacing="0" cellpadding="0" border="0" width="100%"> <tbody> <tr> <td bgcolor="#FFFFFF"> <Content goes here> </td> </tr> </tbody> </table>

#### Two Column Layout

    <table bgcolor="#FFFFFF" cellspacing="0" cellpadding="0" border="0" width="100%"> <tbody> <tr> <td bgcolor="#FFFFFF"> <table bgcolor="#FFFFFF" width="320" border="0" cellspacing="0" cellpadding="0" align="left"> <tbody> <tr> <td bgcolor="#FFFFFF" valign="top"> <Content for the left column> </td> </tr> </tbody> </table> <table bgcolor="#FFFFFF" width="320" border="0" cellspacing="0" cellpadding="0" align="right"> <tbody> <tr> <td bgcolor="#FFFFFF" valign="top"> <Content for the right column> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table>

In the example above I've also highlighted three set of widths, the main container which is set to 100% and the inner tables which are aligned left and right have a width of 320px. The reason I have chosen 320 is down to the iPhone viewport being this size and because this seems to have become one of the industry standards for a breakpoint in responsive web design.

When you view the two column layout on a mobile device, the two inner tables will stack with the second table falling underneath the first. This is due to the media query being executed on the table with the class of `tableContent` which reduced its width from 700 to 320\. As long as the container table width is more than, or equal to the combined width of the two columns, both will fit nicely.

If, on the off chance, there’s a table cell between two columns you’d like to hide, you can: use `display:none`.

### Typography and Calls to Action

The smallest size which Apple render fonts on their devices' is 13px and seeing as we're building emails which are expected to be viewed on said devices your smallest font should keep in line with these guidelines. For my email I settled on making the body copy 15px and set items such as the disclaimer text at the 13px. Be warned, if you set your font smaller than 13px you run the risk of a device upscaling the text and breaking your layout, if you haven't declared the text-size-adjust properties from the third step, not to mention the various legibility issues you could cause.

While testing my email I noticed that I was running into a lot of difficulty with `<p>` tags, so decided to switch these out for tags which don't inherit any basic styling from the browser or clients. In the end I ended up settling on using a `<div>` because when I used a `<span>` I would run into a few clearing issues even after I'd set the display of the span to render as a block element.

Another issue I ran into was when I included two divs with different styles (e.g. font sizes) in the same table row, as some mobile clients would only give one precedence and scrap the other. If it is vital to your design to have two visually different items of text then you will have to split them out on to separate table rows.

#### Calls to Actions

For calls to action (CTAs), which are often seen as the most important part of an email, we should once again adhere to Apples guidelines and make these buttons and tappable areas a minimum of 44 x 44 pixels.

One thing I noticed whilst building CTAs into my email is that padding on a `<a href="">` offered up a wide range of problems, some clients rendered the button as you would expect, while some offered up a whole host of different interpretations. To combat this problem, I decided to put the background colour and padding on the parent to give the effect of a button. Although this doesn't give you as big a hit area, it does give the illusion of one. And after watching people interact with the email, I noticed that the majority of people tried to click on the text of the button which made this problem less of an issue.

    <div style="background: #69BF13; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; display: inline-block; font-size: 15px; margin: 0 auto; padding: 20px; -moz-border-radius: 6px; -webkit-border-radius: 6px; border-radius: 6px;"> <a href="#" style="background: #69BF13; color: #FFFFFF; text-decoration: none;">Centered Button</a> </div>

Another nice to have, which can be often overlooked, is making these calls to action link to a mobile friendly landing page. There's no point going to all of this effort when you end up directing your users through to a full blown desktop design.

### Imagery

You should always check your email design with the images turned on/off, because it's wrong to assume that images will be seen by all users.

When serving up images in a responsive environment, the code remains the same whether it's for a web page or email. In this following code snippet we tell the image contained within its parent to always flow to 100% width of the container. You may also notice that the height is set to auto, which ensures that the image maintains its aspect ratio.

    td[class=scaleImage] img { height:auto !important; width:100% !important; }

#### Retina imagery

Another piece of technology Apple has brought to the market was the [retina display](http://en.wikipedia.org/wiki/Retina_Display), which is available on iPad3 >, iPhone4 > and it's line of retina notebooks. The key to retina imagery is to create the same image at double its size and then replace the original, smaller sized image, with the retina asset.

Lets say we want to display an image in our email and the design says that its dimensions are 320x320, for our retina displays we should create the same image but at dimensions of 640x640\. The reason we create upscaled images is because we then declare it's old size and because we're squeezing a larger image into smaller dimensions it ends up giving us a high quality image. There are two ways you can call a retina images in email:

#### Option One

In this method we pull the old switcheroo and swap out the regular image for the retina asset but as you will notice this is only active when the media query is executed and in this case it is only visible on smaller devices.

    @media only screen and (max-device-width: 480px) { img[class="scaleImage"] { background-image: url(scaleImage-640@2x.png) !important; background-size: 320px 320px; width: 320px !important; height: 320px !important; } }

#### Option Two

In option two we hide the actual image and display the retina equivalent on it's parent container, again only active once the media query has been executed.

    @media only screen and (max-device-width: 480px) { td[class="scaleImage"] { background-image: url(scaleImage-640@2x.png) !important; background-size: 320px 320px; width: 320px !important; height: 320px !important; } td[class="scaleImage"] img { display: none; } }

#### Retina only

There is one more solution but it requires a second media query on the page

    @media all and (min-device-pixel-ratio : 1.5) { img[class="scaleImage"] { background-image: url(scaleImage-640@2x.png) !important; background-size: 320px 320px; width: 320px !important; height: 320px !important; } }

Within this media query no breakpoints have been stipulated, only if it meets the minimum creteria of being a machine which has retina capabilities. If it does pass this criteria then the code within will be executed. The good thing about this is that you can abstract all the imagery from the regular media query.

#### Summary

Although everyone would prefer crisp imagery remember that optimisation is of the upmost importance here. In a recent survey, 3G network connections are currently 40% slower than desktop connections, and 4G/LTE network connections are 12% slower. So don't be that person who makes their users wait forever downloading a retina image for something which is not necessary.

### Copy

Obviously space is at a premium on mobile devices, so it is your job to make sure that the message you are delivering is clear, concise and to the point. Although scrolling isn't much of an issue on a traditional desktop machine it can become tedious on a mobile device because using your thumb is more taxing than a mouse. It is imperative to keep asking yourself if the customer can easily digest the message you are trying to deliver without having to scroll.

If you feel the need to hide content between a desktop and mobile email, you could use `display: none;` within a media query but it's worth asking yourself if you're willing to hide something from one device is it really worth having at all?

## Testing

As if building and testing a regular email wasn't time consuming enough, adding this extra layer of complexity can and will lead to more issues. Thankfully there are various services available in which to test a whole suite of devices and email clients. [Litmus](http://litmus.com) and [Email On Acid](http://emailonacid.com) are second to none when you are looking to previewing your code and similar functionality is available through the likes of [Campaign Monitor](http://campaignmonitor.com) and [MailChimp](http://mailchimp.com).

Of course, nothing actually beats testing on actual devices and if you're lucky enough to be close to a [testing suite](http://clearleft.com/testlab/) then you should go out of your way to use that.

## Conclusion

Having always worked in environments where I've been encouraged to push boundaries and drop support for older versions of browsers and such like, it is still worth noting that responsive email design comes with its fair share of tradeoffs.

Media queries aren't supported on a few devices and applications, notably Blackberrys and the Gmail app, and in some clients all the header information can be stripped out, meaning no media queries at all. But I'm ok with this, because if the media query doesn't get executed the email will just render as most people are used to. Think of email media queries as easter eggs.

Thankfully mobile devices and apps are constantly being updated and the life of these are much shorter than that of their desktop counterparts. This means that the technology we need is constantly evolving and our playing field is starting to level out. It's up to us, the designers and developers, to keep pushing these boundaries in order for the manufacturers to make sure what they are building is constantly being iterated upon and making sure what we are working with isn't what we were using five years previously.

## Demo

If you're interested in viewing the code for a very basic email template, I've thrown together a demo page which can be viewed [here](http://jackosborne.com/demos/2013/responsive-email). But please note that you'll only be able to view the media query version on mobile devices.

## Useful Links

- [http://www.email-standards.org/clients/gmail/](http://www.email-standards.org/clients/gmail/)
- [http://htmlemailboilerplate.com/](http://htmlemailboilerplate.com/)
- [http://www.emailology.org/](http://www.emailology.org/)
- [http://www.webdesignerdepot.com/2013/06/responsive-html-email-design/](http://www.webdesignerdepot.com/2013/06/responsive-html-email-design/)
- [http://mailchimp.com/resources/research/email-on-mobile-devices/html/](http://mailchimp.com/resources/research/email-on-mobile-devices/html/)
- [http://www.campaignmonitor.com/guides/mobile/](http://www.campaignmonitor.com/guides/mobile/)
- [http://code.tutsplus.com/tutorials/6-easy-ways-to-improve-your-html-emails--net-872](http://code.tutsplus.com/tutorials/6-easy-ways-to-improve-your-html-emails--net-872)
