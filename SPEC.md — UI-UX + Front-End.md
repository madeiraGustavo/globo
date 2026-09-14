# SPEC.md

## 0. AI AGENT INSTRUCTIONS

You are acting as a senior **UI/UX Designer + Front-End Engineer**.

Your responsibility is to design and implement a premium technology-company website using:

https://weevolveit.com/

as the primary visual and interaction reference.

The reference website must be treated as inspiration for:

- visual hierarchy;
- composition;
- spacing;
- motion;
- interaction patterns;
- premium dark aesthetic;
- 3D experiences;
- content rhythm;
- responsiveness.

Do NOT blindly copy proprietary branding, text, logos, images, illustrations, or other protected assets.

Create an original implementation following the design direction described in this specification.

When a requirement is ambiguous:

1. prioritize UX;
2. maintain visual consistency;
3. follow the Design System;
4. prefer simple, elegant solutions;
5. preserve performance;
6. preserve accessibility;
7. avoid generic template aesthetics.

Do not remove requirements merely because they increase implementation complexity.

---

# 1. PROJECT GOAL

Build a premium, modern, highly interactive website for a technology/software/AI company.

The website must communicate:

- Technology
- Artificial Intelligence
- Software Engineering
- Innovation
- Global presence
- Reliability
- Scale
- Premium consulting

The final result should feel like a custom-designed digital experience rather than a generic SaaS template.

---

# 2. PRIMARY EXPERIENCE

The desired visual experience is:

**Dark + Premium + Technology + Minimalism + Motion + 3D**

The user should immediately perceive:

> "This is a sophisticated technology company."

The experience should progressively communicate:

Discovery  
↓  
Technology  
↓  
Capabilities  
↓  
Credibility  
↓  
Cases  
↓  
Results  
↓  
Conversion

---

# 3. AGENT RESPONSIBILITIES

The AI agent is responsible for both:

## UI/UX

- Information hierarchy
- Layout
- Grid
- Typography
- Color system
- Spacing
- Responsive behavior
- Component states
- Interaction design
- Motion design
- Accessibility
- Visual consistency

## FRONT-END

- Component architecture
- Responsive implementation
- Animations
- 3D implementation
- Performance
- Accessibility
- SEO structure
- Code quality
- Browser compatibility

The agent must think like both a designer and an engineer.

---

# 4. RECOMMENDED STACK

Preferred implementation:

- Next.js
- React
- TypeScript
- Tailwind CSS

Animation:

- Framer Motion

Advanced scroll animation, only when necessary:

- GSAP
- ScrollTrigger

3D:

- Three.js
- React Three Fiber
- Drei

Icons:

- Lucide Icons or equivalent

Do not introduce unnecessary dependencies.

---

# 5. CODE QUALITY

Use:

- TypeScript strict typing;
- reusable React components;
- semantic HTML;
- modular architecture;
- reusable design tokens;
- centralized animation constants;
- responsive components;
- accessible components.

Avoid:

- giant components;
- duplicated markup;
- excessive `useEffect`;
- inline hardcoded styling;
- unnecessary dependencies;
- animation logic mixed with business logic;
- arbitrary z-index values.

---

# 6. DESIGN SYSTEM

Create the Design System before implementing complex sections.

The design must use tokens instead of arbitrary values whenever practical.

---

# 7. COLORS

## Background

Primary:

`#050505`

Secondary:

`#090909`

Surface:

`#0D0D0F`

Elevated Surface:

`#121214`

## Text

Primary:

`#FFFFFF`

Secondary:

`#B4B4B8`

Muted:

`#77777D`

## Borders

Default:

`rgba(255,255,255,0.10)`

Subtle:

`rgba(255,255,255,0.06)`

## Primary Accent

Use a technological neon-green family.

Example starting point:

`#B7FF3C`

The exact tone may be adjusted during implementation to achieve appropriate contrast.

Do not overuse the accent color.

It should primarily indicate:

- interaction;
- important information;
- CTAs;
- active states;
- visual accents;
- 3D points/connections.

---

# 8. GRADIENTS

Gradients should be subtle.

Allowed applications:

- ambient background lighting;
- text emphasis;
- glows;
- cards;
- 3D effects;
- section transitions.

Avoid rainbow gradients.

Prefer:

dark → dark

or:

accent → transparent

---

# 9. TYPOGRAPHY

Use a modern Sans Serif font.

Preferred:

- Geist
- Inter
- Manrope

or an equivalent modern typeface.

Typography should communicate technology and precision.

---

# 10. TYPE SCALE

## Display

Desktop:

72–96px

Tablet:

56–72px

Mobile:

42–54px

## H1

Desktop:

64–88px

Mobile:

40–52px

## H2

Desktop:

44–64px

Mobile:

32–42px

## H3

Desktop:

28–36px

Mobile:

24–30px

## Body Large

18–22px

## Body

16–18px

## Small

13–14px

Use responsive typography with `clamp()` where appropriate.

---

# 11. SPACING SYSTEM

Base spacing scale:

4  
8  
12  
16  
24  
32  
48  
64  
80  
96  
128  
160

Do not randomly invent spacing values.

---

# 12. SECTION SPACING

Desktop:

`120px–160px`

Tablet:

`96px–120px`

Mobile:

`64px–96px`

Large visual sections may exceed these values when composition requires it.

---

# 13. CONTAINER

Maximum width:

`1280px–1440px`

Horizontal padding:

Desktop:

32–48px

Tablet:

24–32px

Mobile:

20–24px

---

# 14. GRID

Desktop:

12-column grid.

Tablet:

8-column grid.

Mobile:

4-column conceptual grid.

Use CSS Grid for primary layouts.

Use Flexbox for smaller component-level alignment.

---

# 15. BORDER RADIUS

Small:

8px

Medium:

12px

Large:

20px

XL:

28px

Pill:

9999px

Maintain consistency.

---

# 16. HEADER

The website must contain a premium responsive header.

Desktop structure:

LOGO | NAVIGATION | CTA

Navigation examples:

Services  
Method  
Cases  
About  
Blog  
Contact

---

# 17. HEADER BEHAVIOR

At page top:

- transparent;
- integrated with Hero.

After scrolling:

- dark translucent background;
- backdrop blur;
- subtle bottom border.

Header should remain sticky.

Recommended height:

72–88px.

---

# 18. MOBILE NAVIGATION

Mobile header:

LOGO | MENU BUTTON

Opening the menu should reveal a fullscreen or near-fullscreen navigation panel.

The animation should be smooth.

Menu items should be large and easy to touch.

Minimum interactive target:

44x44px.

---

# 19. HERO

The Hero is the most important visual section.

It must immediately establish:

- brand positioning;
- technology;
- sophistication;
- global reach.

Desktop composition:

LEFT:

Headline  
Description  
CTA

RIGHT / BACKGROUND:

Interactive 3D Globe

Possible composition:

```text
-------------------------------------------------
| HEADER                                        |
-------------------------------------------------
|                                               |
|   LARGE HEADLINE           3D GLOBE           |
|                                               |
|   Supporting text         ●───●               |
|                           ╱   ╲               |
|   [ PRIMARY CTA ]       ●      ●              |
|                                               |
-------------------------------------------------
```

The globe may partially overflow its logical column.

---

# 20. HERO HEIGHT

Desktop:

minimum `90vh`.

Preferred:

approximately `100vh`.

Mobile:

content-driven with sufficient breathing room.

Do not force 100vh when it creates mobile viewport problems.

---

# 21. HERO HEADLINE

The headline should:

- dominate the composition;
- use strong line breaks;
- maintain a controlled maximum width;
- contain optional highlighted words.

Avoid excessive copy.

Recommended maximum:

2–4 visual lines.

---

# 22. HERO BACKGROUND

Use subtle ambient effects.

Possible elements:

- radial gradients;
- glow;
- noise;
- grid;
- particles;
- subtle light sources.

Effects must remain subtle.

Text readability always has priority.

---

# 23. INTERACTIVE 3D GLOBE — MANDATORY

The Hero must contain an interactive 3D globe.

This is a **P0 requirement**.

It must NOT be replaced by:

- static image;
- video;
- GIF;
- CSS circle;
- simple SVG representation.

Use real WebGL-based rendering.

Recommended:

React Three Fiber + Three.js.

---

# 24. GLOBE VISUAL STYLE

The globe should be:

- dark;
- elegant;
- semi-transparent where appropriate;
- technologically styled;
- integrated into the Hero.

Include:

- globe sphere;
- stylized land/points;
- atmospheric glow;
- location points;
- animated arcs;
- subtle particles.

Avoid photorealistic Earth textures unless explicitly requested.

The desired result is a stylized digital network globe.

---

# 25. GLOBE AUTO ROTATION

Default state:

slow continuous rotation.

Rotation must feel subtle.

Never rotate fast enough to distract from the Hero copy.

---

# 26. GLOBE INTERACTION

Desktop:

- click + drag;
- pointer interaction;
- hoverable locations.

Mobile:

- touch + drag.

Interaction should temporarily reduce or pause automatic rotation.

After inactivity, automatic rotation may resume.

---

# 27. GLOBE LOCATIONS

Create a configurable data structure.

Example:

```ts
interface GlobeLocation {
  id: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  label?: string;
  href?: string;
  featured?: boolean;
}
```

Do not hardcode location rendering individually inside the component.

---

# 28. GLOBE POINTS

Points may use:

- dots;
- rings;
- pulses;
- glow.

Featured points should have slightly greater prominence.

Do not create excessive visual noise.

---

# 29. GLOBE CONNECTIONS

Connections between locations should use animated arcs.

Arc characteristics:

- thin;
- subtle;
- glowing;
- animated;
- accent-colored.

The purpose is to communicate global connectivity.

---

# 30. GLOBE TOOLTIP

Hovering a location may display:

City  
Country  
Optional label

Tooltip must:

- be readable;
- follow the Design System;
- not interfere with globe interaction.

---

# 31. GLOBE PERFORMANCE

The globe must be optimized.

Use:

- lazy loading;
- dynamic import;
- reduced particle count on mobile;
- limited pixel ratio;
- optimized geometries;
- optimized materials.

Recommended:

```ts
dpr={[1, 1.5]}
```

Do not render unnecessarily at extreme pixel density.

---

# 32. GLOBE FALLBACK

If WebGL fails:

Display an elegant static fallback visual.

The layout must remain functional.

---

# 33. REDUCED MOTION

Respect:

`prefers-reduced-motion`

When enabled:

- stop unnecessary globe rotation;
- remove aggressive transitions;
- disable parallax;
- reduce particle movement;
- simplify reveal animations.

---

# 34. LOGO / SOCIAL PROOF SECTION

After the Hero, present client/partner logos.

Design:

- monochromatic;
- low visual emphasis;
- consistent dimensions.

Hover may increase opacity.

An optional marquee animation may be used.

---

# 35. METRICS SECTION

Present major company metrics.

Example structure:

```text
150+
Projects

20+
Countries

10+
Years

98%
Satisfaction
```

Numbers should use large typography.

Optional count-up animation may run once when entering the viewport.

---

# 36. SERVICES SECTION

Services should use a strong visual hierarchy.

Each service contains:

- number;
- icon;
- title;
- short description;
- link/arrow.

Desktop may use:

- grid;
- interactive list;
- split layout.

---

# 37. SERVICE INTERACTION

Hovering/selecting a service may:

- change border;
- activate accent;
- move arrow;
- reveal image;
- reveal contextual visual.

Avoid excessive scale animations.

---

# 38. DIFFERENTIALS

Create a section communicating company strengths.

Possible layout:

2x2 or 3-column card grid.

Cards should feel integrated into the dark environment.

Use subtle borders rather than large shadows.

---

# 39. METHOD SECTION

Represent the workflow visually.

Example:

01 Discover  
02 Diagnose  
03 Design  
04 Deliver  
05 Evolve

Desktop may use horizontal progression.

Mobile should become vertical.

The active step may react to scroll position.

---

# 40. CASE STUDIES

Cases must be visually prominent.

Each case should contain:

- large image/mockup;
- project/client;
- category;
- short description;
- metrics;
- tags;
- CTA.

Favor large editorial layouts instead of tiny cards.

---

# 41. CASE HOVER

Possible interactions:

- image zoom 1.02–1.05;
- cursor interaction;
- arrow movement;
- subtle overlay;
- title movement.

Animations should remain restrained.

---

# 42. TESTIMONIALS

Use:

- cards;
- carousel;
- horizontal slider.

Each testimonial:

- quote;
- name;
- company;
- role;
- optional avatar.

---

# 43. FINAL CTA

Before Footer, create a strong conversion section.

It should visually differ from surrounding sections.

Possible content:

Large headline  
Short supporting text  
Primary CTA

The CTA should feel like the natural conclusion of the page.

---

# 44. FOOTER

Footer should include:

- logo;
- positioning statement;
- navigation;
- services;
- social links;
- contact;
- legal links;
- copyright.

Use substantial whitespace.

Do not compress the Footer unnecessarily.

---

# 45. BUTTON COMPONENT

Create reusable variants:

```ts
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="ghost" />
```

States:

- default;
- hover;
- focus;
- active;
- disabled;
- loading.

---

# 46. BUTTON MOTION

Hover duration:

approximately `200ms`.

Possible effects:

- background transition;
- arrow translation;
- subtle glow.

Avoid dramatic scaling.

---

# 47. CARD COMPONENT

Create reusable card primitives.

Cards must support:

- optional icon;
- eyebrow;
- title;
- description;
- CTA;
- image;
- hover state.

---

# 48. MOTION SYSTEM

Animations must follow a coherent system.

Default duration:

Fast:

150–200ms

Normal:

250–400ms

Section reveal:

500–800ms

Use consistent easing.

Suggested:

`cubic-bezier(0.22, 1, 0.36, 1)`

---

# 49. SCROLL REVEALS

Allowed:

- opacity;
- translateY;
- subtle scale;
- masks/reveals.

Typical reveal:

```text
opacity: 0 → 1
translateY: 24px → 0
```

Do not animate every element independently.

Group related elements.

---

# 50. PARALLAX

Use only for decorative layers.

Never apply strong parallax to:

- primary text;
- forms;
- navigation;
- critical CTAs.

---

# 51. MICROINTERACTIONS

Required for:

- buttons;
- links;
- cards;
- menu;
- tabs;
- accordions;
- form fields;
- globe points.

Every interactive element should provide feedback.

---

# 52. FORMS

Inputs must include:

- label;
- placeholder when useful;
- focus;
- error;
- disabled;
- success where applicable.

Never rely on placeholder as the only label.

---

# 53. FORM VISUAL STYLE

Inputs:

- dark surface;
- subtle border;
- light text;
- clear focus state.

Focus may use accent border/glow.

---

# 54. RESPONSIVE STRATEGY

Use mobile-first implementation.

Target ranges:

Mobile:

`< 768px`

Tablet:

`768px–1023px`

Desktop:

`>= 1024px`

Large:

`>= 1440px`

Do not design only for fixed breakpoint screenshots.

Layouts must behave fluidly between breakpoints.

---

# 55. MOBILE EXPERIENCE

Mobile must be treated as a dedicated experience.

Do not simply shrink desktop.

Adapt:

- navigation;
- typography;
- spacing;
- grid;
- animations;
- 3D;
- cards;
- interactions.

---

# 56. MOBILE GLOBE

The globe remains mandatory on mobile.

However:

- reduce particles;
- simplify effects;
- lower DPR;
- reduce geometry complexity;
- adjust camera;
- reposition relative to Hero text.

The globe may appear below the headline or partially behind the composition.

Text readability has priority.

---

# 57. TABLET

Tablet should avoid awkward intermediate desktop layouts.

Explicitly test:

768px  
820px  
1024px

---

# 58. ACCESSIBILITY

Target:

WCAG 2.1 AA.

Required:

- keyboard navigation;
- visible focus;
- semantic landmarks;
- accessible buttons;
- sufficient contrast;
- alt text;
- labels;
- reduced motion;
- appropriate ARIA where necessary.

Do not add unnecessary ARIA to native semantic elements.

---

# 59. PERFORMANCE

Target excellent Core Web Vitals.

Pay special attention to:

- Hero;
- fonts;
- images;
- globe;
- JavaScript bundles;
- animation libraries.

---

# 60. IMAGES

Use:

- WebP;
- AVIF when appropriate;
- responsive sizes;
- lazy loading.

For Next.js use `next/image` when appropriate.

Do not lazy-load the primary LCP image if doing so worsens LCP.

---

# 61. 3D LOADING

The 3D bundle must not block initial page rendering.

Recommended architecture:

```text
Hero
 ├── HeroContent
 └── GlobeLoader
       └── dynamic import
             └── Globe3D
```

Display a lightweight visual state while the 3D component initializes.

---

# 62. COMPONENT ARCHITECTURE

Suggested structure:

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── motion/
│   └── globe/
├── lib/
├── hooks/
├── data/
├── styles/
├── types/
└── assets/
```

---

# 63. UI COMPONENTS

Minimum reusable components:

```text
Button
Container
Section
SectionHeader
Badge
Card
ServiceCard
CaseCard
Metric
LogoMarquee
TestimonialCard
Accordion
Input
Textarea
Select
Navbar
MobileMenu
Footer
Globe
GlobePoint
GlobeTooltip
```

---

# 64. PAGE COMPONENTS

Homepage:

```text
<HomePage>
  <Header />

  <main>
    <Hero>
      <HeroContent />
      <Globe3D />
    </Hero>

    <SocialProof />
    <Metrics />
    <Services />
    <Differentials />
    <Method />
    <Cases />
    <Technologies />
    <Testimonials />
    <FinalCTA />
  </main>

  <Footer />
</HomePage>
```

---

# 65. DATA-DRIVEN UI

Do not manually repeat component markup.

Example:

```ts
const services = [
  {
    id: "software",
    title: "Software Development",
    description: "...",
    icon: "...",
  },
];
```

Render with reusable components.

Apply this pattern to:

- services;
- cases;
- metrics;
- testimonials;
- navigation;
- globe locations;
- technologies.

---

# 66. SEO / HTML STRUCTURE

Use semantic structure:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Each page must have only one primary H1.

Heading hierarchy must remain logical.

---

# 67. UX STATES

Every dynamic component must consider:

- loading;
- empty;
- error;
- success;
- disabled.

Never leave broken blank areas.

---

# 68. ERROR HANDLING

3D errors must not crash the page.

Animation errors must not prevent navigation.

Failed images must have graceful fallback behavior.

---

# 69. BROWSER SUPPORT

Support current stable versions of:

- Chrome;
- Safari;
- Firefox;
- Edge.

Mobile:

- Safari iOS;
- Chrome Android.

---

# 70. DESIGN VALIDATION

Before considering a page complete, evaluate:

### Hierarchy

Can the user understand the page in five seconds?

### Contrast

Are important elements clearly visible?

### Rhythm

Does the page alternate dense and spacious sections appropriately?

### Consistency

Are components following the same visual language?

### Conversion

Is the next action obvious?

### Performance

Do animations remain smooth?

---

# 71. RESPONSIVE VALIDATION

Manually inspect at minimum:

```text
375x812
390x844
430x932
768x1024
820x1180
1024x768
1280x800
1440x900
1920x1080
```

Fix overflow and layout issues rather than hiding them.

---

# 72. ANIMATION VALIDATION

Verify:

- no unexpected layout shift;
- no scroll lock;
- no excessive animation;
- no animation-induced horizontal overflow;
- animations work after client hydration;
- reduced-motion behavior works.

---

# 73. GLOBE VALIDATION

Before completion verify:

- globe loads;
- globe rotates;
- drag works;
- touch works;
- points are positioned correctly;
- arcs animate;
- tooltips work;
- resizing works;
- mobile performance is acceptable;
- WebGL failure does not break Hero;
- reduced motion is respected.

---

# 74. DESIGN ANTI-PATTERNS

DO NOT:

- create a generic Bootstrap-like website;
- use excessive gradients;
- add neon to everything;
- create giant shadows;
- overuse glassmorphism;
- animate every object;
- use random border radius;
- use random spacing;
- use dozens of font sizes;
- use excessive floating cards;
- sacrifice readability for visual effects.

---

# 75. FRONT-END ANTI-PATTERNS

DO NOT:

- place the entire page in one component;
- use `any` unnecessarily;
- hardcode repeated content;
- use JavaScript when CSS is sufficient;
- ship huge unoptimized images;
- block rendering with 3D;
- ignore hydration issues;
- ignore accessibility warnings;
- suppress TypeScript errors instead of fixing them.

---

# 76. IMPLEMENTATION PRIORITY

## P0 — REQUIRED

Implement first:

1. Design tokens
2. Typography
3. Grid/container
4. Header
5. Hero
6. Interactive 3D Globe
7. Buttons
8. Services
9. Cases
10. Final CTA
11. Footer
12. Responsive behavior
13. Accessibility
14. Performance baseline

---

## P1 — HIGH PRIORITY

After P0:

- Metrics
- Method
- Testimonials
- Logo marquee
- Globe arcs
- Globe tooltips
- Scroll reveals
- Microinteractions

---

## P2 — POLISH

Only after P0 and P1 are stable:

- Advanced parallax
- Complex shaders
- custom cursor;
- sophisticated page transitions;
- advanced 3D effects;
- experimental animations.

Never prioritize P2 effects over P0 usability.

---

# 77. IMPLEMENTATION WORKFLOW FOR AI AGENTS

Follow this order.

### Phase 1 — Analyze

Before coding:

- inspect existing repository;
- understand framework;
- identify existing components;
- identify dependencies;
- identify design tokens;
- identify assets.

Do not replace working architecture unnecessarily.

### Phase 2 — Design Foundation

Implement:

- tokens;
- typography;
- spacing;
- containers;
- responsive rules;
- basic UI primitives.

### Phase 3 — Structural UI

Implement:

- Header;
- Hero layout;
- sections;
- Footer.

Do not begin with complex animations.

### Phase 4 — 3D

Implement:

- Globe;
- locations;
- arcs;
- interactions;
- responsive behavior;
- fallback.

### Phase 5 — Motion

Add:

- reveals;
- hover states;
- microinteractions;
- section transitions.

### Phase 6 — Responsive QA

Test all target sizes.

### Phase 7 — Accessibility

Perform keyboard and screen-reader-oriented review.

### Phase 8 — Performance

Optimize:

- JS;
- 3D;
- images;
- fonts;
- animations.

### Phase 9 — Polish

Only now add optional visual enhancements.

---

# 78. AGENT DECISION RULES

When making implementation decisions:

### Rule 1

Visual quality does not justify poor usability.

### Rule 2

Animation does not justify poor performance.

### Rule 3

Desktop fidelity does not justify broken mobile UX.

### Rule 4

Avoid adding a library for something that can be implemented cleanly with existing dependencies.

### Rule 5

Reuse existing components whenever they satisfy the requirement.

### Rule 6

Do not rewrite unrelated code.

### Rule 7

Do not remove functionality while improving visual design.

### Rule 8

Prefer maintainable solutions over clever solutions.

---

# 79. AGENT COMPLETION RULE

Do NOT declare the implementation complete merely because the page renders.

Completion requires:

- functional layout;
- responsive behavior;
- correct interaction states;
- functioning globe;
- animation validation;
- accessibility;
- performance review;
- browser review;
- no obvious console errors;
- no obvious visual regressions.

---

# 80. ACCEPTANCE CRITERIA

The UI/UX implementation is accepted when:

- the site feels premium and custom-designed;
- dark visual language is consistent;
- typography has strong hierarchy;
- Hero creates immediate visual impact;
- interactive 3D globe is present;
- globe behaves correctly on desktop and mobile;
- sections have consistent spacing;
- services are easy to scan;
- cases receive strong visual emphasis;
- CTAs are obvious;
- interactions provide feedback;
- animations are smooth;
- mobile layout feels intentionally designed;
- keyboard navigation works;
- reduced-motion preference works;
- WebGL failure does not break the website;
- no major horizontal overflow exists;
- visual effects do not significantly degrade usability;
- implementation follows reusable component architecture.

---

# 81. DEFINITION OF DONE

A task is only considered DONE when:

**Design**
- visually consistent;
- aligned with Design System;
- responsive;
- interaction states complete.

**Development**
- TypeScript passes;
- lint passes;
- build passes;
- no critical console errors.

**UX**
- primary navigation works;
- CTAs work;
- content is readable;
- mobile interaction works.

**Accessibility**
- keyboard usable;
- focus visible;
- reduced motion supported;
- semantic structure maintained.

**Performance**
- images optimized;
- 3D lazy-loaded;
- unnecessary JS avoided;
- animation remains smooth.

---

# 82. FINAL AGENT DIRECTIVE

The target is not merely:

> "Create a dark website."

The target is:

> Create a carefully designed premium digital experience for a modern technology company, combining editorial typography, restrained visual effects, thoughtful motion, global visual storytelling and a performant interactive 3D globe.

Always prioritize this order:

**UX → Visual hierarchy → Responsiveness → Accessibility → Performance → Motion → Decorative effects.**

When uncertain, choose the simpler solution that preserves the premium experience.

Do not sacrifice usability or maintainability for visual novelty.