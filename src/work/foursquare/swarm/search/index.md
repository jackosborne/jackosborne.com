---
title: Search
product: Foursquare Swarm
shortcode: Foursquare / Swarm
overview: Scattered across three separate views, users found themselves navigating a labyrinth of searches to uncover their activity and that of their friends. Over time, Swarm's search experience had become increasingly fragmented, leaving users frustrated and unsure where to find what they were looking for.
tags: ["casestudy", "fsqswarm"]
banner:
  - url: /_/images/work/foursquare/swarm/search/banner/phone1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone1-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone3.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone3-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone3-2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone3-3.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone4.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone5.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone6.png
    alt: text
  - url: /_/images/work/foursquare/swarm/search/banner/phone7.png
    alt: text
responsibilities: ["Prototyping", "Sketching", "UI Design", "User Testing", "UX Design"]
team: ["Avneesh Kohli", "Tom Meng", "David Weissler", "Jay Zhou"]
platform: Android & iOS
year: 2017
press:
  - url: https://www.engadget.com/2017-08-08-swarm-5.html
    publisher: Engadget
  - url: https://mashable.com/article/foursquare-swarm-update-life-logging-data
    publisher: Mashable
  - url: https://techcrunch.com/2017/08/08/swarm-kills-the-clutter-focuses-on-logging-location/
    publisher: TechCrunch
  - url: https://www.theverge.com/2017/8/8/16110016/foursquare-swarm-app-update-check-in-lifelog-diary
    publisher: The Verge
---

While these separate views allowed users to explore their check‐in history, online friends, and offline contacts, their lack of cohesion resulted in confusion and inefficiency. Users frequently ended up on the wrong search screen or couldn't find the information they needed, which highlighted the need for a cohesive redesign—one that could bring these elements together into a single, intuitive hub.

##### 01&mdash;Discover
### Understanding the Problem
The screenshots below illustrate the three distinct search flows in Swarm 4.0. They showcase the fragmented user experience and underline the need for a more cohesive design.

<figure class="img">
  <div class="bg padding multi row">
    <div>
      <img 
      src="{{ '/_/images/work/foursquare/swarm/search/content/old1.png' | url }}" 
      width="486" 
      alt="photo" />
    </div>
    <div>
      <img 
      src="{{ '/_/images/work/foursquare/swarm/search/content/old2.png' | url }}" 
      width="486" 
      alt="photo" />
    </div>
    <div>
      <img 
      src="{{ '/_/images/work/foursquare/swarm/search/content/old3.png' | url }}" 
      width="486" 
      alt="photo" />
    </div>
  </div>
  <figcaption>
 Friend, Contact & History Search 2014-2017
      <span>
 Swarm Search
      </span>
  </figcaption>
</figure>

Of the three types of searches available, users were primarily looking to search their check‐ins. They did so for three key reasons: to reminisce about past experiences, find the name of a place they wanted to revisit or share recommendations with friends<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">If you're interested in reading more on the last option, please feel free to read the [case study][1] on Swarm's Venue Page</span></span>.

However, despite the importance of this functionality, the history search was buried within the profile tab, making it challenging to discover. This led to confusion, with users frequently getting lost or realising their desired action was impossible because they were on the wrong search screen.

##### 02&mdash;Define
### User Research and Insights
We conducted surveys and user interviews to ensure a more comprehensive understanding of our users' needs. The findings validated our initial assumptions and revealed new opportunities to improve Swarm's search functionality and align more closely with competitors.

Feedback revealed a clear opportunity to bridge functionality gaps and meet user demands in four key areas:

<figure class="img">
<div>
<ul class="quotes">
<li>
<span class="persona"></span>
<strong>Nostalgia-Driven Features</strong>
Users wanted easier access to past check‐ins, enabling them to reminisce and share memories with friends.
</li>
<li>
<span class="persona"></span>
<strong>Improved Filtering Options</strong>
Filtering by time periods was the most requested feature, allowing users to refine results by specific dates.
</li>
<li>
<span class="persona"></span>
<strong>Personalised Suggestions</strong>
Users wanted relevant recommendations to inspire exploration and spark new ideas.
</li>
<li>
<span class="persona"></span>
<strong>Enhanced Search Capabilities</strong>
Chaining searches, such as combining pizza, Soho, and a friend's name, was a top user request.
</li>
</ul>
</div>
<figcaption>
 User-requested Features
      <span>
 Swarm Search
      </span>
</figcaption>
</figure>

Consolidating everything into one interface was critical to simplifying navigation and unlocking new ways for users to explore their data. For example, chaining searches wasn't possible with the existing separate screens, and these findings reinforced the need for a unified experience.

##### 03&mdash;Ideate
### Identifying an Entry Point
Creating a unified entry point for search was essential to simplify and enhance the user experience. We wanted the search to feel as central to the app as checking in, and with Swarm functioning as a lifelog, centralising search aligned perfectly with its core purpose. Prioritising discoverability, usability, and functionality equally ensured search would become a seamless part of the experience.

We considered two key placements for the entry point: at the top of the screen in the navbar or integrated within the tab bar. Placing it at the top required reorganising the existing header, which felt manageable. In contrast, adding it to the tab bar posed a more significant challenge, as it was specifically designed to prioritise the check‐in action<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">The tab bar supported the 'Me' and 'Social' feeds, with the check‐in button centred for balance and prominence. Adding search here would require redesigning and reducing the check‐in button's importance</span></span>.

Ultimately, the decision to place the search in the header preserved the balance and simplicity of the tab bar while giving the search the needed prominence. By seamlessly integrating search into the existing UI, we ensured it became a natural extension of Swarm's core functionality.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <div>
          <img 
          src="{{ '/_/images/work/foursquare/swarm/search/content/identifying-an-entry-point-sketch@2x.png' | url }}" 
          width="1252" 
          alt="photo" />
        </div>
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/identifying-an-entry-point-wireframe-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/identifying-an-entry-point-wireframe-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/identifying-an-entry-point-wireframe-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
    <!--
    <div class="multi row">
    <div>
    <div style="height: 240px; background:var(--border); line-height: 240px; text-align: center;">mock</div>
    </div>
    </div>
    -->
  </div>
  <figcaption>
 Exploring Search Entry Point Placements
    <span>
 Swarm Search
    </span>
  </figcaption>
</figure>

### Landing Page Experiences
Swarm's value becomes apparent when users build up their activity. With a search landing page, we needed to ensure it was designed to balance functionality and immediate value for new and returning users.

As Swarm requested location permissions during its initial setup<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">If you'd like to learn more about Location Permissions, check out the official documentation from [Apple][2] and [Android][3] for detailed specifications and guidelines</span></span> one of our favoured approaches was to introduce a suggested searches feature that would be visible to all users.

If you were a new user, we would be able to highlight popular, busy, or trending venues near your location. The suggestions became more personalised for returning users, surfacing venues or categories they hadn't visited in a while. We also introduced a new "on-this-day" feature, which showcased past check‐ins from previous years. This adaptive approach allowed us to ensure relevance while fostering deeper engagement.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/ideas.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/landing-page-experiences-sketch@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/landing-page-experiences-wireframe-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/landing-page-experiences-wireframe-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/landing-page-experiences-wireframe-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
    <!--
 <div class="multi row">
 <div style="height: 320px; background:var(--border); line-height: 320px; text-align: center;">mock</div>
 </div>
 -->
  </div>
  <figcaption>
 Landing Page Explorations
    <span>
 Swarm Search
    </span>
  </figcaption>
</figure>

### Searching for Results
After arriving on the landing page, users could access the entire search experience by clicking on the search bar again. This action would bring up the keyboard, enabling them to start typing immediately. We envisaged that the user's results would dynamically update with each keystroke, refining their query in real-time.

To determine the best way to organise search results, we explored multiple approaches through sketches and prototypes:

- **Unified List**: Results for places, locations, categories, and friends would be mixed in a single scrollable list. While this approach simplified the visual structure, it would lack clarity and make it harder for users to scan specific types of content.
- **Tabs for Categories**: Inspired by the existing separate searches, this approach would group results into a tab-based layout. While it preserved some familiarity, it didn't feel unified and would still require different levels of navigational effort.
- **Contextual Groupings**: This approach would display a limited number of results for each category, with the 'see more' option pushing to separate views for deeper, continued browsing.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <div>
          <img 
          src="{{ '/_/images/work/foursquare/swarm/search/content/searching-for-results-sketch@2x.png' | url }}" 
          width="1252" 
          alt="photo" />
        </div>
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-for-results-wireframe-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-for-results-wireframe-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-for-results-wireframe-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
    <!--
    <div class="multi row">
    <div style="height: 320px; background:var(--border); line-height: 320px; text-align: center;">Animation</div>
    </div>
    -->
  </div>
  <figcaption>
 Content Groupings for Search Results
    <span>
 Swarm Search
    </span>
  </figcaption>
</figure>

Ultimately, the contextual grouping approach proved the most effective. By prioritising places, locations, categories, and friends, we created a clean, scannable interface that balanced familiarity<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">This unified interface not only streamlined search but also reinforced that all previous search experiences were now consolidated, simplifying navigation and encouraging exploration</span></span> with functionality. Instead of fragmenting results by specific criteria, we focused on intuitive groupings, dynamically refining results with each keystroke.

### Diving Deeper into Search
As users typed, the landing page dynamically displayed real‐time search results. From these grouped results, users could select a specific item to open a dedicated view or tap the 'See All' escape hatch to explore a broader set of results within that category. This dual approach supported focused actions and exploratory browsing, offering flexibility for different user needs.

The navigation is updated dynamically within detailed views, replacing the close button with a back arrow to guide users in backing up the funnel. This consistent interaction pattern ensured the search experience remained intuitive and fluid throughout.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/diving-deeper-into-search-wireframe-one@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/diving-deeper-into-search-wireframe-two@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/diving-deeper-into-search-wireframe-three@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/diving-deeper-into-search-wireframe-four@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Content Groupings for Search Results
    <span>
 Swarm Search
    </span>
  </figcaption>
</figure>

### Searching through Time
Users frequently requested the ability to filter by cross sections of time, seeking greater control to find specific check‐ins or relive essential moments from the past. However, Swarm's existing APIs did not support time‐based queries, and re‐architecting them for a date‐first search model was beyond the scope of this release. We introduced time filtering as a secondary layer in the deeper search views to address user needs within these constraints.

Users accessed a tertiary view featuring a time-filtering bar below the primary search input after selecting a result—whether places, locations, categories, or friends. This bar included 'to' and 'from' date fields, enabling users to refine results within a chosen category without overcomplicating the primary interface.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-through-time-wireframe-one@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-through-time-wireframe-two@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-through-time-wireframe-three@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-through-time-wireframe-four@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div style="background:var(--border);">
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-through-time-icon-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div style="background:var(--border);">
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-through-time-icon-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div style="background:var(--border);">
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/searching-through-time-icon-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
    <!--
    <div class="multi row">
    <div style="height: 320px; background:var(--border); line-height: 320px; text-align: center;">Animation</div>
    </div>
    -->
  </div>
  <figcaption>
 Content Groupings for Search Results
    <span>
 Swarm Search
    </span>
  </figcaption>
</figure>

Placing the time filter in the tertiary view allowed us to deliver this functionality without overhauling the core APIs. We minimised server costs and maintained performance by retrofitting the feature to work within existing queries. We ensured users could benefit from time filtering without delaying the release or disrupting overall functionality.

##### 04&mdash;Test
### Testing and Feedback
Before building a functional prototype for testing, we printed out all the accompanying screens that had been designed. This allowed us to gather internal feedback on the new direction's usability, usefulness, and satisfaction.

At this stage, we followed a proven method we had successfully employed in earlier Swarm projects. We created a functional prototype with weekly builds for internal testing and biweekly releases for our Superusers, a select group of highly engaged users. To facilitate their feedback, we established a dedicated Slack channel where they could share images and screen recordings, enabling us to gather valuable insights and promptly address any issues.

### Design Revisions
As the weeks passed, we conducted A/B testing to compare the performance and engagement of the new search feature with the old one. The results showed a significant improvement in speed, accuracy, and discoverability. However, a few pieces of feedback stood out:

| Issue                   | Initial Design | Feedback | Change Implemented |
|-------------------------|----------------|----------|--------------------|
| **On This Day** | A static rectangular block that opened a new view displaying the user's chronological check‐ins for that specific day. | Users loved the nostalgia but wanted it to be more prominently displayed on the screen. | We broke out each year into individual cards, making it easier to navigate past activities while giving each year its own space to be celebrated. |
| **Clear previous searches** | N/A | Users requested the ability to clear out previous searches. | An easy clear all button was placed on the landing page of search. |
| **Keyboard on Search** | The initial design focused on the landing page, with the keyboard only being exposed when the user clicks the search bar again. | Users felt like this was one click too many. | The keyboard is now accessible and overlaid on the search landing page immediately after the user clicks. |

<figure class="img">
  <div class="multi col bg padding">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/design-revisions-mock-one@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/search/content/design-revisions-mock-two@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Clear Previous Searches & On This Day
      <span>
 Swarm Search
      </span>
  </figcaption>
</figure>

##### 05&mdash;Release
### Room for Improvement
While we created a more intuitive and engaging user feature, some areas were deprioritised due to time constraints.

One such feature was a 'selected pills' functionality, where users could type items and press return to create pills, allowing them to chain multiple search terms together. Instead, we implemented a simpler method, allowing users to filter by one item per screen—for example, searching for 'Paris' and then refining by a timeframe on a subsequent screen. While effective, this step‐by‐step approach lacks the streamlined efficiency of the 'selected pills' concept, which would have allowed users to combine multiple filters simultaneously.

Another feature we envisaged was a chronological list of all check‐ins from a single day, designed to help users relive their activities in sequence. This functionality would go beyond simply displaying individual check‐ins; it would allow users to search for one specific check‐in and view the surrounding check‐ins from the same day. For example, if a user couldn't remember the name of a place they visited but recalled another venue they went to that day, this feature would make it easier to piece together their memories.

[1]: /work/foursquare/swarm/venue-page/
[2]: https://support.apple.com/en-us/102515
[3]: https://developer.android.com/develop/sensors-and-location/location/permissions
