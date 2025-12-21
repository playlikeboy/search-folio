# Customization Guide

This guide covers everything you need to know to personalize SearchFolio.

## Table of Contents

1. [Basic Setup](#basic-setup)
2. [Portfolio Content](#portfolio-content)
3. [Theme & Branding](#theme--branding)
4. [Adding New Tabs](#adding-new-tabs)
5. [Component Customization](#component-customization)
6. [AI Integration](#ai-integration)

---

## Basic Setup

### Step 1: Edit Portfolio Config

Open `src/config/portfolio.ts` and update these sections:

```typescript
export const siteConfig = {
  name: "Your Name",
  headline: "Your Title",
  bio: "Your bio...",
  avatarUrl: "https://your-avatar-url.com/image.png",
  websiteUrl: "https://yourwebsite.com",
  location: "Your City",
  socials: {
    twitter: "https://twitter.com/you",
    github: "https://github.com/you",
    linkedin: "https://linkedin.com/in/you",
    email: "mailto:you@email.com",
  },
};
```

### Step 2: Add Your Projects

```typescript
export const projectsConfig = [
  {
    name: "Project Name",
    description: "Short description",
    url: "https://github.com/you/project",
    stars: 100,
    forks: 10,
    techStack: ["React", "Node.js"],
  },
  // Add more projects...
];
```

### Step 3: Add Experience

```typescript
export const experienceConfig = [
  {
    role: "Job Title",
    company: "Company Name",
    period: "2022 - Present",
    description: "What you did there",
  },
  // Add more jobs...
];
```

---

## Theme & Branding

Open `src/config/theme.ts`:

```typescript
export const themeConfig = {
  // Brand Colors (Google-inspired by default)
  brandColors: {
    blue: "#4285f4",
    red: "#ea4335",
    yellow: "#fbbc04",
    green: "#34a853",
  },
  
  // Default theme: "light" | "dark" | "system"
  defaultTheme: "system",
  
  // Logo text
  logoText: "Gfolio",
  
  // Or use an image logo
  logoImageUrl: "/logo.png",
  
  // Fake search stats
  searchStats: {
    results: "1,240,000",
    time: "0.42",
  },
};
```

---

## Adding New Tabs

### Step 1: Create Tab Component

Create `src/components/tabs/NewTab.tsx`:

```tsx
"use client";

export function NewTab() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Your content here
      </p>
      {/* Add your content */}
    </div>
  );
}
```

### Step 2: Add to Tabs Navigation

Edit `src/components/layout/Tabs.tsx`:

```typescript
const tabs = [
  // ... existing tabs
  { name: "New Tab", href: "/?tab=newtab", icon: YourIcon, key: "newtab" },
];
```

### Step 3: Add to Page Router

Edit `src/app/page.tsx`:

```typescript
import { NewTab } from "@/components/tabs/NewTab";

// In renderTabContent():
case "newtab":
  return <NewTab />;
```

---

## Component Customization

### Modifying Result Cards

Edit `src/components/search/ResultCard.tsx` to change how search results look.

### Changing Colors

Global colors are in `src/app/globals.css`. The color system uses CSS variables:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* etc. */
}

.dark {
  --background: oklch(0.145 0 0);
  /* etc. */
}
```

### Custom Fonts

Edit `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-custom",
  subsets: ["latin"],
});
```

---

## AI Integration

SearchFolio has a placeholder AI tab. To enable it:

### Step 1: Enable in Config

```typescript
// src/config/portfolio.ts
export const aiInsightConfig = {
  enabled: true,
  apiEndpoint: "/api/ai-insight",
  questions: [
    "What is [Name] best at?",
    "Show their best project",
  ],
};
```

### Step 2: Create API Route

Create `src/app/api/ai-insight/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { question } = await request.json();
  
  // Call your AI provider (OpenAI, Anthropic, etc.)
  const response = await yourAIProvider.chat({
    messages: [
      { role: "system", content: "You are an AI assistant..." },
      { role: "user", content: question },
    ],
  });
  
  return NextResponse.json({ answer: response });
}
```

---

## Tips for Vibe Coders

If you're using AI coding assistants (Cursor, GitHub Copilot, etc.):

1. **Start with the config files** - They're well-documented
2. **Use component names** - "Edit the ProjectsTab component"
3. **Reference the structure** - "Add a new tab like ContactTab"
4. **Ask for specific changes** - "Change the primary color to purple"

The codebase is designed to be AI-friendly with clear component boundaries and TypeScript types.

---

Need more help? [Open an issue](https://github.com/yourusername/searchfolio/issues)
