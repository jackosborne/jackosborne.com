---
permalink: "/blog/2009/09/pseudo-drop-caps/"
date: "2009-09-15"
title: "Pseudo Drop Caps"
tags: ["css"]
excerpt: ""
eleventyExcludeFromCollections: true
---

They've been around for a while now, appearing in magazines, print and now the web. Designers and developers alike have experimented with multiple workarounds from using inline styles to using image replacement but with both of these solutions there are problems. For example, what happens when you recreate your site and decide that you no longer want to upload the drop cap images, you're now going to left with a broken image at the start of every single post that you had previously created, this is obviously assuming you haven't used text-indent. If you decided to go down on the inline style route then your are just **bad**, just very bad.

This got me thinking, how do we go about creating this with Cascading Style Sheets? A common approach when going down the CSS route is to attach an class to your first p tag within your post/article.

`<p class="drop">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`

By adding an class you can then add the following styling to your css file

`.drop:first-letter { background: #CCC; border: 4px double #FFF; color: #ffffff; float: left; font-family: "Times New Roman", Times, serif; font-size: 4em; font-weight: bold; margin: 0.1em 0.4em 0em 0em; padding: 0.5em; }`

This will work in most modern browsers but expect the usual issues with Internet Explorer 6, to get around this you will need to wrap your first letter within the `<span>` element.

Although this works well it got me thinking, could we ditch the id on the first paragraph? The answer is yes but unfortunately my new suggested method isn't going to work in every browser, just the really cool ones. So, if you're down with the progressive enhancement let's get started.

Much like the above we wrap our text in the paragraph tag

`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`

Then we add our css again, remember if your article is contained with a div, remember to assign the divs id before the p tags in the example below.

`p:first-child:first-letter{ background: #CCC; border: 4px double #FFF; color: #ffffff; float: left; font-family: "Times New Roman", Times, serif; font-size: 4em; font-weight: bold; margin: 0.1em 0.4em 0em 0em; padding: 0.5em; text-transform: uppercase; } p:first-child:first-letter:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }`

With your top css selector, first-letter element, you can add any of the following

- background properties
- clear
- font properties
- letter-spacing
- line-height
- text-decoration
- vertical-align
- word-spacing

By floating the dropcap you are causing the letter to be consistent with the rest of the line, while the base is allowed to extend below. If you removeit, it will cause the base to line up with the rest of the line. However, if you decide to use the float, I recommend using the :after pseudo element to clear the paragraph. If you do not your dropcap may interfere with the following paragraph, if the first paragraph is short.

Give it a go and tell me what you think, do you have a better suggestion? Leave a comment and let me know.
