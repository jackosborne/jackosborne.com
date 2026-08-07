---
permalink: "/blog/2010/03/delete-wordpress-post-revisions/"
date: "2010-03-04"
title: "Delete Wordpress Post Revisions"
tags: ["blog", "wordpress"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Wordpress has a function called post revisions that will save a copy of a post or page every time you press the save draft button, this was introduced to help restore previous versions of posts/pages incase the user makes a mistake. As you can imagine, this can be very handy, one that I am sure we have all used before.

If you haven't heard of this feature before then scroll down either a page or post, in the back-end, so long as you haven't reordered any of the elements using the drag and drop feature, then post revisions should be five boxes below the content area.

I know I'm guilty of pressing the save button every couple of minutes due to the various computer crashes I've had throughout my life, so I know that I will have a lot of revisions for pages and posts. However, one thing that you may not know about this feature is the huge amount of information/duplicate content that it will add to your database. So how do you get rid of all these revisions?

There are several different ways you can tackle this:

### Turn off post revisions

If you do not need this feature you can turn it off by adding the following code to your wp-config.php file `define(‘WP_POST_REVISIONS’, false);` however I wouldn't really recommend this as it's always good practice to have back-ups of your work.

### Deleting older revisions

If your a dab hand within the confides of phpMyAdmin then you could execute this query `DELETE FROM wp_posts WHERE post_type = “revision”;`. This will delete all instances of revision from your database but please take a copy of your database before you go about doing something like this.

### Use a plugin

One final option would be to install the [Wordpress revision control plugin](http://wordpress.org/extend/plugins/revision-control/) which gives users more control over the revisions. The plugin allows the user to set a global setting for pages and posts where you can enable, disable and limit the number of revisions which are saved for each page and post.
