"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Tabs } from "@/components/layout/Tabs";
import { Footer } from "@/components/layout/Footer";
import { ResultCard } from "@/components/search/ResultCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, GitFork, Eye, Globe, MapPin, Link as LinkIcon, MoreHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, aboutConfig, projectsConfig, experienceConfig, contactConfig } from "@/config/portfolio";
import { themeConfig } from "@/config/theme";
import { motion } from "framer-motion";

// Tab Components
import { ProjectsTab } from "@/components/tabs/ProjectsTab";
import { ExperienceTab } from "@/components/tabs/ExperienceTab";
import { ProofTab } from "@/components/tabs/ProofTab";
import { ImagesTab } from "@/components/tabs/ImagesTab";
import { ContactTab } from "@/components/tabs/ContactTab";
import { AIInsightTab } from "@/components/tabs/AIInsightTab";

function HomeContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "all";

  const renderTabContent = () => {
    switch (activeTab) {
      case "projects":
        return <ProjectsTab />;
      case "experience":
        return <ExperienceTab />;
      case "proof":
        return <ProofTab />;
      case "images":
        return <ImagesTab />;
      case "contact":
        return <ContactTab />;
      case "ai":
        return <AIInsightTab />;
      default:
        return <AllTab />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-[#d2e3fc] selection:text-[#202124]">
      <Header />
      <Tabs activeTab={activeTab} />

      <main className="flex-1 px-4 md:px-[180px] py-3 max-w-[1240px] w-full">
        {/* Search Stats */}
        <div className="text-[14px] text-[#70757a] dark:text-[#9aa0a6] mb-4">
          About {themeConfig.searchStats.results} results ({themeConfig.searchStats.time} seconds)
        </div>

        {/* Knowledge Panel (Right Side - Desktop) */}
        {activeTab === "all" && (
          <div className="hidden lg:block float-right w-[370px] ml-12 mb-8">
            <div className="border border-border/60 rounded-[8px] overflow-hidden bg-card">
              {/* Top Image Section */}
              <div className="flex gap-1 p-2 pb-0">
                <div className="h-32 flex-1 rounded-l-[4px] bg-blue-100 dark:bg-blue-900/20 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={siteConfig.avatarUrl} alt={siteConfig.name} className="object-cover w-full h-full" />
                </div>
                <div className="h-32 w-1/3 flex flex-col gap-1">
                  <div className="flex-1 rounded-tr-[4px] bg-secondary/50"></div>
                  <div className="flex-1 rounded-br-[4px] bg-secondary/50"></div>
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-[30px] font-normal leading-tight font-heading mb-1">{siteConfig.name}</h2>
                <p className="text-[14px] text-[#70757a] dark:text-[#9aa0a6] mb-4">{siteConfig.headline}</p>

                <p className="text-[14px] leading-6 mb-4">
                  {siteConfig.bio} <a href="#" className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline">Wikipedia</a>
                </p>

                <div className="space-y-3 text-[14px]">
                  <div className="flex gap-2">
                    <span className="font-bold text-[#202124] dark:text-[#e8eaed]">Born:</span>
                    <span className="text-[#202124] dark:text-[#e8eaed]">{siteConfig.location}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-[#202124] dark:text-[#e8eaed]">Education:</span>
                    <span className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer">{aboutConfig.education}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-[#202124] dark:text-[#e8eaed]">Organizations:</span>
                    <span className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer">TechCorp, StartUpInc</span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-4 pt-4 border-t border-border/40">
                  <h3 className="text-[16px] font-normal mb-3">Profiles</h3>
                  <div className="flex gap-3 overflow-x-auto no-scrollbar">
                    <a href={siteConfig.socials.linkedin} className="flex flex-col items-center gap-1 min-w-[60px]">
                      <div className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center bg-white dark:bg-[#303134]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://static.licdn.com/sc/h/akt4ae504epesldzj74dzred8" alt="LI" className="h-5 w-5" />
                      </div>
                      <span className="text-[12px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline">LinkedIn</span>
                    </a>
                    <a href={siteConfig.socials.github} className="flex flex-col items-center gap-1 min-w-[60px]">
                      <div className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center bg-white dark:bg-[#303134]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GH" className="h-5 w-5" />
                      </div>
                      <span className="text-[12px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline">GitHub</span>
                    </a>
                    <a href={siteConfig.socials.twitter} className="flex flex-col items-center gap-1 min-w-[60px]">
                      <div className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center bg-white dark:bg-[#303134]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://abs.twimg.com/favicons/twitter.3.ico" alt="X" className="h-5 w-5" />
                      </div>
                      <span className="text-[12px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* People also search for */}
            <div className="mt-4 border border-border/60 rounded-[8px] bg-card p-4">
              <h3 className="text-[20px] font-normal mb-4">People also search for</h3>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex flex-col gap-1 cursor-pointer group">
                    <div className="aspect-square bg-secondary/50 rounded-[4px]"></div>
                    <span className="text-[12px] text-[#1a0dab] dark:text-[#8ab4f8] group-hover:underline truncate">Famous Dev</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* List Content */}
        <div className="flex flex-col max-w-[600px]">
          {renderTabContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// "All" tab content with OG Google organic look
function AllTab() {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  const peopleAlsoAsk = [
    {
      q: `What is ${siteConfig.name} best at?`,
      a: `${siteConfig.name} specializes in full-stack development, particularly with Next.js, React, and Cloudflare ecosystem. They have a strong focus on high-performance web applications and UI/UX design.`
    },
    {
      q: `How can I hire ${siteConfig.name}?`,
      a: `You can hire ${siteConfig.name} by visiting the Contact tab or reaching out via LinkedIn. They are currently available for freelance projects and consulting.`
    },
    {
      q: `What is SearchFolio?`,
      a: "SearchFolio is a portfolio template designed to look like a search engine results page, helping developers stand out with a unique, familiar, and high-converting presentation."
    }
  ];

  return (
    <>
      {/* 0. Sponsored Ad - Buy Template */}
      <div className="flex flex-col gap-1 mb-8 max-w-[600px]">
        <div className="flex items-center gap-1 text-[14px] text-[#202124] dark:text-[#e8eaed] mb-1">
          <span className="font-bold">Sponsored</span>
          <span className="text-[#4d5156] dark:text-[#bdc1c6] mx-1">·</span>
          <span className="text-[#4d5156] dark:text-[#bdc1c6] text-[12px]">sh20raj.gumroad.com/l/searchfolio</span>
        </div>
        <a href="https://sh20raj.gumroad.com/l/searchfolio" target="_blank" className="text-[20px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer block leading-normal mb-1">
          Buy SearchFolio - The Ultimate Portfolio Template
        </a>
        <div className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed">
          <span className="font-bold text-[#202124] dark:text-[#e8eaed]">Stand out instantly.</span> Transform your personal brand with a high-converting, familiar Google Search interface. Easy to customize, SEO-ready, and dark mode native.
        </div>
        <div className="mt-2 flex gap-3">
          <a href="https://sh20raj.gumroad.com/l/searchfolio" target="_blank" className="flex items-center gap-1 text-[14px] font-medium text-[#1a0dab] dark:text-[#8ab4f8] hover:underline decoration-1">
            Get the Template <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>

      {/* 1. Main Website Result */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ResultCard
          title={`${siteConfig.name} - ${siteConfig.headline}`}
          url={siteConfig.websiteUrl}
          description={siteConfig.bio}
          siteName={siteConfig.name}
          favicon={siteConfig.avatarUrl}
        >
          {/* SiteLinks (Indented results) */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pl-0">
            <div className="flex flex-col gap-1">
              <Link href="/?tab=projects" className="text-[16px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline leading-tight">Projects</Link>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-snug line-clamp-2 max-w-[280px]">View 50+ open source repositories and case studies.</p>
            </div>
            <div className="flex flex-col gap-1">
              <Link href="/?tab=all" className="text-[16px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline leading-tight">About Me</Link>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-snug line-clamp-2 max-w-[280px]">Full stack developer with passion for UI/UX.</p>
            </div>
            <div className="flex flex-col gap-1">
              <Link href="/?tab=contact" className="text-[16px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline leading-tight">Contact</Link>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-snug line-clamp-2 max-w-[280px]">Get in touch for freelance work or consulting.</p>
            </div>
            <div className="flex flex-col gap-1">
              <Link href="/?tab=ai" className="text-[16px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline leading-tight">AI Insight</Link>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-snug line-clamp-2 max-w-[280px]">Ask our AI agent specific questions about my work.</p>
            </div>
          </div>
        </ResultCard>
      </motion.div>

      {/* 2. People Also Ask (Accordion) */}
      <div className="mb-8 border-y border-border/40 py-0">
        <h3 className="text-[20px] text-[#202124] dark:text-[#e8eaed] font-normal py-4 cursor-default">People also ask</h3>
        {peopleAlsoAsk.map((item, i) => (
          <div key={i} className="border-t border-border/40 first:border-t-0">
            <div
              className="py-3 flex justify-between cursor-pointer hover:bg-transparent group items-center"
              onClick={() => toggleQuestion(item.q)}
            >
              <span className="text-[14px] text-[#202124] dark:text-[#e8eaed] group-hover:underline">{item.q}</span>
              <span className="p-2 rounded-full bg-secondary/50 dark:bg-[#303134]">
                <ChevronDown className={cn("h-4 w-4 text-[#70757a] dark:text-[#9aa0a6] transition-transform duration-200", expandedQuestion === item.q ? "rotate-180" : "")} />
              </span>
            </div>
            {expandedQuestion === item.q && (
              <div className="pb-4 text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed animate-in fade-in slide-in-from-top-1">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. GitHub Result (List View) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <ResultCard
          title={`GitHub: ${siteConfig.name} (${projectsConfig.length} repositories)`}
          url="https://github.com › shaswatraj"
          description={`Follow their code on GitHub. ${projectsConfig.slice(0, 2).map(p => p.name).join(", ")} and more open source contributions.`}
          siteName="GitHub"
          favicon="https://www.google.com/s2/favicons?domain=github.com/&sz=40"
        >
          {/* GitHub Star Rating (Subtle) */}
          <div className="flex items-center gap-1 text-[12px] text-[#70757a] dark:text-[#9aa0a6] mb-1">
            <div className="flex text-[#fbbc04]">★★★★★</div>
            <span>Rating: 5.0 · 500+ votes</span>
          </div>
        </ResultCard>
      </motion.div>

      {/* 4. Custom Projects Result */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ResultCard
          title="Top Projects & Case Studies"
          url={`${siteConfig.websiteUrl} › projects`}
          description="Explore high-impact projects built with Next.js, React, and Cloudflare."
          siteName={siteConfig.name}
          favicon={siteConfig.avatarUrl}
        >
          <div className="mt-2 text-sm text-[#4d5156] dark:text-[#bdc1c6]">
            {projectsConfig.slice(0, 3).map((p, i) => (
              <span key={i}>
                <Link href="/?tab=projects" className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline">{p.name}</Link>
                {i < 2 && " • "}
              </span>
            ))}
          </div>
        </ResultCard>
      </motion.div>

      {/* 5. LinkedIn Result */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ResultCard
          title={`${siteConfig.name} - Senior Frontend Engineer - TechCorp | LinkedIn`}
          url="https://in.linkedin.com › ... › Web Developers"
          description={`View ${siteConfig.name}'s profile on LinkedIn, the world's largest professional community. ${siteConfig.name} has 5 jobs listed on their profile.`}
          siteName="LinkedIn"
          favicon="https://www.google.com/s2/favicons?domain=https://linkedin.com/&sz=40"
        />
      </motion.div>

    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-background">
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
