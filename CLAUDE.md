# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite)
npm run build     # production build
npm run preview   # preview production build
npm run lint      # ESLint
```

There are no tests in this project.

## Architecture

This is a React + Vite portfolio site styled as a macOS desktop. The core idea: every interactive section (Projects, Skills, Resume, etc.) is a draggable, z-index-managed "window" that mimics macOS app windows.

### Window system

**`src/store/window.js`** — Zustand store (with Immer) that owns all window state. `WINDOW_CONFIG` in `src/constants/index.js` defines the initial state for every registered window key (`finder`, `terminal`, `safari`, `spotify`, `photos`, `contact`, `resume`, `txtfile`, `imgfile`). The store exposes `openWindow(key, data?)`, `closeWindow(key)`, and `focusWindow(key)` which manage `isOpen`, `zIndex`, and optional `data` per window.

**`src/hoc/WindowWrapper.jsx`** — HOC that wraps any component into a draggable macOS-style window. Usage: `export default WindowWrapper(MyComponent, "windowKey")`. It attaches GSAP `Draggable`, plays an open animation via `gsap.fromTo`, and syncs visibility/z-index from the store. Every window component in `src/windows/` follows this pattern.

### Adding a new window

1. Create `src/windows/MyWindow.jsx`, wrap it: `export default WindowWrapper(MyWindow, "mywindow")`
2. Add `"mywindow": { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }` to `WINDOW_CONFIG` in `src/constants/index.js`
3. Import and render `<MyWindow />` in `src/App.jsx`
4. Add a dock entry with `canOpen: true` and `id: "mywindow"` to `dockApps` in `src/constants/index.js`

### Path aliases

Configured in `vite.config.js`:

| Alias         | Resolves to      |
| ------------- | ---------------- |
| `#components` | `src/components` |
| `#constants`  | `src/constants`  |
| `#hoc`        | `src/hoc`        |
| `#store`      | `src/store`      |
| `#windows`    | `src/windows`    |

### Content / data

All static content (nav links, dock apps, blog posts, tech stack, socials, gallery, Finder file-tree) lives in `src/constants/index.js`. The Finder window's file system is defined as a nested tree of `location` objects (`WORK_LOCATION`, `ABOUT_LOCATION`, etc.) where each node has a `kind` (`"folder"` or `"file"`) and a `fileType` (`"txt"`, `"img"`, `"url"`, `"pdf"`, `"fig"`). Finder renders these recursively and opens the appropriate window (e.g. `txtfile`, `imgfile`) via `openWindow` with the node's data.

### Styling

Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed). Global styles and custom component classes are in `src/index.css`. Static assets (icons, images) live in `public/` and are referenced with root-relative paths (e.g. `/icons/github.svg`).

## Skill/plugin check

Before starting any task, check installed skills and plugins for a match:

- Run `/skills` (or check available skills) to see what's loaded
- If a relevant skill exists, use it and say which one
- If multiple skills could apply, pick the most specific one and briefly say why
- If none apply, proceed normally — don't force-fit an irrelevant skill

## Design skill selection

Multiple design/taste skills are installed. Before starting UI work, ask me which
aesthetic direction to use (default: design-taste-frontend-v1) rather than picking automatically.
