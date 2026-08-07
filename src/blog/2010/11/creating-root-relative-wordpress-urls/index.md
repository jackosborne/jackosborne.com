---
permalink: "/blog/2010/11/creating-root-relative-wordpress-urls/"
date: "2010-11-01"
title: "Creating root relative WordPress URLs"
tags: ["blog", "wordpress"]
excerpt: ""
eleventyExcludeFromCollections: true
---

I stumbled across this little piece of [code on 456bereastreet](http://www.456bereastreet.com/archive/201010/how_to_make_wordpress_urls_root_relative/) today and thought I would repost it on here.

The article on 456bereastreet comments on the fact that wordpress uses absolute URLs for all its links/paths, instead of relative ones which are often seen as more favourable for several reasons, including portability, reducing download size, and general code neatness.

Roger, author of 456bereastreet, offers up a simple code solution which he places in his `functions.php` file to strip the protocol and domain name from URL strings:

    function make_href_root_relative($input) { return preg_replace('!http(s)?://' . $_SERVER['SERVER_NAME'] . '/!', '/', $input); }

He states:

> You can use this function by feeding it any URL string you want to make root relative. You can do this either in template files or in your functions.php file. Here’s an example of adding this function as a filter to the the_permalink() function:

    function root_relative_permalinks($input) { return make_href_root_relative($input); } add_filter( 'the_permalink', 'root_relative_permalinks' );

In using the following code all resulting URLs will be root relative. Meaning that instead of `http://www.example.com/page-or-post-url/` wordpress will turn out `/page-or-post-url/`.
