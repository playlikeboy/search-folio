import Link from "next/link";
import { Search, Mic, X, Grid, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background">
            <div className="flex items-center justify-between px-6 py-5 md:pl-8 md:pr-4">
                <div className="flex items-center gap-8 md:gap-12 flex-1">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1 font-heading font-medium text-2xl tracking-tighter pb-1">
                        <span className="text-[#4285f4]">S</span>
                        <span className="text-[#ea4335]">e</span>
                        <span className="text-[#fbbc04]">a</span>
                        <span className="text-[#4285f4]">r</span>
                        <span className="text-[#34a853]">c</span>
                        <span className="text-[#ea4335]">h</span>
                    </Link>

                    {/* Desktop Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-[690px] relative">
                        <div className="relative w-full group">
                            <input
                                type="text"
                                defaultValue="Shaswat Raj"
                                className="w-full h-[46px] pl-5 pr-12 rounded-[24px] bg-white dark:bg-[#303134] text-foreground border border-transparent shadow-[0_1px_6px_0_rgba(32,33,36,0.28)] hover:shadow-[0_2px_8px_0_rgba(32,33,36,0.28)] focus:outline-none focus:shadow-[0_2px_8px_0_rgba(32,33,36,0.28)] transition-shadow text-[16px]"
                            />

                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3 text-[#4285f4] dark:text-[#8ab4f8]">
                                <X className="h-5 w-5 text-[#70757a] dark:text-[#9aa0a6] cursor-pointer border-r border-[#dadce0] dark:border-[#5f6368] pr-3 box-content hidden sm:block" />
                                <Mic className="h-5 w-5 cursor-pointer hidden sm:block" />
                                <Search className="h-5 w-5 text-[#4285f4] dark:text-[#8ab4f8] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 md:gap-4 pl-4">
                    <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-secondary/50 rounded-full h-10 w-10">
                        <Settings className="h-5 w-5 text-[#5f6368] dark:text-[#e8eaed]" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hidden sm:flex hover:bg-secondary/50 rounded-full h-10 w-10">
                        <Grid className="h-5 w-5 text-[#5f6368] dark:text-[#e8eaed]" />
                    </Button>

                    <Avatar className="h-8 w-8 cursor-pointer ring-4 ring-[#f1f3f4] dark:ring-[#303134]">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                        <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="px-4 pb-3 md:hidden">
                <div className="relative">
                    <input
                        type="text"
                        defaultValue="Shaswat Raj"
                        className="w-full h-[44px] pl-4 pr-12 rounded-[22px] bg-white dark:bg-[#303134] text-foreground border border-transparent shadow-[0_1px_6px_0_rgba(32,33,36,0.28)] focus:outline-none text-[16px]"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4285f4] dark:text-[#8ab4f8]">
                        <Search className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </header>
    );
}
