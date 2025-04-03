---
title: Marsbot Audio
product: Foursquare Labs
shortcode: Foursquare / Labs
overview: You walk through the city. When you pass a place with a story, it speaks. Marsbot Audio was a proactive walking assistant that delivered short, contextual audio clips tied to nearby places. Powered by your phone's virtual assistant and triggered only when headphones were in, it offered a seamless, screen-free experience—inviting users to keep their phones in their pockets and stay present in the world around them.
tags: ["casestudy", "fsqlabs"]
banner:
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone1.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone1-1.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone1-2.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone1-3.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone1-4.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone1-5.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone1-6.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone2.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone2-1.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone2-2.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone3.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone3-1.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone3-2.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone3-3.png
    alt: text
  - url: /_/images/work/foursquare/labs/marsbot-audio/banner/phone3-4.png
    alt: text
responsibilities: ["Prototyping", "Sketching", "UI Design", "User Testing", "UX Design"]
team: ["Dennis Crowley", "Anish Kumar", "Matt Schrage", "Max Sklar", "David Weissler"]
platform: iOS
year: 2021
---

<figure>
    <blockquote cite="https://dl.acm.org/doi/10.1145/1806491.1806505">
        <p>When a routine structure that has always been present on your daily walk suddenly becomes an empty lot, your definition of space and flow changes-there is a pause. The surrounding environment takes a new form; you may see the surrounding structures for the first time. Like a pause in discourse, a pause in the urban landscape lends meaning to its surroundings, creating an opportunity for new value to emerge.</p>
    </blockquote>
    <figcaption>Liz Danzico, <cite>Adding By Leaving Out: The Power Of The Pause.</cite></figcaption>
</figure>

##### 01&mdash;Discover
### Seeing Without Screens
At the heart of all Foursquare consumer projects is the same ambition: to encourage people to get out and explore the world around them. For over a decade, we helped people "live like a local" by surfacing bite-sized recommendations at places to help them feel more confident in unfamiliar surroundings. But until now, our products always asked users to look down—to tap, scroll, or search. Everything came through the screen.

As that content grew, it was easy to imagine layering more structure on top: curated routes, connected stops, and self-guided tours. If you asked someone what a tour is, they'd likely describe it as "a predetermined journey filled with content intended to keep you occupied." But that never quite sat right with us. What if discovery didn't need to follow a route? What if there was no sequence—no beginning, middle, or end—just a quiet companion that surfaced stories based on wherever you happened to walk?

With Marsbot Audio, we wanted to try something different. Could we create an experience where people could benefit from their phones without needing to take them out?

##### 02&mdash;Define
### Rewriting the Rulebook
After a decade of building tools to help people navigate the world, this new venture asked us to imagine what discovery might sound like instead. To guide our thinking, the Labs team gathered around a shared set of principles that pushed us to explore how software could step back instead of getting in the way:

- <strong>Apps You Don't Have to Use</strong>: We believe the future of software lies in apps that understand your context and surroundings, nudging you when something interesting or important is within your periphery instead of bombarding you with countless notifications or providing fake dopamine to keep you doomscrolling.
- <strong>Proactive Virtual Assistants</strong>: We always think of Siri, Alexa and Google Assistant as the genies that live inside the magic lamps (our phones). The problem is that the genie doesn't come out unless you rub the magic lamp (activate it by pressing a button or saying a keyword), but what would happen if the genie was proactive?
- <strong>Audio as Poor Man's Augmented Reality</strong>: If you only look at the AR opportunity as "vision", the whole space can sometimes feel like it's waiting for a breakthrough in hardware. We decided to build for the "lowest common denominator" piece of AR hardware that's out in the wild today: headphones.
- <strong>Apps for AirPods</strong>: While we have apps for our phones, watches, TVs and cars, we have yet to see apps explicitly designed for AirPods. We asked ourselves, "What value would an app have to provide to convince someone to leave one AirPod in all day, even if they weren't actively listening to anything?"
- <strong>Software That Makes Cities Easier to Use</strong>: This was Foursquare's original mission when the company started over a decade ago. We dreamed big about maps that would be personalised, technology that would facilitate serendipity and software that would encourage and reward you for exploration.

### The Competition
As we were delving into a new product area for the company, we recognised the importance of researching existing solutions in the market. By analysing newer and established startups, we aimed to identify potential gaps and create a more compelling value proposition for our product.

I began by venturing to the app stores to gain an understanding of the needs and wants of our target audience, as well as our soon-to-be competitor's strengths and weaknesses<span class="aside-anchor" aria-hidden></span><span class="aside" role=" complementary"><span class="aside__content">Reviewing a wide range of feedback offered a swift grasp of different aspects</span></span>. In doing so, we could analyse product features and user experience whilst identifying the latest trends.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div class="padding bg">
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/sticky-notes@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Competitor Analysis
      <span>
 Marsbot Audio
      </span>
  </figcaption>
</figure>

Early in the process, it became clear that several apps shared recurring user pain points. We weeded through the reviews, listing the pros and cons, discussing what worked and what didn't, and pinpointing opportunities for differentiation and innovation, which were mapped on an effort/impact matrix.

<div style="overflow-x:auto;">

| Discussion Point                                           | Effort | Impact |
| ---------------------------------------------------------- | - | - |
| High quality audio narration                               | High | High |
| Onboarding process & acquiring permissions                 | High | High |
| Personalised recs based on user prefs & interests          | High | High |
| Create a map level interface                               | High | High |
| Large Collection of Guides available in multiple languages | Low | High |
| Insider tips and recs for a wide range of destinations     | Low | High |
| Social sharing functionality                               | Low | Low |

</div>

##### 03&mdash;Ideate
### Shifting Your Perspective
From the beginning, we knew that most interactions with the app would happen aurally. Users would be listening—not tapping, typing, or swiping—but even in an audio-first experience, some visual interface was necessary to request permissions, handle setup, and give users a sense of where they stood.

The challenge wasn't building an interface but knowing when to stop. Most discovery apps lean heavily on visual cues: maps, search bars, and lists. They frame the world and invite users to dive in, explore, and manipulate it<!--, but we didn't want to simulate the world on a screen-->. We weren't trying to get people to delve deep into an app; we wanted them to put their phones in their pockets, walk, listen, and notice the world around them. The interface had to nudge them in a direction, just enough information to guide them, never enough to hold their attention fully.

For days, I looked for inspiration: books, design references, anything. Nothing stuck. Then, one evening, I picked up my guitar and sat with it in my lap. Looking down, I noticed how the strings and fret markers overlapped and lined up, resembling a miniature city grid. The way the fret markers seemed to taper into a distance as they reached the body reminded me of a vanishing point on the horizon. I grabbed my sketchbook, drew three square boxes, and started to explore how I might move from a traditional aerial map view to something more in line with what I'd just seen<span class="aside-anchor" aria-hidden></span><span class="aside" role=" complementary"><span class="aside__content">Living in New York, I naturally gravitated toward something that echoed the city's grid: cross streets, avenues, blocks. But not everyone navigates a grid-based city. So the markers evolved, becoming less about specific intersections and more about pacing, a set distance marker subtly suggesting proximity</span></span>.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div class="bg">
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/new-perspective-screenshot@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/new-perspective-sketch@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/new-perspective-wireframe@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Vanishing Point Sketches & Wireframe
      <span>
 Marsbot Audio
      </span>
  </figcaption>
</figure>

By narrowing the field of vision and resisting the urge to show everything at once, I hoped to steer the design back toward one of our earliest principles: "Apps You Don't Have to Use", as it was offering enough context to convey the idea but not enough to distract them.

### Tribute in Light
With a baseline aesthetic in place, the next challenge was figuring out how to layer content on top. In a typical app, users initiate discovery by entering a search term, landing on a venue page or point of interest, and scrolling through a series of results. They're actively hunting for something, but we weren't building a product to aid search; we weren't necessarily looking to make a typical landing page. So, how could we alert users to content without requiring them to ask for it?

Fast forward a few days later, when I noticed the two massive columns of light emanating from the ground of Downtown Manhattan<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">The Tribute in Light is an artwork commemorating the September 11 attacks. It consists of 88 vertical searchlights arranged in two columns of light to represent the Twin Towers. It stands six blocks south of the World Trade Center on top of the Battery Parking Garage in New York City (Source: Wikipedia).</span></span>. These lights mean different things to different people, but I knew one thing to be true: it's hard not to stop when you see something so powerful. I couldn't help but wonder if I could use this as the basis for the issue I had been struggling with. When I arrived at the office the next day, I started applying cylindrical-like shapes to my grid.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/tribute-in-light-photo.jpg' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/tribute-in-light-sketch@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/tribute-in-light-wireframe-two@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Sketches & wireframes for our "Tribute in Light" concept
      <span>
 Marsbot Audio
      </span>
  </figcaption>
</figure>

### Step Into the Light
The horizon supplied a constraint, the dots offered scale, and the light beams signalled presence—suggesting that something awaited ahead. However, the real magic came from what would happen next.

As you moved through the world, the landscape responded. The horizon stayed fixed, but the beams shifted around you. When you unknowingly stepped into one, the app triggered an audio clip in your headphones while a text version also appeared on screen—revealed only when you were entirely inside the light. Each beam represented a place. But more than that, it represented a perspective—something you couldn't tap on or preview. You had to arrive. You had to be there.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/step-into-the-light-sketch-one@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/step-into-the-light-wire-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/step-into-the-light-wire-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/step-into-the-light-wire-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Step Into the Light Sketch & Wireframe
      <span>
 Marsbot Audio
      </span>
  </figcaption>
</figure>

Exploration isn't just about what's ahead; it's also about where you've been. I wanted users to feel progress—not through badges or checklists—but through subtle environmental change. Inspired partly by the app Fog of World, I explored using colour to distinguish between what had and hadn't been discovered: one colour for places you'd already experienced (blue) and another for those still waiting to be uncovered (orange).

<figure class="img">
<div class="multi col">
  <div class="mutli row bg padding">
    <div class="container" style="display: flex; height: 80px; border-radius: calc(0.25* var(--spacing-unit)); overflow: hidden;">
      <div style="background: #1D1D1D; display: flex; align-items: center; justify-content: center; width: 40%;"></div>
      <div style="background: #FFFFFF; display: flex; align-items: center; justify-content: center; width: 20%;"></div>
      <div style="background: #00EBFC; display: flex; align-items: center; justify-content: center; width: 20%;"></div>
      <div style="background: #FFA500; display: flex; align-items: center; justify-content: center; width: 20%;"></div>
    </div>
    <div class="container" style="display: flex; margin-top: 8px; font-size: var(--font-size-one); font-weight: 600; color: var(--text-emph);">
      <div style="display: flex; align-items: center; justify-content: center; width: 40%;">Background</div>
      <div style="display: flex; align-items: center; justify-content: center; width: 20%;">Markers</div>
      <div style="display: flex; align-items: center; justify-content: center; width: 20%;">Beam</div>
      <div style="display: flex; align-items: center; justify-content: center; width: 20%;">Beam</div>
    </div>
  </div>
</div>
<figcaption>
Colour Palette Explorations
<span>
Marsbot Audio
</span>
</figcaption>
</figure>

### A Sense of Direction
Occasionally, we witnessed users open the app mid-walk—not often, but enough. Sometimes, they'd notice they were close to something and wish to take a detour to experience it. However, when that happened, they needed a way to orient themselves—just enough to understand which direction to move in.

A traditional compass felt too heavy-handed<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Initially, I explored placing the compass at the top of the UI, in an attempt to convey direction but we would run into issues with it overlapping our beams of light. In the second sketch, the traditional compass took up too much space, leaving the bottom of the UI feeling cluttered. The last sketch provided a more stripped-back aesthetic while offering just enough context.</span></span>. Circular, dominant, and visually loud, it would have interfered with what we'd already established: the grid, the pacing, the beams. So, we built something different.

<figure class="img">
  <div class="multi col">
    <div class="mutli row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/a-sense-of-direction-sketch-one@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/a-sense-of-direction-wire-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/a-sense-of-direction-wire-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/a-sense-of-direction-wire-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
Directional Aid Explorations
      <span>
 Marsbot Audio
      </span>
  </figcaption>
</figure>

A minimal, horizontal strip that sat at the bottom of the screen. As you rotated the phone, it shifted with you—subtle, responsive, and easy to overlook. Its behaviour borrowed loosely from an old radio tuner: less about precision, more about feel. It wasn't designed to pull you in. To help you keep moving. A small reassurance that you were still facing the right way.

### Make the Invisible Visible
Throughout the design of this project, I was chasing the idea of a design you ultimately don't need but offers delight when you do, and I wanted to continue that through via the logo and wordmark of the product. At some point during my sketching process, I had the idea of melding the M and A together so that you would only notice the other letterform when you were looking for it. Like the product itself, the logo wasn't meant to shout. It rewarded attention—but didn't demand it.

<figure class="img">
  <div class="bg padding multi col">
    <div>
      <img 
      src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/wordmark-sketch@2x.png' | url }}" 
      width="1252" 
      alt="photo" />
    </div>
    <div>
      <img 
      src="{{ '/_/images/work/foursquare/labs/marsbot-audio/content/wordmark-lockup@2x.png' | url }}" 
      width="1252" 
      alt="photo" />
    </div>
  </div>
  <figcaption>
 Brand Lock-up
      <span>
 Marsbot Audio
      </span>
  </figcaption>
</figure>

##### 04&mdash;Test
### Testing and Feedback
Unlike previous Foursquare features, which often went through rounds of external testing with trusted users or cohorts, Marsbot Audio remained internal for most of its lifecycle. Built within a small Foursquare Labs team, the app was quietly tested in-house by the designers, engineers and curious colleagues who opted in when we shared early builds.

We didn't run formal user testing or release open betas. This phase was focused on dogfooding: walking with it, tweaking it, and exploring how the experience felt in real space. A few early glimpses of the app were shared in talks—like one Dennis Crowley gave at the Interactive Telecommunications Program (ITP) at NYU—but otherwise, this remained a quiet, internal project.

##### 05&mdash;Release
### Built to Be Picked Up Again
Unfortunately, Marsbot Audio was never publicly released. Before we reached that stage, a broader company restructuring shifted priorities across teams, including Foursquare Labs. Resources were reallocated, and the project and several others were placed on hold.

This wasn't a reflection of the product's value but a matter of timing. Many of us who worked on it remain close to the concept, and should the right moment come, the foundation is there to bring it to life.