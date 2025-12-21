"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Search, Image, Briefcase, FileText, Code, Phone, Sparkles } from "lucide-react";

const tabs = [
    { name: "All", href: "/", icon: Search },
    { name: "Projects", href: "/?tab=projects", icon: Code },
    { name: "Experience", href: "/?tab=experience", icon: Briefcase },
    { name: "Proof", href: "/?tab=proof", icon: FileText },
    { name: "Images", href: "/?tab=images", icon: Image },
    { name: "Contact", href: "/?tab=contact", icon: Phone },
    { name: "AI Insight", href: "/?tab=ai", icon: Sparkles },
];

export function Tabs() {
    const pathname = usePathname();
    // Simplified active state check. In a real app, useSearchParams.
    // For this MVP, we might simple highlight "All" or based on query param if we had suspense.
    // We'll just assume "All" is active for the root / for now or mock it.

    return (
        <div className="flex items-center gap-1 md:gap-4 overflow-x-auto border-b border-border/40 px-4 md:px-[180px] py-0 no-scrollbar">
            {tabs.map((tab) => (
                <Link
                    key={tab.name}
                    href={tab.href}
                    className={cn(
                        "flex items-center gap-2 px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap border-b-[3px] border-transparent",
                        tab.name === "All" // Mock active state
                            ? "text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                            : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    <tab.icon className="h-4 w-4" />
                    {tab.name}
                </Link>
            ))}

            {/* "Tools" button commonly seen on Google */}
            <div className="ml-auto hidden md:block">
                <button className="text-sm text-muted-foreground hover:bg-secondary/50 px-3 py-1 rounded-sm transition-colors">
                    Tools
                </button>
            </div>
        </div>
    );
}
