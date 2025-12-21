"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Search, Image, Briefcase, FileText, Code, Phone, Sparkles, MoreVertical } from "lucide-react";

const tabs = [
    { name: "All", href: "/", icon: Search, key: "all" },
    { name: "Projects", href: "/?tab=projects", icon: Code, key: "projects" },
    { name: "Experience", href: "/?tab=experience", icon: Briefcase, key: "experience" },
    { name: "Proof", href: "/?tab=proof", icon: FileText, key: "proof" },
    { name: "Images", href: "/?tab=images", icon: Image, key: "images" },
    { name: "Contact", href: "/?tab=contact", icon: Phone, key: "contact" },
    { name: "AI Insight", href: "/?tab=ai", icon: Sparkles, key: "ai" },
];

interface TabsProps {
    activeTab?: string;
}

export function Tabs({ activeTab = "all" }: TabsProps) {
    return (
        <div className="flex items-center justify-between border-b border-border/40 px-6 md:px-[180px] py-0 no-scrollbar">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={cn(
                            "flex items-center gap-1.5 py-3 text-[14px] font-medium transition-colors whitespace-nowrap border-b-[3px] border-transparent",
                            tab.key === activeTab
                                ? "text-[#1a73e8] dark:text-[#8ab4f8] border-[#1a73e8] dark:border-[#8ab4f8]"
                                : "text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-[#e8eaed]"
                        )}
                    >
                        {/* Icons are often hidden in desktop OG view, but good for "modern" OG mix. keeping small. */}
                        <tab.icon className="h-4 w-4" />
                        {tab.name}
                    </Link>
                ))}
                <button className="flex items-center gap-1.5 py-3 text-[14px] font-medium text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-[#e8eaed] whitespace-nowrap">
                    <MoreVertical className="h-4 w-4" />
                    More
                </button>
            </div>

            <div className="hidden md:flex">
                <button className="text-[14px] text-[#5f6368] dark:text-[#9aa0a6] hover:bg-secondary/50 px-3 py-1 rounded-sm transition-colors">
                    Tools
                </button>
            </div>
        </div>
    );
}
