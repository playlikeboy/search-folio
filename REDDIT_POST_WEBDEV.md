# Reddit Post for r/webdev 🦀

**Important Note**: Today is Sunday. r/webdev usually restricts "Showoff" posts to **Saturdays**.
*   **Option A**: Wait for next Saturday to post the "Showoff" version.
*   **Option B (Recommended today)**: Post this "Technical Deep Dive" version. It focuses on the *code* and *learnings*, which is usually allowed as a discussion/resource.

---

## 📝 Post Title Options
1.  **I built a portfolio that looks exactly like Google Search (Next.js 15 + Tailwind 4)**
2.  **Open Source: A Google-style portfolio template using Next.js App Router & Static Exports**
3.  **Why I replaced my flashy 3D portfolio with a simple Google Search clone**

---

## 📄 Post Body (Copy & Paste)

**Hey r/webdev,**

I've been iterating on my portfolio for years. I went through the "WebGL Phase", the "Minimalist Phase", and the "Notion Clone Phase".

Recently, I realized something: **Recruiters spend < 6 seconds looking at your site.** If they can't find your resume or projects instantly, they bounce.

So I decided to steal the most familiar UI on the planet: **Google Search.**

I built **SearchFolio**, a Next.js 15 template that mimics the SERP experience.

**Live Demo**: [https://searchfolio-demo.pages.dev](https://searchfolio-demo.pages.dev)
**Repo / Template**: [https://sh20raj.gumroad.com/l/searchfolio](https://sh20raj.gumroad.com/l/searchfolio) *(It's free/pay-what-you-want)*

### 🛠 The Stack & Technical Challenges
I wanted this to be more than just a CSS skin. It had to be fast and functional.

1.  **Next.js 15 (App Router)**: Used the new `app/` directory structure.
2.  **Tailwind CSS 4**: Used the alpha/beta features for finer config control. The dark mode color is the exact Google Hex `#202124`.
3.  **Static Exports**: I'm hosting this for **$0 on Cloudflare Pages**. The build output is purely static HTML/CSS/JS chunks.

**The hardest part? The "Knowledge Panel" Layout.**
Getting the semantic HTML right for the "Knowledge Panel" (the sidebar on desktop) while keeping it responsive for mobile (where it disappears or stacks) took some Flexbox gymnastics. I ended up creating a `ResultCard` component that polymorphs based on the content type (Rich Snippet vs. Text Result).

### ⚡ Performance
Since it's a portfolio, it needs to be accessible.
*   **Lighthouse**: 100/100/100/100.
*   **Zero Layout Shift**: The images in the rich results have strict aspect ratios to prevent CLS.

### 👨‍💻 For Developers
I made it **Config-Driven**. You don't hardcode HTML.
You just edit a `portfolio.ts` file:
```typescript
export const siteConfig = {
  name: "Your Name",
  links: { github: "..." }
};
```
...and the whole site updates.

**I'd love your feedback:**
1.  Does the "Google" gimmick feel too cheesy, or is it actually usable?
2.  Any performance tips for Next.js 15 static exports I might have missed?

Thanks!
