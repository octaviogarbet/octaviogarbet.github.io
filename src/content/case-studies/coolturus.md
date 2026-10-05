---
title: "Coolturus \u2014 Cultural Discovery Platform & Lean Product Validation"
summary: "An early-stage digital portal connecting local audiences with cultural events, indie showcases, and creative workshops in Montevideo."
role: "Co-Founder, CTO & Lead Product Architect"
order: 3
start: 2021
end: present
timeline: "2021–2023, relaunched 2026"
lines: [product, architecture]
url: "https://coolturus.com/"
stack: ["Node.js", "NestJs", "React", "Angular", "PostgreSQL", "Tailwind CSS", "LLM-assisted curation"]
scope: ["Entrepreneurial Product Discovery", "Full-Stack Architecture", "Lean Validation", "Business Model Discovery", "Curation Automation"]
images:
  - { src: ./../../assets/case-studies/coolturus/coolturusdesktop.png, kind: desktop, alt: "Workshops list screen", caption: "List of workshops on desktop" }
  - { src: ./../../assets/case-studies/coolturus/coolturusmobile.png, kind: mobile, alt: "Landing page screen", caption: "Landing page screen on phones" }
map:
  stations:
    - { id: web, label: "React web app", sub: "Discovery portal", at: [0, 0], section: original }
    - { id: organizers, label: "Organizer submissions", sub: "Event intake", at: [0, 2], section: original }
    - { id: api, label: "Node.js API", sub: "NestJs & PostgreSQL", at: [2, 1], section: original, side: below-right }
    - { id: curation, label: "AI curation", sub: "Curated event list", at: [4, 1], section: ai, side: right }
  links:
    - [web, api]
    - [organizers, api]
    - [api, curation]
---

## Context & The Business Problem

Independent cultural organizers, niche theater troupes, workshop facilitators, and local musicians often lack dedicated marketing channels to reach target audiences:

1. **Fragmented Event Discovery:** Local audiences struggled to find non-mainstream events, as cultural agendas were scattered across social media channels, physical flyers, and personal networks.
2. **High Friction for Organizers:** Event hosts lacked time to manually format and submit event details, resulting in incomplete and stale listings.
3. **The "Cold Start" Content Challenge:** A cultural discovery platform requires high listing density on day one to retain users, but manually sourcing and curating events demands unsustainable human effort.

**The Mission:** Launch a streamlined cultural discovery app using Lean Startup methodologies—testing user engagement hypotheses, validating willingness to submit events, and minimizing curation overhead.

## Original Production Architecture

The original product was engineered to validate market demand quickly using a lightweight, responsive web stack built for fast discovery and social sharing.

### Architectural Decisions

* **Frontend Discovery Application (React):**
  * Built a single-page web application optimized for quick mobile browsing, category filtering (music, theater, workshops, visual arts), and date-based agenda navigation.
  * Implemented structured social preview metadata (Open Graph) so users could share specific event links across messaging platforms, driving organic viral traffic.

* **Backend REST API (Node.js & NestJs):**
  * Designed a lightweight REST API handling event submission pipelines, organizer verification, and location-based filtering.

* **Database & Search Strategy (PostgreSQL):**
  * Utilized relational modeling to handle structured event entities (venues, dates, ticket tiers, categories) alongside full-text search indexing on event titles and descriptions.

## What Happened: Why We Paused in 2023

Running the product taught us three things the plan had not anticipated:

* **Curation never got cheaper:** Keeping a curated list of events current took a steady amount of manual work every week. It was time I did not have to invest, and in 2023 we paused the project.
* **The form was the bottleneck:** Getting show runners to load their own events was much harder than expected. Filling in the submission form took them more time than they were willing to give it.
* **The wrong side was paying:** We assumed we could monetize by highlighting events. The people actually willing to pay were the ones offering workshops, courses, and private lessons to people who wanted to learn arts, acting, or to play a musical instrument.

## The AI Evolution: Solving the Problems That Paused Us

The problems that stopped Coolturus were about time, not ideas. AI changes that equation.

### Done: An AI-Curated Event List

The work that paused the project is now handled with AI. Building a curated event list, which used to take hours of manual effort, is now much quicker, so the list can stay current without the time cost that stopped us in 2023.

### In Use: AI for Product Discovery

AI is also helping me analyze other business ideas around Coolturus and how to validate them. Making a plan and implementing an idea is now faster and cheaper, so we can test more of them, starting from what we learned about who is willing to pay.

### Next: Features We Could Not Build Before

AI also makes possible features that were out of reach for a project this size, like semantic search across events and courses: finding what people mean, not only the exact words they type.

## Key Outcomes & Entrepreneurial Learnings

### What We Achieved

* **Pioneer Market Entry:** Launched one of the first dedicated cultural aggregation apps in the local market.
* **Real Business Model Discovery:** Learned that the paying customers are workshop, course, and private-lesson providers, not event organizers buying visibility.
* **A Paused Project, Back in Motion:** With AI handling curation, the work that paused Coolturus is no longer the blocker.

### Key Engineering & Product Takeaways

1. **Operating Cost Decides Survival:** A product can have users and still stop if keeping its content alive costs more time than the team has. Curation effort was the real constraint.
2. **Meet Contributors Where They Are:** If submitting content takes longer than people expect, they will not do it. Reduce the work to what they already do, or do it for them.
3. **Validate Who Pays, Not Only Who Uses:** Our early assumption about monetization was wrong. Talking to the market showed the paying segment was different from the audience we built for.
4. **AI Changes the Economics of Old Ideas:** Problems that were too expensive to solve by hand in 2023 are now solvable, which makes it worth revisiting ideas that were paused for lack of time.
