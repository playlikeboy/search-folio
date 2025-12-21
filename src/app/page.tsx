import { Header } from "@/components/layout/Header";
import { Tabs } from "@/components/layout/Tabs";
import { Footer } from "@/components/layout/Footer";
import { ResultCard } from "@/components/search/ResultCard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, GitFork, Eye } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-blue-200 selection:text-blue-900">
      <Header />
      <Tabs />

      <main className="flex-1 px-4 md:px-[180px] py-6 max-w-7xl mx-auto w-full">
        {/* Search Stats */}
        <div className="text-xs md:text-sm text-muted-foreground mb-6">
          About 1,240,000 results (0.42 seconds)
        </div>

        {/* Knowledge Panel (Right Side - Desktop) */}
        <div className="hidden lg:block float-right w-[350px] ml-8 border border-border/60 rounded-xl overflow-hidden shadow-sm bg-card p-4">
          <div className="grid grid-cols-[1fr_auto] gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-medium tracking-tight">Shaswat Raj</h2>
              <p className="text-muted-foreground text-sm">Full Stack Developer & Founder</p>
            </div>
            <div className="h-16 w-16 bg-blue-500 rounded-md">
              {/* Profile Image PlaceHolder */}
              <img src="https://github.com/shadcn.png" alt="Shaswat" className="h-full w-full object-cover rounded-md" />
            </div>
          </div>

          <p className="text-sm leading-relaxed mb-4">
            Shaswat Raj is a <span className="font-semibold">Full Stack Developer</span> and entrepreneur known for building high-performance web applications. He specializes in <b>Next.js</b>, <b>React</b>, and <b>Cloud Architecture</b>.
          </p>

          <div className="border-t border-border/40 pt-3 space-y-2">
            <div className="flex gap-2 text-sm">
              <span className="font-semibold w-24">Education:</span>
              <span className="text-blue-500 hover:underline cursor-pointer">Your University</span>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="font-semibold w-24">Projects:</span>
              <span className="text-muted-foreground">SearchFolio, FinScope, RitikTech</span>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="font-semibold w-24">Socials:</span>
              <div className="flex gap-2">
                <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="flex flex-col">

          {/* 1. About Me Result */}
          <ResultCard
            title="Shaswat Raj - Full Stack Developer & Founder"
            url="https://shaswatraj.com › about"
            description="I build things for the web. Obsessed with performance, clean UI, and scalable architecture. Currently working on high-conversion portfolio tools."
            siteName="Shaswat Raj"
          />

          {/* 2. Projects Result (Rich Snippet) */}
          <ResultCard
            title="Projects by Shaswat: SearchFolio, FinScope"
            url="https://github.com › shaswatraj › projects"
            description="Explore top open-source projects including SearchFolio (Google-style portfolio), FinScope (Financial Calculators), and more."
            siteName="GitHub"
            favicon="https://github.githubassets.com/favicons/favicon.svg"
          >
            {/* Rich Snippet: Project Cards */}
            <div className="flex gap-4 mt-2 overflow-x-auto pb-2 no-scrollbar">
              <Card className="min-w-[200px] border-border/60 shadow-none bg-secondary/10">
                <CardContent className="p-3">
                  <div className="font-medium text-blue-500 hover:underline cursor-pointer">SearchFolio</div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">A portfolio that looks like Google Search.</p>
                  <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Star className="h-3 w-3" /> 124</div>
                    <div className="flex items-center gap-1"><GitFork className="h-3 w-3" /> 12</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="min-w-[200px] border-border/60 shadow-none bg-secondary/10">
                <CardContent className="p-3">
                  <div className="font-medium text-blue-500 hover:underline cursor-pointer">FinScope</div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">Advanced financial calculators suite for professionals.</p>
                  <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Star className="h-3 w-3" /> 89</div>
                    <div className="flex items-center gap-1"><GitFork className="h-3 w-3" /> 5</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="min-w-[200px] border-border/60 shadow-none bg-secondary/10">
                <CardContent className="p-3">
                  <div className="font-medium text-blue-500 hover:underline cursor-pointer">Strivio</div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">Productivity ecosystem for modern founders.</p>
                  <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><Eye className="h-3 w-3" /> 2.1k</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ResultCard>

          {/* 3. Experience Result */}
          <ResultCard
            title="Experience - Career Timeline"
            url="https://linkedin.com › in › shaswatraj › experience"
            description="Sr. Frontend Engineer at TechCorp (2023-Present) • Lead Developer at StartUpInc (2021-2023) • Freelance Full Stack Dev (2019-2021)"
            siteName="LinkedIn"
            favicon="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
          >
            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-normal text-muted-foreground">2023 - Present</Badge>
                <span className="text-sm font-medium">Senior Frontend Engineer @ TechCorp</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-normal text-muted-foreground">2021 - 2023</Badge>
                <span className="text-sm font-medium">Lead Developer @ StartUpInc</span>
              </div>
            </div>
          </ResultCard>

          {/* 4. Contact Ad */}
          <div className="flex flex-col gap-1 max-w-[650px] mb-8">
            <div className="flex items-center gap-1 text-sm mb-1">
              <span className="font-bold text-foreground">Sponsored</span>
              <span className="text-muted-foreground text-xs mx-1">•</span>
              <span className="text-muted-foreground text-xs truncate">shaswatraj.com/contact</span>
            </div>
            <h3 className="text-xl font-normal tracking-wide leading-tight cursor-pointer hover:underline text-blue-600 dark:text-blue-400">
              Hire Shaswat Raj - Expert Web Developer
            </h3>
            <div className="text-sm text-foreground leading-relaxed mt-1">
              <b>Available for new projects.</b> Specialized in React, Next.js, and sleek UI Design. Let's build your next big idea together. Book a free consultation call today.
            </div>
            <div className="mt-3 flex gap-2">
              <Button variant="outline" className="h-8 text-xs border-blue-600/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30">
                Book a Call
              </Button>
              <Button variant="outline" className="h-8 text-xs border-blue-600/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30">
                Send Email
              </Button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
