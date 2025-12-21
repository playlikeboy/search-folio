"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Tabs } from "@/components/layout/Tabs";
import { Footer } from "@/components/layout/Footer";
import { ResultCard } from "@/components/search/ResultCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, GitFork, Eye, Globe, MapPin, Link as LinkIcon, MoreHorizontal } from "lucide-react";
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
  return (
    <>
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
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 pl-0">
            <div>
              <a href="#" className="text-[16px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline block mb-0.5">Projects</a>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] line-clamp-2">View 50+ open source repositories and case studies.</p>
            </div>
            <div>
              <a href="#" className="text-[16px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline block mb-0.5">About Me</a>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] line-clamp-2">Full stack developer with passion for UI/UX.</p>
            </div>
            <div>
              <a href="#" className="text-[16px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline block mb-0.5">Contact</a>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] line-clamp-2">Get in touch for freelance work or consulting.</p>
            </div>
            <div>
              <a href="#" className="text-[16px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline block mb-0.5">Blog</a>
              <p className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] line-clamp-2">Read my latest thoughts on tech.</p>
            </div>
          </div>
        </ResultCard>
      </motion.div>

      {/* 2. GitHub Result (List View) */}
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
          favicon="https://github.githubassets.com/favicons/favicon.svg"
        >
          {/* GitHub Star Rating (Subtle) */}
          <div className="flex items-center gap-1 text-[12px] text-[#70757a] dark:text-[#9aa0a6] mb-1">
            <div className="flex text-[#fbbc04]">★★★★★</div>
            <span>Rating: 5.0 · 500+ votes</span>
          </div>
        </ResultCard>
      </motion.div>

      {/* 3. People Also Ask (Accordion) */}
      <div className="mb-8 border-y border-border/40 py-2">
        <h3 className="text-[20px] text-[#202124] dark:text-[#e8eaed] font-normal px-0 mb-3 ml-0">People also ask</h3>
        {[
          `What is ${siteConfig.name} best at?`,
          `How can I hire ${siteConfig.name}?`,
          `What is SearchFolio?`
        ].map((q, i) => (
          <div key={i} className="py-2.5 px-0 flex justify-between cursor-pointer hover:bg-transparent border-t first:border-t-0 border-border/20 group">
            <span className="text-[14px] text-[#202124] dark:text-[#e8eaed] group-hover:underline">{q}</span>
            <MoreHorizontal className="h-4 w-4 text-[#70757a] dark:text-[#9aa0a6] opacity-50" />
          </div>
        ))}
      </div>

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
        >
          <div className="mt-2 text-sm text-[#4d5156] dark:text-[#bdc1c6]">
            {projectsConfig.slice(0, 3).map((p, i) => (
              <span key={i}>
                <a href="#" className="text-[#1a0dab] dark:text-[#8ab4f8] hover:underline">{p.name}</a>
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
          favicon="https://static.licdn.com/sc/h/akt4ae504epesldzj74dzred8"
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
