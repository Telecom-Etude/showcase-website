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
        foreground: "var(--primary-foreground)",
        muted: "var(--primary-muted)"
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
        },
        "bounce-x": {
            "0%, 100%": { transform: "translateX(0)" },
            "50%": { transform: "translateX(5px)" }
        },
        wiggle: {
            "0%, 100%": { transform: "translate(0px, 0px) scale(0.5)" },
            "25%": { transform: "translate(100px, 20px) scale(1)" },
            "50%": { transform: "translate(100px, -20px) scale(0.2)" },
            "75%": { transform: "translate(-100px, 20px) scale(1)" }
        },
        largewiggle: {
            "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
            "25%": { transform: "translate(-100px, -20px) scale(0.5)" },
            "50%": { transform: "translate(-100px, 20px) scale(0.8)" },
            "75%": { transform: "translate(100px, 20px) scale(0.2)" }
        }
    },
    animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-x": "bounce-x 1s infinite",
        "float-around": "wiggle 20s ease-in-out infinite",
        "float-around-2": "largewiggle 20s ease-in-out infinite"
    },
    transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms"
    },
    screens: {
        "3xl": "1920px"
    }
};

const config = {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
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
    plugins: [
        require("tailwindcss-animate"),
        function ({ addUtilities }: { addUtilities: Function }) {
            const newUtilities = {
                ".bg-hatched": {
                    "background-image": "linear-gradient(45deg, #000 25%, #333 25%, #333 50%, #000 50%, #000 75%, #333 75%, #333)",
                    "background-size": "20px 20px"
                }
            };

            addUtilities(newUtilities, ["responsive", "hover"]);
        }
    ]
} satisfies Config;

export default config;
