export function Footer() {
    return (
        <footer className="w-full bg-secondary/30 mt-auto">
            <div className="border-b border-border/40 px-4 py-3 md:px-[180px] text-muted-foreground text-sm">
                India (Detected)
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-between px-4 py-3 md:px-[180px] text-sm text-muted-foreground gap-4">
                <div className="flex flex-wrap gap-4 md:gap-8">
                    <a href="#" className="hover:text-foreground">About</a>
                    <a href="#" className="hover:text-foreground">Advertising</a>
                    <a href="#" className="hover:text-foreground">Business</a>
                    <a href="#" className="hover:text-foreground">How Search works</a>
                </div>
                <div className="flex flex-wrap gap-4 md:gap-8">
                    <a href="#" className="hover:text-foreground">Privacy</a>
                    <a href="#" className="hover:text-foreground">Terms</a>
                    <a href="#" className="hover:text-foreground">Settings</a>
                </div>
            </div>
        </footer>
    );
}
