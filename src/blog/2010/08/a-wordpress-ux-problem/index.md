---
permalink: "/blog/2010/08/a-wordpress-ux-problem/"
date: "2010-08-09"
title: "A Wordpress UX problem"
tags: ["blog", "design", "wordpress"]
excerpt: ""
eleventyExcludeFromCollections: true
---

{% responsiveImage "src/blog/2010/08/a-wordpress-ux-problem/savedraft.jpg", "savedraft", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog" %}Everytime I press save draft in the back-end of a wordpress blog my heart skips a beat. The problem is fairly simplistic and something which I have fallen for _every single time_ I click said button.

As you will be able to see from the image to the right, when a user clicks the save button, the button becomes greyed out, showing it's pressed/inactive state and sometimes you can see an outline around the text. However, it really doesn't matter if the button has changed state because all of that becomes redundant due to one poor design choice — an ajax spinner rotating to the left of the blue publish button.

I know I'm not the only person who has though that they have pushed a draft post live, it really isn't a pleasant experience. I've actually discussed this specific problem with a couple of people before and we have all agreed that even for the most experienced of Wordpress user this choice sews the seeds of doubt throughout their mind.

In my eyes there are <del>two</del> three possible solutions to this issue, one quick and the other requiring more implementation time.

1. Simply remove the ajax spinner altogether which in turn removes any element of doubt.
2. Give save and preview their own ajax spinners which will clearly show the end user what is happening.
3. **Update**: Upon pressing publish, a pop-up box/lightbox/something to that effect will appear asking you to verfiy that you do indeed wish to publish.

Has this feature worried you before? Do you have a suggestion on how to combat this problem?
