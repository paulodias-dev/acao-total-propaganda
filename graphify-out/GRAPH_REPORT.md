# Graph Report - acao-total-react  (2026-11-12)

## Corpus Check
- 27 files · ~30,624 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 158 nodes · 258 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b774e70a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.tsx
- package.json
- Ação Total Propaganda
- compilerOptions
- dependencies
- devDependencies
- scripts
- react
- AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `react` - 19 edges
2. `lucide-react` - 17 edges
3. `compilerOptions` - 15 edges
4. `motion` - 14 edges
5. `Ação Total Propaganda` - 13 edges
6. `App()` - 12 edges
7. `WhatsAppUnitButton()` - 11 edges
8. `Como rodar localmente` - 7 edges
9. `scripts` - 6 edges
10. `allowScripts` - 6 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `FloatingWhatsapp()`  [EXTRACTED]
  src/App.tsx → src/components/FloatingWhatsapp.tsx
- `ContactFooter()` --calls--> `WhatsAppUnitButton()`  [EXTRACTED]
  src/components/ContactFooter.tsx → src/components/WhatsAppUnitButton.tsx
- `Hero()` --calls--> `WhatsAppUnitButton()`  [EXTRACTED]
  src/components/Hero.tsx → src/components/WhatsAppUnitButton.tsx
- `ContactView()` --calls--> `WhatsAppUnitButton()`  [EXTRACTED]
  src/views/ContactView.tsx → src/components/WhatsAppUnitButton.tsx
- `QuoteView()` --calls--> `WhatsAppUnitButton()`  [EXTRACTED]
  src/views/QuoteView.tsx → src/components/WhatsAppUnitButton.tsx

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.15
Nodes (19): App(), ContactFooter(), Logo(), LogoProps, sizeMap, Navigation(), NavigationProps, ScrollToTop() (+11 more)

### Community 1 - "package.json"
Cohesion: 0.07
Nodes (24): allowScripts, esbuild@0.25.12, esbuild@0.28.1, fsevents@2.3.3, @google/genai@2.10.0, protobufjs@7.6.6, name, private (+16 more)

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

### Community 8 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, clean, dev, lint, preview

### Community 10 - "react"
Cohesion: 0.15
Nodes (17): lucide-react, motion, react, ContactFooterProps, FloatingWhatsapp(), Hero(), HeroProps, regionIcons (+9 more)

## Knowledge Gaps
- **10 isolated node(s):** `@google/genai`, `express`, `dotenv`, `@types/node`, `autoprefixer` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 102 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.tsx`, `package.json`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **What connects `@google/genai`, `express`, `dotenv` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1476923076923077 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `react` to `App.tsx`, `package.json`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.07389162561576355 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Should `Ação Total Propaganda` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._