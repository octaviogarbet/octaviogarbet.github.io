---
title: "noRoof Biz \u2014 White-Label E-Commerce & Business Management Platform"
summary: "Modular e-commerce and store management platform built to simplify digital operations, payment processing, and customer communication for small businesses in Uruguay."
role: "Founder, Lead Systems Architect & Full-Stack Developer"
order: 1
start: 2024
end: present
url: "https://biz.noroof.dev"
lines: [product, architecture]
stack: ["Next.js", "Angular", "Firebase (Firestore, Cloud Functions, Auth)", "Mercado Pago API", "Brevo SDK", "Telegram Bot API", "LLM features (product & order drafting)"]
scope: ["Product Discovery", "Multi-tenant Architecture", "Local Payment Integration", "Operational Automation", "AI Modernization"]
images:
  - { src: ./../../assets/case-studies/biz/bizdesktop.png, kind: desktop, alt: "Catalog list screen", caption: "Catalog list in admin on desktop" }
  - { src: ./../../assets/case-studies/biz/bizmobile.png, kind: mobile, alt: "Product details screen", caption: "Product details page on phones" }
map:
  stations:
    - { id: storefront, label: "Next.js storefront", sub: "Public store & SEO", at: [0, 0], section: original }
    - { id: admin, label: "Angular admin", sub: "Merchant dashboard", at: [0, 2], section: original }
    - { id: firebase, label: "Firebase", sub: "Functions & Firestore", at: [2, 1], section: original, side: below-right }
    - { id: payments, label: "Mercado Pago", sub: "Payments", at: [4, 0], section: original, side: right }
    - { id: ai, label: "AI assistants", sub: "Product & order drafting", at: [4, 1], section: ai, side: right }
    - { id: messaging, label: "Brevo / Telegram", sub: "Messaging", at: [4, 2], section: original, side: right }
  links:
    - [storefront, firebase]
    - [admin, firebase]
    - [firebase, payments]
    - [firebase, ai]
    - [firebase, messaging]
---

## Context & The Business Problem

Small-to-medium businesses (SMBs) and local sports clubs in Uruguay often face steep barriers when establishing an online retail presence. Off-the-shelf platforms like Shopify or WooCommerce present specific challenges for this market:

1. **Local Payment & Invoicing Friction:** Lack of native, zero-friction integration with regional payment gateways (Mercado Pago) and local electronic invoicing standards.
2. **Operational Complexity:** Overly complex administrative panels that overwhelm non-technical store owners who just need to track stock, process orders, and send receipt notifications.
3. **High Fixed Costs:** Monthly subscription models in USD that cut heavily into small merchant margins.

**The Mission:** Architect a lightweight, multi-tenant platform that delivers high-performance Next.js storefronts for consumers and an intuitive Angular admin workspace for merchants—optimized specifically for regional commerce workflows.

## Original Production Architecture

The original platform was engineered around a decoupled serverless architecture to guarantee isolation, low latency, and zero infrastructure maintenance costs during early scaling.

### Architectural Decisions

* **Frontend Dual-Framework Setup:**
  * **Next.js (Storefronts):** Utilized for App Router Server Components, static site generation (SSG), and incremental static regeneration (ISR) to deliver near-instant loading speeds and optimal SEO indexing for merchant catalogs.
  * **Angular (Merchant Dashboard):** Chosen for its opinionated structure, robust reactive form handling (RxJS), and enterprise-grade state management for complex inventory tables and order management workflows.

* **Backend & Multi-Tenancy (Firebase Stack):**
  * **Database:** Cloud Firestore organized with strict multi-tenant collection security rules.
  * **Auth & Security:** Custom Firebase Authentication claims (`store_admin`, `store_id`) to enforce scope boundaries at the API layer, preventing cross-tenant data leaks.
  * **Serverless Logic:** Firebase Cloud Functions handling payment webhooks, transactional email dispatches via Brevo SDK, and instant order notification alerts sent to merchant Telegram groups.

## The AI Evolution: Giving Merchants Their Time Back

With the transactional flow working, the biggest remaining cost for merchants was the time they spent in the admin. That is where AI is going first.

### Done: Two Features That Cut Admin Time

* **Products from a Photo and a Text:** Instead of filling in the whole product form, a merchant uploads an image and a short text, and the product and its items are drafted from them.
* **Draft Orders from a WhatsApp Message:** Many orders arrive by WhatsApp. Instead of picking each product by hand, the merchant pastes the message into the admin and a draft order is created from it.

### Building Faster

AI-assisted, agentic coding workflows have made feature iteration around 100% faster, roughly twice the pace we had before, while keeping strict TypeScript validation with Zod schemas.

### Roadmap: Features AI Makes Possible

These were out of reach for a platform this size before AI. None of them is built yet:

* **Marketing Content & Copy Assistant:** Help merchants write product copy and marketing content.
* **AI Shopping Assistant:** Guide customers from plain requests like *"I want a gaming laptop to play GTA"* or *"I'm looking for a present for my wife"* to the right products and suggestions.
* **Support Agents (MCP):** Let an agent answer questions like *"Where is my order?"* or *"Has my payment cleared?"* from the store's own order data.

## Key Outcomes & Engineering Learnings

### Measureable Impact

* **Zero Downtime Deployments:** Successfully deployed live production storefronts serving active local merchants and sports club merchandise shops.
* **Automated Customer Touchpoints:** Replaced manual receipt emailing with 100% automated transactional messaging across Telegram and Brevo.
* **Faster Catalog Onboarding:** Products are created from a photo and a text instead of a full form.
* **Orders Straight from WhatsApp:** Pasting a customer's message replaces picking products one by one.
* **Twice the Iteration Speed:** Feature iteration is around 100% faster with AI-assisted development.

### Key Engineering Takeaways

1. **AI Drafts, Merchants Confirm:** Both AI features produce drafts, a filled-in product and a draft order, so they save time without deciding stock or orders on their own.
2. **Multi-Tenant Security First:** Designing custom claims in Firebase early saved hundreds of hours of refactoring when scaling from a single store to a multi-tenant platform.
3. **Build Around Existing Habits:** Merchants already receive orders on WhatsApp. Meeting them there removes a step instead of asking them to change how they work.
4. **Pragmatic Technology Choices:** Choosing the right tool for the job (Next.js for consumer web vs. Angular for complex administrative tools) yields better user experiences than trying to force a single framework across all domains.
