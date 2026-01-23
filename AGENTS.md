# Codebase Guidelines & Rules

This document outlines the architectural principles, coding standards, and rules for the Nekodustry Portal. All agents and developers must adhere to these guidelines to ensure consistency, accessibility, and maintainability.

## 1. Core Principles

*   **Modern Tech Stack:** Adhere to Next.js 16, React 19, and Tailwind CSS v4 patterns.
*   **Separation of Concerns:** Keep configuration (e.g., `src/config/`) separate from UI components.
*   **Component Structure:**
    *   `src/components/ui`: Reusable, generic UI components.
    *   `src/components/app`: Application-specific business components.

## 2. Styling & Theming (CRITICAL)

*   **Semantic Variables ONLY:**
    *   **DO NOT** use hardcoded color scales (e.g., `text-zinc-900`, `bg-blue-500`, `border-gray-200`).
    *   **MUST** use semantic variables defined in `globals.css` (e.g., `text-foreground`, `bg-primary`, `text-muted-foreground`, `border-border`).
    *   **Reason:** Ensures consistent theming (Dark/Light mode support) and maintainability.

*   **New Colors:**
    *   If a specific color is needed (e.g., for a success state), **DO NOT** use `text-green-500`.
    *   **Define** a new semantic variable in `src/app/globals.css` (e.g., `--status-success`) and use it (e.g., `text-status-success`).

## 3. Hydration & Server/Client Consistency

*   **Deterministic Rendering:**
    *   **DO NOT** use non-deterministic values directly in the render output (JSX).
    *   **Banned:** `new Date()`, `Math.random()`, `Date.now()` inside the return statement of a component.
    *   **Reason:** Causes "Hydration failed" errors because the server-rendered HTML differs from the client's initial render.
    *   **Solution:** Use `useEffect` to set these values on the client side, or use `suppressHydrationWarning` if the difference is acceptable (e.g., timestamps).

    ```tsx
    // ❌ BAD
    <span>{new Date().toISOString()}</span>

    // ✅ GOOD (Option 1 - Client Side Only)
    const [date, setDate] = useState("");
    useEffect(() => setDate(new Date().toISOString()), []);
    <span>{date}</span>

    // ✅ GOOD (Option 2 - Suppress Warning)
    <span suppressHydrationWarning>{new Date().toISOString()}</span>
    ```

## 4. Accessibility (A11y)

*   **Decorative Elements:**
    *   Any element that is purely decorative (background blobs, lines, shapes) **MUST** have `aria-hidden="true"`.
    *   **Reason:** Prevents screen readers from announcing irrelevant content.

## 5. Coding Standards

*   **Import Sorting:**
    *   Group imports: Framework (Next/React) -> External Libraries -> Internal Absolute Imports (`@/...`) -> Relative Imports.
*   **Hardcoded Strings:**
    *   Avoid hardcoding user-facing strings deep in components if possible. Although acceptable for MVP, prefer keeping text in config files or preparing for i18n.

## 6. Prohibited Actions (Anti-Patterns)

*   Never edit build artifacts (`dist`, `.next`).
*   Never use `style={{ ... }}` for static styling; use Tailwind classes.
*   Never introduce `tailwind.config.js` or `tailwind.config.ts`; use CSS variables and `@theme inline` in `globals.css`.
