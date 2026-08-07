---
permalink: "/blog/2011/02/wordpress-admin-bar/"
date: "2011-02-24"
title: "Wordpress Admin Bar"
tags: ["blog", "wordpress"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Yesterday wordpress rolled out version 3.1 and when I got in from work I decided to upgrade. There are lots of new features, most of which need to be theme activated but one of the that doesn't need any activation is the admin bar that stretches along the top of your website when you are logged in.

A few weeks ago I wrote about coding up your own [quick post button for wordpress](/blog/2010/12/wordpress-quick-post-button/ "quick post button for wordpress") which I thought was a very handy snippet of code. However, since upgrading to 3.1 I decided to remove the button in favour of this new bar which offers more functionality.

{% responsiveImage "src/blog/2011/02/wordpress-admin-bar/wordpress-bar.jpg", "wordpress-bar", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog" %}

However, there is one thing that really annoys me about the bar and that is the fact that they have introduced some form of animation on the hover effect. I've had a look at the code which can be found at - http://your-domain.com/wp-includes/css/admin-bar.css - but I haven't been able to find anything which could be creating the animation effect because the only browser specific stuff I can find is `-moz` and `-webkit` gradients for the background-color. Perhaps it is being referenced in another stylesheet.

Now, there isn't anything wrong with using this type of animation. Until recently I had implemented this same technique on this site for all the `a:hover` states which fell within the post content. The problem I have with it is in its implementation, it's all wrong. Obviously it's hard to tell from the image above but when you hover over any of the dropdown elements the background-color changes very quickly, yet the text colour fades in. You might be wondering what the big deal is but if you experience it for yourself you will notice that the text actually flickers black at the start of the animation, even though the link colour goes from grey to white.

For me there shouldn't be any kind of background-color animation on something which is supposed to reflect a button like element.
