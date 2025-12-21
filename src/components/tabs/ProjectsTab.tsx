"use client";

import { Star, GitFork, ExternalLink, Globe, Layout, Code2, Calendar } from "lucide-react";
import { projectsConfig } from "@/config/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProjectsTab() {
    const [filter, setFilter] = useState("All");

    // Extract unique technologies for "Related searches" chips
    const allTech = Array.from(new Set(projectsConfig.flatMap(p => p.techStack))).slice(0, 6);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Filter Chips / Related Searches Style */}
            <div className="flex flex-wrap gap-2 mb-6">
                {["All", "React", "Next.js", "TypeScript", "Tailwind", "Cloudflare"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                            filter === f
                                ? "bg-[#e8f0fe] text-[#1a0dab] border-transparent dark:bg-[#303134] dark:text-[#8ab4f8]"
                                : "bg-transparent border-[#dadce0] text-[#3c4043] hover:bg-[#f1f3f4] dark:border-[#5f6368] dark:text-[#bdc1c6] dark:hover:bg-[#303134]"
                        )}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <p className="text-sm text-[#70757a] dark:text-[#9aa0a6] mb-4">
                About {projectsConfig.length} results (0.42 seconds)
            </p>

            <div className="flex flex-col gap-8">
                {projectsConfig.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group max-w-[650px]"
                    >
                        {/* 1. Header / Breadcrumb */}
                        <div className="flex items-center gap-3 mb-1 text-sm">
                            <div className="bg-[#f1f3f4] dark:bg-[#303134] p-1.5 rounded-full flex items-center justify-center border border-border/10 h-[28px] w-[28px]">
                                {/* Simple icon or favicon fallback */}
                                <Layout className="h-3.5 w-3.5 text-[#5f6368] dark:text-[#9aa0a6]" />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-[#202124] dark:text-[#dadce0] text-sm">
                                    {project.name}
                                </span>
                                <span className="text-[#4d5156] dark:text-[#bdc1c6] text-xs">
                                    {project.url} › projects
                                </span>
                            </div>
                        </div>

                        {/* 2. Main Title */}
                        <h3 className="text-[20px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline font-normal leading-snug mb-2 visited:text-[#681da8] dark:visited:text-[#c58af9]">
                            <Link href={project.url} target="_blank">
                                {project.name} - {project.description.slice(0, 50)}...
                            </Link>
                        </h3>

                        {/* 3. Rich Snippet Content (Image + Text) */}
                        <div className="flex gap-4">
                            {/* Thumbnail Placeholder (Video/Rich Result style) */}
                            <div className="shrink-0 w-[140px] h-[86px] bg-[#f1f3f4] dark:bg-[#303134] rounded-[8px] overflow-hidden relative border border-border/20 group-hover:shadow-md transition-all">
                                <div className="absolute inset-0 flex items-center justify-center text-[#bdc1c6]">
                                    <Code2 className="h-8 w-8 opacity-50" />
                                </div>
                                {/* Overlay Badge */}
                                <div className="absolute bottom-1 right-1 bg-black/60 text-white text-[10px] px-1.5 rounded-sm">
                                    Project
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-1">
                                {/* Date / Metadata line */}
                                <div className="text-[14px] text-[#70757a] dark:text-[#9aa0a6] mb-0.5">
                                    <span className="font-medium text-[#4d5156] dark:text-[#bdc1c6]">Active</span> · Dec 20, 2024 ·
                                    <span className="ml-1 text-[#4d5156] dark:text-[#bdc1c6]">
                                        {project.stars} ★ · {project.forks} ⑂
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-relaxed line-clamp-3">
                                    {project.description} Built with <span className="font-medium text-[#3c4043] dark:text-[#e8eaed]">{project.techStack.join(", ")}</span>.
                                </div>
                            </div>
                        </div>

                        {/* 4. Action Links (Sitelinks style) */}
                        <div className="flex gap-4 mt-2 ml-0 sm:ml-[156px]">
                            <Link href={project.url} target="_blank" className="text-[14px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline flex items-center gap-1">
                                <Globe className="h-3 w-3" /> Visit Website
                            </Link>
                            <Link href="#" className="text-[14px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline flex items-center gap-1">
                                <GitFork className="h-3 w-3" /> View Source
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
