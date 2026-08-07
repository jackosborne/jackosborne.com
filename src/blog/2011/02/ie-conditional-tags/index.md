---
permalink: "/blog/2011/02/ie-conditional-tags/"
date: "2011-02-23"
title: "IE Conditional Tags"
tags: ["blog", "css", "html", "website tips"]
excerpt: ""
eleventyExcludeFromCollections: true
---

I don't like the old versions of Internet Explorer and they don't like me. In fact, it's got so bad that we rarely spend any time together.

Most of the problems that I come across during site builds are not worthwhile fixing, so ridiculous that they don't really affect the design of the site too much. Normally I'll show the client the problem(s) and ask them if they would prefer me to fix these issues for old archaic browsers or would they prefer me to get the most out of their websites in the newer browsers and of course they will nearly always go for the latter. However, last week I was creating a site that had to look identical across every single browser from IE6+. I think you know where this is going already...

Due to never spending much time styling sites for older versions of Internet Explorer my knowledge is probably not what it should be. I spent a whole hour one day wondering why even the most basic of code wasn't working at all. It was at that point I realised I had coded my conditional statement incorrectly and was therefore targetting the wrong version of IE.

So, how do you link in stylesheets that will serve up different styles for the different versions of Internet Explorer?

### Target IE

    <!--[if IE]> <link rel="stylesheet" type="text/css" href="all-ie-only.css" /> <![endif]-->

### Target everything except IE

    <!--[if !IE]><!--> <link rel="stylesheet" type="text/css" href="not-ie.css" /> <!--<![endif]-->

### Target only IE 7

    <!--[if IE 7]> <link rel="stylesheet" type="text/css" href="ie7.css"> <![endif]-->

### Target only IE 6

    <!--[if IE 6]> <link rel="stylesheet" type="text/css" href="ie6.css" /> <![endif]-->

### Target only IE 5

    <!--[if IE 5]> <link rel="stylesheet" type="text/css" href="ie5.css" /> <![endif]-->

### Target only IE 5.5

    <!--[if IE 5.5000]> <link rel="stylesheet" type="text/css" href="ie55.css" /> <![endif]-->

### Target IE 6 and lower

    <!--[if lt IE 7]> <link rel="stylesheet" type="text/css" href="ie6-and-down.css" /> <![endif]-->

    <!--[if lte IE 6]> <link rel="stylesheet" type="text/css" href="ie6-and-down.css" /> <![endif]-->

### Target IE 7 and lower

    <!--[if lt IE 8]> <link rel="stylesheet" type="text/css" href="ie7-and-down.css" /> <![endif]-->

    <!--[if lte IE 7]> <link rel="stylesheet" type="text/css" href="ie7-and-down.css" /> <![endif]-->

### Target IE 8 and lower

    <!--[if lt IE 9]> <link rel="stylesheet" type="text/css" href="ie8-and-down.css" /> <![endif]-->

    <!--[if lte IE 8]> <link rel="stylesheet" type="text/css" href="ie8-and-down.css" /> <![endif]-->

### Target IE 6 and higher

    <!--[if gt IE 5.5]> <link rel="stylesheet" type="text/css" href="ie6-and-up.css" /> <![endif]-->

    <!--[if gte IE 6]> <link rel="stylesheet" type="text/css" href="ie6-and-up.css" /> <![endif]-->

### Target IE 7 and higher

    <!--[if gt IE 6]> <link rel="stylesheet" type="text/css" href="ie7-and-up.css" /> <![endif]-->

    <!--[if gte IE 7]> <link rel="stylesheet" type="text/css" href="ie7-and-up.css" /> <![endif]-->

### Target IE 8 and higher

    <!--[if gt IE 7]> <link rel="stylesheet" type="text/css" href="ie8-and-up.css" /> <![endif]-->

    <!--[if gte IE 8]> <link rel="stylesheet" type="text/css" href="ie8-and-up.css" /> <![endif]-->

These are all perfectly viable methods to fix the bugs that crop up across the different versions of Internet Explorer but it has to be noted that it is not the only way to do so. Another method that you might have seen, with the increasing popularity of HTML5 Boilerplate is to stipulate various different body calls, wrapped in conditional statements.

    <!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]--> <!--[if IE 7 ]> <html lang="en" class="no-js ie7"> <![endif]--> <!--[if IE 8 ]> <html lang="en" class="no-js ie8"> <![endif]--> <!--[if IE 9 ]> <html lang="en" class="no-js ie9"> <![endif]--> <!--[if (gt IE 9)|!(IE)]> <!--> <html lang="en" class="no-js"> <!--<![endif]-->

So what does the following piece of code allow us to do. Well, instead of having multiple different stylesheets you can keep everything together in one, meaning less calls to the server.

    .ie6 body{background: red;} .ie7 body{background: blue;} .ie8 body {background: purple;} body{background: white;}

The above code is pretty self explanatory but it basically allows you to split up your style document into seperate sections to allow yourself to deal with all the different versions of Internet Explorer by simply declaring which version you are wishing to target with one of the classes above.
