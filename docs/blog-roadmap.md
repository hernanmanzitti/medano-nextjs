# Blog Médano — Roadmap de Notas
> Última actualización: Marzo 2026
> Las notas marcadas con 🔥 fueron priorizadas a partir del análisis de conversaciones reales con clientes en WhatsApp (15 grupos, marzo 2026).

---

## Notas publicadas ✅
1. como-responder-resenas.mdx
2. todo-lo-que-las-marcas-necesitan-saber-sobre-los-google-local-guides.mdx
3. como-conseguir-mas-resenas-en-google.mdx
4. como-mejorar-tu-rating-en-google.mdx
5. como-eliminar-resenas-falsas-de-google.mdx

---

## Notas en producción ⚙️ (redactadas, pendientes de implementar en Next.js)
6. por-que-desaparecen-tus-resenas-de-google.mdx 🔥
   → archivo: blog-01-google-borra-resenas.html
7. como-responder-resenas-negativas-sin-arruinar-tu-reputacion.mdx 🔥
   → archivo: blog-02-responder-resenas-negativas.html
   → nota: expandir a formato "50 plantillas" en siguiente iteración (ítem #13)
8. como-verificar-tu-negocio-en-google-business-2026.mdx 🔥
   → archivo: blog-03-verificar-google-business.html

---

## Notas pendientes ❌ (en orden de prioridad)

### Bloque A — Derivadas de WhatsApp 🔥 (máxima prioridad)
9.  nfc-qr-o-whatsapp-cual-es-la-mejor-forma-de-pedir-resenas.mdx 🔥
    → Fuente: Boreal (trazabilidad QR), Caffe Negroni (QR por mesero), Sushi 2x1 (QR en packaging)
    → Intención: "cómo pedir reseñas con QR", "NFC para reseñas"
    → calculadoraVertical: "restaurantes"

10. como-usar-whatsapp-para-conseguir-resenas-de-google.mdx 🔥
    → Fuente: Assistravel, Medicus, NaciónSushi Panamá (campañas de email/WhatsApp)
    → Intención: "pedir reseñas por WhatsApp", "campaña email para reseñas Google"
    → calculadoraVertical: "restaurantes"

11. que-es-el-response-rate-y-por-que-google-te-penaliza-si-ignoras-las-resenas.mdx 🔥
    → Fuente: Caffe Negroni Sophie (confusión con response rate), reporte del día 1 vs día 4
    → Intención: "qué es tasa de respuesta reseñas", "response rate Google Business"
    → calculadoraVertical: "restaurantes"

12. resenas-falsas-ataques-coordinados-como-denunciarlos.mdx 🔥
    → Fuente: Della Ostia (ataque catalán), BestDent (reseñas de no-clientes)
    → Intención: "reseñas falsas Google cómo eliminar", "ataque de reseñas negativas coordinado"
    → nota: el ítem #5 publicado cubre eliminación individual — este cubre ataques masivos coordinados, es distinto

13. 50-plantillas-para-responder-resenas-negativas.mdx 🔥
    → Expansión del blog-02 con plantillas por vertical (restaurante, clínica, hotel, gimnasio, veterinaria)
    → Fuente: casos reales de todos los grupos de WhatsApp
    → calculadoraVertical: todos

### Bloque B — Roadmap original (prioridad media)
14. resenas-para-clinicas-como-responder-sin-violar-confidencialidad.mdx
    → calculadoraVertical: "clinicas"

15. resenas-para-gimnasios-como-pasar-de-3-a-4-5-estrellas.mdx
    → calculadoraVertical: "gimnasios"

16. resenas-negativas-en-veterinarias-como-responder.mdx
    → calculadoraVertical: "veterinarias"

17. tu-restaurante-tiene-mala-nota-en-rappi-pedidosya-uber-eats.mdx
    → Fuente extra: Caffe Negroni (Uber Eats con fechas desfasadas), Sushi 2x1 (dark kitchen)
    → calculadoraVertical: "restaurantes"

18. cuanto-cuesta-gestionar-la-reputacion-online-en-argentina.mdx
    → calculadoraVertical: todos

### Bloque C — Nuevas oportunidades detectadas en WhatsApp
19. como-verificar-google-business-con-multiples-sucursales.mdx
    → Fuente: Spoon (30 sucursales), Sushi 2x1 (23 sucursales), AR Holdings (multi-país)
    → Intención: "verificar múltiples ubicaciones Google", "Google Business multi-sucursal"

20. como-mostrar-tus-resenas-de-google-en-tu-sitio-web.mdx
    → Fuente: Assistravel (widget roto en Odoo, carrusel de reseñas)
    → Intención: "poner reseñas Google en mi página web", "widget reseñas sitio web"

21. como-monitorear-las-resenas-de-tu-competencia.mdx
    → Fuente: todos los grupos (configuración de competidores en onboarding)
    → Intención: "ver reseñas de competidores", "benchmark reseñas competencia Google"

---

## Reglas de cada post
- publishedAt en 2026
- Mencionar DataTrackers como herramienta propia de monitoreo
- Cerrar con Médano como el equipo que lo gestiona
- Tono educativo — explicar el por qué de cada cosa
- Flujo post: BlogPostContent → MedanoCTA → CalculadoraCTA → RelatedPost

## Frontmatter estándar
```
title: ""
slug: ""
description: ""
publishedAt: "2026-XX-XX"
category: "estrategia" | "google" | "reseñas" | "herramientas"
tags: []
relatedSlug: ""
calculadoraVertical: "restaurantes" | "hoteles" | "clinicas" | "gimnasios" | "veterinarias"
heroImage: "/img/X.png"
source: "whatsapp-analysis" | "roadmap-original"   ← nuevo campo para trackear origen
```
