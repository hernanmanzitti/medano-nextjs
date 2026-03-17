import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      // ─── COLORS ───────────────────────────────────────────────
      colors: {
        brand: {
          navy:   '#00246b',
          royal:  '#1a4793',
          mid:    '#646caa',
          light:  '#b4b7d9',
        },
        bg: {
          base:    '#00246b',               // var(--color-bg-base)
          surface: '#1a4793',               // var(--color-bg-surface)
          overlay: 'rgba(0,36,107,0.85)',   // var(--color-bg-overlay)
          subtle:  'rgba(26,71,147,0.12)',  // var(--color-bg-subtle)
        },
        text: {
          primary:   '#ffffff',
          secondary: '#b4b7d9',
          muted:     'rgba(180,183,217,0.6)',
          inverse:   '#00246b',
        },
        border: {
          default: 'rgba(100,108,170,0.3)',
          strong:  '#646caa',
          subtle:  'rgba(100,108,170,0.12)',
        },
        accent: {
          DEFAULT: '#1a4793',
          hover:   '#646caa',
          active:  '#00246b',
        },
        feedback: {
          success: '#22c55e',
          warning: '#f59e0b',
          error:   '#ef4444',
          info:    '#646caa',
        },
        // Tints
        'navy-75':  'rgba(0,36,107,0.75)',
        'navy-50':  'rgba(0,36,107,0.50)',
        'navy-25':  'rgba(0,36,107,0.25)',
        'royal-75': 'rgba(26,71,147,0.75)',
        'royal-50': 'rgba(26,71,147,0.50)',
        'royal-25': 'rgba(26,71,147,0.25)',
      },

      // ─── TYPOGRAPHY ───────────────────────────────────────────
      fontFamily: {
        display: ['Barlow Condensed', 'Oswald', 'sans-serif'],
        body:    ['DM Sans', 'Mulish', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
        ui:      ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'xs':   '0.75rem',    // 12px
        'sm':   '0.875rem',   // 14px
        'base': '1rem',       // 16px
        'md':   '1.125rem',   // 18px
        'lg':   '1.25rem',    // 20px
        'xl':   '1.5rem',     // 24px
        '2xl':  '1.875rem',   // 30px
        '3xl':  '2.25rem',    // 36px
        '4xl':  '3rem',       // 48px
        '5xl':  '3.75rem',    // 60px
        '6xl':  '4.5rem',     // 72px
      },
      fontWeight: {
        light:     '300',
        regular:   '400',
        medium:    '500',
        semibold:  '600',
        bold:      '700',
        extrabold: '800',
      },
      lineHeight: {
        none:    '1',
        tight:   '1.15',
        snug:    '1.3',
        normal:  '1.5',
        relaxed: '1.65',
        loose:   '1.8',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight:   '-0.02em',
        normal:  '0em',
        wide:    '0.05em',
        wider:   '0.1em',
        widest:  '0.2em',
      },

      // ─── SPACING ──────────────────────────────────────────────
      spacing: {
        '0':  '0',
        '1':  '0.25rem',   //  4px
        '2':  '0.5rem',    //  8px
        '3':  '0.75rem',   // 12px
        '4':  '1rem',      // 16px
        '5':  '1.25rem',   // 20px
        '6':  '1.5rem',    // 24px
        '8':  '2rem',      // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
        '40': '10rem',     // 160px
        '48': '12rem',     // 192px
      },

      // ─── BORDER RADIUS ────────────────────────────────────────
      borderRadius: {
        none: '0',
        sm:   '4px',
        md:   '6px',     // ← canónico del proyecto
        lg:   '10px',
        xl:   '16px',
        '2xl':'24px',
        full: '9999px',
      },

      // ─── BORDER WIDTH ─────────────────────────────────────────
      borderWidth: {
        thin:    '1px',
        DEFAULT: '1px',
        thick:   '2px',
        heavy:   '3px',
      },

      // ─── BOX SHADOW ───────────────────────────────────────────
      boxShadow: {
        sm:    '0 1px 3px rgba(0,36,107,0.3), 0 1px 2px rgba(0,36,107,0.2)',
        md:    '0 4px 6px rgba(0,36,107,0.25), 0 2px 4px rgba(0,36,107,0.15)',
        lg:    '0 10px 25px rgba(0,36,107,0.35), 0 4px 10px rgba(0,36,107,0.2)',
        xl:    '0 20px 50px rgba(0,36,107,0.4), 0 8px 20px rgba(0,36,107,0.25)',
        card:  '0 4px 20px rgba(0,36,107,0.3)',
        glow:  '0 0 30px rgba(26,71,147,0.4)',
        inset: 'inset 0 2px 8px rgba(0,36,107,0.3)',
      },

      // ─── BACKGROUND IMAGE (gradients) ─────────────────────────
      backgroundImage: {
        'gradient-brand':   'linear-gradient(135deg, #00246b 0%, #1a4793 60%, #646caa 100%)',
        'gradient-surface': 'linear-gradient(180deg, #1a4793 0%, #00246b 100%)',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0,36,107,0) 0%, rgba(0,36,107,0.9) 100%)',
        'gradient-text':    'linear-gradient(90deg, #ffffff 0%, #b4b7d9 100%)',
      },

      // ─── TRANSITION / ANIMATION ───────────────────────────────
      transitionDuration: {
        instant: '50ms',
        fast:    '150ms',
        normal:  '250ms',
        slow:    '400ms',
        slower:  '600ms',
        sluggish:'800ms',
      },
      transitionTimingFunction: {
        linear:  'linear',
        'ease-in':    'cubic-bezier(0.4,0,1,1)',
        'ease-out':   'cubic-bezier(0,0,0.2,1)',
        'ease-in-out':'cubic-bezier(0.4,0,0.2,1)',
        bounce:  'cubic-bezier(0.34,1.56,0.64,1)',
        brand:   'cubic-bezier(0.25,0.46,0.45,0.94)',
      },

      // ─── MAX WIDTH ────────────────────────────────────────────
      maxWidth: {
        container: '1280px',
      },

      // ─── Z-INDEX ──────────────────────────────────────────────
      zIndex: {
        below:    '-1',
        base:     '0',
        raised:   '10',
        dropdown: '100',
        sticky:   '200',
        fixed:    '300',
        overlay:  '400',
        modal:    '500',
        toast:    '600',
        tooltip:  '700',
      },

      // ─── SCREENS (breakpoints) ────────────────────────────────
      screens: {
        xs:  '480px',
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1536px',
      },

    },
  },
  plugins: [],
}

export default config
