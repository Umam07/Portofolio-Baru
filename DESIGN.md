---
version: 1.0.0
name: Umam-design-engineering-system
description: Light sky-blue design system for Muhammad Syafi'ul Umam - Frontend Developer & UI/UX Designer. Uses the Zephyr sky palette as the only visual mode.

colors:
  # Light Sky
  fixed:
    canvas: "#eaf3ff"
    surface-soft: "#f2f7ff"
    surface-card: "#ffffff"
    surface-elevated: "#dcebff"
    hairline: "#b9d4f5"
    hairline-soft: "#dcebff"
    ink: "#0e1b3d"
    body: "#24365c"
    body-strong: "#0e1b3d"
    muted: "#2f4166"
    muted-soft: "#7d90b8"
    primary: "#1f5fd6"
    primary-active: "#123a86"
    primary-glow: "rgba(31, 95, 214, 0.16)"
    badge-bg: "#ffffff"
    badge-border: "#b9d4f5"
    badge-text: "#0e1b3d"

  # Universals & Accents
  accent-azure: "#1f5fd6"
  accent-hanada: "#6699e6"
  accent-storm: "#80b3ff"
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

direction:
  visual-language: "bright daylight sky with soft white clouds, white cards, and deep-navy ink for maximum readability"
  dial: "ENERGY 2 / RHYTHM 2 / MOTION 2"
  palette-reason: "The Zephyr stops #E6F2FF, #B3D9FF, #80B3FF, and #6699E6 flood the page with daylight while #0E1B3D ink and #1F5FD6 primary keep every text at WCAG AA contrast."

components:
  # Navigation Bar
  navbar:
    height: 64px
    background: "rgba(255, 255, 255, 0.85)"
    blur: "12px"
    border: "rgba(255, 255, 255, 0.1)"

  # Hero Section
  hero:
    padding-top-desktop: 128px
    padding-bottom-desktop: 96px
    atmosphere: "A lightweight Three.js shader gradient (AmbientGradient site-wide) driven by the Zephyr light-sky stops #6699e6, #80b3ff, #b3d9ff, #e6f2ff plus white cloud wisps, over a #eaf3ff page. Dark-navy ink keeps contrast. Single fullscreen quad, capped DPR 1.5, static when prefers-reduced-motion."

  # Aozora gradient utility
  aozora-gradient:
    class: ".gradient-aozora"
    stops: ["#e6f2ff misted sky", "#b3d9ff sky haze", "#80b3ff sky haze deep", "#6699e6 river indigo"]
    angle: "135deg"
    interpolation: "oklab, with an sRGB fallback declaration for older engines"
    stops-position: "12.5% / 37.5% / 62.5% / 87.5% so each sky tone holds an equal band with soft outer caps"
    grain: "::after tiled 256px noise PNG (base64), mix-blend-mode overlay at 0.02 opacity, declared in @layer components so it composes with utility classes"
    usage: "Daylight surfaces (page background, hero, CTA bands). Body text stays dark navy on the bright field so contrast never drops."

  # Bento & Project Cards
  card:
    background: "#ffffff"
    border: "#b9d4f5"
    border-hover: "#1f5fd6"
    shadow: "0 4px 20px rgba(31, 95, 214, 0.14)"

  # Primary Action Button
  button-primary:
    background: "#1f5fd6"
    text: "#ffffff"
    hover: "#123a86"
    radius: 8px

Do's and Don'ts:
  Do:
    - Maintain crisp white cards over the daylight sky canvas with deep-navy ink.
    - Use text-body #24365C and text-muted #2F4166 for anything below 18px; the sky canvas is capped at 65% opacity so every word clears WCAG AA (4.5:1) on the deepest blue.
    - Use Plus Jakarta Sans / Inter for clear, modern typography with negative tracking.
    - Leverage Astro's static build output for sub-second page loads.
    - Use pure CSS hardware-accelerated transitions and subtle glows.
  Don't:
    - Don't inject heavy Three.js canvas tunnels or full-screen SVG noise filters that degrade scroll performance (exception: the single lightweight Aozora shader gradient described in hero.atmosphere, capped DPR 1.5 with reduced-motion static fallback).
    - Don't use font sizes below 12px (WCAG compliance).
    - Don't mix bookish serif headlines with dark tech cards.
---
