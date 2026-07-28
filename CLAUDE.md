# CLAUDE.md — Médano Next.js
> Guía de referencia para Claude Code. Leer completo antes de hacer cualquier cambio.

---

## 1. CONTEXTO DEL PROYECTO

**Médano** (medano.co) es una agencia de crecimiento digital especializada en gestión de reseñas online y publicidad digital para negocios con múltiples sucursales (3–30 locales).

**DataTrackers** (datatrackers.co) es el SaaS propietario de monitoreo de reseñas y reputación online — principal vehículo de monetización de Médano.

**Objetivo del sitio:** Generación de leads orgánicos mediante SEO programático **y portabilidad cross-engine en AI Search (AEO)**. La calculadora de reseñas (`/calculadora/resenas/[vertical]/[ciudad]`) es el motor principal con ~336 URLs estáticas. El blog `/notas` (21 posts) es el motor secundario, orientado a citas en ChatGPT/Perplexity/AI Overviews.

> ⚠️ **Scope actual**: la estrategia SEO/AEO documentada en §13 aplica **solo a medano.co**. DataTrackers tendrá su propio CLAUDE.md cuando arranque la migración (§14).

---

## 2. STACK TÉCNICO

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | CSS custom properties (design tokens) — sin Tailwind en producción |
| Blog | MDX con `gray-matter`, `@next/mdx`, `rehype-slug`, `rehype-autolink-headings` |
| Email | Resend → `hola@medano.co` → `hernan@datatrackers.co` |
| Deploy | Netlify (`@netlify/plugin-nextjs`) |
| Repo | `hernanmanzitti/medano-nextjs` (GitHub, público) |

---

## 3. ARQUITECTURA DE RUTAS

```
/                                   → app/page.tsx + app/styles/medano-home.css
/resenas                            → app/resenas/ (ResenasContent.tsx)
/publicidad-digital                 → app/publicidad-digital/ (PublicidadDigitalContent.tsx)
/nosotros                           → app/nosotros/ (visible en nav)
/whatsapp-resenas                   → app/whatsapp-resenas/page.tsx + page.css + components/WaPhoneMockup.tsx
/calculadora/resenas                → app/calculadora/resenas/page.tsx  (+CalculadoraHub.tsx)
/faq/resenas                        → app/faq/resenas/page.tsx
/faq/resenas/[vertical]             → app/faq/resenas/[vertical]/page.tsx  (FAQPage schema)
/guia/conseguir-resenas             → app/guia/conseguir-resenas/page.tsx  (hub estático)
/guia/conseguir-resenas/[vertical]  → app/guia/conseguir-resenas/[vertical]/page.tsx  (HowTo + FAQPage schema)
/herramientas                       → app/herramientas/page.tsx  (hub de tools gratuitas, 6 cards)
/herramientas/qr-resenas            → app/herramientas/qr-resenas/page.tsx  (generador QR, client tool + SoftwareApplication schema)
/calculadora/resenas/[vertical]     → app/calculadora/resenas/[vertical]/page.tsx
/calculadora/resenas/[vertical]/[ciudad] → app/calculadora/resenas/[vertical]/[ciudad]/page.tsx
/industria                          → app/industria/page.tsx
/industria/[vertical]               → app/industria/[vertical]/page.tsx
/glosario                           → app/glosario/page.tsx
/glosario/[termino]                 → app/glosario/[termino]/page.tsx
/notas                              → app/notas/page.tsx
/notas/[slug]                       → app/notas/[slug]/page.tsx  (ruta dinámica MDX)
/notas/[slug-especifico]            → app/notas/[nombre-del-post]/ (rutas estáticas con page.tsx propio)
/api/contacto                       → app/api/contacto/route.ts (Resend)
```

> ⚠️ La ruta de publicidad digital es `/publicidad-digital`, NO `/paid-media`.
> ⚠️ `/nosotros` está visible en el nav.
> ⚠️ El CTA de contacto en todo el sitio apunta a `/#contact` (sección embebida en homepage), NO a `/contacto`.
> ⚠️ `/whatsapp-resenas` tiene `robots: noindex` — es una landing interna, NO indexable.
> ⚠️ El único CTA que apunta a `/resenas` en esa página es "Ver servicio de reseñas". Todos los demás a `/#contact`.

---

## 4. ARQUITECTURA CSS

### Regla de Oro — Design Tokens
```
❌ PROHIBIDO: color: #1a4793;
✅ CORRECTO:  color: var(--color-brand-royal);
❌ PROHIBIDO: !important
✅ CORRECTO:  especificidad CSS o restructurar el selector
```

### Dónde vive cada CSS

| Archivo | Qué contiene |
|---------|-------------|
| `app/globals.css` | Reset, tokens `:root`, nav, mobile menu, utilidades compartidas |
| `app/styles/medano-home.css` | Estilos exclusivos del homepage |
| `app/styles/resenas.css` | Página `/resenas` |
| `app/styles/publicidad-digital.css` | Página `/publicidad-digital` |
| `app/styles/nosotros.css` | Página `/nosotros` |
| `app/whatsapp-resenas/page.css` | Página `/whatsapp-resenas` (incluye tokens WA propios en `:root`) |
| `app/[ruta]/page.css` | Estilos locales de cada ruta (importados en el `page.tsx` correspondiente) |
| `app/components/notas-preview.css` | Estilos del componente `NotasPreview` |
| `app/notas/notas.module.css` | CSS Module del índice de notas |

### Regla de Cascade (⚠️ crítica)
Los estilos **desktop base** deben declararse **ANTES** del bloque `@media (max-width: 768px)`.  
Si los estilos desktop van después del media query, siempre sobreescriben mobile.

```css
/* ✅ CORRECTO */
.componente { padding: var(--space-8); }          /* desktop base */
@media (max-width: 768px) { .componente { ... } } /* mobile override */

/* ❌ MAL */
@media (max-width: 768px) { .componente { ... } }
.componente { padding: var(--space-8); }          /* sobreescribe mobile siempre */
```

### Clases compartidas → globals.css
Si una clase utilitaria se usa en más de una página, **debe vivir en `globals.css`**, no en un `page.css` local. De lo contrario, se rompe en las páginas que no importan ese archivo.

### Nav padding en páginas con navbar fija
Toda página con navbar fija requiere:
```css
padding-top: calc(72px + var(--section-padding-y));
```

### Scroll lock en iOS Safari
`overflow: hidden` en body solo no funciona. Usar la técnica:
```css
/* en JS: document.body.style.setProperty('--scroll-y', `${window.scrollY}px`) — se lee del
   MISMO elemento (body) donde se setea; --scroll-y se guarda POSITIVO (window.scrollY),
   la CSS hace el -1 */
body.menu-open {
  position: fixed;
  top: calc(-1 * var(--scroll-y));
  width: 100%;
}
```

Al restaurar el scroll en JS: `window.scrollTo(0, parseInt(scrollY, 10) || 0)` **sin** negar
el valor — `--scroll-y` ya está guardado positivo, la negación vive en el `calc()` de la CSS.
Restaurar con `* -1` en JS clampea a 0 y deja la página "trabada arriba".

### Menú mobile — hit-testing y cierre al tocar link (bug fix 2026-07)
1. **Panel cerrado con solo `opacity:0` + `visibility:hidden` no alcanza.** `visibility` está en
   la lista de `transition`, así que el navegador no lo pasa a `hidden` hasta que termina toda
   la transición (~250ms) — durante ese margen el panel sigue siendo hit-testable mientras se
   desvanece, y un tap puede activar un link invisible detrás. Agregar `pointer-events: none`
   explícito al estado cerrado (no forma parte de la `transition`, corta el hit-test al instante
   que se remueve la clase `is-open`) y `pointer-events: auto` en `.is-open`.
2. **`closeMenu` no debe forzar `window.scrollTo` cuando el cierre viene de un click en un link**
   del menú (o pelea con el scroll-into-view del anchor `#contact`/`scroll-margin-top`, o con el
   routing de `next/link`). Solución: `closeMenu(options?: { restoreScroll?: boolean })` —
   default `true` para el botón toggle y Escape (ahí sí hay que restaurar scroll + devolver foco
   al toggle), pero el listener de clicks en links del menú llama `closeMenu({ restoreScroll: false })`.

### WaChip flotante — solapamiento con contenido interactivo en mobile (bug fix 2026-07)
El WaChip global (`components/WaChip.tsx`, montado en `app/layout.tsx`, `position:fixed`
bottom-right, `z-index: var(--z-fixed)` = 300) puede solaparse con inputs/CTAs que caen en la
esquina inferior-derecha del viewport en mobile — especialmente cuando un `.form-row` de 2
columnas colapsa a 1 columna y el 2do campo queda en esa franja. El tap aterriza en el `<a>`
del chip (abre wa.me) en vez de en el elemento debajo. Fix: reservar `padding-bottom` extra en
la sección afectada (mobile) para que esa franja quede sobre espacio vacío, no sobre contenido
interactivo. **NO ocultar el chip ni tocar su `z-index`** — es deliberadamente alto para flotar
sobre todo el contenido. Footprint de referencia del chip en mobile: padding + ícono/texto ≈ 45px
+ `bottom: var(--space-4)` (16px) ≈ 61px total desde el borde inferior del viewport.

---

## 5. DESIGN TOKENS — Referencia Rápida

El archivo fuente de verdad es `design-tokens.md`. Tokens más usados:

```css
/* Colores de marca */
--color-brand-navy:     #00246b   /* Azul marino — identidad principal */
--color-brand-royal:    #1a4793   /* Azul royal — superficies, CTAs */
--color-brand-mid:      #646caa   /* Azul medio — acentos */
--color-brand-light:    #b4b7d9   /* Azul claro — texto secundario */

/* Semánticos más usados */
--color-bg-base          → fondo de página
--color-bg-surface       → cards, módulos
--color-text-primary     → texto sobre oscuro (#ffffff)
--color-text-secondary   → subtítulos (--color-brand-light)
--color-accent           → CTAs principales
--color-border-default   → bordes generales

/* Tipografía */
--font-display:  'Barlow Condensed'   /* Títulos */
--font-body:     'DM Sans'            /* Párrafos */
--font-ui:       'DM Sans'            /* Botones, labels */

/* Layout */
--section-padding-y:    var(--space-20)   /* 80px */
--container-max-width:  1280px
--radius-md:            6px               /* Radio canónico de cards */
--shadow-card:          0 4px 20px rgba(0,36,107,0.3)
```

---

## 6. PATRONES DE COMPONENTES

### Estructura de sección (obligatoria)
Cada elemento visual debe vivir en una `<section>` con ID descriptivo:
```html
<section id="nombre-descriptivo">
  <div class="container">
    ...
  </div>
</section>
```

### Ruta dinámica — Patrón canónico
Seguir exactamente el patrón de `app/calculadora/resenas/[vertical]/page.tsx`:
```typescript
// 1. generateStaticParams → async, retorna array de slugs válidos
export async function generateStaticParams() { ... }

// 2. generateMetadata → async con Promise<{params}>
export async function generateMetadata({ params }: { params: Promise<{slug: string}> }) { ... }

// 3. notFound() para slugs inválidos
if (!data) notFound()

// 4. Import local de CSS
import './page.css'
```

### JSON-LD (Schema)
Los scripts de schema van directamente en JSX via `dangerouslySetInnerHTML`, **no** en la metadata API de Next.js:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
/>
```

### FAQ programático — Patrón de linking interno
Las páginas `/faq/resenas/[vertical]` reciben linking desde:
1. Footer (columna "Empresa", junto al Glosario) — presente en todas las páginas del sitio
2. Callout `.calc-faq-ref` en cada página `/calculadora/resenas/[vertical]/[ciudad]` — ~336 links entrantes
3. Sección "Otros rubros" dentro de cada FAQ (cross-linking entre las 9 páginas)
4. Hub `/faq/resenas` linkea a las 9 páginas de vertical

Si se agregan nuevas páginas FAQ (por canal u otro criterio), seguir el mismo patrón de linking.

### CalculadoraHub — Patrón de nav interactivo con calculadora conectada
El componente `app/calculadora/resenas/CalculadoraHub.tsx` es un client component que:
- Mantiene estado `selectedVertical` y `selectedPais`
- Renderiza la calculadora (`CalculadoraTool`) con `key={selectedVertical}` para forzar remount y actualizar defaults cuando cambia el rubro
- Implementa el nav 3 pasos: rubro → país → ciudad; pasos 2 y 3 usan `key` para disparar animación CSS `calcHubStepIn` en cada cambio
- Scroll automático: al seleccionar rubro → `scrollIntoView` al paso 02 (país); al seleccionar país → `scrollIntoView` al paso 03 (ciudades). Implementado con `useRef` + `useEffect`. Las divs destino tienen `scroll-margin-top: calc(72px + var(--space-4))` para compensar navbar fija.
- El `page.tsx` del hub incluye también un índice server-rendered de todos los links (SEO backbone)

### WaPhoneMockup — Patrón de animación por fases
El componente `components/WaPhoneMockup.tsx` usa una máquina de estados (fases: `idle → sent → typing → received → read → pause → exit`) con `key={convIdx}` en el wrapper para forzar remount completo al cambiar conversación. **No usar** `animating` boolean simple — el remount es lo que dispara las animaciones CSS. Cada conversación tiene `phoneBg` y `headerBg` como inline styles (no tokens, porque son colores temáticos del mockup, no de la marca).

### Blog — Posts MDX
- Los posts con componentes interactivos (ReadingProgress, etc.) tienen su propia carpeta estática en `app/notas/[nombre-completo]/`
- Los posts simples se sirven desde `app/notas/[slug]/page.tsx` (ruta dinámica)
- Batch máximo recomendado al crear posts: **3 archivos MDX por prompt**
- Al finalizar un batch, actualizar `docs/blog-roadmap.md`
- **Todo post nuevo debe cumplir las reglas editoriales AEO de §13.4** (intro declarativa, DATE+NUMBER en primer párrafo, 10-19 headings, etc.)

### Plantilla MDX AEO-compliant (frontmatter + intro)
Todo post MDX nuevo debe seguir esta plantilla mínima. Los campos del frontmatter son obligatorios:

```mdx
---
title: "[Afirmación declarativa, no pregunta]"
description: "[Afirmación con un dato concreto en los primeros 160 caracteres]"
slug: "[kebab-case]"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
heroImage: "/img/N.png"  # OBLIGATORIO, ≥1200px de ancho (Discover hero card)
author: "Hernán Manzitti"
vertical: "[opcional: gastronomia | clinicas | gimnasios | ...]"
---

# [Título declarativo: "[X] es [Y]" o "[X] hace [Z]"]

[INTRO — primer párrafo, máximo 3 frases. Debe contener:
- Una afirmación declarativa directa (sin "¿alguna vez te pasó?", sin "en este artículo veremos")
- Al menos 1 número específico (estadística, porcentaje, cantidad)
- Sin hedging ("puede", "podría", "tal vez", "ayuda a")
- Sin abrir con precio ("desde $X")
- Sin listar marcas grandes verificadas (Google, Meta, TripAdvisor) — usá entidades nicho o metodologías concretas]

Ejemplo válido:
> Los restaurantes con menos de 100 reseñas en Google pierden 47% de su tráfico orgánico
> local frente a competidores con catálogo equivalente. La diferencia se cierra publicando
> una respuesta dentro de las 48 horas en el 90% de los casos.

## [H2 — guía/explicación, NO pregunta retórica]

...
```

**Headings target**: entre **10 y 19 H2/H3** por post (rango óptimo cross-vertical para mix Education + B2B SaaS). Cero headings es peor que 10-19, pero mejor que el dead zone 3-4.

---

## 7. SEO — SITEMAP Y ROBOTS

### Sitemap (`app/sitemap.ts`)
Generado programáticamente. Incluye:
- Páginas estáticas (homepage, resenas, publicidad-digital, nosotros, calculadora hub, herramientas)
- Índices por vertical: `/calculadora/resenas/[vertical]`
- Páginas calculadora: `/calculadora/resenas/[vertical]/[ciudad]` — filtradas por `ciudad.tipo` y `ciudad.verticalesTouristicos`
- Blog: `/notas` + cada post via `getAllPosts()`

Al agregar una nueva ruta pública, verificar si debe incluirse en `sitemap.ts`.

### Redirects configurados (`next.config.ts`)
```
/calculadora-resenas-google-tripadvisor  → /calculadora/resenas  (301)
/en-us/paid-media                        → /publicidad-digital    (301)
/en-us/resenas                           → /resenas               (301)
/notas/:slug/                            → /notas/:slug           (301, trailing slash)
/paid-media                              → /publicidad-digital    (301)
/contacto                                → /                      (301)
/en-us/contacto                          → /                      (301)
/resenas-y-seo                           → /resenas               (301)
/notas-de-interes                        → /notas                 (301)
/insights                                → /notas                 (301)
/en-us/:path*                            → /:path*                (301, catch-all)
```
`trailingSlash: false` está configurado globalmente.

---

## 8. DATOS PROGRAMÁTICOS

Los datos de SEO programático viven en:
```
/data/verticales.ts    → 9 verticales con slug, nombre, metadata
/data/ciudades.ts      → ciudades con slug, tipo ('comercial' | 'turistico'), verticalesTouristicos[]
/lib/blog.ts           → getAllPosts(), getPostBySlug()
```

**Verticales actuales:** las 9 definidas en `data/verticales.ts` — verificar antes de agregar contenido.  
**Ciudades:** Argentina, Costa Rica y Panamá — `ciudad.tipo` determina qué páginas se generan.

---

## 9. API DE CONTACTO

- **Ruta:** `app/api/contacto/route.ts`
- **Proveedor:** Resend
- **Flujo:** Formulario → API route → email a `hola@medano.co` → forward a `hernan@datatrackers.co`
- **Pendiente:** Spam protection (honeypot o reCAPTCHA) — no implementado aún

---

## 10. WORKFLOW OBLIGATORIO — Claude Code

### Loop de trabajo para CUALQUIER tarea

```
1. LEER   → leer el/los archivos afectados completos antes de tocar nada
2. GREP   → verificar nombres de rutas, clases y IDs que se asumen
3. PLAN   → describir en una línea qué se va a cambiar y en qué archivo
4. EDITAR → aplicar cambios con str_replace (bloques únicos y precisos)
5. VERIFY → correr el checklist correspondiente al tipo de tarea (ver §11)
6. REPORT → reportar: qué se cambió, en qué archivo, qué verificación pasó
```

> ⚠️ Nunca saltear el paso 1 ni el 5. Si un `str_replace` falla porque el bloque no es único, releer el archivo completo y ajustar.

### Reglas de edición

- **Un cambio por `str_replace`** — no encadenar varios cambios en un solo bloque
- **Leer antes de editar** — nunca editar desde memoria; el archivo puede haber cambiado
- **Cambios en más de 2 archivos** → usar Claude Code, no edición manual
- **Cambios de CSS en un solo archivo** → pueden aplicarse directamente
- **Nunca crear archivos nuevos sin confirmar** que la ruta no existe ya (`find app -name "page.tsx" | grep [nombre]`)

### Prohibiciones absolutas

**Técnicas (código):**
- ❌ Valores hex en CSS → siempre `var(--token)`
- ❌ `!important` → restructurar el selector
- ❌ Remover `/nosotros` del navbar
- ❌ Linkear a `/contacto` → usar `/#contact`
- ❌ Asumir nombres de rutas → hacer `grep` primero
- ❌ Clases compartidas en `page.css` locales → van en `globals.css`
- ❌ Estilos desktop después de `@media (max-width: 768px)`
- ❌ JSON-LD en la metadata API → usar `dangerouslySetInnerHTML`

**Editoriales (posts MDX y páginas de contenido educativo) — ver §13.4 para detalle:**
- ❌ Intros con pregunta retórica (`¿Alguna vez...?`, `¿Sabías que...?`)
- ❌ Hedging en intro (`puede`, `podría`, `quizás`, `ayuda a`, `es posible que`)
- ❌ Abrir con precio en posts educativos (`desde $X`, `planes desde $Y`)
- ❌ Listar marcas grandes verificadas en la intro (`Google, Meta, TripAdvisor...`)
- ❌ Posts publicados sin `heroImage` ≥1200px en el frontmatter
- ❌ Posts publicados sin al menos un número concreto en el primer párrafo
- ❌ Posts con 3-4 headings totales (dead zone — peor que cero o que 10-19)

### Formato de entrega para cambios de diseño
```
Archivo:        nombre-del-archivo.tsx / .css
ID de Sección:  #id-exacto
Snippet HTML:   [código]
Snippet CSS:    Archivo destino | acción (agregar/reemplazar) | [código]
Verificación:   comando grep o build que confirma el cambio
```

---

## 11. CHECKLISTS DE VERIFICACIÓN — Por Tipo de Tarea

### A) Cambio de CSS (cualquier archivo)

```bash
# 1. Verificar que no se coló ningún hex
grep -n "#[0-9a-fA-F]\{3,6\}" [archivo.css]

# 2. Verificar que no hay !important
grep -n "!important" [archivo.css]

# 3. Verificar orden cascade: desktop base ANTES de @media
# (inspección manual — buscar si algún selector aparece después de su media query)

# 4. Build limpio
npm run build
```

**Resultado esperado:** grep sin resultados, build sin errores.

---

### B) Nueva página o ruta

```bash
# 1. Verificar que la ruta no existe ya
find app -type d -name "[nombre-ruta]"

# 2. Verificar que sigue el patrón canónico de rutas dinámicas
grep -n "generateStaticParams\|generateMetadata\|notFound" app/[ruta]/page.tsx

# 3. Verificar nav padding
grep -n "padding-top" app/[ruta]/page.css

# 4. Agregar al sitemap si es pública
grep -n "[ruta]" app/sitemap.ts

# 5. Build + verificar que la ruta aparece en el output
npm run build 2>&1 | grep "[ruta]"
```

**Resultado esperado:** ruta listada en build output, sin errores de tipo.

---

### C) Nuevo post de blog (MDX)

```bash
# 1. Verificar que el slug no existe
ls app/notas/ | grep [slug]
find content -name "[slug].mdx" 2>/dev/null

# 2. Verificar frontmatter obligatorio (incluye heroImage)
grep -n "title\|description\|publishedAt\|slug\|heroImage" [archivo.mdx]

# 3. Verificar que heroImage existe y mide ≥1200px
identify public/img/[N].png   # ImageMagick
# o: file public/img/[N].png para chequear tipo real (PNG vs WebP vs JPEG)

# 4. Verificar que getAllPosts() lo toma
# (inspeccion manual: la función lee desde el directorio correcto)

# 5. Verificar que aparece en el sitemap
npm run build 2>&1 | grep "notas/[slug]"

# 6. Pasar el checklist H) AEO compliance — OBLIGATORIO

# 7. Actualizar roadmap
grep -n "[slug]" docs/blog-roadmap.md
# → marcar como publicado
```

**Resultado esperado:** post listado en build, heroImage ≥1200px, checklist H pasado, roadmap actualizado.

---

### D) Cambio en next.config.ts (redirects, config)

```bash
# 1. Verificar sintaxis TypeScript
npx tsc --noEmit

# 2. Build completo
npm run build

# 3. Verificar redirects específicos
grep -n "source\|destination\|permanent" next.config.ts

# 4. Test manual de la URL afectada (dev server)
npm run dev
# → abrir la URL en browser y confirmar redirect
```

**Resultado esperado:** build sin errores, redirect funciona en dev.

---

### E) Cambio en sitemap.ts o robots.ts

```bash
# 1. Build para regenerar el sitemap
npm run build

# 2. Verificar output del sitemap en local
npm run start
# → abrir localhost:3000/sitemap.xml y contar URLs

# 3. Verificar que no aparecen rutas 404
# (inspección manual: todas las URLs del sitemap deben existir en app/)

# 4. Verificar robots.txt
# → abrir localhost:3000/robots.txt
```

**Resultado esperado:** sitemap contiene solo rutas existentes, robots correcto.

---

### F) Nuevo componente compartido

```bash
# 1. Verificar que el CSS del componente va en globals.css (si es compartido)
# o en notas-preview.css si es específico de notas
grep -rn ".[nombre-clase]" app/globals.css

# 2. Verificar que no hay estilos inline con hex
grep -n "style=" [componente.tsx] | grep "#"

# 3. Verificar imports en todos los archivos que lo usan
grep -rn "import.*[NombreComponente]" app/

# 4. Build
npm run build
```

---

### G) Cambio en datos programáticos (verticales.ts / ciudades.ts)

```bash
# 1. Verificar estructura del objeto (slug, nombre, etc.)
grep -n "slug\|nombre" data/[archivo].ts | head -20

# 2. Verificar que generateStaticParams sigue funcionando
npm run build 2>&1 | grep "calculadora"

# 3. Contar páginas generadas (deben ser ~336 o más)
npm run build 2>&1 | grep "calculadora/resenas" | wc -l
```

**Resultado esperado:** número de páginas = verticales × ciudades válidas.

---

### H) AEO compliance — Auditoría editorial de post MDX (nuevo o existente)

Aplicar a todo post antes de mergear, y como parte de la auditoría retroactiva de los 21 posts existentes.

```bash
# 1. INTRO declarativa, sin pregunta retórica
# La primera línea no-frontmatter del MDX no debe terminar en "?"
head -25 content/notas/[slug].mdx | grep -E "^[A-ZÁÉÍÓÚÑ¿].*\?$"
# → SIN RESULTADOS = ✅

# 2. SIN hedging en intro (primer párrafo después del H1)
# Buscar palabras hedge en las primeras 6 líneas de contenido
sed -n '/^# /,/^## /p' content/notas/[slug].mdx | head -15 | \
  grep -iE "\b(puede|podría|quizás|tal vez|es posible|ayuda a|suele)\b"
# → SIN RESULTADOS = ✅

# 3. AL MENOS UN NÚMERO en el primer párrafo
sed -n '/^# /,/^## /p' content/notas/[slug].mdx | head -8 | \
  grep -E "[0-9]"
# → CON RESULTADOS = ✅

# 4. NO abrir con PRICE
sed -n '/^# /,/^## /p' content/notas/[slug].mdx | head -8 | \
  grep -iE "\b(desde \$|usd|precio|cuesta|plan|tarifa)\b"
# → SIN RESULTADOS = ✅

# 5. Headings target: contar H2 + H3, debe ser 10-19
grep -cE "^##+ " content/notas/[slug].mdx
# → entre 10 y 19 = ✅
# → entre 3 y 4 = ❌ DEAD ZONE, reescribir
# → entre 5 y 9 = ⚠ subóptimo, considerar expandir
# → 0 = aceptable como fallback, pero rinde menos que 10-19

# 6. heroImage en frontmatter + ≥1200px
grep "heroImage:" content/notas/[slug].mdx
# Tomar el path y verificar dimensiones:
identify public/img/[N].png 2>/dev/null || sips -g pixelWidth public/img/[N].png

# 7. DATE visible en el render (no solo en metadata)
# Inspección manual: confirmar que el componente renderiza publishedAt en el header del post
```

**Resultado esperado:** los 6 greps en verde (1, 2, 4 sin resultados; 3, 5, 6 con resultados válidos). Si alguno falla, no se publica el post; si es retroactivo, va a la cola de rewrite de §13.

---

## 12. REGLAS DE ESCALABILIDAD — Para el Largo Plazo

### Antes de agregar cualquier feature nueva
1. **¿Existe ya?** — hacer `grep -rn` antes de crear algo nuevo
2. **¿Dónde vive?** — respetar la arquitectura de archivos existente
3. **¿Rompe el build?** — siempre correr `npm run build` al finalizar
4. **¿Afecta el sitemap?** — si es ruta pública, agregar a `sitemap.ts`
5. **¿Afecta SEO?** — si es ruta pública, agregar `generateMetadata`
6. **¿Es contenido editorial?** — pasar el checklist H (§11) antes de publicar

### Convenciones de naming
| Elemento | Convención | Ejemplo |
|----------|-----------|---------|
| Rutas | kebab-case | `/publicidad-digital` |
| Componentes | PascalCase | `NotasPreview.tsx` |
| CSS classes | kebab-case | `.hero-title` |
| IDs de sección | kebab-case | `id="calculadora-hero"` |
| Archivos CSS locales | `page.css` | `app/glosario/page.css` |
| CSS Modules | `[nombre].module.css` | `notas.module.css` |
| Data files | camelCase | `verticales.ts`, `ciudades.ts` |

### Mantener CLAUDE.md actualizado
Al finalizar cualquier tarea que introduzca un cambio estructural, Claude Code **debe actualizar este archivo** antes de cerrar la sesión. Cambios que requieren actualización:

- Nueva ruta pública → agregar a §3 (Arquitectura de Rutas)
- Nuevo redirect → agregar a §7 (Sitemap y Robots)
- Nueva convención CSS o patrón de componente → agregar a §4 o §6
- Nuevo dato en `verticales.ts` o `ciudades.ts` → actualizar §8
- Ítem completado en PENDIENTES → marcarlo con ✅ y fecha
- Nuevo ítem pendiente detectado → agregarlo a la tabla PENDIENTES
- Post publicado, reescrito o auditado contra checklist H → actualizar inventario §13.7

> Si Hernán no lo pide explícitamente, Claude Code igual debe hacerlo al final de cada sesión.

### Gestión de deuda técnica
- Documentar decisiones pendientes en este mismo archivo bajo una sección `## PENDIENTES`
- Nunca aplicar un fix temporal sin comentar `// TODO:` en el código
- Si se detecta un patrón inconsistente (ej: mezcla de hex y tokens), abrirlo como issue antes de corregir masivamente

### Cuando algo falla en build
```bash
# 1. Leer el error completo — no asumir
npm run build 2>&1 | tail -50

# 2. Buscar el archivo mencionado en el error
grep -rn "[mensaje-de-error]" app/

# 3. Verificar tipos TypeScript por separado
npx tsc --noEmit

# 4. Si el error es de MDX, verificar frontmatter del post afectado
```

---

## PENDIENTES

| Item | Prioridad | Estado |
|------|-----------|--------|
| Spam protection en formulario de contacto (honeypot o reCAPTCHA) | Media | Pendiente |
| Migración datatrackers-v2.html a Next.js | Alta | Diseño aprobado, pendiente dev |
| ✅ `/nosotros` — visible en nav | Baja | Completado |
| Enrichment de páginas calculadora ciudad (contenido único) | Alta | Pendiente |
| ✅ Posts de blog: resenas-negativas-veterinarias, restaurante-mala-nota-rappi, cuanto-cuesta-reputacion-argentina | Alta | Completado 2026-04-13 |
| ✅ Post de blog: verificar-multiples-sucursales — guía para cadenas (3–30 locales), métodos individual y bulk, Business Profile Manager | Alta | Completado 2026-04-30 |
| ✅ FAQ programático `/faq/resenas/[vertical]` con FAQPage schema (9 URLs, datos en verticales.ts) | Alta | Completado 2026-04-13 |
| ✅ Linking interno FAQ: footer (columna Empresa) + callout en ~336 páginas calculadora ciudad | Alta | Completado 2026-04-13 |
| ✅ Guías "conseguir reseñas" por vertical `/guia/conseguir-resenas/[vertical]` — 9 URLs + hub + sitemap + footer | Alta | Completado 2026-04-13 |
| Plantillas para pedir reseñas por canal `/plantillas/pedir-resenas/[canal]` | Media | Pendiente |
| ✅ Rediseño UX hub calculadora: nav 3 pasos + calculadora conectada al rubro (CalculadoraHub.tsx) | Alta | Completado 2026-04-13 |
| ✅ Scroll automático en hub calculadora: rubro → país → ciudad con `useRef` + `useEffect` | Baja | Completado 2026-04-13 |
| ✅ Página 404 personalizada (`app/not-found.tsx` + `app/not-found.css`) | Alta | Completado 2026-03-30 |
| ✅ `/whatsapp-resenas` landing page con mockup animado, pricing y comparativa | Alta | Completado 2026-03-30 |
| ✅ Precios `/whatsapp-resenas`: Starter $13 / Growth $22 / Pro $48 — USD/mes + IVA | Alta | Completado 2026-03-31 |
| ✅ Eliminación completa de Tailwind CSS | Alta | Completado 2026-03-30 |
| ✅ `/whatsapp-resenas` — indexable, en navbar y footer, SEO con keywords Google+WhatsApp | Media | Completado 2026-04-13 |
| ✅ Navbar/Footer: "Reseñas" → "Gestión de Reseñas" (más abarcativo para SaaS) | Baja | Completado 2026-04-13 |
| ✅ SEO calculadora: "Google y TripAdvisor" en title + H1 de hub, verticales (~9) y ciudades (~336) | Alta | Completado 2026-04-13 |
| ✅ Hub `/herramientas` — landing SEO + grid de 6 cards (2 LIVE, 4 SOON), sitemap + §3 CLAUDE.md | Alta | Completado 2026-04-17 |
| ✅ Cards clickeables del hub `/herramientas` (stretched link via `::after` + focus-visible accesible) | Media | Completado 2026-04-17 |
| ✅ Generador de QR `/herramientas/qr-resenas` — client tool con preview live, descarga PNG/SVG, SoftwareApplication schema + 4 FAQs | Alta | Completado 2026-04-17 |
| Plantillas de respuesta `/herramientas/plantillas-respuesta` — convertir card 04 del hub (SOON → LIVE) | Alta | Pendiente |
| FAQ del hub `/herramientas` + JSON-LD (ItemList + FAQPage schema) | Media | Pendiente |
| Decidir si linkear `/herramientas` desde navbar — condicional a tener ≥3 tools LIVE | Media | Pendiente |
| `/herramientas` NO está linkeado desde el footer — evaluar agregarlo cuando haya más tools LIVE | Media | Pendiente |
| Revisar visualmente diseños de sesión 2026-04-17 (`/herramientas` hub + `/herramientas/qr-resenas`) — no están del todo revisados | Alta | Pendiente |
| ✅ JSON-LD `Article` schema en posts MDX dinámicos (`content/notas/`) — vía `<ArticleJsonLd>` en `app/components/ArticleJsonLd.tsx`, con Person `Hernán Manzitti` + Organization `Médano` + image absoluta desde `heroImage` | Alta | Completado 2026-04-29 |
| ✅ JSON-LD `Article` schema en páginas estáticas (`app/notas/[nombre]/`) — los 6 posts dedicados usan el mismo `<ArticleJsonLd>` compartido | Alta | Completado 2026-04-29 |
| **AEO ola 1 — Bundled: reescritura editorial + heroImage Discover para las 6 páginas estáticas** (rewrite contra checklist H + conseguir heroImage ≥1200px). Una pasada por post. Posts: `como-responder-resenas-negativas-sin-arruinar-tu-reputacion`, `como-usar-whatsapp-para-conseguir-resenas-de-google`, `como-verificar-tu-negocio-en-google-business-2026`, `nfc-qr-o-whatsapp-cual-es-la-mejor-forma-de-pedir-resenas`, `por-que-desaparecen-tus-resenas-de-google`, `que-es-el-response-rate-y-por-que-google-te-penaliza-si-ignoras-las-resenas` | Alta | Pendiente |
| **AEO — Plantilla MDX editorial AEO-compliant**: convertir el patrón de §6.Blog en un snippet/template real bajo `content/notas/_template.mdx` que sirva como base para posts nuevos. Frontmatter obligatorio + intro con placeholder para número | Alta | Pendiente |
| **AEO baseline 30-60 días — Medición presence/portability/concentration**: definir 20-30 prompts representativos en español LATAM, medir manualmente o con AthenaHQ/Profound/AirOps en ChatGPT + Perplexity + Google AI Overviews. Output: hoja de cálculo con baseline para informar ola 2 | Alta | Pendiente |
| **AEO ola 2 — Auditoría de los 15 MDX dinámicos restantes** contra checklist H. Priorizar por: (a) tráfico orgánico actual en GSC, (b) volumen de búsqueda del cluster, (c) ser página ancla del árbol §13.1. Definir orden post-baseline | Media | Pendiente |
| **AEO audit transversal — Plantillas existentes (no abrir con PRICE)**: revisar componentes y CTAs embebidos en posts educativos para que ningún copy comercial aparezca en los primeros párrafos del contenido | Media | Pendiente |
| Reemplazar `public/img/2.png` por imagen ≥1200px (actualmente 642×364) — usada en `restaurante-mala-nota-rappi`, no califica para Discover hero card | Media | Pendiente |
| Agregar `heroImage` (≥1200px) a las 6 páginas estáticas de `/notas` — **se ejecuta como parte de la AEO ola 1** | Alta | Pendiente |
| Renombrar `1.png → 1.webp` y `7-9.png → 7-9.jpg` para coherencia de extensiones | Baja | Pendiente |

---

## 13. ESTRATEGIA SEO/AEO — MÉDANO

> **Scope**: esta sección aplica solo a medano.co. DataTrackers tendrá estrategia separada (§14).

### 13.1 Árbol de intents

El sitio ataca el intent "gestión de reseñas" a través de estas capas:

```
Intent raíz: "quiero más reseñas en Google"
│
├── Diagnóstico     → /calculadora/resenas/[vertical]/[ciudad]  ← ✅ IMPLEMENTADO (~336 URLs)
│
├── Cómo hacerlo    → /guia/conseguir-resenas/[vertical]        ← ✅ IMPLEMENTADO (9 URLs + hub)
│                  → /plantillas/pedir-resenas/[canal]          ← PENDIENTE
│                  → Blog: "cuándo pedir reseña por vertical"
│
├── Problemas       → /notas/como-responder-resenas-negativas-* ← ✅ IMPLEMENTADO
│                  → /notas/por-que-desaparecen-*               ← ✅ IMPLEMENTADO
│                  → /notas/resenas-negativas-veterinarias      ← ✅ IMPLEMENTADO
│                  → /notas/restaurante-mala-nota-rappi         ← ✅ IMPLEMENTADO
│
├── Plataforma      → /notas/como-verificar-*                   ← ✅ IMPLEMENTADO
│                  → /notas/verificar-multiples-sucursales      ← ✅ IMPLEMENTADO
│                  → FAQ por vertical con FAQPage schema         ← ✅ IMPLEMENTADO (9 URLs)
│
└── Impacto         → /notas/cuanto-cuesta-reputacion-argentina ← ✅ IMPLEMENTADO
                   → Blog: benchmark por rubro                  ← PENDIENTE
```

### 13.2 Google Discover — Requisitos técnicos confirmados (2026-04)

El parser interno de Discover lee en este orden de prioridad:

1. **JSON-LD primero**: busca `headline`, `author` y `publisher` en structured data. Si lo encuentra, ignora og:tags.
2. **OG tags como fallback**: solo se usan si JSON-LD está ausente o incompleto.
3. **Dos meta tags que matan la elegibilidad al instante**: `notranslate` y `nopagereadaloud`. Si están presentes, el sistema lanza una excepción y deja de procesar la página. Verificar que ningún plugin los inyecte.
4. **Imágenes**: mínimo 1200px de ancho para ser elegible como hero card en Discover.
5. **Filtro de dominio**: si un usuario toca "no mostrar este publisher", se bloquea todo el dominio antes del ranking. Un artículo de baja calidad puede suprimir todo el sitio.

**Implementación actual (2026-04-29)**: el `Article` schema vive en el componente compartido `app/components/ArticleJsonLd.tsx`. Lo usan tanto la ruta dinámica MDX (`app/notas/[slug]/page.tsx`) como las 6 páginas estáticas. Emite `headline`, `author` (Person `Hernán Manzitti`), `publisher` (Organization `Médano` con logo), `datePublished`, `dateModified`, `mainEntityOfPage` y, cuando hay `heroImage` en el frontmatter MDX, la `image` absolutizada a `https://medano.co/...`. El `<html lang="es">` del layout no incluye `notranslate` ni `nopagereadaloud` ✅.

Estructura canónica a usar:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{título del post}}",
  "author": {
    "@type": "Person",
    "name": "Hernán Manzitti"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Médano",
    "url": "https://medano.co"
  },
  "datePublished": "{{fecha ISO del frontmatter}}",
  "image": "{{imagen OG del post si existe}}"
}
```

### 13.3 AEO — Portabilidad cross-engine

**Tesis**: la visibilidad en AI Search no es un ranking único. Son **tres sistemas independientes** (ChatGPT, Perplexity, Google AI Overviews). El 91% de las URLs citadas aparece en solo uno; apenas el ~2,4% aparece en los tres. Por lo tanto, una estrategia de "AEO score blended" oculta el problema real, que es estructural.

**Framework de medición** — tres KPIs separados, no un score único:

| KPI | Qué mide | Cómo se calcula |
|-----|----------|-----------------|
| **Presence** | % de prompts trackeados donde `medano.co` aparece en cualquiera de los 3 motores | citas únicas / total de prompts |
| **Portability** | % de las URLs citadas que aparecen en los 3 motores a la vez | URLs en los 3 / URLs totales citadas |
| **Concentration** | % de citas que viene de un solo motor (revela dependencia oculta) | citas del motor top / total de citas |

**Lectura operativa**:
- Presence alta + Portability baja + Concentration alta → estamos atados a un solo motor; un cambio en su algoritmo nos saca de la conversación.
- Presence baja + Portability alta → poco volumen pero contenido sólido; falta amplificar.
- Presence alta + Portability alta → meta estado.

**Qué tipos de página viajan mejor entre motores** (Q3 2025 – Q1 2026, dataset Omnia, 3,7M citas):

| Tipo de página | Portability (% universal) |
|---|---|
| Guías y tutoriales (`/guia/*`, `/notas/*` explicativos) | 2,3% |
| Blogs (posts narrativos) | 1,8% |
| Páginas de categoría / index (`/industria/*`, hubs) | 1,6% |
| Páginas de producto (`/whatsapp-resenas`, etc.) | 1,2% |
| Homepage | 1,1% |

> Conclusión accionable para Médano: **las guías son la apuesta primaria de AEO**. La homepage no es invisible por ser homepage débil — es invisible porque los motores premian utilidad sobre centralidad de marca. La energía editorial va a `/notas`, `/guia/*` y `/faq/*`, no a la home.

**Anti-patrones de inversión**:
- **No perseguir UGC**: el 94,7% de las citas en AI Search viene de contenido corporativo. No vale la pena sembrar Reddit/Quora en español para construir presencia. Toda la inversión va a contenido propio.
- **No confundir "comercial" con "más fácil de rankear"**: las queries comerciales (`mejor software de reseñas`) tienen overlap entre motores casi igual al de las informacionales (2,4% vs 2,0%). Cada motor decide sus fuentes con lógica propia. No hay shortcut comercial.

### 13.4 Reglas editoriales AEO — Cinco reglas universales

Aplican a **todo post de /notas/** sin excepción, y a las páginas explicativas de `/guia/*` y `/industria/*`. Son las únicas reglas que aguantan cross-vertical (lift +14% promedio).

| # | Regla | Implementación |
|---|-------|----------------|
| **1** | **Intro declarativa directa** | Primer párrafo arranca con afirmación: "[X] es [Y]" o "[X] hace [Z]". Cero preguntas retóricas. Cero "en este artículo veremos". |
| **2** | **Cero hedging en la intro** | Eliminar `puede`, `podría`, `quizás`, `tal vez`, `es posible`, `ayuda a`. Reemplazar por afirmaciones concretas. "Los restaurantes que responden todas las reseñas ven X" en vez de "responder puede ayudar a mejorar la reputación". |
| **3** | **DATE + NUMBER visibles** | Fecha de publicación visible en el render del post (no solo en metadata). Al menos un número específico en el primer párrafo (estadística, %, cantidad). "El 87% de los consumidores" gana a "muchos consumidores". |
| **4** | **No abrir con PRICE** | En contenido educativo (todo el blog) las menciones de precio en la intro son señal negativa fuerte. Pricing va en la landing comercial, no en el post. |
| **5** | **No perseguir entidades verificadas en Knowledge Graph** | Mencionar muchas marcas grandes (Google, Meta, TripAdvisor) en la intro penaliza. Mejor: metodologías específicas, comparaciones nombradas, entidades nicho ("Business Profile Manager", "API Graph de Meta", nombres de BSPs concretos). |

**Estructura objetivo de headings** — decisión binaria, sin término medio:

| H2 + H3 totales | Performance |
|---|---|
| **10 – 19** | ✅ Rango óptimo (mix Education + B2B SaaS) |
| 5 – 9 | ⚠ Subóptimo, considerar expandir |
| 3 – 4 | ❌ **Dead zone — peor que cero**. Reescribir. |
| 0 | Aceptable como fallback (mejor que 3-4), pero menor performance que 10-19 |
| 20+ | Solo para B2B SaaS de referencia masiva. No aplica al mix de Médano. |

**Anti-patterns explícitos a evitar:**
- Posts <800 palabras de intención única (escasos para AI parsing)
- H1 en forma de pregunta retórica
- Listas de marcas grandes en la intro (en vez de entidades nicho)
- Posts sin fecha visible en el render (Discover/AEO leen DATE como señal positiva fuerte)
- Posts sin al menos un número concreto en el primer párrafo

Ver checklist H en §11 para los `grep` automatizables.

### 13.5 Posicionamiento estratégico — Utilidad gana a centralidad

Médano no es Google Business Profile, no es ReviewTrackers global, no es Birdeye. Pero los motores de AI Search premian **utilidad sobre centralidad de marca**. Esa es la ventana real para LATAM:

- En español rioplatense / LATAM hispano hay **muy poca producción de contenido genuinamente útil** sobre reseñas, GBP, manejo de crisis reputacional, BSPs, opt-in de WhatsApp, etc.
- Los incumbentes globales (Birdeye, Yotpo, etc.) escriben en inglés o español neutro genérico — no hay localización fuerte.
- Médano se posiciona como **la fuente que explica bien**, no la que vende.

**Implicancias para futuras decisiones de roadmap**:

1. **Profundidad > cantidad** en `/notas` y `/guia/*`. Mejor 1 guía ancla muy bien escrita (10-19 headings, datos locales concretos, casos por vertical) que 5 posts genéricos.

2. **Cada combinación vertical/ciudad de la calculadora** debería tener un anchor explicativo: una guía vertical-específica del tipo "cómo funcionan las reseñas de Google para restaurantes en Argentina", y la landing geo cuelga de ahí. Eso da el cuerpo útil que los motores citan, más la página comercial que convierte.

3. **Engine ancla pragmático**: dado que el mercado primario es LATAM hispano y ChatGPT tiene la penetración más alta en SMB de la región, **optimizar primero para ChatGPT como engine ancla** y aceptar baja portability al principio es una decisión táctica válida para una operación chica con recursos finitos. Es ir contra el espíritu "portabilidad" del framework, pero dominar un engine es más realista que estirarse en tres. La baseline (PENDIENTES) va a decir si esta hipótesis sobrevive.

4. **Sin AI presence cross-engine antes de invertir más en pSEO**: no agregar nuevas familias programáticas (más combinaciones vertical/ciudad/canal) hasta tener la baseline. Sin medición es invertir en cantidad sobre fundamentos no validados.

### 13.6 Auditoría heroImage Discover (2026-04-30)

Resultado del audit de los 9 archivos en `public/img/` usados como `heroImage`:

| Archivo | Tipo real | Dimensiones | Discover (≥1200px) | Post |
|---------|-----------|-------------|---------------------|------|
| 1.png | WebP | 1218×812 | ✅ OK | resenas-negativas-veterinarias |
| 2.png | PNG | 642×364 | ❌ TOO SMALL | restaurante-mala-nota-rappi |
| 3.png | PNG | 1920×1198 | ✅ OK | cuanto-cuesta-reputacion-argentina |
| 4.png | PNG | 2752×1536 | ✅ OK | resenas-falsas-ataques-coordinados |
| 5.png | PNG | 2816×1536 | ✅ OK | 50-plantillas-para-responder-resenas-negativas |
| 6.png | PNG | 2752×1536 | ✅ OK | resenas-para-clinicas |
| 7.png | JPEG | 1600×893 | ✅ OK | como-monitorear-las-resenas-de-tu-competencia |
| 8.png | JPEG | 1600×893 | ✅ OK | resenas-para-gimnasios |
| 9.png | JPEG | 1600×893 | ✅ OK | como-mostrar-tus-resenas-de-google-en-tu-sitio-web |

> ⚠️ `7/8/9.png` son **JPEG** con extensión `.png` (no rompe nada, conviene renombrar a `.jpg` cuando se toquen). `1.png` es **WebP** con extensión `.png` (mismo caso).

**Acciones derivadas** (todas presentes en PENDIENTES):
1. Reemplazar `2.png` con versión ≥1200px de ancho
2. Conseguir `heroImage` ≥1200px para las 6 páginas estáticas (bundled con AEO ola 1)
3. (Opcional) Renombrar `1.png → 1.webp` y `7-9.png → 7-9.jpg` para coherencia de extensiones

### 13.7 Inventario de /notas (21 posts — 2026-04-30)

**MDX dinámicos** (`content/notas/`):
- `como-responder-resenas` — responder reseñas negativas (2024-05-14)
- `como-conseguir-mas-resenas-en-google` — guía práctica (2024-07-15)
- `todo-lo-que-las-marcas-necesitan-saber-sobre-los-google-local-guides` — Local Guides (2024-06-27)
- `como-mejorar-tu-rating-en-google` — mejorar rating (2024-08-20)
- `como-eliminar-resenas-falsas-de-google` — eliminar falsas (2025-03-10)
- `resenas-falsas-ataques-coordinados-como-denunciarlos` — ataques coordinados (2026-04-10)
- `50-plantillas-para-responder-resenas-negativas` — plantillas multi-vertical (2026-04-17)
- `resenas-para-clinicas-como-responder-sin-violar-confidencialidad` — clínicas (2026-04-24)
- `como-monitorear-las-resenas-de-tu-competencia` — monitoreo competencia (2026-05-01)
- `resenas-para-gimnasios-como-pasar-de-3-a-4-5-estrellas` — gimnasios (2026-05-08)
- `como-mostrar-tus-resenas-de-google-en-tu-sitio-web` — mostrar reseñas (2026-05-15)
- `resenas-negativas-veterinarias` — responder reseñas sensibles en vets (2026-05-22)
- `restaurante-mala-nota-rappi` — gestión de reputación en delivery (2026-05-29)
- `cuanto-cuesta-reputacion-argentina` — impacto económico del rating (2026-06-05)
- `verificar-multiples-sucursales` — verificación individual y masiva para cadenas (2026-06-12)

**Páginas estáticas** (`app/notas/[nombre]/`) — **objetivo de AEO ola 1**:
- `como-responder-resenas-negativas-sin-arruinar-tu-reputacion`
- `como-usar-whatsapp-para-conseguir-resenas-de-google`
- `como-verificar-tu-negocio-en-google-business-2026`
- `nfc-qr-o-whatsapp-cual-es-la-mejor-forma-de-pedir-resenas`
- `por-que-desaparecen-tus-resenas-de-google`
- `que-es-el-response-rate-y-por-que-google-te-penaliza-si-ignoras-las-resenas`

### 13.8 Plan SEO/AEO — Próximas sesiones (orden de prioridad AEO-first)

**① AEO ola 1 — Bundle: reescritura editorial + heroImage Discover en las 6 páginas estáticas**
- Una pasada por post: rewrite contra checklist H + conseguir heroImage ≥1200px
- Posts: ver §13.7 listado de estáticas
- Sinergia: son los posts más antiguos (sin criterio editorial AEO) Y los que no tienen heroImage. Tocarlos dos veces no tiene sentido.
- Output esperado: 6 posts pasando checklist H + 6 nuevas hero cards aptas para Discover

**② AEO baseline 30-60 días — Medición presence/portability/concentration**
- Definir 20-30 prompts representativos en español LATAM cubriendo el árbol de §13.1
- Medir manualmente o con herramienta tipo AthenaHQ / Profound / AirOps en ChatGPT + Perplexity + Google AI Overviews
- Sin esta baseline, las decisiones de la ola 2 son a ciegas
- Puede arrancar en paralelo a la ola 1 (la medición no depende del rewrite)

**③ Plantilla MDX editorial AEO-compliant**
- Convertir el patrón de §6.Blog en `content/notas/_template.mdx`
- Frontmatter obligatorio + placeholder de intro con DATE+NUMBER
- A partir de acá, todo post nuevo nace AEO-compliant

**④ `/plantillas/pedir-resenas/[canal]` — WhatsApp, email, QR, NFC**
- 4 URLs programáticas, patrón idéntico a `/guia/conseguir-resenas/[vertical]`
- Cada plantilla nace como guía AEO-compliant (10-19 headings, intro declarativa, DATE+NUMBER)
- Datos necesarios: crear `data/canales.ts` con slug, label, descripcion, plantillas
- El post `como-usar-whatsapp-para-conseguir-resenas-de-google` ya existe → linking natural

**⑤ AEO ola 2 — Auditoría de los 15 MDX dinámicos restantes**
- Aplicar checklist H a cada post
- Priorizar por: (a) tráfico orgánico actual en GSC, (b) volumen de búsqueda del cluster, (c) ser página ancla del árbol §13.1
- Orden específico se define **después de la baseline** (②) — los datos van a indicar qué posts ya rankean y cuáles necesitan rewrite urgente

**⑥ Blog: benchmark por rubro** — estadísticas de reputación por industria
- Ej: "Cuántas reseñas tienen los mejores restaurantes de CABA"
- Complementa el árbol de impacto + feeds el intent de comparación competitiva
- Mismo template AEO-compliant que el resto

**⑦ Enrichment páginas calculadora ciudad** — contenido único por ciudad
- Las ~336 páginas tienen contenido genérico; 1-2 párrafos de contexto local
- Mayor esfuerzo, menor ROI inmediato
- Convertir cada combinación vertical/ciudad en pareja: landing geo + guía explicativa ancla (ver §13.5 punto 2)
- Dejar para después de ① – ⑥

---

## 14. DATATRACKERS — PRÓXIMO PROYECTO

- **Referencia visual:** `datatrackers-v2.html` — HTML standalone, no tocar
- **Identidad:** Dark SaaS — deep navy + turquoise (`--color-accent-dt`), `Barlow Condensed` / `DM Sans`
- **Próximo paso:** Migrar `datatrackers-v2.html` a Next.js via Claude Code
- **Estado:** Diseño aprobado, migración pendiente
- **Estrategia SEO/AEO:** se documentará en el CLAUDE.md propio de DataTrackers. Buyer journey distinto (marketing managers, no dueños SMB), idioma neutro español + inglés, motor primario probablemente Perplexity (no ChatGPT). **No mirrorear contenido de Médano a DataTrackers** — keyword targeting distinto (agencia/local vs SaaS/B2B).

---

## 15. COMANDOS FRECUENTES

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Verificar rutas y redirects
grep -rn "source\|destination" next.config.ts

# Buscar nombre real de una ruta antes de asumir
grep -rn "publicidad\|paid" app/ --include="*.tsx"

# Ver todos los posts del blog
ls app/notas/
ls content/notas/

# Verificar que no haya hex en CSS
grep -rn "#[0-9a-fA-F]\{3,6\}" app/styles/ app/globals.css

# AEO — detectar hedging en intros de posts MDX (regla 2 de §13.4)
for f in content/notas/*.mdx; do
  echo "=== $f ==="
  sed -n '/^# /,/^## /p' "$f" | head -15 | \
    grep -inE "\b(puede|podría|quizás|tal vez|es posible|ayuda a|suele)\b"
done

# AEO — contar headings por post (target 10-19)
for f in content/notas/*.mdx; do
  count=$(grep -cE "^##+ " "$f")
  echo "$count headings — $f"
done

# AEO — listar posts sin heroImage en frontmatter
grep -L "heroImage:" content/notas/*.mdx

# Verificar dimensiones de heroImages (necesita ImageMagick o sips)
for img in public/img/*.png public/img/*.jpg public/img/*.webp; do
  [ -f "$img" ] || continue
  echo "$img — $(file -b "$img" | cut -d',' -f1) — $(identify -format '%wx%h' "$img" 2>/dev/null || sips -g pixelWidth -g pixelHeight "$img" 2>/dev/null | tail -2)"
done
```

---

*CLAUDE.md — Médano Next.js | Actualizado: 2026-05-11 (estrategia AEO integrada: portabilidad cross-engine, reglas editoriales universales, checklist H, plan SEO reordenado AEO-first, bug §14 duplicada arreglado)*
*Repo: hernanmanzitti/medano-nextjs*
