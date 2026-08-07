---
permalink: "/blog/2010/04/quick-wordpress-custom-fields/"
date: "2010-04-01"
title: "Quick Wordpress Custom Fields"
tags: ["blog", "wordpress"]
excerpt: ""
eleventyExcludeFromCollections: true
---

I'm sure you will all agree when I say that creating custom fields for wordpress should be a lot easier. Whenever it comes to adding a custom field to a theme I know it's going to take me more than one attempt to get it correct.

Normally there are three steps to tackle in order to get your custom field working:

1. Modify the wordpress loop to specify your new custom code
2. Insert your custom php where you wish in your template
3. Log into the back-end of wordpress and define php ID in the custom field and insert a value

Last week I was shown this piece of custom php, which actually turns out to be on the [wordpress codex](http://codex.wordpress.org/Custom_Fields#PostMeta_Functions), by [Martin Gardner](http://www.martin-gardner.co.uk/ "Martin Gardner").

    <?php $key="CUSTOM"; echo get_post_meta($post->ID, $key, true);?>

The great thing about this custom piece of php is that you do not need to modify the wordpress loop, therefore meaning that there is less chance of you breaking the theme. You just slot this php into the template wherever you choose and change the "custom" value to whatever you want. Then you log into the backend of your wordpress theme and define the custom field, like you normally would.

Another great thing about this piece of php is the fact that you can re-use it over and over and you never need to close any php tags so long as these are placed within the loop.
