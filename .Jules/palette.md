## 2026-01-26 - Mirroring Complex Hover Effects for Keyboard Users
**Learning:** Tailwind's standard `group-hover` works for mouse, but keyboard users miss out on "delight" animations. Using named groups (e.g., `group/card`) on the parent and `group-focus-visible/card` on children allows complex, multi-element animations to trigger on tab focus, maintaining visual parity.
**Action:** Use `group/name` and `group-focus-visible/name` for any interactive card/item with complex internal hover states.
