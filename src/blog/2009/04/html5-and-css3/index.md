---
permalink: "/blog/2009/04/html5-and-css3/"
date: "2009-04-24"
title: "HTML5 and CSS3"
tags: ["web", "css", "html"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Being spring I thought it was time for a clean out. As you might notice, the site has changed, on first glance it might not be anything major apart from the new navigation the site is sporting but if you take a glance under the hood you’ll see a whole host of different changes. New mark-up, stylesheets and a grid layout based on the 960 grid.

As with most people, the overhaul started innocently enough, with a little tinkering here and there however it wasn’t long before I decided that I’d be best ripping everything out and starting over. I suppose if you don’t look back over old code and think of new and better ways to change something then you’re not doing your job correctly.

### HTML5 elements

After seeing [Bruce Lawson detail his journey on HTML5](http://www.brucelawson.co.uk/category/accessibility-web-standards/html5/ "Bruce Lawson on HTML5") for his own site, at the start of the year, I became very eager to try it out for myself.

I read with much enthusiasm as he tried to figure out how to use certain elements, the challenge seemed to be something he enjoyed and that was something I wanted. I’ll be the first to admit that I don’t have as good an understanding of HTML5 elements as other people, infact if you look at my code you may notice many mistakes where I’ve used elements in the wrong place or I’m using entirely the wrong elements for it’s allocated job. If you do notice anything like that then please use the comment form below and point them out.

If you've been reading up on HTML5 you will know there's a slight problem with it in the good old Internet Explorer browsers, it doesn't work. However thanks to a [brilliant piece of javascript by Remy Sharp](http://remysharp.com/2009/01/07/html5-enabling-script/ "Remy Sharp HTML5 javascript") it displays as it should.

Bruce Lawson has also detailed that

> Firefox 2 and Camino 1 both use Gecko 1.9 which has a bug and so gets grumpy if you don’t serve the page as XHTML.

So for all the Firefox 2 and Gecko users out there, I'm sorry but the pros outweigh the cons for me, as this is something I desperately wanted to test.

There are still a few bits and pieces I need to sort out but other than those, I feel that the new site is almost ready and I have to admit that I'm very happy with it.

### CSS

The CSS for the site, has been completely rewritten making everything more streamline and getting rid of alot of ids and classes that I hadn't been using in the last iteration of the site. I've also made use of CSS3 selectors such as text shadow which has been used on my headings, box shadow and border radius. Pseudo-elements for my lists throughout the site.

I've also had fun implementing a few webkit transitions throughout the site, to get certain elements of the site animated. However, that is only available in browsers which are based on the webkit engine such as Apple Safari and their iPhone, Google Chrome and the Android phones.

### Scripts

My good friend [Mike Robinson](http://www.akamike.net "Mike Robinson") produced an absolutely stunning piece of php to display my [articles page](/blog/ "articles page") exactly how I imagined it, with tags, categories and dates displaying their description and value.

I've also decided to give jQuery a try as it's something which I've seen become adopted more and more by websites recently, I've implemented a filter for my portfolio page where users can select the types of projects they wish to view. Another jQuery element which has been incorportated is the scrollToTop function, created by [Craig Wilson](http://www.craigwilson.co.uk/ "Craig Wilson").

There's a few more jQuery functions floating about this site but I'm not going to mention them all, I'll let you try and see if you can find them.

### Grid Layout

You might also have noticed the show/hide grid button which is located to the right of the main menu navigation, at the top of the page. You will often hear designers talking openly about using grid based layouts and the perks that they offer. However once basic prototypes and wireframes have been accomplished the grids are removed. However, I decided that it would be a good idea if the grid up was left up, so that people could see the layout and analyse it.

### Final Thoughts

Please note that this is an experiment and like all experiments I'm sure I will have went wrong somewhere along the line, but if you can't experiment on your own site then where can you. I'm not entirely sure if I'll keep these HTML5 elements, I might resort back to using divs but coding them up so that they are HTML5 ready ie, `section` would turn into `div class="section"` Again, if you have any suggests then all constructive criticism is welcome. Further reading for the HTML5 spec can be found [here](http://dev.w3.org/html5/html-author/ "HTML 5 working draft").

If you find any broken links then please contact me through the contact page or at [jack@jackosborne.com](mailto:jack@jackosborne.com).
