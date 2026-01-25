# Nekodustry Project Vision & Style Guide

## 1. Core Objective

**To build a centralized, modular, and aesthetically unified service layer for the Nekodustry ecosystem.**

Nekodustry serves as the "Operating System" for the community, integrating:

- **Game Modes:** Interfaces for gameplay service instances.
- **Tools:** Hosting for MintyMDT and other development utilities.
- **Community:** Event management and temporal services.

The platform provides _structure_ for the community to inhibit, rather than enforcing rigid direction. It is an "Experimental Ecosystem".

## 2. Design Philosophy: "Systemic Minimalist"

The user interface should feel like a premium, high-tech utility. It is not just a website; it is a **Portal**.

- **Aesthetics:** Clean, technical, high-contrast, "glass & steel".
- **Motion:** Precise, smooth, non-distracting micro-interactions.
- **Feeling:** Reliable, Industrial, Futuristic.

## 3. Global Styling Guidelines

### Typography

Consistent use of fonts to distinguish between "Content" and "System Data".

- **Primary (Sans):** `Geist Sans`. Used for long-form text, descriptions, and primary headings.
- **Secondary (Mono):** `Geist Mono`. Used for:
  - Metadata (dates, versions, IDs).
  - UI Elements (buttons, badges, navigation).
  - Technical annotations (e.g., "OPERATING AS A SERVICE LAYER").
  - Sub-headers requiring distinct visual separation.

### Color Palette (OKLCH)

Derived from `globals.css`.

- **Background:** Clean, solid (avoid heavy gradients in main content areas).
- **Foreground:** High contrast text.
- **Muted:** Used heavily for secondary text and structural lines to reduce visual noise.
- **Accents:** Sparse use of color. Status indicators (Success/Error) should be distinct.

### Layout Patterns

- **Sidebar Navigation:** The primary navigation method. Collapsible, unobtrusive.
- **Container Widths:**
  - _Hero/Landing:_ Full width or controlled max-width for impact.
  - _Content/Reading:_ Max-width `prose` (65ch) for readability.
  - _Dashboard/Grid:_ Responsive grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

## 4. Page Specific Guidelines

### A. Landing Pages (Hero)

_Example: Home Page_

- **Structure:** Large, impactful typography.
- **Visuals:** Abstract backgrounds, subtle animations.
- **Navigation:** Gateway links with icons and descriptive subtitles.
- **Tone:** Welcoming but impressive.

### B. Functional Pages (Dashboards, Settings)

_Example: Settings, Game Mode Managers_

- **Structure:** Dense, information-rich.
- **Components:**
  - Card-based grouping for related settings.
  - Toggles and Inputs should be aligned and clear.
  - Use `SystemFooter` or similar anchors.
- **Tone:** Efficient, utility-focused.

### C. Documentation / Content

_Example: About, Guides_

- **Structure:** Readable hierarchy (H1 -> H2 -> H3).
- **Typography:** Focus on line-height and spacing for reading comfort.

## 5. Development Standards

- **Components:** Prefer creating reusable components in `components/ui` (Radix) or `components/app` (Domain specific).
- **Icons:** Use `lucide-react`.
- **Naming:** logical-kebab-case for files, PascalCase for components.
