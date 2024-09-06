module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        first: "var(--first)",
        second: "var(--second)",
        third: "var(--third)",
        four: "var(--four)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: "gradient 8s linear infinite",

      },


    },
    keyframes: {
      blinkGreen: {
        '0%, 100%': { boxShadow: '0 0 1px 1px rgba(143, 242, 62)' },
        '50%': { boxShadow: '0 0 8px 2px rgba(143, 242, 62)' },
      },
      blinkRed: {
        '0%, 100%': { boxShadow: '0 0 1px 1px rgba(231, 29, 69)' },
        '50%': { boxShadow: '0 0 8px 2px rgba(231, 29, 69)' },
      },
    },
    animation: {
      blinkGreen: 'blinkGreen 1.2s infinite',
      blinkRed: 'blinkRed 1.2s infinite',
    },

    boxShadow: {
      'custom-inset': '10px -1px 99px 31px rgba(0, 0, 0) inset',
    },


  },
  plugins: [require("tailwindcss-animate")],
}
