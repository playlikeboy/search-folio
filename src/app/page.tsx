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
import { Star, GitFork, Eye } from "lucide-react";
import { siteConfig, aboutConfig, projectsConfig, experienceConfig, contactConfig } from "@/config/portfolio";
import { themeConfig } from "@/config/theme";

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
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-200">
      <Header />
      <Tabs activeTab={activeTab} />

      <main className="flex-1 px-4 md:px-[180px] py-6 max-w-7xl mx-auto w-full">
        {/* Search Stats */}
        <div className="text-xs md:text-sm text-muted-foreground mb-6">
          About {themeConfig.searchStats.results} results ({themeConfig.searchStats.time} seconds)
        </div>

        {/* Knowledge Panel (Right Side - Desktop) - Only on "All" tab */}
        {activeTab === "all" && (
          <div className="hidden lg:block float-right w-[350px] ml-8 border border-border/60 rounded-xl overflow-hidden shadow-sm bg-card p-4">
            <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-medium tracking-tight">{siteConfig.name}</h2>
                <p className="text-muted-foreground text-sm">{siteConfig.headline}</p>
              </div>
              <div className="h-16 w-16 bg-blue-500 rounded-md overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={siteConfig.avatarUrl} alt={siteConfig.name} className="h-full w-full object-cover rounded-md" />
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-4">
              {siteConfig.bio}
            </p>

            <div className="border-t border-border/40 pt-3 space-y-2">
              <div className="flex gap-2 text-sm">
                <span className="font-semibold w-24">Education:</span>
                <span className="text-blue-500 hover:underline cursor-pointer">{aboutConfig.education}</span>
              </div>
              {aboutConfig.facts.map((fact) => (
                <div key={fact.label} className="flex gap-2 text-sm">
                  <span className="font-semibold w-24">{fact.label}:</span>
                  <span className="text-muted-foreground">{fact.value}</span>
                </div>
              ))}
              <div className="flex gap-2 text-sm">
                <span className="font-semibold w-24">Socials:</span>
                <div className="flex gap-2">
                  <a href={siteConfig.socials.twitter} target="_blank" className="text-blue-500 hover:underline">Twitter</a>
                  <a href={siteConfig.socials.github} target="_blank" className="text-blue-500 hover:underline">GitHub</a>
                  <a href={siteConfig.socials.linkedin} target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content */}
        <div className="flex flex-col">
          {renderTabContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// "All" tab content - the main SERP view
function AllTab() {
  return (
    <>
      {/* 1. About Me Result */}
      <ResultCard
        title={`${siteConfig.name} - ${siteConfig.headline}`}
        url={`${siteConfig.websiteUrl} › about`}
        description={siteConfig.bio}
        siteName={siteConfig.name}
      />

      {/* 2. Projects Result (Rich Snippet) */}
      <ResultCard
        title={`Projects by ${siteConfig.name}: ${projectsConfig.slice(0, 2).map(p => p.name).join(", ")}`}
        url="github.com › projects"
        description={`Explore top open-source projects including ${projectsConfig.map(p => p.name).join(", ")}.`}
        siteName="GitHub"
        favicon="https://github.githubassets.com/favicons/favicon.svg"
      >
        {/* Rich Snippet: Project Cards */}
        <div className="flex gap-4 mt-2 overflow-x-auto pb-2 no-scrollbar">
          {projectsConfig.slice(0, 3).map((project) => (
            <Card key={project.name} className="min-w-[200px] border-border/60 shadow-none bg-secondary/10">
              <CardContent className="p-3">
                <div className="font-medium text-blue-500 hover:underline cursor-pointer">{project.name}</div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1"><Star className="h-3 w-3" /> {project.stars}</div>
                  )}
                  {project.forks > 0 && (
                    <div className="flex items-center gap-1"><GitFork className="h-3 w-3" /> {project.forks}</div>
                  )}
                  {project.views && (
                    <div className="flex items-center gap-1"><Eye className="h-3 w-3" /> {project.views}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ResultCard>

      {/* 3. Experience Result */}
      <ResultCard
        title="Experience - Career Timeline"
        url="linkedin.com › experience"
        description={experienceConfig.map(e => `${e.role} at ${e.company}`).join(" • ")}
        siteName="LinkedIn"
        favicon="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
      >
        <div className="mt-2 space-y-1">
          {experienceConfig.slice(0, 2).map((job) => (
            <div key={`${job.company}-${job.period}`} className="flex items-center gap-2">
              <Badge variant="outline" className="font-normal text-muted-foreground">{job.period}</Badge>
              <span className="text-sm font-medium">{job.role} @ {job.company}</span>
            </div>
          ))}
        </div>
      </ResultCard>

      {/* 4. Contact Ad */}
      <div className="flex flex-col gap-1 max-w-[650px] mb-8">
        <div className="flex items-center gap-1 text-sm mb-1">
          <span className="font-bold text-foreground">Sponsored</span>
          <span className="text-muted-foreground text-xs mx-1">•</span>
          <span className="text-muted-foreground text-xs truncate">{siteConfig.websiteUrl}/contact</span>
        </div>
        <h3 className="text-xl font-normal tracking-wide leading-tight cursor-pointer hover:underline text-blue-600 dark:text-blue-400">
          {contactConfig.ctaTitle}
        </h3>
        <div className="text-sm text-foreground leading-relaxed mt-1">
          {contactConfig.ctaDescription}
        </div>
        <div className="mt-3 flex gap-2">
          <Button variant="outline" className="h-8 text-xs border-blue-600/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30">
            {contactConfig.primaryButton.text}
          </Button>
          <Button variant="outline" className="h-8 text-xs border-blue-600/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30">
            {contactConfig.secondaryButton.text}
          </Button>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
