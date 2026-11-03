# Graph Report - acao-total-react  (2026-11-03)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 114 nodes · 177 edges · 9 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `80aa0cd0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8

## God Nodes (most connected - your core abstractions)
1. `react` - 17 edges
2. `lucide-react` - 15 edges
3. `compilerOptions` - 15 edges
4. `motion` - 14 edges
5. `App()` - 12 edges
6. `allowScripts` - 6 edges
7. `scripts` - 6 edges
8. `Navigation()` - 4 edges
9. `ContactFooter()` - 3 edges
10. `FloatingWhatsapp()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `Navigation()`  [EXTRACTED]
  src/App.tsx → src/components/Navigation.tsx
- `App()` --calls--> `ContactFooter()`  [EXTRACTED]
  src/App.tsx → src/components/ContactFooter.tsx
- `App()` --calls--> `FloatingWhatsapp()`  [EXTRACTED]
  src/App.tsx → src/components/FloatingWhatsapp.tsx
- `App()` --calls--> `ScrollToTop()`  [EXTRACTED]
  src/App.tsx → src/components/ScrollToTop.tsx
- `App()` --calls--> `AboutView()`  [EXTRACTED]
  src/App.tsx → src/views/AboutView.tsx

## Import Cycles
- None detected.

## Communities (9 total, 0 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.16
Nodes (10): lucide-react, motion, react, ContactFooterProps, HeroProps, FAQItem, SpotOption, HomeViewProps (+2 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (17): name, private, type, version, autoprefixer, dotenv, esbuild, express (+9 more)

### Community 2 - "Community 2"
Cohesion: 0.21
Nodes (11): react-dom, App(), ContactFooter(), FloatingWhatsapp(), ScrollToTop(), AboutView(), ContactView(), DemosView() (+3 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules, jsx, lib, module (+7 more)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (11): dependencies, dotenv, express, @google/genai, lucide-react, motion, react, react-dom (+3 more)

### Community 5 - "Community 5"
Cohesion: 0.22
Nodes (9): devDependencies, autoprefixer, esbuild, tailwindcss, tsx, @types/express, @types/node, typescript (+1 more)

### Community 6 - "Community 6"
Cohesion: 0.38
Nodes (5): Logo(), LogoProps, sizeMap, Navigation(), NavigationProps

### Community 7 - "Community 7"
Cohesion: 0.33
Nodes (6): allowScripts, esbuild@0.25.12, esbuild@0.28.1, fsevents@2.3.3, @google/genai@2.10.0, protobufjs@7.6.6

### Community 8 - "Community 8"
Cohesion: 0.33
Nodes (6): scripts, build, clean, dev, lint, preview

## Knowledge Gaps
- **10 isolated node(s):** `autoprefixer`, `dotenv`, `esbuild`, `express`, `@google/genai` (+5 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 72 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Community 0` to `Community 1`, `Community 2`, `Community 6`?**
  _High betweenness centrality (0.185) - this node is a cross-community bridge._
- **What connects `autoprefixer`, `dotenv`, `esbuild` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.11052631578947368 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Community 4` to `Community 1`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `Community 0` to `Community 1`, `Community 2`, `Community 6`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._