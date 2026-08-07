---
permalink: "/blog/2009/05/using-html5-elements/"
date: "2009-05-14"
title: "Using HTML5 elements"
tags: ["web", "html"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Not so long ago I highlighted the fact that this [website had made the jump to HTML5](/blog/2009/04/html5-and-css3/ "html5 website"). However, within that post I only highlighted the reasons for doing so without going into much detail.

It had been my intention to talk in depth about how everything had been created and I had originally planned to wait until the site had bedded in before writing this post, however a recent [comment within that post](/blog/2009/04/html5-and-css3/ "A comment on HTML5") has made me do the write up now.

In that post I alluded to the fact that I wasn’t sure if I had used these new elements correctly, if the truth be told, I was in fact looking to my peers to point these errors out, allowing me to address them. Since then I’ve had a few [Twitter DMs](http://www.twitter.com/jackosborne "Jack Osborne Twitter") highlighting problem areas throughout the site.

Now that these have been addressed and [after a quick modification to my page layout which was highlighted in the last post](http://www.jackosborne.com/articles/realignment/ "html5 realignment"), I feel it would be best to talk readers through the pages of the site and pass out some of the information that I have learned since taking on this redesign.

As you can see most pages adopted a strict three column layout, with the main content area on the left, the related content in the middle and the extras, for want of a better word, column occupying the far right hand side of the site.

With this site being coded in HTML5 I wanted to cut out all divs and if I could classes and ids. Therefore the layout follows a structure something along the lines of this diagram below.

{% responsiveImage "src/blog/2009/05/using-html5-elements/html5-layout.png", "My HTML5 Layout", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog-png" %}Straight away you should have noticed the distinct lack of divs within the source code. I have still kept a div acting as a wrapper, partly due to the fact that I wasn't sure how to contain all of the new elements. Perhaps that's something which I can address in a future blog post and perhaps put forward to the spec committee as something which should be implemented. If you do know of a viable alternative then please let me know, although I would like to state that I want to stay away from using a section or article tag, as I don't believe these methods to be what the elements were intended for.

### Dealing with Internet Explorer

I wrote about this in my [previous HTML5 blogpost](/blog/2009/04/html5-and-css3/ "Jack Osborne on HTML5") but there's no harm in mentioning it again, especially if I'm going to be dissecting various parts of the site. As we've come to expect, Internet Explorer does not play ball, it struggles to understand these new elements. As a result, Remy Sharp has produced a piece of javascript which will [help these pages render as they should](http://remysharp.com/2009/01/07/html5-enabling-script/ "Internet Explorer and HTML5"), simply link it into your site and you'll be laughing. However, I should point out that if the end user does not have javascript enabled you will run into problems.

You'll also need to remember and set your HTML5 elements to display block in your css file.

### Let the writing commence

Now let's get down to the nitty gritty of each individual element. If you've been reading anything regarding HTML5 you will have undoubtedly seen the following elements named; [header](#header "link to header"), [nav](#nav "link to nav"), [section](#section "link to section"), [article](#article "link to article"), [aside](#aside "link to aside") and [footer](#footer "link to footer"), all of these links will take you to their matching section in this blog post.

Although there are many more elements within the spec these are the ones that I will be focusing on throughout this article due to the fact that they have been utilized most often.

<h3 id="header">Header</h3>

Every HTML5 site needs a header element, no ifs or buts about it. You're header element must also contain a heading level. Within this site my header element is the grey bar running across the top of the page, which displays my jQuery hover states that give a little bit more information as to what each page contains.

Some people may think it is a waste that I have not included an h1 tag with my name or brand in there but to achieve a minimalistic look I wanted to incorportate my name into the menu system which as a result freed a H tag within the header. Besides, I'm of the opinion that using an H1 for your logo is a bit of a waste.

Due to the information that was going to be present within the header section I decided to mark it up with an h5 tag simply because there would be more important pieces of information on the page which demanded a higher heading tag.

{% responsiveImage "src/blog/2009/05/using-html5-elements/html5-header.png", "html5-header", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog-png" %}

**Update:** Since writing this post the header element has now changed to hgroup.

<h3 id="nav">Nav</h3>

Originally I had my nav within the header element but was told to move it outwith as it wasn't validating. However, this is no longer the case and you can thankfully place your nav element within the header. You still need to structure your list like you would normally with either a unordered or ordered list, depending on your preference.

{% responsiveImage "src/blog/2009/05/using-html5-elements/html5-nav.png", "html5-nav", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog-png" %}

<h3 id="section">Section</h3>

I've used the section element to contain my main body of content, which would normally be the content and sidebar areas. This is one such area I am still not sure about but it seems to serve it's purpose well enough. If you have a suggestion for how I should implement my section element then please let me know.

<h3 id="article">Article</h3>

I've used the article tag for what you might expect, my main content area: blog posts and primary content areas where the biggest parts of information can be found.

{% responsiveImage "src/blog/2009/05/using-html5-elements/html5-article.png", "html5-article", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog-png" %}

<h3 id="aside">Aside</h3>

{% responsiveImage "src/blog/2009/05/using-html5-elements/html5-aside.png", "html5-aside", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog-png" %}

This proved to be a sticking point for me when designing the site, if I have interpreted the spec correctly I believe that the aside element should be used for blockquotes etc. something which is closely related to the content but this is not how I set out to work with them. When looking through the spec I didn't see anything which could relate to a sidebar section, section and article could be used but it didn't look or feel correct.

I finally decided on the aside element because I would be displaying content which tied in loosely with the main content on the page. Information that you will find in the aside elements range from tags and categories for blog posts to social network links on my about page.

<h3 id="footer">Footer</h3>

The footer element is as you would expect, a place where you put all your copyrighted information such as company, vat and telephone numbers. Within this site, I have also included three list items which display further information about myself, the site and my latest comment on twitter.

{% responsiveImage "src/blog/2009/05/using-html5-elements/html5-footer.png", "html5-footer", "(min-width: 1140px) calc((100vw - 202px) / 2), (min-width: 1024px) calc(100vw - 192px), calc(100vw - 64px)", "blog-png" %}

However, a footer doesn't necessarily have to be at the bottom of the page. For example, some people have decided to include the footer tag within a blog post, holding information such as date, comments and tags.

### Conclusion

I hope this gives you a good insight into how I created my own website and has helped to answer a few questions, opposed to creating them. If there is demand I might look into breaking down other elements such as time or elements like form input fields.

If the above has given you a taste to continue reading up on html5, and if you have a month or two free, then why not start reading the spec which can be found here [http://www.w3.org/TR/html5/semantics.html](http://www.w3.org/TR/html5/semantics.html).
