# CLAUDE.md — Médano Next.js
> Guía de referencia para Claude Code. Leer completo antes de hacer cualquier cambio.

---

## 1. CONTEXTO DEL PROYECTO

**Médano** (medano.co) es una agencia de crecimiento digital especializada en gestión de reseñas online y publicidad digital para negocios con múltiples sucursales (3–30 locales).

**DataTrackers** (datatrackers.co) es el SaaS propietario de monitoreo de reseñas y reputación online — principal vehículo de monetización de Médano.

**Objetivo del sitio:** Generación de leads orgánicos mediante SEO programático. La calculadora de reseñas (`/calculadora/resenas/[vertical]/[ciudad]`) es el motor principal con ~336 URLs estáticas.

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
/* en JS: document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`) */
body.menu-open {
  position: fixed;
  top: calc(-1 * var(--scroll-y));
  width: 100%;
}
```

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

Posts pendientes:
- `resenas-negativas-veterinarias`
- `restaurante-mala-nota-rappi`
- `cuanto-cuesta-reputacion-argentina`
- `verificar-multiples-sucursales`

---

## 7. SEO — SITEMAP Y ROBOTS

### Sitemap (`app/sitemap.ts`)
Generado programáticamente. Incluye:
- Páginas estáticas (homepage, resenas, publicidad-digital, nosotros, calculadora hub)
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
- ❌ Valores hex en CSS → siempre `var(--token)`
- ❌ `!important` → restructurar el selector
- ❌ Remover `/nosotros` del navbar
- ❌ Linkear a `/contacto` → usar `/#contact`
- ❌ Asumir nombres de rutas → hacer `grep` primero
- ❌ Clases compartidas en `page.css` locales → van en `globals.css`
- ❌ Estilos desktop después de `@media (max-width: 768px)`
- ❌ JSON-LD en la metadata API → usar `dangerouslySetInnerHTML`

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

# 2. Verificar frontmatter obligatorio
grep -n "title\|description\|publishedAt\|slug" [archivo.mdx]

# 3. Verificar que getAllPosts() lo toma
# (inspeccion manual: la función lee desde el directorio correcto)

# 4. Verificar que aparece en el sitemap
npm run build 2>&1 | grep "notas/[slug]"

# 5. Actualizar roadmap
grep -n "[slug]" docs/blog-roadmap.md
# → marcar como publicado
```

**Resultado esperado:** post listado en build, roadmap actualizado.

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

## 12. REGLAS DE ESCALABILIDAD — Para el Largo Plazo

### Antes de agregar cualquier feature nueva
1. **¿Existe ya?** — hacer `grep -rn` antes de crear algo nuevo
2. **¿Dónde vive?** — respetar la arquitectura de archivos existente
3. **¿Rompe el build?** — siempre correr `npm run build` al finalizar
4. **¿Afecta el sitemap?** — si es ruta pública, agregar a `sitemap.ts`
5. **¿Afecta SEO?** — si es ruta pública, agregar `generateMetadata`

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
| Post de blog pendiente: verificar-multiples-sucursales | Alta | Pendiente |
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

---

## 13. ESTRATEGIA SEO — ÁRBOL DE INTENTS

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
│                  → FAQ por vertical con FAQPage schema         ← ✅ IMPLEMENTADO (9 URLs)
│
└── Impacto         → /notas/cuanto-cuesta-reputacion-argentina ← ✅ IMPLEMENTADO
                   → Blog: benchmark por rubro                  ← PENDIENTE
```

### Inventario de /notas (20 posts — 2026-04-13)

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

**Páginas estáticas** (`app/notas/[nombre]/`):
- `como-responder-resenas-negativas-sin-arruinar-tu-reputacion`
- `como-usar-whatsapp-para-conseguir-resenas-de-google`
- `como-verificar-tu-negocio-en-google-business-2026`
- `nfc-qr-o-whatsapp-cual-es-la-mejor-forma-de-pedir-resenas`
- `por-que-desaparecen-tus-resenas-de-google`
- `que-es-el-response-rate-y-por-que-google-te-penaliza-si-ignoras-las-resenas`

### Plan SEO — Próximas sesiones (orden de prioridad)

**① SIGUIENTE — `verificar-multiples-sucursales`** (1 post MDX pendiente)
- Cubre el intent "cómo verificar varias sucursales en Google Business"
- Long-tail sin competencia fuerte + directo al perfil de cliente de Médano (3–30 locales)
- Imágenes disponibles: `/img/1.png` está libre (usá la que quede disponible)

**② `/plantillas/pedir-resenas/[canal]`** — WhatsApp, email, QR, NFC
- 4 URLs programáticas, patrón idéntico a `/guia/conseguir-resenas/[vertical]`
- Intent de alta conversión: quien lo busca ya quiere pedir reseñas
- Datos necesarios: crear `data/canales.ts` con slug, label, descripcion, plantillas
- El post `como-usar-whatsapp-para-conseguir-resenas-de-google` ya existe → linking natural

**③ Blog: benchmark por rubro** — estadísticas de reputación por industria
- Ej: "Cuántas reseñas tienen los mejores restaurantes de CABA"
- Complementa el árbol de impacto + feeds el intent de comparación competitiva

**④ Enrichment páginas calculadora ciudad** — contenido único por ciudad
- Las ~336 páginas tienen contenido genérico; 1-2 párrafos de contexto local
- Mayor esfuerzo, menor ROI inmediato
- Dejar para después de ① y ②

---

## 14. DATATRACKERS — PRÓXIMO PROYECTO

- **Referencia visual:** `datatrackers-v2.html` — HTML standalone, no tocar
- **Identidad:** Dark SaaS — deep navy + turquoise (`--color-accent-dt`), `Barlow Condensed` / `DM Sans`
- **Próximo paso:** Migrar `datatrackers-v2.html` a Next.js via Claude Code
- **Estado:** Diseño aprobado, migración pendiente

---

## 14. COMANDOS FRECUENTES

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

# Verificar que no haya hex en CSS
grep -rn "#[0-9a-fA-F]\{3,6\}" app/styles/ app/globals.css
```

---

*CLAUDE.md — Médano Next.js | Actualizado: 2026-04-13 (guías programáticas /guia/conseguir-resenas + 3 posts blog + roadmap SEO actualizado)*
*Repo: hernanmanzitti/medano-nextjs*
