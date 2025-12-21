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
import { Star, GitFork, Eye, CheckCircle, TrendingUp, Users, Zap, Award, ExternalLink } from "lucide-react";
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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block float-right w-[350px] ml-8 border border-border/60 rounded-xl overflow-hidden shadow-lg bg-card"
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={siteConfig.avatarUrl}
                  alt={siteConfig.name}
                  className="h-20 w-20 rounded-full border-4 border-white/30 shadow-lg"
                />
                <div>
                  <h2 className="text-xl font-bold">{siteConfig.name}</h2>
                  <p className="text-blue-100 text-sm">{siteConfig.headline}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-xs text-blue-100">Verified Professional</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                {siteConfig.bio}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-blue-500">5+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
                <div className="text-center p-2 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-green-500">50+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-2 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-yellow-500">500+</div>
                  <div className="text-xs text-muted-foreground">Stars</div>
                </div>
              </div>

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
              </div>

              {/* Social Links */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border/40">
                <a href={siteConfig.socials.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub" className="h-4 w-4" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>
                <a href={siteConfig.socials.linkedin} target="_blank" className="flex-1 flex items-center justify-center gap-2 p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://static.licdn.com/sc/h/akt4ae504epesldzj74dzred8" alt="LinkedIn" className="h-4 w-4" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
                <a href={siteConfig.socials.twitter} target="_blank" className="flex-1 flex items-center justify-center gap-2 p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://abs.twimg.com/favicons/twitter.3.ico" alt="Twitter" className="h-4 w-4" />
                  <span className="text-xs font-medium">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>
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

// "All" tab content - the main SERP view with enhanced visuals
function AllTab() {
  return (
    <>
      {/* Featured Snippet - Top Result */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 p-4 border border-blue-500/30 rounded-xl bg-blue-500/5"
      >
        <div className="flex items-center gap-2 text-blue-500 text-sm font-medium mb-2">
          <Zap className="h-4 w-4" />
          Featured Snippet
        </div>
        <h2 className="text-lg font-medium mb-2">{siteConfig.name} - {siteConfig.headline}</h2>
        <p className="text-sm text-muted-foreground">{siteConfig.bio}</p>
        <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3 text-green-500" /> Top 1% in Web Dev</span>
          <span className="flex items-center gap-1"><Users className="h-3 w-3 text-blue-500" /> 10k+ Connections</span>
          <span className="flex items-center gap-1"><Award className="h-3 w-3 text-yellow-500" /> Featured Developer</span>
        </div>
      </motion.div>

      {/* 1. About Me Result with Stars */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <ResultCard
          title={`${siteConfig.name} - ${siteConfig.headline}`}
          url={`${siteConfig.websiteUrl} › about`}
          description={siteConfig.bio}
          siteName={siteConfig.name}
          favicon={siteConfig.avatarUrl}
        >
          {/* Star Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">5.0 rating · 47 reviews</span>
          </div>
          {/* Sitelinks */}
          <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
            <a href="#" className="text-blue-500 hover:underline">About Me</a>
            <a href="#" className="text-blue-500 hover:underline">Contact</a>
            <a href="#" className="text-blue-500 hover:underline">Projects</a>
            <a href="#" className="text-blue-500 hover:underline">Resume</a>
          </div>
        </ResultCard>
      </motion.div>

      {/* 2. Projects Result (Rich Snippet with Stars) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ResultCard
          title={`Open Source Projects by ${siteConfig.name}`}
          url="github.com › repositories"
          description={`Explore ${projectsConfig.length}+ open-source projects. Most popular: ${projectsConfig.map(p => p.name).join(", ")}.`}
          siteName="GitHub"
          favicon="https://github.githubassets.com/favicons/favicon.svg"
        >
          {/* Star Rating for GitHub */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />
            </div>
            <span className="text-sm text-muted-foreground">4.8 · 500+ total stars</span>
          </div>

          {/* Rich Snippet: Project Cards */}
          <div className="flex gap-3 mt-2 overflow-x-auto pb-2 no-scrollbar">
            {projectsConfig.slice(0, 3).map((project) => (
              <Card key={project.name} className="min-w-[220px] border-border/60 shadow-sm hover:shadow-md transition-shadow bg-card hover:bg-secondary/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub" className="h-4 w-4" />
                    <span className="font-medium text-blue-500 hover:underline cursor-pointer">{project.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.techStack.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] px-1.5 py-0">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 text-xs text-muted-foreground">
                    {project.stars > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {project.stars}
                      </div>
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
      </motion.div>

      {/* 3. LinkedIn Experience Result */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ResultCard
          title={`${siteConfig.name} - Career Experience`}
          url="linkedin.com › in › profile › experience"
          description={experienceConfig.map(e => `${e.role} at ${e.company}`).join(" • ")}
          siteName="LinkedIn"
          favicon="https://static.licdn.com/sc/h/akt4ae504epesldzj74dzred8"
        >
          <div className="mt-3 space-y-2">
            {experienceConfig.slice(0, 3).map((job) => (
              <div key={`${job.company}-${job.period}`} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <div className="h-8 w-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-sm">
                  {job.company[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{job.role}</div>
                  <div className="text-xs text-muted-foreground">{job.company} · {job.period}</div>
                </div>
              </div>
            ))}
          </div>
        </ResultCard>
      </motion.div>

      {/* 4. People Also Ask */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8 max-w-[650px]"
      >
        <h3 className="font-medium mb-3">People also ask</h3>
        <div className="border border-border/60 rounded-lg divide-y divide-border/60">
          {[
            `What is ${siteConfig.name} best at?`,
            `How to contact ${siteConfig.name}?`,
            `What projects has ${siteConfig.name} built?`,
            `Is ${siteConfig.name} available for hire?`,
          ].map((question, i) => (
            <div key={i} className="p-3 hover:bg-secondary/30 cursor-pointer transition-colors flex items-center justify-between">
              <span className="text-sm">{question}</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* 5. Contact Ad - Premium Styled */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col gap-1 max-w-[650px] mb-8 p-4 border-2 border-yellow-500/30 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-xl"
      >
        <div className="flex items-center gap-2 text-sm mb-2">
          <Badge className="bg-yellow-500 text-black text-xs">Ad</Badge>
          <span className="text-muted-foreground text-xs">{siteConfig.websiteUrl}/hire</span>
        </div>
        <h3 className="text-xl font-medium tracking-wide leading-tight cursor-pointer hover:underline text-blue-600 dark:text-blue-400">
          {contactConfig.ctaTitle}
        </h3>
        <div className="text-sm text-muted-foreground leading-relaxed mt-1">
          <b className="text-foreground">⚡ Available for new projects.</b> {contactConfig.ctaDescription}
        </div>
        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span>5.0 · 100% client satisfaction</span>
        </div>
        <div className="mt-4 flex gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            {contactConfig.primaryButton.text}
          </Button>
          <Button variant="outline" className="border-blue-500/50 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30">
            {contactConfig.secondaryButton.text}
          </Button>
        </div>
      </motion.div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
