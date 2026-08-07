---
permalink: "/blog/2010/08/css-tooltips-with-the-pseudo-element/"
date: "2010-08-27"
title: "CSS Tooltips with the Pseudo Element"
tags: ["blog", "css", "website tips"]
excerpt: ""
eleventyExcludeFromCollections: true
---

Last week I was on the hunt to see the ways in which people styled tooltips - a small pop-up window with descriptive text, such as a label, for a control or graphical object - as I was working on a project which specified that the tooltips must be styled and not let the browsers default styles show.

A lot of the links out there just seemed to be regurgitating the same information until I found this link on [CSS Globe](http://cssglobe.com/post/1614/4-uber-cool-css-techniques-for-links) which was a post showing four interesting CSS techniques. The idea is to stick a span into your anchor element `<a href="#">Title <span>Tooltip</span></a>`. The CSS then documents the active and hover states which makes the span element visible. In the links active state the span is set to `display: none;` and is then set to `display: block` and is offset to the left and above to create a hover effect above the word.

Although the above piece of code will work it's far from ideal as the code isn't very semantic as you're using an extra/meaningless element which will cause havoc with screenreader software.

This year I've been starting to dabble with pseudo elements, as you may have noticed from a [few](/blog/2009/09/pseudo-drop-caps/) [articles](/blog/2010/01/pseudo-menu-items/) and it got me wondering if I would be able to modify this tooltip code with a little help from pseudo elements. The answer was yes, when I combined it with the CSS [content property](http://css-tricks.com/css-content/).

Lets start with our basic sentence:

    <p>An <span title="This is an example of using the content property for CSS tooltips" class="tooltip">example</span> sentence for my tooltip.</p>

To make the tooltip, the wording in the title attribute, work using content property we use the following code:

    .tooltip:hover:after { content: attr(title); }

The above CSS will make the tooltip visible when you hover over the word which has been wrapped in the span in the above anchor element. However, there won't be any style applied to this element, so go mad and add as much styling as you want; border-radius, rgba, padding and colour.

View the [CSS tooltip](http://jackosborne.com/demos/2010/tooltip/) example.

**Update (01/12/2010):** Today [Harry Roberts](http://twitter.com/csswizardry) of CSS Wizzardry wrote [his own take on `CSS` tooltips](http://csswizardry.com/2010/11/improving-css-tooltips/), using this article as his base.

Last week I disabled the comments on this blog and unfortunately lost some of the good discussion that had taken place within this article. So here are a few of the more interesting comments for you to consume.

---

[Doug Aitken](http://dougaitken.co.uk/) Pointed out that you see the tooltip twice due to using the alt attribute - [http://dl.dropbox.com/u/560599/scrnshts/tooltips.png](http://dl.dropbox.com/u/560599/scrnshts/tooltips.png).

[Frequency Decoder](http://www.frequency-decoder.com/) said:

"There’s no way to stop the browser’s default tooltip from appearing I’m afraid (without resorting to JS but this removes all notion of accessibility). I toyed with using a custom data- attribute to hold the tooltip text but again, this just makes the tooltips 100% un-accessible (as screen readers are not supposed to read generated content) if the title attribute isn’t added to the markup.

Quick custom data- attribute demo: http://www.frequency-decoder.com/demo/css-tooltips/

…and inevitable blah, blah: http://www.frequency-decoder.com/2010/06/21/css-tooltips-using-generated-content-and-html5-data-attributes/"

[Nicolas Gallagher](http://nicolasgallagher.com/) who I am sure you already know, said that Frequency Decoders alternative was his preferred option.

"Placing text in the title attribute is no guarantee that it will be read by screen-readers either. However, Filament Group’s research indicates that some screen-readers do actually read CSS generated content: [http://filamentgroup.com/lab/dingbat_webfonts_accessibility_issues/](http://filamentgroup.com/lab/dingbat_webfonts_accessibility_issues/).

The article about pseudo-elements on CSS Tricks was influenced by an article I wrote which, if you haven’t read it, I hope might give you some more ideas for experiments using pseudo-elements – [http://j.mp/d6UMOd](http://j.mp/d6UMOd)."
