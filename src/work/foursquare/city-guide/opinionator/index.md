---
title: Opinionator
product: Foursquare City Guide
overview: Whether it's a quick stop at a new café or a return to a neighbourhood favourite, every visit gives you something new—an opinion, insight, or knowledge you didn't have before. The Opinionator builds on this connection by tailoring questions to your familiarity, ensuring every contribution feels purposeful. The result? A community-driven tool that keeps venue information accurate, engaging, and deeply relevant.
shortcode: Foursquare / City Guide
tags: ["casestudy", "fsqcityguide"]
banner:
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone1.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone1-1.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone2.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone2-1.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone3.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone3-1.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone4.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone4-1.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone5.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone5-1.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone6.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone6-1.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone7.png
    alt: text
  - url: /_/images/work/foursquare/city-guide/opinionator/banner/phone8.png
    alt: text
responsibilities: ["Prototyping", "Sketching", "UI Design", "User Testing", "UX Design"]
team: ["Marissa Chacko", "Jeffrey Kao", "Mitchell Livingston", "Clare Lynch"]
platform: Android & iOS
year: 2016
---

Two years after its introduction, we saw a chance to build on what made the Opinionator great while addressing some of its growing pains. The core idea of keeping venue information current was solid, but we knew we could improve the experience. By redesigning it to be more engaging and flexible, our goal was to make the Opinionator blend seamlessly into different parts of the app, encouraging you to use it more often.

##### 01&mdash;Discover
### Understanding the Problem
Within the venue page's main navigation, users could save a place, mark themselves as having visited, leave a tip, or rate the venue. Tapping the Rate button launched the Opinionator.

<figure class="img">
  <div class="bg padding">
    <img 
    src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/venue-page-navigation@2x.png' | url }}" 
    width="1252" 
    alt="photo" />
  </div>
  <figcaption>
 Foursquare Venue Page Navigation
      <span>
 City Guide Opinionator
      </span>
  </figcaption>
</figure>

On this screen, playing card–style prompts appeared in succession. Each card featured a vibrant image paired with a category icon—helping users recall specific details or personal memories of the venue—followed by a simple question and a set of possible answers. The questions ranged from personal opinions to observable features, encouraging users to share insights that kept venue information accurate.

<figure class="img">
  <div class="bg padding">
    <img 
    src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/old.png' | url }}" 
    width="1252" 
    alt="photo" />
  </div>
  <figcaption>
 v1.0 of Opinionator
      <span>
 City Guide Opinionator
      </span>
  </figcaption>
</figure>

The feature initially attracted a significant number of first-time users, many of whom eagerly engaged by answering the questions presented. However, the sheer volume of prompts often made the experience feel endless, discouraging users from returning after their initial interaction. Over time, the influx of data continued, but it was driven almost entirely by new users rather than fostering ongoing engagement. This imbalance ultimately limited the feature's ability to achieve long-term impact, as repeat usage—critical for sustained value—remained elusive.

##### 02&mdash;Define
### User Research and Insights
An analysis revealed several areas for improvement, particularly around user fatigue with the feature. Many found the feature slow, confusing, and cumbersome, disrupting their browsing experience and creating a disconnect from the rest of the app<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Version 1.0 of the Opinionator launched in its view, taking over the entire screen, and away from the venue page you were previously on</span></span>.

<figure class="img">
<div>
<ul class="quotes">
<li>
<span class="persona"></span>
The design is really bright and colourful, but it's hard to tell what's important on the screen. I wasn't sure where I was supposed to focus.
</li>
<li>
<span class="persona"></span>
I thought there'd be a clear end to the questions, but they kept coming. It felt like I was stuck in a loop without knowing when it would stop.
</li>
<li>
<span class="persona"></span>
The first time I used it, I spent so much time answering questions that it felt exhausting. I haven't opened it since.
</li>
<li>
<span class="persona"></span>
The bright colours were distracting and made it hard to focus on the question. I felt like the design was competing for my attention.
</li>
</ul>
</div>
<figcaption>
 User Feedback
      <span>
 City Guide Opinionator
      </span>
</figcaption>
</figure>

The interface's bold use of colours disoriented users, making it challenging to understand which elements were most significant or where to direct their attention. Additionally, the seemingly endless set of questions led participants to question the value of their responses and the overall benefit of contributing. Many users eagerly answered a multitude of questions during their first encounter—believing there would be a clear endpoint—but rarely returned once they realised the flow continued indefinitely.

##### 03&mdash;Ideate
### The Right Questions at the Right Time
In the original Opinionator, every user was presented with the same types of questions, regardless of their familiarity with the venue or level of app engagement. A brand-new user who had just downloaded the app was asked the same questions as a seasoned user with years of check-ins and contributions. This approach missed the opportunity to tailor the experience, making the questions feel more relevant and impactful.

To address this, we decided to group questions into three categories: novice, intermediate, and expert<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">By tailoring question sets to different user types, we could gather a broader range of responses while ensuring the experience felt purposeful and rewarding</span></span>. For new users, we focused on foundational questions designed to boost their confidence and encourage further engagement with the feature. We surfaced more detailed and personalised questions for highly active, long-term users familiar with specific categories or venues that we assumed only they could answer.

### Stripping Back to Move Forward
When revisiting the feature's design, we reflected on the existing card-based layout, which had been a core part of its original implementation. This paradigm, widely used within our app and across competitors, remained a strong baseline for presenting questions. However, we saw an opportunity to refine it, creating a cleaner, more intuitive structure to address feedback about the design's overwhelming colours and lack of clarity.

We toned down visual elements in response to feedback to make the card more approachable and balanced. This meant stripping away the bright, brash colours of the previous design and opting to start with a more neutral foundation. One early sketch explored removing the large image at the top of the card, which often competed visually with the question.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <img 
      src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-sketch-one@2x.png' | url }}" 
      width="1252" 
      alt="photo" />
    </div>
    <div class="multi row">
      <img 
      src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-sketch-two@2x.png' | url }}" 
      width="1252" 
      alt="photo" />
    </div>
    <div class="multi row">
      <img 
      src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-sketch-three@2x.png' | url }}" 
      width="1252" 
      alt="photo" />
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-wire-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-wire-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-wire-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Card Sketches
      <span>
 City Guide Opinionator
      </span>
  </figcaption>
</figure>

To improve navigation, we re-evaluated how users moved through the flow. The original design allowed cards to be swiped away, but many users were unaware of this interaction, with some even admitting to providing incorrect answers simply to progress. To address this, we introduced a clear "Skip" button to make the action explicit and more accessible. Additionally, we experimented with repositioning the "Close" button to test whether alternative placements could reduce user fatigue and encourage re-engagement later.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-wire-four@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-wire-five@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/stripping-back-wire-six@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Progress Sketches
      <span>
 City Guide Opinionator
      </span>
  </figcaption>
</figure>

### Improving Progression Design
Users could not know where they were in the question flow or how many questions remained. This lack of feedback led to one of the most common complaints: the experience felt endless. Addressing this issue became a top priority in the redesign.

When exploring solutions, we balanced clarity with engagement. While text-based indicators like "Question 1 of 5" provided direct feedback, they lacked the visual appeal that could make the experience more engaging. Progress bars and stacked card layouts offered more compelling alternatives, though each came with its challenges<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">For example, while stacked cards could tease upcoming questions, they struggled to communicate a user's overall position in the flow. Progress bars, on the other hand, conveyed progression more clearly but risked feeling too functional or conventional</span></span>.

Ultimately, the final design came together surprisingly fast, inspired by work I was doing simultaneously on EDU cards elsewhere in the app. I wanted these cards to share a similar logic and layout, and by aligning their design elements, we created consistency while allowing for shared components.

<figure class="img">
  <div class="multi col">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/sketches.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/progression-design-sketch-one@2x.png' | url }}" 
        width="1252" 
        alt="photo" />
      </div>
    </div>
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/progression-design-wire-one@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/progression-design-wire-two@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/progression-design-wire-three@2x.png' | url }}" 
        width="486" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Sketches
      <span>
 City Guide Opinionator
      </span>
  </figcaption>
</figure>

The chosen progress indicator was a circular bar designed to be simple and fun. As users moved through the questions, the circle filled segment by segment, gradually turning green. This design added a sense of momentum and completion that users found compelling. Watching the circle fill became an intrinsic motivator—users wanted to see it completed, which helped encourage them to finish the flow. While a small design element, it played a critical role in making the experience feel satisfying and visually striking.

##### 04&mdash;Test
### Testing and Feedback
Testing for the updated Opinionator feature began with internal employee reviews, offering quick, candid feedback from colleagues familiar with the app's design. This was followed by beta testing with our trusted Superuser community<span class="aside-anchor" aria-hidden></span><span class="aside" role="complementary"><span class="aside__content">Superusers (SUs) are a group of dedicated enthusiasts who ensure the information remains accurate and high-quality</span></span> via TestFlight, where feedback was gathered through structured surveys and informal discussions via email and in communication tools like Slack.

To validate the updates further, we conducted a limited rollout to a small percentage of users, analysing real-world usage patterns and performance metrics. This combination of internal, beta, and live testing highlighted key areas of friction and validated early design assumptions, which directly informed the following revisions.

### Design Revisions

<div style="overflow-x:auto;">

| Issue             | Initial Design | Feedback | Change Implemented |
|-------------------|----------------|----------|--------------------|
| **Lack of clarity on progress** | A green progress wheel was introduced, which users enjoyed for its completionist appeal. | While users appreciated the progress wheel, some still found it unclear how many questions were left in the flow. | Added a text placeholder (e.g., "1 of 5") to communicate the user's position in the flow explicitly. |
| **Integration with Expertise feature** | Expertise was a standalone feature unrelated to the Opinionator. | This was an internal decision rather than direct feedback, aiming to tie the features together to increase engagement. | Connected the Opinionator to the Expertise feature, rewarding users by linking contributions to their Expertise rank within specific categories. |
| **Further reduction of question set** | Users still felt too many questions were in the flow despite prior adjustments. | Feedback indicated that the number of questions remained overwhelming, discouraging completion. | Further shortened the question sets to make the flow feel quicker and more attainable. |

</div>

<figure class="img">
  <div class="multi col bg padding">
    <div class="multi row">
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/design-revisions-mock-one@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
      <div>
        <img 
        src="{{ '/_/images/work/foursquare/city-guide/opinionator/content/design-revisions-mock-two@2x.png' | url }}" 
        width="746" 
        alt="photo" />
      </div>
    </div>
  </div>
  <figcaption>
 Pagination & Expertise
      <span>
 City Guide Opinionator
      </span>
  </figcaption>
</figure>

##### 05&mdash;Release
### Room for Improvement
The Opinionator redesign brought valuable updates, but there are still opportunities to refine and expand its impact. One area for growth lies in enhancing the expertise feature. Users could better understand how their efforts build their expertise rank by breaking down contributions—such as tips, photos, and edits. This added transparency could inspire greater engagement and reinforce the value of their participation.

Another idea is introducing user-driven customisation. Giving users control over the types of questions they encounter—either through settings or in-the-moment toggles like "More questions like this"—could make the experience feel more relevant and tailored to their strengths.

Finally, expanding entry points could amplify usage. Notifications or surfacing the feature in timely and relevant places could seamlessly integrate it into the user journey, encouraging contributions where they feel most natural.
