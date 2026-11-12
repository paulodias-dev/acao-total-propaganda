# Graph Report - acao-total-react  (2026-11-12)

## Corpus Check
- 30 files · ~31,687 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 178 nodes · 304 edges · 10 communities (8 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dbc6affb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.tsx
- package.json
- Ação Total Propaganda
- compilerOptions
- dependencies
- devDependencies
- Navigation.tsx
- vite-env.d.ts
- react
- AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `react` - 20 edges
2. `lucide-react` - 18 edges
3. `App()` - 17 edges
4. `compilerOptions` - 15 edges
5. `motion` - 14 edges
6. `Ação Total Propaganda` - 13 edges
7. `WhatsAppUnitButton()` - 11 edges
8. `Como rodar localmente` - 7 edges
9. `scripts` - 6 edges
10. `allowScripts` - 6 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `ContactFooter()`  [EXTRACTED]
  src/App.tsx → src/components/ContactFooter.tsx
- `App()` --calls--> `FloatingWhatsapp()`  [EXTRACTED]
  src/App.tsx → src/components/FloatingWhatsapp.tsx
- `App()` --calls--> `Navigation()`  [EXTRACTED]
  src/App.tsx → src/components/Navigation.tsx
- `App()` --calls--> `ContactView()`  [EXTRACTED]
  src/App.tsx → src/views/ContactView.tsx
- `App()` --calls--> `HomeView()`  [EXTRACTED]
  src/App.tsx → src/views/HomeView.tsx

## Import Cycles
- None detected.

## Communities (10 total, 2 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.15
Nodes (21): react-dom, App(), pageTitles, CookieConsent(), CookieConsentProps, ScrollToTop(), AnalyticsConsent, AnalyticsParams (+13 more)

### Community 1 - "package.json"
Cohesion: 0.07
Nodes (29): allowScripts, esbuild@0.25.12, esbuild@0.28.1, fsevents@2.3.3, @google/genai@2.10.0, protobufjs@7.6.6, name, private (+21 more)

### Community 2 - "Ação Total Propaganda"
Cohesion: 0.07
Nodes (27): Ambiente de desenvolvimento, Ação Total Propaganda, Banner de promoção, Banner promocional + header fixo, Boas práticas ao editar, Build de produção, Checagem de tipos, Como rodar localmente (+19 more)

### Community 3 - "compilerOptions"
Cohesion: 0.12
Nodes (15): compilerOptions, allowImportingTsExtensions, allowJs, experimentalDecorators, isolatedModules, jsx, lib, module (+7 more)

### Community 4 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, dotenv, express, @google/genai, lucide-react, motion, react, react-dom (+3 more)

### Community 5 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, autoprefixer, esbuild, tailwindcss, tsx, @types/express, @types/node, typescript (+1 more)

### Community 6 - "Navigation.tsx"
Cohesion: 0.17
Nodes (11): Logo(), LogoProps, sizeMap, Navigation(), NavigationProps, ServiceAreas(), ENABLE_SMART_PROPOSAL_SIMULATOR, HomeView() (+3 more)

### Community 10 - "react"
Cohesion: 0.14
Nodes (20): lucide-react, motion, react, ContactFooter(), ContactFooterProps, FloatingWhatsapp(), Hero(), HeroProps (+12 more)

## Knowledge Gaps
- **10 isolated node(s):** `@google/genai`, `express`, `dotenv`, `@types/node`, `autoprefixer` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 108 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.tsx`, `package.json`, `Navigation.tsx`?**
  _High betweenness centrality (0.136) - this node is a cross-community bridge._
- **What connects `@google/genai`, `express`, `dotenv` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1455026455026455 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `react` to `App.tsx`, `package.json`, `Navigation.tsx`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06653225806451613 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Should `Ação Total Propaganda` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._