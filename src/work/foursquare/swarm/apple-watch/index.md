---
title: Apple Watch
product: Foursquare Swarm
shortcode: Foursquare / Swarm
overview: A streamlined version of Swarm for those who live constantly on the go. By focusing on essential actions, the Apple Watch app offers quicker check‐ins while keeping more detailed features on the mobile app for when users need greater control.
tags: ["casestudy", "fsqswarm"]
banner:
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch2-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch2-2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch2-3.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch3.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch3-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch4.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch4-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch5.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch5-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch6.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch6-1.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch6-2.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch7.png
    alt: text
  - url: /_/images/work/foursquare/swarm/apple-watch/banner/watch7-1.png
    alt: text
responsibilities: ["Prototyping", "Sketching", "UI Design", "User Testing", "UX Design"]
team: ["Avneesh Kohli", "David Weissler"]
platform: watchOS
year: 2017
---

Several years after introducing our app for the original Apple Watch, we found that, while users were generally satisfied, installation rates remained low, and the app was underutilised. With the upcoming release of watchOS 4, we saw an opportunity not only for a complete rewrite but also to refresh the design and add features to align it more closely with our recently launched 5.0 mobile app.

##### 01&mdash;Discover
### Turn Back the Clocks
When Swarm for watchOS 1 was first developed, the team navigated uncharted territory. With the unique constraints of a small screen and a focus on quick interactions, our goal was to capture the core Swarm experience in a streamlined, wearable format. We had no clear sense of how other watch apps would look or how users would engage with them. Over time, we discovered that interactions on wearables were brief—typically lasting only a few seconds—and that users favoured straightforward, concise actions.

As shown below, the app launched with two primary views: your and your friends' views. Your view featured a prominent orange check-in button while swiping to the left, which displayed a list of places where your friends had checked in, helping you stay connected to their activities.

<figure class="img">
  <div class="bg padding">
    <div style="max-width: 486px; margin: 0 auto;">
      <img 
      src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/old-design@2x.png' | url }}" 
      width="1252" 
      alt="photo" />
    </div>
  </div>
  <figcaption>
 Swarm watchOS 1.0
      <span>
 Swarm Apple Watch
      </span>
  </figcaption>
</figure>

##### 02&mdash;Define
### User Research and Insights
With low installation rates and modest usage of the watch app, feedback from app stores and mobile surveys was limited. Knowing a traditional research approach might not yield enough insights, we engaged our dedicated community of super users—those most familiar with the app's functionality. Their regular interactions and feedback provided valuable guidance, helping us identify pain points and new feature requests that resonated with our core audience.

Armed with these insights, our primary goal for the next iteration became clear: to increase overall usage. To achieve this, we focused on two supporting objectives. First, we aimed to improve the app's performance through architectural and visual refinements. Second, we sought to enhance communication to ensure mobile users were well-informed about the watch app and its upcoming enhancements.

In addition, we prioritised several user-requested features to enrich the in-app experience:

<figure class="img">
<div>
<ul class="quotes">
<li>
<span class="persona"></span>
<strong>Displaying more nearby venues</strong>
Only one venue appeared on the screen, and it wasn't obvious that users could scroll to additional locations. This led to confusion, as users often thought they were being placed at the wrong location and would choose not to check-in.
</li>
<li>
<span class="persona"></span>
<strong>Introducing a detailed check-in view</strong>
Unlike the mobile app, the watch app lacked any check‐in detail view. Mobile users enjoyed accessing their check‐in statistics, and many requested a similar feature on the watch app.
</li>
<li>
<span class="persona"></span>
<strong>Stickers</strong>
To bring feature parity across platforms, users requested that stickers be available on the watch app, allowing them to personalise their check-ins directly from their wrists.
</li>
</ul>
</div>
<figcaption>
 User-requested Features
      <span>
 Swarm Apple Watch
      </span>
</figcaption>
</figure>

##### 03&mdash;Ideate
### Increasing Installation Awareness
One of the significant challenges our watch app faced was low awareness among iOS users who owned an Apple Watch; many were surprised to learn we even offered a companion app<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Unfortunately the watch app hadn't received much publicity on its initial launch as we had worked under the assumption that it would have been a lot more noticeable from within app store pages</span></span>. Discovering its existence required users to search the App Store for compatibility or dig into the Apple Watch settings on their iPhones to find a list of supported apps.

Our options were limited, but one area for improvement stood out: promoting the watch app directly within our iOS app. By detecting when an Apple Watch was paired with a user's phone, we could take proactive steps to increase visibility. This included placing messages in-app to highlight the watch app's availability and benefits and sending push notifications to inform users of updates, encourage them to learn more, and guide them to the setup screen.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/increasing-installation-awareness-sketch@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div class="bg padding">
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/increasing-installation-awareness-wireframe@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 iOS notification > Swarm PCI card > Swarm Settings
      <span>
 Swarm Apple Watch
      </span>
  </figcaption>
</figure>

As shown above, the setup process had three main goals: raising awareness of the watch app, enabling users to control location permissions, and activating other notifications.

### Uncomplicated Complications
Once the watch app was installed, users had to find it on their watch face. Our observations indicated that most users stuck with the default styling of their home screen, which placed newly installed apps on the outer rim of the circular interface, making them hard to find.

With the release of watchOS 4, Apple introduced "complications" <span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Refer to <a href="https://developer.apple.com/design/human-interface-guidelines/complications"> Apple's Human Interface Guidelines (HIG)</a> for detailed guidance on designing practical Complications</span></span> which offered the ability to display timely, relevant information on the watch face, where people can view it each time they raise their wrist.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/uncomplicated-complications-wireframe-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/uncomplicated-complications-wireframe-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/uncomplicated-complications-wireframe-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Complication Variants
      <span>
 Swarm Apple Watch
      </span>
  </figcaption>
</figure>

After reviewing the documentation, we decided to trial three of the five available complications: Modular Small, Circular Small, and utilitarian large. This selection provided the best variety across different screen types.

### Homescreen Redesign
In our previous version (1.0), we identified several challenges. The check-in button's size dominated the screen, crowding out other elements and causing confusion. The venue picker allowed only one visible option, leading to user uncertainty about scrolling for more choices. Though initially included, the social feed proved less valuable on the watch platform.

In Homescreen 2.0, we made strategic changes to address these issues. By reducing the size of the check-in button, we could create a cleaner interface, which would not only alleviate screen clutter but also allow us to display multiple venues within the picker, reducing user confusion.

To further enhance usability, we implemented visual cues such as prominently highlighting the selected venue. Users can now use the digital crown to scroll through venue options, each turn accompanied by tactile feedback, improving the overall user experience and making interactions more intuitive.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <img 
      src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/venue-picker-redesign-sketch@2x.png' | url }}" 
      width="1252" 
      alt="photo" />
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/venue-picker-redesign-wireframe-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/venue-picker-redesign-wireframe-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/venue-picker-redesign-wireframe-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Venue Selector
      <span>
 Swarm Apple Watch
      </span>
  </figcaption>
</figure>

Once the user has scrolled through the list and located their venue, stickers can still be applied, but these are now accessed via the force touch mechanic. By pressing down on the watch screen, users are presented with two options: "Refresh" to repopulate the venue list if needed, and "Add Sticker". Selecting "Add Sticker" leads the user to a gallery where they can choose a sticker, returning them to the venue picker with the check-in button resized to accommodate the rendering of their selected sticker.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/sticker-flow-redesign-sketch@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/sticker-flow-redesign-wireframe-one@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/sticker-flow-redesign-wireframe-two@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/sticker-flow-redesign-wireframe-three@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/sticker-flow-redesign-wireframe-four@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Sticker Picker
      <span>
 Swarm Apple Watch
      </span>
  </figcaption>
</figure>

### Check-in Detail
The check‐in details on Swarm often bring moments of joy, offering insights like whether it's your first visit to a venue, your history with similar places, or exploring a new neighbourhood. Features like stickers and friend-created venues add to this enriching experience. However, as mentioned earlier, displaying such extensive data on a watch screen poses challenges for user interaction. Despite this limitation, we aimed to enrich the experience thoughtfully.

Our approach focused on immediate access to concise check-in details right after each check-in. Users could quickly scroll through essential information, and upon completion, they could return to the venue picker by tapping the "Done" button in the top left-hand corner. Users could seamlessly transition to the mobile app or website to dive deeper into their check-in history.

This strategy enabled us to balance providing insightful details while ensuring a streamlined user experience on the Apple Watch.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/checkin-flow-redesign-sketch@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/checkin-flow-redesign-wireframe-one@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/checkin-flow-redesign-wireframe-two@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/venue-picker-redesign-wireframe-three@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/checkin-flow-redesign-wireframe-three@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Check-in Flow
      <span>
 Swarm Apple Watch
      </span>
  </figcaption>
</figure>

##### 04&mdash;Test
### Testing and Feedback
During the testing phase, we encountered the same initial challenges due to the app's limited user base, which constrained traditional feedback channels. Nevertheless, we prioritised gathering crucial insights to ensure the app aligned with user expectations and addressed past shortcomings.

Our approach relied heavily on feedback from our dedicated community of super users, whose invaluable insights guided our improvements. Early responses from our community have been encouraging, highlighting usability and interface intuitiveness enhancements.

### Design Revisions
| Issue                   | Initial Design | Feedback | Change Implemented |
|-------------------------|----------------|----------|--------------------|
| **Step-Based Text Effect** | The text grew larger as it moved toward the centre of the viewport and shrank toward the top and bottom, creating a "step-like" effect. | Engineering determined this design was too difficult or potentially impossible to implement. | All text was made the same size. The selected text, positioned in the middle of the list, was highlighted in orange, while unselected text remained white. |
| **Sticker Selection Feedback** | Users could long-press on the Apple Watch screen to open a sticker picker, select a sticker, and return to the list view before hitting the check-in button. | Users were confused about their selection. They wanted better visibility of their chosen sticker and a way to confirm or change it. | The check-in button was reduced in size, and the selected sticker was displayed to the right of the button. This created a clear visual relationship and allowed users to return to the sticker picker if needed. |

<figure class="img">
  <div class="multi col bg padding">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/testing-and-feedback-wireframe-one@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/testing-and-feedback-wireframe-two@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/testing-and-feedback-wireframe-three@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/swarm/apple-watch/content/testing-and-feedback-wireframe-four@2x.png' | url }}" 
        width="358" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Modifications to list scroll & sticker picker flow
      <span>
 Swarm Apple Watch
      </span>
  </figcaption>
</figure>

##### 05&mdash;Release
### Room for Improvement
While our redesign addressed usability and communication challenges, there remains room for further enhancement. Optimising the app's performance to ensure seamless operation on various Apple Watch models is essential. Ongoing priorities include enhancing responsiveness, reducing load times, and minimising battery consumption.

Refining the integration between the Apple Watch app and its mobile counterpart could also improve user engagement. Simplifying the setup process, enhancing synchronisation between devices, and providing seamless transitions between app functionalities remain critical goals.