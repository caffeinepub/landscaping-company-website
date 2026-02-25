import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                /* Named semantic tokens for landscaping theme */
                forest: {
                    50:  'oklch(0.97 0.018 145)',
                    100: 'oklch(0.92 0.04 145)',
                    200: 'oklch(0.82 0.07 145)',
                    300: 'oklch(0.70 0.10 145)',
                    400: 'oklch(0.58 0.12 145)',
                    500: 'oklch(0.48 0.12 145)',
                    600: 'oklch(0.38 0.10 145)',
                    700: 'oklch(0.30 0.08 145)',
                    800: 'oklch(0.24 0.06 145)',
                    900: 'oklch(0.18 0.04 145)',
                },
                soil: {
                    50:  'oklch(0.97 0.015 70)',
                    100: 'oklch(0.93 0.03 70)',
                    200: 'oklch(0.85 0.055 65)',
                    300: 'oklch(0.76 0.075 60)',
                    400: 'oklch(0.68 0.09 55)',
                    500: 'oklch(0.58 0.09 52)',
                    600: 'oklch(0.48 0.08 50)',
                    700: 'oklch(0.38 0.07 48)',
                    800: 'oklch(0.30 0.055 48)',
                    900: 'oklch(0.22 0.04 48)',
                },
                cream: {
                    50:  'oklch(0.995 0.004 90)',
                    100: 'oklch(0.98 0.01 90)',
                    200: 'oklch(0.95 0.018 88)',
                    300: 'oklch(0.91 0.025 85)',
                    400: 'oklch(0.86 0.03 82)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'earthy': '0 4px 24px 0 rgba(40, 60, 30, 0.10)',
                'earthy-lg': '0 8px 40px 0 rgba(40, 60, 30, 0.15)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
