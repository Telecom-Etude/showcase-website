import type { Config } from "tailwindcss";
import { CustomThemeConfig } from "tailwindcss/types/config";

const colors: CustomThemeConfig["colors"] = {
    border: "var(--border)",
    input: "var(--input)",
    ring: "var(--ring)",
    background: "var(--background)",
    foreground: "var(--foreground)",
    primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)"
    },
    secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--secondary-foreground)"
    },
    destructive: {
        DEFAULT: "var(--destructive)",
        foreground: "var(--destructive-foreground)"
    },
    muted: {
        DEFAULT: "var(--muted)",
        foreground: "var(--muted-foreground)"
    },
    accent: {
        DEFAULT: "var(--accent)",
        foreground: "var(--accent-foreground)"
    },
    popover: {
        DEFAULT: "var(--popover)",
        foreground: "var(--popover-foreground)"
    },
    card: {
        DEFAULT: "var(--card)",
        foreground: "var(--card-foreground)"
    }
};

const extend: Partial<CustomThemeConfig> = {
    colors,
    borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
    },
    keyframes: {
        "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" }
        }
    },
    animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
    },
    transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms"
    }
};

const config = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px"
            }
        },
        extend
    },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
