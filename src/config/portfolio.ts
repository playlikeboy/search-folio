/**
 * ===================================================================
 * SEARCHFOLIO - PORTFOLIO CONFIGURATION
 * ===================================================================
 * 
 * This is the MAIN file you'll edit to customize your portfolio.
 * Just fill in your own information and you're ready to go!
 * 
 * ===================================================================
 */

export const siteConfig = {
    // Your Name (appears in search bar and as main heading)
    name: "Shaswat Raj",

    // One-liner headline
    headline: "Full Stack Developer & Founder",

    // Short bio for the Knowledge Panel
    bio: "Shaswat Raj is a Full Stack Developer and entrepreneur known for building high-performance web applications. He specializes in Next.js, React, and Cloud Architecture.",

    // Your avatar URL (use a square image)
    avatarUrl: "https://github.com/shadcn.png",

    // Your personal website URL
    websiteUrl: "https://sh20raj.github.io",

    // Location (shown in footer like Google does)
    location: "India",

    // Social links
    socials: {
        twitter: "https://twitter.com/shaswatraj",
        github: "https://github.com/shaswatraj",
        linkedin: "https://linkedin.com/in/shaswatraj",
        email: "mailto:hello@sh20raj.github.io",
    },
};

export const aboutConfig = {
    // Education
    education: "Your University",

    // Key facts (shown in Knowledge Panel)
    facts: [
        { label: "Projects", value: "SearchFolio, FinScope, RitikTech" },
        { label: "Experience", value: "5+ years" },
        { label: "Stack", value: "React, Next.js, Node.js" },
    ],
};

export const projectsConfig = [
    {
        name: "SearchFolio",
        description: "A portfolio that looks like Google Search.",
        url: "https://github.com/shaswatraj/searchfolio",
        stars: 124,
        forks: 12,
        techStack: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
        name: "FinScope",
        description: "Advanced financial calculators suite for professionals.",
        url: "https://github.com/shaswatraj/finscope",
        stars: 89,
        forks: 5,
        techStack: ["React", "Charts.js", "Supabase"],
    },
    {
        name: "Strivio",
        description: "Productivity ecosystem for modern founders.",
        url: "https://strivio.world",
        stars: 0,
        forks: 0,
        views: 2100,
        techStack: ["Next.js", "Cloudflare", "AI"],
    },
];

export const experienceConfig = [
    {
        role: "Senior Frontend Engineer",
        company: "TechCorp",
        period: "2023 - Present",
        description: "Leading frontend architecture and design system development.",
    },
    {
        role: "Lead Developer",
        company: "StartUpInc",
        period: "2021 - 2023",
        description: "Built core product from 0 to 1, scaling to 10k users.",
    },
    {
        role: "Freelance Full Stack Developer",
        company: "Self-employed",
        period: "2019 - 2021",
        description: "Delivered 20+ projects for clients worldwide.",
    },
];

export const proofConfig = {
    certificates: [
        { name: "AWS Solutions Architect", issuer: "Amazon", year: 2023 },
        { name: "Google Cloud Professional", issuer: "Google", year: 2022 },
    ],
    achievements: [
        "Product Hunt #1 Product of the Day",
        "GitHub Star - 500+ stars on open source projects",
        "Featured in TechCrunch",
    ],
    githubStats: {
        contributions: 1247,
        repositories: 45,
        followers: 234,
    },
};

export const contactConfig = {
    // Call-to-action text
    ctaTitle: "Hire Shaswat Raj - Expert Web Developer",
    ctaDescription: "Available for new projects. Specialized in React, Next.js, and sleek UI Design. Let's build your next big idea together. Book a free consultation call today.",

    // Buttons
    primaryButton: {
        text: "Book a Call",
        url: "https://calendly.com/shaswatraj",
    },
    secondaryButton: {
        text: "Send Email",
        url: "mailto:hello@sh20raj.github.io",
    },
};

export const imagesConfig = [
    { url: "/images/project1.png", alt: "SearchFolio Screenshot", caption: "SearchFolio - Main Interface" },
    { url: "/images/project2.png", alt: "FinScope Dashboard", caption: "FinScope - Calculator Suite" },
    { url: "/images/project3.png", alt: "Code Sample", caption: "Clean Code Architecture" },
];

export const aiInsightConfig = {
    enabled: false, // Set to true if you have AI integration
    questions: [
        "What is Shaswat best at?",
        "Show his best project",
        "Why should I hire him?",
    ],
    // Add your AI endpoint here if enabled
    apiEndpoint: "/api/ai-insight",
};
