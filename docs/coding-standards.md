# Coding Standards & Best Practices

## 1. Code Formatting

To ensure consistency across the codebase, we adhere to strict formatting rules enforced by tooling.

- **Formatter:** Use **Prettier** as the default formatter.
- **Tailwind CSS:** Use `prettier-plugin-tailwindcss` to automatically sort classes.
  - _Why?_ Keeps class order predictable and reduces merge conflicts.

## 2. Component Organization

### A. Component Reuse Hierarchy

We classify components based on their scope and reusability potential.

1.  **Route-Specific (Non-reusable)**
    - **Location:** Directly inside the route folder (e.g., `src/app/(home)/hero-section.tsx`).
    - **Rule:** If a component is only used in _one_ page, keep it with that page. Do not clutter global component directories.

2.  **Domain Components (Large Reusable)**
    - **Location:** `@/components/app`
    - **Usage:** Complex, data-heavy components that might be used in multiple places within a specific domain context (e.g., `UserDashboard`, `GameServerList`).

3.  **Common Components (Small Reusable)**
    - **Location:** `@/components/common`
    - **Usage:** Generic, atomic UI elements not part of the base design system but used widely (e.g., `StatusBadge`, `CopyButton`).

4.  **Base UI System (Shadcn)**
    - **Location:** `@/components/ui`
    - **Rule:** **Do not create new components here.**
    - This directory is reserved for Shadcn/Radix primitives.
    - _Allowed:_ Modifying existing Shadcn components to match the `Systemic Minimalist` design.

### B. File Splitting Rules

- **Context Priority:** Do not prematurely split files. It is easier to read code when related logic is in the same file.
- **Soft Limit:** **400 lines**.
  - _Guideline:_ Consider extracting sub-components only when a file exceeds ~400 lines or when the logic becomes strictly distinct and reusable.

## 3. General Rules

- **Naming:**
  - Files: `kebab-case.tsx` (e.g., `nav-bar.tsx`)
  - Components: `PascalCase` (e.g., `NavBar`)
- **Exports:** Prefer `export function` or `export const` (named exports) over `export default` for components, except for Next.js pages/layouts which _require_ default exports.

## 4. Technical Stack & Rules

- **Stack:** Next.js 16, React 19, Tailwind CSS v4.
- **Configuration:**
  - **DO NOT** create `tailwind.config.js` or `ts`.
  - Use CSS variables and `@theme inline` in `globals.css` for implementation.
  - Keep `src/config/` for app-wide configuration, separated from UI.

## 5. Styling & Usage

- **Semantic Variables Only:**
  - Avoid hardcoded colors (e.g., `text-zinc-900`, `bg-blue-500`).
  - Use semantic tokens: `text-foreground`, `bg-primary`, `border-border`.
  - _Why?_ Ensures dark mode support and maintainability.
- **New Colors:** Define in `globals.css` first, then use the variable.
- **Anti-Pattern:** Do not use `style={{ ... }}` for static styling. Use Tailwind classes.

## 6. Best Practices

### A. Hydration & Consistency

- **Deterministic Rendering:** Do not use `Math.random()`, `Date.now()`, or `new Date()` directly in JSX.
- **Solution:** Use `useEffect` for client-side functionality or `suppressHydrationWarning` for timestamps.

### B. Accessibility (A11y)

- **Decorative Elements:** Must have `aria-hidden="true"` (background blobs, shapes).

### C. Import Order

1.  Framework (Next/React)
2.  External Libraries
3.  Internal Absolute Imports (`@/...`)
4.  Relative Imports
