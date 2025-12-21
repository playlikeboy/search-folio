import Link from "next/link";
import { MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ResultCardProps {
    url: string;
    title: string;
    description: string;
    siteName?: string;
    favicon?: string;
    date?: string;
    children?: React.ReactNode;
}

export function ResultCard({
    url,
    title,
    description,
    siteName = "Shaswat Raj",
    favicon = "/favicon.ico",
    date,
    children
}: ResultCardProps) {
    return (
        <div className="flex flex-col max-w-[600px] mb-8 font-sans animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* Cite / Breadcrumb Header */}
            <div className="group cursor-pointer mb-1 block">
                <div className="flex items-center gap-3 text-sm">
                    <div className="bg-[#f1f3f4] dark:bg-[#303134] p-1 rounded-full h-[28px] w-[28px] flex items-center justify-center overflow-hidden border border-border/10">
                        <Avatar className="h-[18px] w-[18px]">
                            <AvatarImage src={favicon} alt={siteName} />
                            <AvatarFallback className="text-[10px]">{siteName[0]}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-[#202124] dark:text-[#dadce0] text-sm font-normal">{siteName}</span>
                        <span className="text-[#4d5156] dark:text-[#bdc1c6] text-xs truncate max-w-[300px]">{url}</span>
                    </div>
                    <MoreVertical className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>

            {/* Main Link Title */}
            <div className="group cursor-pointer">
                <h3 className="text-[20px] text-[#1a0dab] dark:text-[#8ab4f8] hover:underline font-normal tracking-normal leading-normal visited:text-[#681da8] dark:visited:text-[#c58af9] mb-1">
                    <Link href={url}>{title}</Link>
                </h3>
            </div>

            {/* Description Snippet */}
            <div className="text-[14px] text-[#4d5156] dark:text-[#bdc1c6] leading-[1.58] max-w-[600px]">
                {date && <span className="text-[#70757a] dark:text-[#9aa0a6] mr-1">{date} —</span>}
                {description}
            </div>

            {children && <div className="mt-2 ml-4 border-l-2 border-border/0 pl-0">{children}</div>}
        </div>
    );
}
