/**
 * ===================================================================
 * SEARCHFOLIO - THEME CONFIGURATION
 * ===================================================================
 * 
 * Customize the visual appearance of your portfolio.
 * 
 * ===================================================================
 */

export const themeConfig = {
    // Brand colors (Google-inspired by default)
    brandColors: {
        blue: "#4285f4",
        red: "#ea4335",
        yellow: "#fbbc04",
        green: "#34a853",
    },

    // Default theme: "light" | "dark" | "system"
    defaultTheme: "system" as const,

    // Show theme toggle button
    showThemeToggle: true,

    // Logo text (uses Google-style colored letters by default)
    // Set to null to use an image logo instead
    logoText: "Gfolio",

    // If using image logo, set this path
    logoImageUrl: null as string | null,

    // Custom fonts (uses Inter by default)
    fonts: {
        sans: "Inter",
        heading: "Roboto",
    },

    // Fake search stats (for fun!)
    searchStats: {
        results: "1,240,000",
        time: "0.42",
    },
};
