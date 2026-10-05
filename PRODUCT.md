# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: hiring decision-makers.** Hiring managers, recruiters and engineering leaders evaluating Octavio for an engineering leadership role (Engineering Manager and above). They arrive from LinkedIn, a CV or a referral, usually skim before a screening call, and need to judge quickly whether he fits the role and is worth talking to.
- **Secondary: consulting clients.** Founders and companies considering him for advisory or project work. This audience becomes prominent once the Services section is enabled (`FEATURE_SERVICES`); until then the site serves them only through the general profile and email contact.
- Also visited by community peers: event organizers, people who saw a talk, engineers he mentors. Not a design driver.

## Product Purpose

Personal site of Octavio Garbarino (oti.noroof.dev): a credible, current professional profile that turns a visit into a conversation (an interview, an intro call, an email). Success is a hiring manager or client finishing a visit convinced he is worth contacting, and knowing how to do so.

## Positioning

**A leader who still builds.** He manages people and facilitates product strategy while staying hands-on with technical architecture and AI integration. The three pillars on the home page carry this claim:

1. Engineering Leadership & People Management
2. Product Strategy & Leadership Facilitation
3. Technical Architecture & AI Integration

The differentiator against a typical EM profile is the combination of the three, not any single one. Within it, **people leadership is his strongest trait**: he cares about the human on the other side and, at the same time, about the project, the team's performance and the delivery, without trading one for the other. Copy should lead with this; the People line is the one the other two run on. Pillar paragraphs are pending; the owner will write them.

## Operating Context

- Visitors evaluate him alongside his LinkedIn profile and CV, often on mobile, in short sessions.
- Public speaking and teaching are part of his professional story: talks at CIbSE 2023, Montevideo JavaScript Meetup, Endava internal and external events; former professor at ORT University.
- Based in Uruguay; English-language site.

## Capabilities and Constraints

- Static Astro + Tailwind site, deployed to GitHub Pages from `master`. Content is Markdown in `src/content/`.
- Pages: Home (hero, "What I bring to the table" pillars, talks & events), About, Resume, Portfolio.
- Feature-flagged and hidden in production until content is ready: Blog + RSS + "Latest writing" (`FEATURE_BLOG`), Services (`FEATURE_SERVICES`).
- Old Jekyll URLs (`/about.html` etc.) must keep working (`build.format: 'file'`).
- **Open:** current role and employer. The resume (Engineering Manager & Tech Lead at Endava) and About copy (age, education status) are outdated; the owner will update them. Do not reuse those facts in new copy until refreshed.
- **Open:** pillar paragraphs, portfolio case studies, blog posts, services offering and pricing.

## Brand Commitments

- Name: Octavio Garbarino ("Oti"); domain oti.noroof.dev; contact octavio.garbarino@noroof.dev.
- Voice in existing copy: first person, warm, direct, people-oriented; sports and mate appear as personal touches on the About page.

## Evidence on Hand

- Talks list (`src/content/talks/`), experience and skills (`src/content/experience/`, `src/content/skills/`), About text (`src/content/about.md`, partly outdated).
- Social profiles: LinkedIn, GitHub, X.
- Portrait: `src/assets/octavio.webp` (square, teal background, white tee). Used in the home page contact section and as the site-wide `og:image`; shown in natural color.
- **Private, do not publish:** unsolicited feedback from a senior developer (shared by the owner, 2026-10): "the best tech lead I had", noting he cared about the person more than anyone while also caring about the project, the team's performance and delivery. It informs emphasis and wording only; never quote it, paraphrase it as a testimonial, or attribute it on the site.
- **None yet:** public testimonials, case studies (portfolio has only a draft placeholder), metrics beyond the owner's own pillar copy, client logos. Future work must not invent any of these.

## Product Principles

1. **Hiring clarity first.** A hiring manager should grasp role, level and the "leader who still builds" claim within the first screen.
2. **Show, don't claim.** Back positioning with real talks, roles and (later) case studies; never fabricate proof.
3. **Ship incrementally.** Unfinished sections stay behind flags rather than appearing as placeholders in production.
4. **Easy to reach.** Every page leads naturally to a way to contact him.
