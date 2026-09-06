---
version: 1.0.0
name: Umam-design-engineering-system
description: Dual-mode design system for Muhammad Syafi'ul Umam — Frontend Developer & UI/UX Designer. Combines Swiss Studio precision in Light Mode with Sleek Obsidian & Cyber Ice sophistication in Dark Mode. Built for lightning-fast performance, zero layout shift, and exceptional craft fidelity.

colors:
  # Light Mode (Swiss Studio / Linear DNA)
  light:
    canvas: "#ffffff"
    surface-soft: "#f8fafc"
    surface-card: "#ffffff"
    surface-elevated: "#f1f5f9"
    hairline: "#e2e8f0"
    hairline-soft: "#f1f5f9"
    ink: "#09090b"
    body: "#334155"
    body-strong: "#0f172a"
    muted: "#64748b"
    muted-soft: "#94a3b8"
    primary: "#0284c7"
    primary-active: "#0369a1"
    primary-glow: "rgba(2, 132, 199, 0.12)"
    badge-bg: "#f1f5f9"
    badge-border: "#e2e8f0"
    badge-text: "#0f172a"

  # Dark Mode (Sleek Obsidian & Cyber Ice)
  dark:
    canvas: "#080808"
    surface-soft: "#0f1013"
    surface-card: "#121316"
    surface-elevated: "#181a1f"
    hairline: "#1f2228"
    hairline-soft: "#181a1f"
    ink: "#f8fafc"
    body: "#cbd5e1"
    body-strong: "#f8fafc"
    muted: "#94a3b8"
    muted-soft: "#64748b"
    primary: "#38bdf8"
    primary-active: "#0ea5e9"
    primary-glow: "rgba(56, 189, 248, 0.16)"
    badge-bg: "#121316"
    badge-border: "#22252c"
    badge-text: "#f8fafc"

  # Universals & Accents
  accent-cyan: "#38bdf8"
  accent-indigo: "#818cf8"
  accent-amber: "#f59e0b"
  success: "#10b981"
  error: "#ef4444"

typography:
  display-xl:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.035em
  display-lg:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.03em
  display-md:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.025em
  display-sm:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.02em
  title-lg:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.015em
  title-md:
    fontFamily: "Plus Jakarta Sans, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.01em
  body-lg:
    fontFamily: "Inter, Plus Jakarta Sans, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter, Plus Jakarta Sans, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter, Plus Jakarta Sans, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Inter, Plus Jakarta Sans, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5

spacing:
  section-py: 96px
  container-max: 1200px
  card-gap: 24px

radii:
  sm: 6px
  md: 10px
  lg: 14px
  xl: 20px
  full: 9999px

components:
  # Navigation Bar
  navbar:
    height: 64px
    bg-light: "rgba(255, 255, 255, 0.85)"
    bg-dark: "rgba(8, 8, 8, 0.85)"
    blur: "12px"
    border-light: "rgba(226, 232, 240, 0.8)"
    border-dark: "rgba(255, 255, 255, 0.08)"

  # Hero Section
  hero:
    padding-top-desktop: 128px
    padding-bottom-desktop: 96px

  # Bento & Project Cards
  card:
    bg-light: "#ffffff"
    bg-dark: "#121316"
    border-light: "#e2e8f0"
    border-dark: "rgba(255, 255, 255, 0.08)"
    border-hover-dark: "rgba(56, 189, 248, 0.3)"
    shadow-light: "0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px rgba(0, 0, 0, 0.02)"
    shadow-dark: "0 4px 20px rgba(0, 0, 0, 0.4)"

  # Primary Action Button
  button-primary:
    bg-light: "#0284c7"
    text-light: "#ffffff"
    hover-light: "#0369a1"
    bg-dark: "#38bdf8"
    text-dark: "#080808"
    hover-dark: "#7dd3fc"
    radius: 8px

Do's and Don'ts:
  Do:
    - Maintain ultra-crisp white surfaces in Light Mode and deep obsidian in Dark Mode.
    - Use Plus Jakarta Sans / Inter for clear, modern typography with negative tracking.
    - Leverage Astro's static build output for sub-second page loads.
    - Use pure CSS hardware-accelerated transitions and subtle glows.
  Don't:
    - Don't inject heavy Three.js canvas tunnels or full-screen SVG noise filters that degrade scroll performance.
    - Don't use font sizes below 12px (WCAG compliance).
    - Don't mix bookish serif headlines with dark tech cards.
---
