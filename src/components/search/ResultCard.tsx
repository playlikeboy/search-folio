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
        <div className="flex flex-col gap-1 max-w-[650px] animate-in fade-in slide-in-from-bottom-2 duration-500 mb-8">
            <div className="group cursor-pointer">
                <div className="flex items-center gap-3 text-sm mb-1">
                    <div className="bg-secondary p-1 rounded-full h-7 w-7 flex items-center justify-center overflow-hidden">
                        <Avatar className="h-4 w-4">
                            <AvatarImage src={favicon} alt={siteName} />
                            <AvatarFallback className="text-[10px]">{siteName[0]}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-foreground text-sm font-medium leading-none">{siteName}</span>
                        <span className="text-muted-foreground text-xs leading-none truncate mt-1">{url}</span>
                    </div>
                    <MoreVertical className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl text-[#8ab4f8] hover:underline font-normal tracking-wide leading-tight group-hover:text-[#8ab4f8] dark:text-[#8ab4f8] text-[#1a0dab] visited:text-[#4b11a8] dark:visited:text-[#c58af9]">
                    <Link href={url}>{title}</Link>
                </h3>
            </div>

            <div className="text-sm text-secondary-foreground leading-relaxed mt-1">
                {date && <span className="text-muted-foreground mr-1">{date} —</span>}
                {description}
            </div>

            {children && <div className="mt-2">{children}</div>}
        </div>
    );
}
