# Spec: remediação de qualidade (waves)

Spec de implementação para os findings do thermonuclear review do estado atual. Não é um redesign. Cada wave fecha um bloqueio da barra de qualidade: apagar complexidade, tornar contratos honestos, deixar o globo com uma representação de terra.

Fonte: review de 14 set 2026. Código em `src/`. Sem git no momento do review.

## Objetivo

O site continua uma landing única (`/`). Visual de marketing permanece reconhecível. A implementação deixa de ter:

1. três pipelines de terra no cliente
2. kit UI / hooks / libs sem consumidor
3. interação e navegação que fingem destinos inexistentes
4. tokens de layout/motion que ninguém usa de verdade
5. copy e tipos com dois donos

## Não-objetivos

- Não criar blog, páginas legais, case studies ou form de contato “de verdade”.
- Não extrair módulos só para enxugar um arquivo. Se o conceito não some, a extração não conta.
- Não “organizar” o GeoJSON em mais arquivos TypeScript. Ou sai do client, ou a wave 4 falhou.
- Não adicionar testes de snapshot como substituto de critério visual. Verificar no browser ao fim de cada wave que muda UI.

## Regras em todas as waves

- Preservar comportamento visível, **exceto** onde a wave declara mudança (Method, nav, globo, hrefs).
- Não introduzir `any`. Casts só na borda de asset, e só até a wave 4/5 os eliminar.
- Não passar nenhum arquivo de 1k linhas. Hoje nenhum chega perto; manter.
- Não recriar Accordion / Input / Select / `useMediaQuery` / `supportsWebGL` “para o futuro”.
- Uma wave por PR/commit mental. Não misturar globo com delete de kit.

## Ordem e dependência

```
Wave 1  delete + Method estático          FECHADA
Wave 2  navegação e hrefs honestos        FECHADA
Wave 3  Section density + motion          FECHADA
Wave 4  globo: uma terra, sem GeoJSON     FECHADA
Wave 5  conteúdo canônico + tipos         FECHADA
```

Waves 1–3 podem serializar rápido. Wave 4 é o corte estrutural. Wave 5 só depois da 2, senão o modelo de conteúdo congela hrefs mentirosos.

### Travas globais descobertas na Wave 1

- Next.js 16 (`next/dynamic`): `ssr: false` **não é suportado em Server Component** — erro de build. Docs: *Skipping SSR* em lazy-loading; a opção só vale dentro de Client Component.
- Hero permanece Server Component. O globo entra via `dynamic(..., { loading: () => <GlobeFallback /> })` **sem** `ssr: false` e **sem** `"use client"` no Hero. `Globe3D` já é Client Component; o HTML inicial mostra o fallback do `loading`.
- Não “corrigir” isso nas waves seguintes (não mover o Hero para client só para repor `ssr: false`).

---

## Wave 1 — Apagar dívida e interação falsa

**Fecha:** P1 kit morto, P1 Method, wrappers que não pagam aluguel.

### Decisão travada

- Deletar o que não tem import.
- Method vira lista estática. Sem `useState`, sem `aria-pressed`.
- `next/dynamic` do globo mora no `Hero`. `GlobeLoader` some.

### Escopo

Arquivos a **deletar**:

| Arquivo | Motivo |
|---|---|
| `src/components/ui/Accordion.tsx` | Zero consumidores. Method não deve passar a usá-lo. |
| `src/components/ui/Input.tsx` | Inclui `Textarea`. Form kit sem form. |
| `src/components/ui/Select.tsx` | Chrome duplicado do Input. |
| `src/hooks/useMediaQuery.ts` | Morto. Globo mede `size.width` do canvas, que é o check certo. |
| `src/lib/webgl.ts` | Morto. `Canvas` fallback + `CanvasErrorBoundary` cobrem falha. |
| `src/components/globe/GlobeLoader.tsx` | Identity wrapper. |

Arquivos a **editar**:

- `src/components/sections/Method.tsx` — virar Server Component. `<ol>` de passos, sem button/toggle. Manter tipografia, grid 5 colunas, borda. Hover de card (se houver) só via CSS em `<li>` / `<article>`, não via estado.
- `src/components/sections/Hero.tsx` — `dynamic(() => import("@/components/globe/Globe3D").then(m => m.Globe3D), { loading: () => <GlobeFallback /> })` direto no Hero. Hero **não** ganha `"use client"`. **Não** passar `ssr: false` aqui (Next 16 rejeita em Server Component).

### Fora de escopo

- Não alterar visual do globo.
- Não criar form de contato para “justificar” Input.
- Não unificar Method com Accordion.

### Critério de aceite

- `rg` em `src/` não encontra imports dos arquivos deletados.
- `Method.tsx` não importa `react` nem `useState`.
- Clique nos passos do método não muda borda/fundo por estado. O grid continua legível.
- Hero ainda hidrata o globo no cliente, com fallback durante o load (`loading` do `dynamic`, sem `ssr: false`).
- `npm run build` e `npm run lint` passam.

### Status

Fechada (14 set 2026). Sem commit. Desvio aceito: `ssr: false` omitido porque Next 16.3.5 rejeita a flag em Server Component. Kit morto apagado; Method estático; GlobeLoader sumiu.

### Verificação visual

- `/` desktop e mobile: seção Método igual em conteúdo, sem “seleção” persistente.
- Hero: globo aparece; refresh não quebra o fallback.

---

## Wave 2 — Informação honesta

**Fecha:** P1 nav mentirosa; hrefs de serviço/case/legal que fingem páginas.

### Decisão travada

Destino só existe se a âncora ou a rota existir **e** o label descrever o que está lá.

| Hoje | Fica |
|---|---|
| Nav `Blog` → `#tecnologias` | Item some da nav. A seção Stack/Tecnologias permanece na página, sem mentir que é blog. |
| Nav `Sobre` → `#diferenciais` | `href: "#sobre"`. A seção troca `id="diferenciais"` por `id="sobre"`. Label `Sobre` ok. |
| `legalLinks` → `#contato` | Remover Privacidade e Termos do footer até existirem páginas. Não apontar lei para o CTA. |
| `services[].href` todos `#contato` | Remover `href` de `ServiceItem`. `ServiceCard` deixa de ser `<a>`. Vira `<article>` (ou `<li>` dentro da lista). Sem seta de “ir para página”. |
| `cases[].href` todos `#contato` | Remover `href` de `CaseItem`. Tirar o link “Ver o projeto”. Métricas/tags ficam. |
| Social `linkedin.com` / `github.com` genéricos | Remover do footer **ou** trocar por URLs reais da Globo se existirem neste momento. Sem homepage genérica de terceiros. |

`site.cta.primary.href` (`#contato`) e `site.cta.secondary.href` (`#cases`) continuam: as âncoras existem.

Footer coluna “Serviços”: se os serviços não têm URL, a coluna lista títulos **sem** `<a>`, ou some e deixa só Navegação + contato. Preferir lista sem link a inventar `#contato` em cinco linhas.

### Escopo

- `src/data/navigation.ts`
- `src/data/footer.ts`
- `src/data/services.ts`, `src/data/cases.ts`
- `src/types/content.ts` — `href` sai de `ServiceItem` e `CaseItem` se não houver destino.
- `src/components/ui/ServiceCard.tsx`, `src/components/ui/CaseCard.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/sections/Differentials.tsx` — `id="sobre"`; `aria-labelledby` alinhado.

### Fora de escopo

- Não criar `app/blog`, `app/privacidade`, `app/cases/[id]`.
- Não mudar copy de headlines (isso é wave 5).
- Não “consertar” `site.email` / `globo.local` a menos que os valores reais já estejam definidos. Placeholder de marca ≠ href mentiroso.

### Critério de aceite

- Todo `href` em `src/data/` resolve para âncora existente na home **ou** URL absoluta real.
- Nenhum label de nav aponta para uma seção com outro nome.
- ServiceCard e CaseCard não são links mortos.
- Skip link, header CTA e FinalCTA ainda levam a `#contato` / `#cases`.

### Verificação visual

- Cada item da nav (desktop + menu mobile) scrolla para a seção cujo título corresponde ao label.
- Footer: sem Privacidade/Termos fantasma; serviços não parecem deep-link.
- Cards de serviço/case não têm hover de link nem “Ver o projeto”.

### Status

Fechada (14 set 2026). Sem commit. `FooterColumn` virou union `links` | `items` — a coluna Serviços não tem `<a>`. Não reintroduzir `href` em `ServiceItem` / `CaseItem` na Wave 5. Social e legais ficam fora até existirem destinos reais.

---

## Wave 3 — Contratos de layout e motion

**Fecha:** P2 `!py-*` em Section; P2 `motion.ts` morto; cubic-bezier copiado.

### Decisão travada

**Section** ganha densidade explícita. Nada de `!important` para vencer `section-space`.

```ts
type SectionDensity = "default" | "compact" | "tight";
```

Mapeamento (valores atuais, só mudam de lugar):

| Density | Quem usa | Padding |
|---|---|---|
| `default` | a maioria | o `section-space` de hoje |
| `compact` | `Metrics`, `FinalCTA` | o que hoje é `!py-8 md:!py-10 lg:!py-12` (FinalCTA sem o lg extra, manter o que a seção já tem) |
| `tight` | `SocialProof` | o que hoje é `!py-7 md:!py-9` |

Implementar via classes em `globals.css` (`section-space`, `section-space-compact`, `section-space-tight`) **ou** `@utility`. `Section` aplica a classe pelo prop. Call sites passam `density`, não `className="!py-…"`.

**Motion** tem um dono: CSS tokens. JS só espelha o que o Framer precisa.

1. Em `globals.css` / `@theme`:
   - `--ease-premium` (já existe) vira utility Tailwind `ease-premium`
   - `--duration-reveal: 0.65s`
   - `--reveal-offset: 24px`
2. `.reveal` usa `var(--duration-reveal)`, `var(--ease-premium)`, `translateY(var(--reveal-offset))`.
3. `lib/motion.ts` exporta os **mesmos** números para Framer (`MobileMenu`). `revealOffset` só permanece se algum JS ler; senão some.
4. Trocar `ease-[cubic-bezier(0.22,1,0.36,1)]` em classNames por `ease-premium`.

Arquivos com o bezier inline hoje: `Header`, `Button`, `Card`, `Accordion` (já morto na 1), `Input` (morto), `ServiceCard`, `CaseCard`, `Method`.

### Fora de escopo

- Não reescrever Reveal em Framer.
- Não animar Metric / marquee de outro jeito.
- Não mudar durações; só centralizar.

### Critério de aceite

- Zero `!py-` em `src/`.
- Zero `cubic-bezier(0.22,1,0.36,1)` em `className` de TSX. Uma declaração no CSS.
- `Reveal` e `motion.ts` não divergem (0.65s / 24px / o mesmo easing).
- Ritmo vertical de SocialProof, Metrics, FinalCTA e demais seções **igual** ao pré-wave (medir no browser, não “parece parecido”).

### Verificação visual

- Home inteira, desktop e ~375px: espaçamento entre Clientes → Métricas → Serviços e o bloco final de CTA idêntico ao atual.
- Reduced motion: reveal e marquee continuam desligados.

### Status

Fechada (14 set 2026). Sem commit. `ease-premium` vive em `@theme`. `revealOffset` saiu de `motion.ts`. Compact no `lg` é 48px (Metrics); FinalCTA compartilha `compact` mas fica em 40px via `#contato.section-space-compact` — não “alinhar” os dois nem voltar `!py-*`.

Padding medido (block, um lado):

| Seção | Desktop 1920 | 375px |
|---|---|---|
| Clientes | 36px | 28px |
| Métricas | 48px | 32px |
| Serviços | 60px | 40px |
| CTA final | 40px | 32px |

---

## Wave 4 — Globo: uma terra, GeoJSON fora do client

**Fecha:** P0. Este é o code-judo. Se a wave só “organizar” `land.ts`, falhou.

### Decisão travada (visual)

O hero fica com:

- esfera texturizada (continentes pintados + costa no mapa)
- pontos de cidade + arcos
- partículas / wireframe / glow que já existem na cena
- fallback CSS

**Sai:**

- `lineSegments` de coastline 3D (duplica o stroke da textura)
- instanced `LandDots` + `isPointOnLand` em runtime
- import de `src/data/ne_110m_land.json` no bundle do client
- geração de canvas 2048×1024 no `useMemo` do mount

**Como a textura entra:** asset estático, não GeoJSON.

1. Script one-shot (Node, fora do runtime da página) lê o Natural Earth, chama a lógica atual de `createLandTexture`, grava PNG(s):
   - `public/globe/land-2048x1024.png` (desktop)
   - `public/globe/land-1024x512.png` (compact / mobile)
2. `GlobeContinents` usa `THREE.TextureLoader` / `useTexture` nesses arquivos. `compact` só escolhe qual PNG.
3. Depois que os PNG estão no repo e a cena usa eles, **deletar** do runtime:
   - `ne_110m_land.json` (ou mover para `scripts/` se o gerador ainda precisar; não importar de `src/`)
   - `extractLandPolygons` / `buildCoastlinePositions` / `isPointOnLand` / `createLandTexture` / `buildLandDots` do caminho do app
   - `src/types/geojson.ts` se nada no app restar
4. O gerador pode viver em `scripts/generate-globe-land.ts` e reusar funções **só no script**. O app não importa `land.ts`.

Se for mais simples commitar os PNG gerados uma vez e um script documentado no spec/README do script, ok. Não precisa rodar no `next build` na primeira versão desta wave.

### Paleta do globo

Uma constante canônica, ex. `src/lib/globe-theme.ts`:

```ts
export const GLOBE_ACCENT = "#B7FF3C";
```

Todos os `color="#B7FF3C"` / `emissive` / `strokeStyle` do Three/canvas (se o script ainda pintar) passam a usar isso. CSS da página continua com `--color-accent`. Não tentar ler CSS vars dentro do R3F nesta wave.

### `GlobeScene`

Pode continuar no mesmo arquivo. Não extrair `OrbitParticles` “por higiene” nesta wave. Só tirar terra duplicada e, se o compact deixar de precisar de polígonos, o prop `compact` fica apenas para escolher textura (e `particleCount` / segmentos já existentes).

### Fora de escopo

- Não pré-computar arcos/cidades. `globe-locations.ts` permanece.
- Não trocar R3F por CSS globe.
- Não manter “só mais um” sistema de costa 3D “porque fica bonito no zoom”. A textura é a costa.

### Critério de aceite

- Bundle do client da home **não** inclui `ne_110m_land.json`.
- `src/components/globe/**` não chama `isPointOnLand`, `extractLandPolygons`, `buildCoastlinePositions`, `createLandTexture`.
- Continentes ainda se reconhecem; costa visível na textura; pontos de cidade e arcos intactos.
- Sem dots instanciados sobre a terra.
- `compact` (canvas &lt; 768) usa o PNG menor.
- Reduced motion, OrbitControls, tooltip, ErrorBoundary: iguais.
- `npm run build` passa. Payload JS da página cai (conferir `.next` / Network: sumiu o JSON de ~138 KB).

### Verificação visual (obrigatória)

- Desktop: globo no hero, continentes legíveis, hover de cidade + tooltip.
- Mobile: textura menor, cena não trava no load.
- Arrastar o globo; auto-rotate retoma.
- Fallback (DevTools → bloquear WebGL, ou ErrorBoundary): silhueta CSS igual à atual.

### Rollback

Os PNG e o script ficam. Se a textura estiver errada (antimeridiano, cor), corrigir o gerador e regenerar — não reintroduzir GeoJSON no React.

### Status

Fechada (14 set 2026). Sem commit. Texturas em `public/globe/land-2048x1024.png` e `land-1024x512.png`. Gerador: `scripts/generate-globe-land.ts` (`npm run generate:globe-land`); JSON só em `scripts/ne_110m_land.json`. `src/lib/land.ts` e `src/types/geojson.ts` apagados. App não importa `land.ts`. `GLOBE_ACCENT` em `src/lib/globe-theme.ts`. Não reintroduzir GeoJSON em `src/`. Auto-rotate continua respeitando reduced motion.

---

## Wave 5 — Conteúdo canônico e tipos

**Fecha:** P3 dois donos de copy; P2 casts restantes.

### Decisão travada

**Copy de seção** (eyebrow, title, description) sai dos TSX e entra em `src/data/` junto das listas. O componente só monta layout.

Mínimo a mover (um módulo por seção ou um `src/data/sections.ts`):

- Hero: eyebrow, headline, CTAs já em `site.ts` — headline/eyebrow podem ir para `site` ou `hero.ts`
- SocialProof label (“Empresas que confiam…”)
- Metrics: o `sr-only` title
- Services, Differentials, Method, Cases, Technologies, Testimonials, FinalCTA: eyebrow/title/description/CTA

Não criar um CMS. Não criar um generic `<SectionFromCms />`. Arrays já tipados continuam arquivos separados se isso estiver claro; o que não pode é título no JSX e items no `data/`.

**Button:** discriminar a union sem `as ButtonAsButton`. Padrão: não fazer rest-spread antes do narrowing; duas funções internas (`ButtonLink` / `ButtonNative`) ou `if (href !== undefined)` com props ainda inteiras. `loading` em `<Link>` permanece se já existe.

**`CaseItem.accent`:** tipo literal / union das cores usadas, ou `GLOBE_ACCENT` + as duas outras como constantes em `data/cases.ts`. Não `string` solto se só existem 3 valores.

**`landJson as unknown as`:** deve já ter morrido na wave 4. Se restar algum JSON importado, parse/assert na borda (`function parseLand(data: unknown): LandCollection`) — só no script gerador, não no app.

### Fora de escopo

- i18n.
- MDX.
- Form.

### Critério de aceite

- Grep de headlines atuais nos `sections/*.tsx` volta vazio (texto longo só em `src/data/`).
- `Button.tsx` sem `as ButtonAsButton` / `as any`.
- `ServiceItem` / `CaseItem` sem `href` opcional “às vezes”. O tipo reflete a wave 2.
- Componentes de seção continuam burros: recebem dados, não os definem.

### Verificação visual

- Home byte-a-byte de copy igual (mesmo texto, novo endereço no código).
- Botões do header, hero e CTA: link vs button nativo sem regressão de disabled/loading.

### Status

Fechada (14 set 2026). Sem commit. Copy em `src/data/sections.ts`. `ButtonLink` / `ButtonNative` com narrowing em `props.href`. `CaseAccent` + `CASE_ACCENT`. Não reintroduzir headlines nos TSX nem `href` em serviço/case.

---

## Definition of done (todas as waves)

A barra da review passa quando:

- [x] Wave 1
- [x] Wave 2
- [x] Wave 3
- [x] Wave 4
- [x] Wave 5
- [x] Nenhuma representação extra de terra no client
- [x] Nenhum arquivo da tabela “deletar” da wave 1 voltou
- [x] Nav/footer/cards não prometem rotas que não existem
- [x] `Section` não é override com `!important`
- [x] Motion tem um easing/duração/offset
- [x] `npm run lint` && `npm run build` (conferido em cada wave)
- [x] Passo humano no browser: home desktop + mobile, globo, nav, CTA, reduced motion

## Fora deste spec (backlog explícito)

Não misturar com as waves:

- Git / CI
- Form de contato (quando existir, aí nasce Input de novo, no mesmo PR do form)
- Blog, legais, páginas de case
- Trocar `site.email` / telefone placeholder
- Decompor `GlobeScene` só porque mistura luz e controles

Se um desses virar necessidade de produto, spec novo. Não reabre este.
