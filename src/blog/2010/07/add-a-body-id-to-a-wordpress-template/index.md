---
permalink: "/blog/2010/07/add-a-body-id-to-a-wordpress-template/"
date: "2010-07-08"
title: "Add a body id to a wordpress template"
tags: ["blog", "website tips", "wordpress"]
excerpt: ""
eleventyExcludeFromCollections: true
---

When I created my first wordpress theme for this website, over two years ago, I had great trouble trying to attach an ID onto the body within the header code. I found it really surprising that there wasn't much in the way of documentation as I believe that attaching an ID to your body tag is something which should be used on every website.

After several attempts at trying to settle on a method for my website I ended up using a switch statement which was placed within the header, it looked like the following:

    <?php if (is_page("about")) { ?> <body id="about"> <?php } elseif (is_archive("archives")) { ?> <body id="articles"> <?php } elseif (is_page("portfolio")) { ?> <body id="portfolio"> <?php } elseif (is_page("contact")) { ?> <body id="contact"> <?php } else { ?> <body id="index"> <?php } ?>

This ultimately ended up being far from ideal because if I ever needed to create a new page which didn't fall within the stipulated pages then I'd have to add another option to the switch statement in order to style the page how I desired. When Wordpress introduced version 2.7 they brought forward a new function which dynamically added a class to the body tag `<body <?php body_class(); ?>>` which would allow for multiple classes to be attached to the body, allowing designers/developers to style pages individually. However, this still wasn't what I wanted to do with Wordpress.

Nearly two years on and I seemed to have forgot all about my issues with attaching IDs to the body tag, until I was developing a Wordpress website that required the body to have unique IDs, so I started my search for another solution knowing full well that my previous solution would not prove to be adequate. Thankfully there is now much more documentation on the matter and various different methods in order to accomplish this but I must admit to still being a little shocked at the fact that Wordpress does not have this in it's core installation.

I can't remember where I found the method that I settled on but it only requires one small tweak of the template and then the body can have both IDs and classes, the code is as follows

    </head> <?php $url = explode('/',$_SERVER['REQUEST_URI']); $dir = $url[1] ? $url[1] : 'home'; ?> <body id="<?php echo $dir ?>" <?php body_class(); ?>>

Do you have a better way of attaching an ID to the body tag? Please let me know in the comments section, as I'm sure there are probably even easier ways of doing it.

If you're interesting in finding out more about why attaching a body ID to your page is a good idea then check [out this great post](http://www.venturelab.co.uk/devblog/2010/06/body-idsmaking-life-easier-for-yourself/) by Harry Roberts of Venturelab and CSS Wizardry on how to get started. In the previous link, he shows you how to apply it on your own custom framework with use of PHP.
