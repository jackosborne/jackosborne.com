---
permalink: "/blog/2010/01/wordpress-next-and-previous-post-link-on-index-php/"
date: "2010-01-20"
title: "Wordpress next and previous post link on index.php"
tags: ["blog", "website tips", "wordpress"]
excerpt: ""
eleventyExcludeFromCollections: true
---

In two recent projects I have been faced with a problem. The problem is actually quite simple but I couldn't figure out a solution for it, so I decided to call in the [big guns](http://chriscoyier.net/ "Chris Coyier from CSS Tricks").

I'm sure you are all aware of the `<?php previous_post_link('%link','Previous Article') ?>` and `<?php next_post_link('%link','Next Article') ?>` wordpress links that you can use on your single.php pages when you want to offer a form of navigation between posts.

## The problem

In these projects I've set index.php to display the most recent post but I wanted the ability to use the next and previous post link, to help users cycle through other blog posts. However because index.php is a page and not a post I wasn't able to use the regular method mentioned above. Therefore the only possible solution for the user to navigate through posts using the wordpress navigation was to click on the post title to enter the post page and then click through the posts using the navigational link but as I'm sure you will all agree isn't very logical.

## The solution

Chris got back to me very quickly with his solution.

<code><?php query_posts('posts_per_page=1&offset=1'); the_post(); ?> <a href="<?php the_permalink() ?>">Previous Post</a> <?php wp_reset_query(); ?></code>

Chris then went on to explain how the above code works

> WP_Query is just another form of query_posts that is a little more advanced and by nature doesn't interfere with other loops. We could have used that for this too, but I just like query_posts better. And if there was a regular loop, that's why I put that reset_query() call, so it wouldn't mess with it.

## The Kudos

I just want to say thank you to [Chris](http://chriscoyier.net/ "Chris Coyier from CSS Tricks") once again for taking time out of his day to help me with this problem that has troubled me for a good few weeks now. If you haven't heard of Chris before then I'm assuming you must have been living under a rock. You can check out his great multipurpose site called [CSS-Tricks](http://css-tricks.com "CSS Tricks") or you can read his Wordpress dedicated site called [Digging into Wordpress](http://digwp.com/ "Digging into Wordpress") to receive a series of great hints, tips and tutorials.
