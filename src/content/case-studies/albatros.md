---
title: "Albatros Basketball Club \u2014 Digital Operations, Advanced Analytics & Brand Modernization"
summary: "Digitizing youth sports operations, automating play-by-play analytics, and modernizing public communication for a local basketball club in Montevideo."
role: "Directive Board Member, IT Director & Fractional Systems Architect (Volunteer)"
order: 2
start: 2024
url: "https://cdalbatros.com.uy"
end: present
lines: [leadership, product, architecture]
stack: ["Next.js", "Contentful (Headless CMS)", "Progressive Web App (PWA)", "TypeScript", "Firebase", "Tailwind CSS", "Custom Game JSON Parsers", "AI coding agents (development)"]
scope: ["Digital Transformation", "Youth Category Operations", "Multi-discipline Member Records", "Advanced Lineup Analytics", "Headless CMS Migration", "Sponsorship & Board Governance"]
images:
  - { src: ./../../assets/case-studies/albatros/albatrosdesktop.png, kind: desktop, alt: "Match statistics screen", caption: "Match statistics on desktop" }
  - { src: ./../../assets/case-studies/albatros/albatrosmobile.png, kind: mobile, alt: "Coach attendance screen", caption: "Attendance on court-side phones" }
map:
  stations:
    - { id: pwa, label: "Club PWA", sub: "Coaches & secretary", at: [0, 0], section: original, side: above }
    - { id: engine, label: "Play-by-play engine", sub: "Plus-minus & lineup metrics", at: [2, 0], section: original }
    - { id: records, label: "Club records", sub: "Members, medical clearance, attendance", at: [0, 1], section: original, side: right }
    - { id: portal, label: "Next.js portal", sub: "Public web & news hub", at: [0, 2], section: original }
    - { id: cms, label: "Contentful CMS", sub: "News, rosters & events", at: [2, 2], section: original }
  links:
    - [pwa, engine]
    - [pwa, records]
    - [portal, cms]
---

## Context & The Organizational Challenge

Sports clubs operating at the community level face severe operational bottlenecks due to fragmented tools, volunteer turnover, and paper-based processes:

1. **Fragmented Youth Management:** Coaches tracked youth attendance, player progression, and contact information across informal chats, physical notebooks, or disjointed spreadsheets.
2. **Untapped Statistical Data:** Raw play-by-play game data provided by official league feeds existed in dense JSON formats, but coaching staffs lacked the tools to extract period performance or lineup plus-minus (±) metrics.
3. **Coaches and Secretary Working from Different Information:** Medical clearance, membership status, and who was actually attending lived in separate places, so coaches and the club secretary rarely had the same picture.
4. **Web Maintenance Bottlenecks:** The legacy website required developer intervention for basic updates, delaying match news, roster changes, and sponsor visibility.

**The Mission:** Execute a top-to-bottom digital modernization—building an intuitive operational PWA for coaches, automating advanced match analytics, and deploying an accessible headless web portal for the community and sponsors.

## Original Production Architecture

The initial system was engineered to deliver immediate operational utility while keeping running costs at zero for the non-profit organization.

### Architectural Decisions

* **Public Portal (Next.js + Contentful Headless CMS):**
  * **Framework:** Migrated the static legacy portal to Next.js using App Router to ensure fast page loads, automated SEO indexing for match recaps, and mobile responsiveness.
  * **Content Management:** Integrated Contentful, allowing non-technical club volunteers and media coordinators to publish news, post game schedules, and manage squad rosters autonomously.

* **Youth Operations & Attendance App (Mobile PWA):**
  * **Offline-First PWA:** Built a responsive PWA with offline caching capabilities, enabling youth coaches to log training attendance, analyze talent physical development, and track player medical notes directly on court-side mobile devices.
  * **Shared Club Records:** Centralized the club's member information so coaches and the club secretary work from the same records: medical clearance, which members are subscribed, and who is attending.

* **Play-by-Play Match Processor (TypeScript Engine):**
  * **JSON Processing:** Engine built to ingest raw league match JSON data, parsing time-stamped events to calculate lineup group dynamics, substitution cycles, and net efficiency differentials across periods.

## The AI Evolution: How We Build Today, and What Comes Next

AI is not part of the product yet. Where it already makes a difference is in how we build it.

### In Use Today: Building with AI Coding Agents

This is volunteer work, done in limited hours. AI coding agents are accelerating our delivery: with the same time invested, we ship more features and better software than we could before.

That extra capacity is what let the system grow beyond basketball. We are now centralizing the information of club members in other disciplines as well: boxing, jiu-jitsu, handball, volleyball, gym users, indoor cycling, and more.

### Planned: LLMs in the Club's Day-to-Day (Not Implemented Yet)

The next step is to use LLMs inside the club's own workflows:

* **News and Social Media:** Draft news articles and social media posts so volunteer media staff publish faster.
* **Sponsor Pitches:** Prepare better first drafts of proposals for new sponsors.
* **Insights for Coaches:** Analyze the data we already collect to give coaches insights they could not get before.

**How we plan to approach it:** the numbers will come from our own code, not from the model. The TypeScript engine already computes the statistics deterministically (plus-minus, rotation efficiency, period differentials); the plan is to hand those verified results to the LLM and use it only to write.

## Key Outcomes & Organizational Impact

### Measurable Results

* **100% Operational Digitization:** Replaced paper attendance across all youth categories with real-time digital tracking used daily by coaching staff.
* **One Shared Picture of the Club:** Coaches and the secretary now see the same information on medical clearance, subscribed members, and attendance.
* **Beyond Basketball:** Member information for other disciplines (boxing, jiu-jitsu, handball, volleyball, gym, indoor cycling) is being centralized in the same system.
* **Autonomous Content Publishing:** Empowered non-technical volunteers to publish 100% of club news without developer intervention.
* **Commercial Growth & Sponsorships:** Utilized the modernized web presence and Business Model Canvas to present professional sponsorship decks, securing new local corporate funding for the club.

### Key Engineering & Leadership Takeaways

1. **Tech as a Force Multiplier in Non-Profits:** Simple, well-architected digital tools can fundamentally transform the operational capacity of volunteer-driven organizations.
2. **AI Agents Multiply Volunteer Capacity:** With AI coding agents, the same volunteer hours produce more and better software, which is what made it possible to extend the system to the whole club.
3. **Product Management Beyond Code:** True technical leadership involves aligning digital strategy with commercial sustainability, stakeholder communication, and organizational governance.
