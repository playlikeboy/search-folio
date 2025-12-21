import Link from "next/link";
import { Search, Grid, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40">
            <div className="flex items-center justify-between px-4 py-3 md:px-6">
                <div className="flex items-center gap-4 md:gap-8 flex-1">
                    <Link href="/" className="flex items-center gap-2 font-heading font-medium text-xl tracking-tighter">
                        <span className="text-blue-500">G</span>
                        <span className="text-red-500">f</span>
                        <span className="text-yellow-500">o</span>
                        <span className="text-blue-500">l</span>
                        <span className="text-green-500">i</span>
                        <span className="text-red-500">o</span>
                    </Link>

                    <div className="hidden md:flex max-w-2xl w-full relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            <Search className="h-4 w-4" />
                        </div>
                        <Input
                            type="text"
                            defaultValue="Shaswat Raj"
                            className="w-full pl-10 h-11 rounded-full bg-secondary/50 border-transparent shadow-none hover:bg-secondary/80 focus-visible:bg-background focus-visible:shadow-[0_1px_6px_rgba(32,33,36,0.28)] transition-all font-medium"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                            {/* Clear X or Mic icon could go here */}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    {/* Mobile Search Icon (visible only on small screens) */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Button variant="ghost" size="icon" className="hidden sm:flex">
                        <Settings className="h-5 w-5 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hidden sm:flex">
                        <Grid className="h-5 w-5 text-muted-foreground" />
                    </Button>

                    <Avatar className="h-8 w-8 cursor-pointer hover:ring-4 hover:ring-secondary/50 transition-all">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                        <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Mobile Search Bar (Full Width) */}
            <div className="px-4 pb-3 md:hidden">
                <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <Search className="h-4 w-4" />
                    </div>
                    <Input
                        type="text"
                        defaultValue="Shaswat Raj"
                        className="w-full pl-10 h-10 rounded-full bg-secondary/50 border-transparent shadow-none font-medium"
                    />
                </div>
            </div>
        </header>
    );
}
