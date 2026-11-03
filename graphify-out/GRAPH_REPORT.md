# Graph Report - acao-total-react  (2026-11-03)

## Corpus Check
- 23 files · ~29,064 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 144 nodes · 205 edges · 12 communities (10 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e3ba29d6`
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
- allowScripts
- scripts
- Como rodar localmente
- Hero.tsx
- AGENTS.md

## God Nodes (most connected - your core abstractions)
1. `react` - 17 edges
2. `lucide-react` - 15 edges
3. `compilerOptions` - 15 edges
4. `motion` - 14 edges
5. `Ação Total Propaganda` - 13 edges
6. `App()` - 12 edges
7. `Como rodar localmente` - 7 edges
8. `scripts` - 6 edges
9. `allowScripts` - 6 edges
10. `Componentes e comportamentos importantes` - 5 edges

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

## Communities (12 total, 2 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.15
Nodes (19): lucide-react, motion, react, App(), ContactFooter(), ContactFooterProps, FloatingWhatsapp(), ScrollToTop() (+11 more)

### Community 1 - "package.json"
Cohesion: 0.09
Nodes (18): name, private, type, version, autoprefixer, dotenv, esbuild, express (+10 more)

### Community 2 - "Ação Total Propaganda"
Cohesion: 0.10
Nodes (20): Ação Total Propaganda, Banner de promoção, Banner promocional + header fixo, Boas práticas ao editar, Componentes e comportamentos importantes, Conteúdos que costumam exigir manutenção, Créditos, Créditos do site (+12 more)

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
Cohesion: 0.38
Nodes (5): Logo(), LogoProps, sizeMap, Navigation(), NavigationProps

### Community 7 - "allowScripts"
Cohesion: 0.33
Nodes (6): allowScripts, esbuild@0.25.12, esbuild@0.28.1, fsevents@2.3.3, @google/genai@2.10.0, protobufjs@7.6.6

### Community 8 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, build, clean, dev, lint, preview

### Community 9 - "Como rodar localmente"
Cohesion: 0.29
Nodes (7): Ambiente de desenvolvimento, Build de produção, Checagem de tipos, Como rodar localmente, Instalação, Preview da build, Pré-requisitos

## Knowledge Gaps
- **10 isolated node(s):** `@google/genai`, `express`, `dotenv`, `@types/node`, `autoprefixer` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 98 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.tsx` to `package.json`, `Hero.tsx`, `Navigation.tsx`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **What connects `@google/genai`, `express`, `dotenv` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09486166007905138 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Should `Ação Total Propaganda` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `App.tsx` to `package.json`, `Hero.tsx`, `Navigation.tsx`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._