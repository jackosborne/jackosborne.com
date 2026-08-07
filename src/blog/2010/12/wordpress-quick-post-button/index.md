---
permalink: "/blog/2010/12/wordpress-quick-post-button/"
date: "2010-12-08"
title: "Wordpress quick post button"
tags: ["blog", "other websites", "website tips", "wordpress"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Whilst browsing the web tonight I came across another great little wordpress snippet, from the blog of [Mark Dotto](http://www.twitter.com/mdo/), a designer at Twitter. The premise of the snippet is to create a quick post link, which is visible anywhere on your wordpress site, so long as you are logged in.

{% responsiveImage "src/blog/2010/12/wordpress-quick-post-button/quick-post.jpg", "quick-post", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog" %}

You might be wondering what is the point of having such a button on your site but by having this quick post button, you are removing at least three steps which you would normally have to take in order to write a new post. You might also be thinking what's the big deal but to be honest, there isn't one. It's just really useful.

## How do I implement a wordpress quick post button?

The following code is a straight copy and paste from Marks tutorial. Take the following code and place it directly above the `<?php wp_footer(); ?>` code in your `footer.php` file.

    <?php if (is_user_logged_in()) { ?> <a href="/wp-admin/post-new.php" id="newPost">+</a> <?php } ?>

He also offers up a little bit of `CSS` to help style the button

    a#newPost { position: fixed; top: 0; right: 40px; background: rgba(0,0,0,.25); font-size: 40px; font-weight: bolder; line-height: 1; color: #fff; text-shadow: 0 1px 0 rgba(0,0,0,.25); padding: 5px 15px 10px; }

If you feel like reading his post, then you can do so [here](http://www.markdotto.com/2010/10/03/add-a-quick-post-link-to-your-wordpress-blog/).
