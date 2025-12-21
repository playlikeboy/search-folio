---
title: I Replaced My Portfolio with Google Search (And Recruiters Love It) 🔍
published: false
description: How I built a Next.js 15 portfolio template that mimics the Google SERP to boost conversion and usability.
tags: nextjs, webdev, portfolio, showdev
cover_image: https://your-deployment-url.com/og-image.jpg  <-- REPLACE THIS WITH YOUR OG IMAGE URL
---

Let's be honest: **Most developer portfolios are confusing.** 🛑

We spend weeks building 3D WebGL tunnels, complex scroll-jacking animations, and hidden navigation menus. It looks cool on Awwwards, but for a hiring manager who spends **6 seconds** scanning your site? It’s a nightmare.

I wanted a portfolio that was:
1.  **Instantly Familiar**: Zero learning curve.
2.  **Information Dense**: Key skills and links visible immediately.
3.  **Fast**: 100/100 Lighthouse score.

So I stole the best UI in the world: **Google Search.**

## Introducing SearchFolio 🔍

**Live Demo**: [https://searchfolio-demo.pages.dev](https://searchfolio-demo.pages.dev)
**Get the Template**: [Gumroad Link](https://sh20raj.gumroad.com/l/searchfolio)

![SearchFolio Demo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/placeholder-image.png)

### Why "The Google Look"?

Psychologically, we trust this interface. We are trained to look at the top result for the "Main Answer" and the sidebar for "Quick Facts".

By wrapping my career in this UI, I hacked the user experience:
*   **The "First Result"** is my Bio and Core Pitch.
*   **The "Knowledge Panel"** (right side) is my quick stats: Location, Education, Socials.
*   **The "Sitelinks"** are my direct calls to action (Contact, Projects).

It’s not just a gimmick; it’s UX optimization.

## The Tech Stack 🛠️

I didn't just want it to look like Google; I wanted it to be as fast as Google.

*   **Next.js 15 (App Router)**: For the latest React features and routing.
*   **Tailwind CSS 4**: For that pixel-perfect recreation of Google's `#202124` Dark Mode.
*   **Framer Motion**: For subtle, "app-like" Tab transitions.
*   **Static Export**: No server required. Hosted for **$0** on Cloudflare Pages.

### Zero-Config Setup

I hated hardcoding HTML for every new project. So I built this to be **Config-Driven**.

You update one file, `portfolio.ts`, and the whole site updates.

```typescript
// src/config/portfolio.ts
export const siteConfig = {
  name: "Shaswat Raj",
  jobTitle: "Full Stack Developer",
  location: "India",
  // ...
};

export const projectsConfig = [
  {
    name: "SearchFolio",
    description: "A Google-style portfolio template.",
    techStack: ["Next.js", "React", "Tailwind"],
    url: "https://github.com/sh20raj/searchfolio",
    stars: 120,
  },
  // ...
];
```

## Features for Developers

1.  **"People Also Ask" Accordion**: perfect for FAQs like "Are you available for freelance?" or "What is your tech stack?".
2.  **Rich Results for Projects**: I styled the Projects tab to look like Google Video/News results—thumbnails on the left, metadata on the right.
3.  **Keyboard Navigation**: Hit `/` to focus the search bar (just like the real thing).
4.  **Dark Mode Native**: It respects system preferences but defaults to that sweet, sweet OLED dark theme.

## Dealing with "Imposter Syndrome"

When I first launched this, I worried people would think it's "too simple". But the feedback has been the opposite.

> "This is the most readable portfolio I've ever seen." — Senior Dev Recruiter

Recruiters don't want 3D spinners. They want to know if you can build clean, performant software and if you are available for work. **SearchFolio answers those questions in < 200ms.**

## Get It Yourself 🚀

I've packaged this up as a cleaned-up, easy-to-deploy template.

*   ✅ **Source Code**: Full Next.js 15 Repo
*   ✅ **Documentation**: How to deploy to Cloudflare/Vercel in 2 mins
*   ✅ **Support**: I'm active on X/Twitter for any help.

**Grab it here**: [sh20raj.gumroad.com/l/searchfolio](https://sh20raj.gumroad.com/l/searchfolio)

Or if you just want to roast my code, check the demo: [searchfolio-demo.pages.dev](https://searchfolio-demo.pages.dev)

Let me know what you think! Are you Team Dark Mode or Light Mode? 👇

#nextjs #webdev #career #portfolio
