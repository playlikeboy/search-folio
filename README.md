# SearchFolio 🔍

A **Google Search-themed portfolio** that makes recruiters and clients instantly understand who you are. Your personal SEO storytelling tool.

> *"When people search your name, this is what they see."*

![SearchFolio Demo](./docs/demo.png)

## ✨ Features

- **Google SERP Layout** - Familiar, professional, instantly recognizable
- **Tab Navigation** - All, Projects, Experience, Proof, Images, Contact, AI Insight
- **Dark Mode** - System-synced theming
- **Fully Customizable** - Edit 2 config files and you're done
- **SEO Optimized** - Proper meta tags, structured data ready
- **Responsive** - Works perfectly on mobile and desktop
- **Static Export** - Deploy anywhere (Cloudflare Pages, Vercel, Netlify)

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/searchfolio.git
cd searchfolio
npm install
```

### 2. Customize Your Portfolio

Edit these two files to personalize:

**`src/config/portfolio.ts`** - Your content (name, bio, projects, experience)
**`src/config/theme.ts`** - Visual settings (colors, logo, fonts)

### 3. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy

```bash
npm run build
```

Upload the `out/` folder to any static hosting provider.

## 📁 Project Structure

```
searchfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Main portfolio page
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/             # Header, Tabs, Footer
│   │   ├── search/             # ResultCard components
│   │   ├── tabs/               # Tab content (Projects, Experience, etc.)
│   │   └── ui/                 # shadcn/ui components
│   ├── config/
│   │   ├── portfolio.ts        # ⭐ YOUR CONTENT HERE
│   │   └── theme.ts            # ⭐ YOUR BRANDING HERE
│   └── lib/                    # Utilities
├── public/                     # Static assets
├── docs/                       # Documentation
└── package.json
```

## 🎨 Customization Guide

### Basic Customization (5 minutes)

1. Open `src/config/portfolio.ts`
2. Replace the sample data with your own:
   - Name, headline, bio
   - Projects, experience, achievements
   - Social links, contact info

That's it! Your portfolio is ready.

### Advanced Customization

See [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) for:
- Custom themes and colors
- Adding new tabs
- Modifying component styles
- AI integration setup

## 🌐 Deployment Options

| Platform | Guide |
|----------|-------|
| Cloudflare Pages | [Deploy Guide](./docs/DEPLOYMENT.md#cloudflare-pages) |
| Vercel | [Deploy Guide](./docs/DEPLOYMENT.md#vercel) |
| Netlify | [Deploy Guide](./docs/DEPLOYMENT.md#netlify) |
| GitHub Pages | [Deploy Guide](./docs/DEPLOYMENT.md#github-pages) |

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Roboto

## 📜 License

MIT License - Use freely for personal and commercial projects.

## 🤝 Support

- [Documentation](./docs/)
- [Issues](https://github.com/yourusername/searchfolio/issues)
- [Discussions](https://github.com/yourusername/searchfolio/discussions)

---

Made with ❤️ by [Shaswat Raj](https://shaswatraj.com)
