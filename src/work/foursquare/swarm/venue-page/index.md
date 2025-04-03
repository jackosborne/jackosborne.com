---
title: Venue Page
product: Foursquare Swarm
shortcode: Foursquare / Swarm
overview: When a friend checks into a venue, it sparks curiosity to explore that place further. Yet, with City Guide now housing all the information about a place, users communicated that the experience often frustrated them. Could Swarm prioritise key elements that align with its core purpose while still offering a venue page without overlapping the content of its sister app?
tags: ["casestudy", "fsqswarm"]
banner:
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone1-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone3.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone3-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone3-2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone3-3.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone4.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone4-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone5.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone5-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone5-2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone5-3.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone6.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone6-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone7.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone7-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone7-2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/venue-page/banner/phone7-3.png
    alt: text
responsibilities: ["Prototyping", "Sketching", "UI Design", "User Testing", "UX Design"]
team: ["Andrew Chao", "Tim Deng", "Avneesh Kohli", "Hannah Nicdao", "Christy Smith", "David Weissler", "Jay Zhou"]
platform: Android & iOS
year: 2018
---

In 2014, splitting the original Foursquare app into City Guide and Swarm allowed the company to separate functionality between personalised local recommendations and social check-ins. While this provided a more focused experience in each app, the product team received recurring feedback after the split: users were frustrated with the transition between the two apps and wanted a more efficient way to gather venue details within Swarm before navigating to City Guide.

##### 01&mdash;Discover
### Understanding the Problem
Before we dive in, it's important to note that Swarm did have a venue page, of sorts, at launch. As shown below, users could access specific details about a venue, including its address, the total and unique number of visitors, and a row showing if any friends had previously checked in. Additionally, information about the current Mayor<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">The user with the most check-ins at a venue over 30 days </span></span> was displayed at the bottom of the modal, along with a City Guide button that allowed users to browse a more comprehensive listing.

<figure class="img">
  <div class="bg padding multi row">
    <div>
      <img 
      src="{{ '/_/images/work/foursquare/swarm/saved-places/content/understanding-the-problem-screenshot-one@2x.png' | url }}" 
      width="486" 
      alt="photo" />
    </div>
    <div>
      <img 
      src="{{ '/_/images/work/foursquare/swarm/saved-places/content/understanding-the-problem-screenshot-two@2x.png' | url }}" 
      width="486" 
      alt="photo" />
    </div>
    <div>
      <img 
      src="{{ '/_/images/work/foursquare/swarm/saved-places/content/understanding-the-problem-screenshot-three@2x.png' | url }}" 
      width="486" 
      alt="photo" />
    </div>
  </div>
  <figcaption>
 Swarm Venue Card Flow 2014-2017
      <span>
 Swarm Venue Page
      </span>
  </figcaption>
</figure>

Unfortunately, many users were unaware of the additional information available in Swarm, as the venue name on the check-in detail (second screen) didn't appear to be interactive, leading to missed engagement opportunities. When users did access the page, they expressed dissatisfaction, feeling that the information provided was inadequate and didn't give them enough to form a clear opinion about the venue.

##### 02&mdash;Define
### User Research and Insights
Whether you were a seasoned Foursquare veteran or a recent sign-up, the call for more information echoed loudly through app store reviews. Users exploring competitor apps highlighted a clear opportunity: Swarm needed to offer more venue details to remain relevant and competitive. This feedback challenged us to reconsider a foundational question: could Swarm evolve while still honouring the purpose behind the app split?

<figure class="img">
<div>
<ul class="quotes">
<li>
<strong>★★☆☆☆<br />Love checking in on Swarm, but the lack of venue details is frustrating</strong>
Having to hop over to City Guide for basic information disrupts the experience. A standalone venue page within Swarm would be a game-changer!
</li>
<li>
<strong>★☆☆☆☆<br />App transition from Swarm to City Guide to get more context on a venue?</strong>
It's a usability nightmare. I would appreciate a revamp that allows me to gather all the info I need without the constant app shuffle.
</li>
<li>
<strong>★★☆☆☆<br />Navigating between Swarm and City Guide feels cumbersome</strong>
I wish to explore more details about a venue within Swarm before being redirected. It interrupts the flow and makes the experience less seamless. Hoping for improvements!
</li>
<li>
<strong>★★☆☆☆<br />Enjoy using Swarm, but the transition to City Guide for venue details is a hassle</strong>
It would be great if Swarm provided more information upfront so I could decide without bouncing between apps. Simplify, please!
</li>
</ul>
</div>
<figcaption>
 App Store Feedback 1.0–4.0
      <span>
 Swarm Venue Page
      </span>
</figcaption>
</figure>

However, this wasn't simply about adding more information but rethinking how venue exploration could align with Swarm's social DNA while complementing City Guide's functionality. We resolved to bridge the gap between the two apps, ensuring Swarm could provide immediate, actionable insights about venues without compromising its focus on social discovery.

To guide this initiative, I facilitated a series of workshops to address a key challenge: how could we add meaningful venue details to Swarm without duplicating City Guide's functionality? By aligning stakeholders on this goal, we crafted user stories that focused on simplifying the venue discovery process while reinforcing Swarm's social-first identity<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Seeing the context of a check-in in the Swarm social feed and getting a sense of what my friend(s) or other Foursquare users thought about the venue via the rating, tips and photos uploaded to that check-in/venue</span></span>. Through competitor analysis, I identified design patterns that balanced rich information with social interactivity. These findings helped shape early creative explorations, where mood boards and content blocks helped visualise how Swarm could uniquely present venue details without compromising its playful, social tone.

##### 03&mdash;Ideate
### Identifying an Entry Point
We explored several approaches to presenting venue information, each reflecting different priorities. One idea centred around an interactive bottom sheet that revealed more content as users pulled it up, offering a modern, more engaging experience. Another approach involved a static area, which displayed all relevant details upfront for simplicity and clarity. A third offered a simple modular card that would provide an entry point into a new view to reduce cognitive load on an already busy check-in detail.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-sketch-one@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-sketch-two@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-wireframe-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-wireframe-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-wireframe-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
        <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-mock-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-mock-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-mock-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Venue Page Explorations
      <span>
 Swarm Venue Page
      </span>
  </figcaption>
</figure>

Each concept raised interesting questions about Swarm's purpose and how venue details should integrate with its core social features. While dynamic elements like the bottom sheet introduced new paradigms, they did so at the risk of Swarm's social focus with features like stats<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">A feature that provided users with statistics highlighting their relationship with the venue</span></span> and comments from friends potentially being obscured or deprioritised. Conversely, the static area and card designs were straightforward but less engaging, potentially missing opportunities to enhance interaction.

Through iteration and testing, we found that the mini venue card struck the ideal balance between engagement and simplicity. It provided a concise snapshot of key information without detracting from Swarm's social features, seamlessly aligning with the app's flow and identity.

<figure class="img">
    <div class="bg padding">
      <img 
      src="{{ '/_/images/work/foursquare/swarm/venue-page/content/entry-point-card-mock@2x.png' | url }}" 
      width="1252" 
      alt="photo" />
    </div>
    <figcaption>
 Mini Venue Card States (Haven't Visited, Visited, Visited & Rated)
        <span>
 Swarm Venue Page
        </span>
    </figcaption>
</figure>

Designed to support Swarm's core purpose as a lifelog, the mini venue card supported two distinct modes: "haven't visited" and "visited." For venues a user hadn't visited, the card would emphasise the actions of their friends, and for venues already visited, the card would transform into a more personalised experience, inviting users to add a rating and leave a tip.

This dual-mode approach ensured that venue interactions felt dynamic and meaningful, whether users explored new places or reflected on their experiences.

### Content as a Framework
Recognising the growing demand for richer venue information, we decided it was imperative to move beyond the limitations of our existing modal-based venue page and transition to a more expansive view. To maintain focus, we streamlined the venue details to highlight social features like tips, ratings and saves. For those seeking more in-depth information, we would continue to lean on City Guide, which enabled users to explore comprehensive content without disrupting Swarm's social flow.

<div style="overflow-x:auto;">

| Feature | 5.0 | 6.0 |
| -------------------------------------------------------------------------------------- | - | - |
| Basic Info (Name, Location & Meta Information) | <span class="icon-check-yes">Yes</span> | <span class="icon-check-yes">Yes</span> |
| Mayor, Facepiles & Stats Block (Unqiue/Total Visitors & Here Now) | <span class="icon-check-yes">Yes</span> | <span class="icon-check-yes">Yes</span> |
| City Guide Escape Hatch | <span class="icon-check-yes">Yes</span> | <span class="icon-check-yes">Yes</span> |
| User Interactions (Save, Rate, Write Tip & Share) | <span class="icon-check-no">No</span> | <span class="icon-check-yes">Yes</span> |
| Friends Generated Content (Photos & Tips) | <span class="icon-check-no">No</span> | <span class="icon-check-yes">Yes</span> |

</div>

At the heart of the redesign was the goal of immediately immersing users in a sense of community, and we opted to do this through user-generated photos. However, we also had to account for venues where photos might be unavailable or hidden for privacy reasons—such as gyms, hospitals, or law offices<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Foursquare has consistently prioritised safeguarding user privacy, with a firm commitment to preventing the misuse of location data. [Learn more about our approach to location data privacy][1]</span></span>. To address this, we adapted City Guide's approach, using blurred placeholder images to preserve the lively, colourful aesthetic while respecting user privacy.

<figure class="img">
  <div class="multi col">
    <div class="multi row bg padding">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/photo-carousel-empty-states@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Photo Carousel Empty States
      <span>
 Swarm Venue Page
      </span>
  </figcaption>
</figure>

Directly beneath the photos, I explored adding interactive buttons for saving, rating, and leaving tips—actions that naturally aligned with Swarm's social log role by capturing personal and community-driven opinions about venues.

- **Save**: With us concurrently developing a [saved/visited feature][2], this felt essential. Saving a venue represents user intent and bridges City Guide, where saved places could be categorised further.
- **Rate**: Ratings, likes and saves represent a meaningful form of social commentary as they help users quickly gauge whether friends or like-minded individuals enjoyed a venue.
**Leave a Tip**: This is the most detailed form of social commentary, allowing users to share personal insights and recommendations. This action was essential to fostering community engagement and enhancing the page's value.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/content-as-a-framework-sketch@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/content-as-a-framework-wireframe-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/content-as-a-framework-wireframe-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/content-as-a-framework-wireframe-three@2x.png' | url }}" 
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
 Action Bar
      <span>
 Swarm Venue Page
      </span>
  </figcaption>
</figure>

These actions reflected our goal to narrow the gap between Swarm and City Guide while staying true to Swarm's playful and social-first focus. By prioritising meaningful interactions, we aimed to create a page that felt dynamic and true to users' experiences.

Beneath the action bar, I introduced a face pile—a powerful, wordless signal highlighting friends who had checked in at the venue, enhancing Swarm's social capabilities. The face pile could also be a visual separator before transitioning into our next text-heavy block. If no friends had checked in, the face pile wouldn't render, ensuring a clean, streamlined layout.

### Fast Facts, Faster Decisions
The venue information section was designed to highlight the most critical details users need—operating hours, contact information, a website, a map, and a complete address—all in one place. We aimed to present enough information to support decision-making while avoiding unnecessary complexity. Insights from competitor analysis revealed that showcasing key venue details earlier in the user journey significantly improved usability, reinforcing our decision to prioritise this content upfront.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/showcasing-social-content-sketch-one@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/venue-wireframe-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/venue-wireframe-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/venue-wireframe-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Venue Information
      <span>
 Swarm Venue Page
      </span>
  </figcaption>
</figure>

I iterated through multiple sketches and mockups to streamline the layout, exploring ways to combine the map and venue details into a cohesive, user-friendly section. Guided by user feedback, we devised a design that balanced simplicity and functionality. The map became a dynamic element, allowing users to quickly pan, pinch, and zoom to explore their surroundings. Tapping the address block triggered an action sheet with quick access to navigation apps like Apple Maps, Google Maps, and Citymapper, making it effortless to get directions.

This concise, interactive approach aligned with Swarm's focus on spontaneous, social decision-making, contrasting with City Guide's more detailed and comprehensive venue pages.

### Showcasing Social Content
As with most social networks, actual value emerges from cultivating a robust friend graph, and this section celebrates those connections by featuring tips from both you and your friends. Each tip includes the user's avatar, name, venue rating, and a short, tweet-length passage of text. Users can upvote a tip to show their agreement or appreciation, and the most recent upvote is displayed to highlight ongoing engagement.

Above the tips, a set of pills highlights key themes or popular topics related to the venue. These pills provide a quick snapshot of what people are discussing, offering users an easy way to grasp the venue's most talked-about aspects.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/showcasing-social-content-sketch-two@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/venue-wireframe-four@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/venue-wireframe-five@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/venue-wireframe-six@2x.png' | url }}" 
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
 Tastes & Tips Block
      <span>
 Swarm Venue Page
      </span>
  </figcaption>
</figure>

##### 04&mdash;Test
### Testing and Feedback
From the beginning, I prioritised low-to-medium fidelity designs, opting for black-and-white layouts that allowed for rapid iterations and unbiased feedback during internal reviews. This approach kept the focus on functionality and usability rather than aesthetics.

To gather diverse perspectives, we established a steady feedback loop, sharing weekly builds with employees and fortnightly updates with Superusers<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Superusers (SUs) are the driving force behind the Foursquare community, tirelessly working to ensure the places database remains accurate and reliable</span></span>. Superusers were given a dedicated Slack channel to share images, screen recordings, and detailed feedback. This collaborative space not only uncovered usability challenges early but also generated innovative ideas that influenced the direction of the design.

Combining these insights with internal feedback gave us a comprehensive understanding of user needs. This iterative process ensured the design was continuously refined, aligning with user expectations and delivering an intuitive and impactful feature at launch.

### Design Revisions

<div style="overflow-x:auto;">

| Issue             | Initial Design | Feedback | Change Implemented |
|-------------------|----------------|----------|--------------------|
| **See More Tips** | Initially displaying up to three tips: your tip (if available) and two others, or three tips from others if you hadn't. Tips were ordered by recency to keep the content fresh and relevant. | Users desired to view more tips beyond the initial three. | A "see more" option was added at the bottom of the tips section, allowing users to access a dedicated view with additional tips. |
| **Stats Block** | N/A | Users requested additional venue-specific metrics, including total and unique visitor counts, the creator's name, and the current Mayor. | Venue-specific metrics were added, including total and unique visitor counts, the creator's name, and the current Mayor, reinforcing Swarm's competitive and community-driven spirit. Additionally, an option to transition to City Guide was introduced to provide deeper venue insights. |
| **Edit Venues** | Venue information relied on Superusers for updates, but accessing the add/edit flow required navigating through multiple steps. | Superusers requested quicker access to the add/edit flow to make real-time updates to venue data. | A direct shortcut was added to the venue page, providing quicker access to the editing interface. This streamlined the workflow for Superusers, enabling them to maintain accurate venue data more efficiently and enhancing the overall user experience. |
| **Disclosure Arrow on Venue Card** | Initially, the venue rating was displayed as a more prominent signal to encourage further exploration. | Feedback suggested that while this was useful, some people still missed that the cell was clickable. | Opted to switch out the rating for a disclosure arrow. |

</div>

<figure class="img">
  <div class="multi col bg padding">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/design-revisions-mock-one@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/design-revisions-mock-two@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/design-revisions-mock-three@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/venue-page/content/design-revisions-mock-four@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 See More Tips & Status Block Design Revisions
      <span>
 Swarm Venue Page
      </span>
  </figcaption>
</figure>

##### 05&mdash;Release
### Room for Improvement
Foursquare's belief that 'the places you go are the best indicator of who you are' highlights the power of location in shaping connections and inspiring exploration. Seeing a friend check in at an unfamiliar venue often sparks curiosity and encourages discovery.

With the reintroduction of the venue page, we've streamlined access to key information, including photos, tips, and ratings from friends, making it easier than ever to decide whether to visit a place. While this enhancement simplifies decision-making, there remains an opportunity to improve the Swarm experience by introducing new features that enhance venue discovery—a core action for our users.

[1]: https://location.foursquare.com/legal/privacy-center/
[2]: /work/foursquare/swarm/saved-places/