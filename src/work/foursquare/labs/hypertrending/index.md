---
title: Hypertrending
product: Foursquare Labs
shortcode: Foursquare / Labs
overview: Using anonymised data gathered from our existing app users, we sought to create a dynamic and immersive experience for attendees of the two-week technology segment of the SXSW festival in Austin, Texas, to discover the city. This innovative showcase paid homage to Foursquare's legacy in location-based services while inviting users to witness how our technology transforms real-time data into meaningful insights, enriching their exploration of Austin.
tags: ["casestudy", "fsqlabs"]
banner:
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone1.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone1-1.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone1-2.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone2.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone2-1.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone3.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone4.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone5.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone6.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone7.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone8.png
    alt: text
  - url: /_/images/work/foursquare/labs/hypertrending/banner/phone9.png
    alt: text
responsibilities: ["Planning", "Prototyping", "Sketching", "UI Design", "User Testing", "UX Design"]
team: ["Andrew Chao", "Emma Cramer", "Nate Folkert", "Avneesh Kohli", "Ben Mackey", "David Weissler"]
platform: Android & iOS
year: 2019
press:
  - url: https://mashable.com/article/foursquare-launches-hypertrending-sxsw
    publisher: Mashable
  - url: https://techcrunch.com/2019/03/08/foursquares-hypertrending-helps-you-spy-on-the-coolest-local-happenings/
    publisher: TechCrunch
  - url: https://www.theverge.com/tldr/2019/3/8/18256558/foursquare-hypertrending-phone-tracking-feature-sxsw-2019
    publisher: The Verge
---

Ten years had passed since Foursquare first debuted at this same festival in March 2009, and over that decade, much had changed within Foursquare and across the industry. This was precisely why the company was invited to return to where it all began to celebrate this milestone and to demonstrate its ongoing commitment to location-based services and technologies.

##### 01&mdash;Discover
### Surveying Our Options
With the event less than a month away, we assembled our small Labs team and immediately started brainstorming new ways to showcase the company's capabilities.

One of Foursquare's original features was the ability for users to share their location via a check-in button that presented a dropdown of nearby places to select from. Over time, this flow evolved as we streamlined it to a single check-in button, and by the midway point of the decade, we could remove the button entirely and still render a person's location within our apps. This shift was made possible by Pilgrim, Foursquare's proprietary location technology, and advancements in mobile phones.

As we discussed potential ideas, many centred around honouring this legacy feature through a fun, real-time heatmap. Although this concept had long interested us, it had been too much of a departure from our current app designs to implement in our existing experiences. However, with this new, time-gated venture, we felt the time might finally be right to bring the idea to life.

##### 02&mdash;Define
### Laying the Foundations
With a direction set, we scoped the project to visualise Foursquare's data through a real-time heatmap representing crowd density across Austin. We aimed to make exploring places more dynamic and engaging while providing users with an intuitive, at-a-glance view of where people were gathered.

Bringing this vision to life required selecting a mapping platform capable of supporting a visually led experience. While Apple and Google Maps provided strong foundations—and were already used in our other consumer apps—they lacked the customisation needed to tailor the visuals to our needs. Mapbox, a long-time Foursquare partner<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Foursquare had been using Mapbox for nearly a decade, beginning with its integration as <a href="https://blog.mapbox.com/foursquare-maps-designed-for-functionality-c98861d1602b">the mapping layer on our Explore web UI</a></span></span>, offered greater design flexibility.

Given our small team and tight timeline, everyone took on roles beyond their usual scope, collaborating closely to bring the project to life. My initial focus would be on the mapping layer and investigating a heatmap system to communicate crowd density while ensuring the UI remained intuitive and easy to navigate.

##### 03&mdash;Ideate
### Establishing a Framework
While browsing Mapbox's collection of base maps, I found a theme that closely aligned with an initial idea I'd envisaged for our foundational layer. After tweaking a few colours and hiding some annotation labels, I got closer to what I wanted.

<figure class="img">
<div class="multi col">
<div class="bg padding">
  <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/establishing-a-framework-screenshot-one@2x.png' | url }}" 
  width="1252" 
  alt="photo" />
</div>
</div>
<figcaption>
Mapbox Modifications
<span>
Hypertrending
</span>
</figcaption>
</figure>

With a mapping layer in place—at least for now—I turned my focus to representing the movement of people. As you might have guessed, the solution was dots: a simple yet versatile choice. While dots are widely used across apps, their real strength lies in their flexibility. Scalable and intuitive, they serve as a blank canvas onto which we can apply colour, shape, size, and animation to convey a deeper meaning. With these elements, a dot becomes more than just a circle—it transforms into a dynamic storytelling tool, capturing density and intensity to create a richer, more immersive experience.

To ensure the data remained impactful and accessible, we deliberately focused on a curated subset of five categories: events, nightlife, food, coffee, and tech startups. Tailored specifically to the interests of SXSW attendees, these categories allowed users to quickly find relevant information amidst the festival's hustle and bustle. Each category was represented by a distinct colour block, which enhanced clarity and visual intrigue when placed against the dark canvas, making it easy to dip in and out of the experience.

Initially, each location was displayed as a small dot. However, as more categories were introduced, the interface became increasingly cluttered<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">To anticipate the scale of activity during SXSW, we simulated several models based on real-time data. We applied a multiplier to visualise what the map might look like with increased activity</span></span>. To address this, we implemented five density thresholds to categorise crowd levels across the map better. Additionally, we introduced a pulsing effect for event-specific dots, helping them stand out while maintaining visual cohesion within their respective groupings.

<figure class="img">
 <div class="multi col bg padding">
 <div>
 <div style="display: flex; padding: calc(2 * var(--spacing-unit)) 0;">
 <div style="margin: 0 auto; display: flex; align-items: center;">
 <div style="display: inline-block; vertical-align: middle; border-radius: 100%; height: 4px; width: 4px; background-color: #9446ED; margin-right: 32px;"></div>
 <div style="display: inline-block; vertical-align: middle; border-radius: 100%; height: 8px; width: 8px; background-color: #40C3F7; margin-right: 32px;"></div>
 <div style="display: inline-block; vertical-align: middle; border-radius: 100%; height: 16px; width: 16px; background-color: #8DED2D; margin-right: 32px;"></div>
 <div style="display: inline-block; vertical-align: middle; border-radius: 100%; height: 24px; width: 24px; background-color: #F9703E; margin-right: 32px"></div>
 <div style="display: inline-block; vertical-align: middle; border-radius: 100%; height: 32px; width: 32px; background-color: #F7C948; margin-right: 32px"></div>
 <div style="display: inline-block; vertical-align: middle; border-radius: var(--spacing-unit); height: 32px; width: 2px; background-color: var(--border); margin-right: 32px"></div>
 <div style="display: inline-block; vertical-align: middle; position: relative;">
 <style>
 @-webkit-keyframes pulsate {
 0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
 50% {opacity: 1.0;}
 100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
 }
 </style>
 <div style="border: 2px solid var(--text); -webkit-border-radius: 100%; height: 32px; width: 32px; position: absolute; left: -8px; top: -8px; -webkit-animation: pulsate 1.5s ease-out; -webkit-animation-iteration-count: infinite; opacity: 0.0;"></div>
 <div style="border-radius: 100%; height: 16px; width: 16px; background-color: var(--text);"></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <figcaption>
 Dot Sizing, Colour & Animation Explorations
 <span>
 Hypertrending
 </span>
 </figcaption>
</figure>

### Accessing Venue Information
Until this point, our design sprint had focused on the map and the data points displayed on it. However, without labels or additional context, these visualisations were purely decorative—users could see activity without knowing what each dot represented. To make the data truly useful, we needed a quick and accessible way to surface essential details.

To address this, I began sketching modals that would add value to each visualisation. Each modal was designed to display key information: the venue or event name, location, and, for events, a description and start and end times.

<figure class="img">
 <div class="multi col">
 <div class="multi row">
 <div>
  <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/accessing-venue-information-sketch-one@2x.png' | url }}" 
  width="1252" 
  alt="photo" />
 </div>
 </div>
 <div class="multi row">
 <div>
  <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/accessing-venue-information-wireframe-one@2x.png' | url }}" 
  width="746" 
  alt="photo" />
 </div>
 <div>
  <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/accessing-venue-information-wireframe-two@2x.png' | url }}" 
  width="746" 
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
 Additional Information Modals
 <span>
 Hypertrending
 </span>
 </figcaption>
</figure>

### Crafting a Navigation
One evening on the subway home, I was leaning against the back wall of a carriage, mindlessly browsing the iPhone Settings app, when I happened upon a UI slider.

As I dragged my thumb across the handle, the haptic feedback engine activated, delivering a gentle buzz at each interval—a subtle yet satisfying acknowledgement of every action. The sensation felt purposeful, almost grounding, as I interacted with the interface. There was something unexpectedly calming about it, and as I stood there listening to music, I found myself absentmindedly sliding it back and forth for the remainder of my journey, enjoying the quiet rhythm it created.

The next day, I couldn't stop thinking about that tactile experience. It wasn't just the feedback—it was how it created a sense of connection between me and the interaction, making it feel intuitive and deeply satisfying. I wondered if a similar approach could help cut through the data in Hypertrending. How might this concept translate in that context? I started sketching ideas on a whiteboard, and once I found a direction that resonated, I refined my favourite sketch in my notebook, exploring how it could bring a more tactile sense of navigation to the experience.

<figure class="img">
 <div class="multi col">
 <div class="multi row">
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/crafting-a-nav-screenshot@2x.png' | url }}" 
  width="486" 
  alt="photo" />
 </div>
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/crafting-a-nav-whiteboard@2x.png' | url }}" 
  width="486" 
  alt="photo" />
 </div>
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/crafting-a-nav-sketch@2x.png' | url }}" 
  width="486" 
  alt="photo" />
 </div>
 </div>
 <div class="bg">
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/crafting-a-nav-wireframe@2x.png' | url }}" 
  width="1252" 
  alt="photo" />
 </div>
 </div>
 </div>
 <figcaption>
 Evolution of Slider (screenshot, whiteboard, sketch & wireframe)
 <span>
 Hypertrending
 </span>
 </figcaption>
</figure>

##### 04&mdash;Test
### Testing and Feedback
With most design elements in place, I created a prototype in Figma and tested it with members of the Labs team and other employees. Conducting these sessions face-to-face allowed me to observe users' immediate reactions, non-verbal cues, and overall engagement with the prototype first-hand.

<figure class="img">
 <div class="multi col">
 <div class="multi row">
 <div class="bg padding">
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/prototype-mock@2x.png' | url }}" 
  width="1252" 
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
 Figma Prototype (Internal Testing Purposes)
 <span>
 Hypertrending
 </span>
 </figcaption>
</figure>

Given the project's scale, I could move efficiently through each session, providing clear instructions to guide participants through the prototype. By asking targeted questions, I gained insight into their thought processes and interactions, allowing me to pinpoint usability issues and opportunities for improvement. These findings shaped my approach to refining the prototype, ensuring a smoother and more intuitive experience.

Testing in person provided valuable real-time feedback, helping us better understand how the design resonated with users and address pain points.

<figure class="img">
<div>
<ul class="quotes">
<li>
<span class="persona"></span>
<strong>Real Time</strong>
Users may want more clarity on the freshness of the data displayed in the heatmap. Some may look for indicators distinguishing between newly added and older dots, providing a clearer sense of real-time activity.
</li>
<li>
<span class="persona"></span>
<strong>Alternate View</strong> 
Users may have different preferences for how information is displayed. Some users may prefer to see the density of people, while others may want to see a more traditional list.
</li>
<li>
<span class="persona"></span>
<strong>Privacy</strong>
Users may be concerned about privacy and location data use. They may want more information about how their data is being used and protected.
</li>
<li>
<span class="persona"></span>
<strong>Bounding Box</strong>
Users may want a better understanding of how the data is rendered. They may prefer something that hints at which parts of the map have data versus those that do not.
</li>
</ul>
</div>
<figcaption>
Feedback From Prototyping Research Sessions
<span>
Hypertrending
</span>
</figcaption>
</figure>

### Design Revisions
After reviewing feedback from our internal testers, it became clear that certain areas needed improvement and additional functionality to enhance the user experience further.

| Issue                            | Initial Design | Feedback | Change Implemented |
|----------------------------------|----------------|----------|--------------------|
| **Clarity on Data Accuracy** | The heatmap displayed circular data points to represent activity but lacked a clear indication of data recency. | Users wanted better clarity on the freshness of the heatmap data to ensure its relevance. | A timestamp was added to the map to show when it was last refreshed, along with a time-based fading system where the dots gradually disappeared to keep the map current and uncluttered. |
| **Alternate View: Top 100 List** | The original design focused on maps to display venue information and trends. | Users requested a list-based format as an alternative to maps for easier browsing of venues. | Inspired by the Billboard music charts, a Top 100 list view was introduced that indicated whether venues were trending up or down. |
| **Privacy & Data Transparency** | The original design lacked explicit communication about data privacy and the origin or use of data. | The legal team emphasised the need for clear messaging about data privacy, including the source, use, and the time-limited nature of the experience. | An "About" page was added, explaining where the data originated and how it was being used. It also clarified that the experience was limited to the two-week duration of the South by Southwest (SXSW) festival. |
| **Map Boundaries Limits** | The map displayed data limited to Austin, but users could scroll beyond the supported area without clear boundaries. | Users needed a visual cue to understand where the app's data coverage ended. | A unique visual overlay was added, gradually fading the map to black as users scrolled beyond Austin, providing subtle feedback to reinforce the app's localised scope. |

<figure class="img">
 <div class="multi col bg padding">
 <div class="multi row">
 <div>
  <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/design-revisions-mock-one@2x.png' | url }}" 
  width="746" 
  alt="photo" />
 </div>
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/design-revisions-mock-two@2x.png' | url }}" 
  width="746" 
  alt="photo" />
 </div>
 </div>
 <div class="multi row">
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/design-revisions-mock-three@2x.png' | url }}" 
  width="746" 
  alt="photo" />
 </div>
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/design-revisions-mock-four@2x.png' | url }}" 
  width="746" 
  alt="photo" />
 </div>
 </div>
 </div>
 <figcaption>
 Refreshed Timestamp, Privacy Stance, Map Bounds & List View
 <span>
 Hypertrending
 </span>
 </figcaption>
</figure>

##### 05&mdash;Release
### Defining an Entry Point
Given the short timeline, we also had to consider how to house and market the experience. Asking users to download an entirely new app felt like too much friction, and we couldn't guarantee enough press or marketing to drive meaningful adoption. Instead, we decided to "control what we could control" by embedding the experience directly within City Guide and Swarm. While it would only be available to people in Downtown Austin, we wanted to ensure it didn't interfere with the day-to-day tasks of our flagship apps.

To keep the experience lightweight and unobtrusive, we hid it behind a "shake to unlock" mechanic that could only be activated from the home screen of either app. This approach allowed us to introduce an element of surprise while keeping the feature discoverable for those most likely to engage with it. Dennis Crowley would formally announce the mechanic during his keynote speech.

### One More Thing...
Earlier in this case study, I walked you through the thought process behind the slider mechanic—but I left out a key detail. I vividly remember the first time I encountered Apple's Time Machine<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">A built-in backup feature for macOS that automatically and continuously backs up your Mac. The software allowed users to restore specific files or their entire system to previous states, using a timeline interface to browse through past versions of data</span></span>. It was unlike anything I'd seen before, and to this day, it holds a surprising amount of my attention for a piece of software over fifteen years old.

<figure class="img">
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/back-up-with-time-machine-main.jpg' | url }}" 
  width="1252" 
  alt="photo" />
 </div>
 <figcaption>
 Apple's Time Machine User Interface
 <span>
 Hypertrending
 </span>
 </figcaption>
</figure>

When Foursquare debuted at SXSW in 2009, it signalled a new era for location technology. A decade later, the company returned to showcase how far the technology had come. But I saw an opportunity to celebrate the people, places, and data that had sparked the journey.

From the outset, I prioritised embedding an Easter egg into the app experience, with the slider mechanic at its core. Typically, users would pull the slider to the left to reveal different categories within the app. But for the Easter egg, I wanted them to pull in the opposite direction. As the interval markers disappeared and the haptic engine buzzed with increasing resistance, users were encouraged to keep pulling—until they unlocked a hidden view of Austin's local favourites from SXSW 2009, highlighting the beloved spots that were still open in 2019<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">To support this functionality, all venues for this view were hardcoded</span></span>.

As the user pulled the slider and a new view snapped into place, they were met with a nod to the past—a design crafted to spark nostalgia. Inspired by classics like Nokia's Snake and the vintage digital aesthetics so many grew up with and loved, this view paid tribute to the early days of technology.

<figure class="img">
 <div>
 <img 
  src="{{ '/_/images/work/foursquare/labs/hypertrending/content/design-revisions-mock@2x.png' | url }}" 
  width="1252" 
  alt="photo" />
 </div>
 <figcaption>
 Hypertrending's Approach to Apple's Time Capsule
 <span>
 Hypertrending
 </span>
 </figcaption>
</figure>

Up-to-date data is essential, but old data holds value too. Foursquare, an app that began by helping people discover the world around them, continues to celebrate shared experiences—both old and new. Through this Easter egg, I invited users to explore not just the Austin of 2019 but to reconnect with places, memories, and friendships that have endured. This journey, hopefully, brings them full circle—back to where it all began.

Because at its core, what is Foursquare, if not a social network?