'use client';

import { useEffect, useRef, useState } from 'react';

// Frases del rotador (molde: "Gestionamos ___"). Desktop = tamaño full;
// en mobile el auto-fit las achica lo justo para no recortar.
const PHRASES = [
  'las reseñas',
  'publicidad online',
  'el SEO y el GEO',
  'el posicionamiento',
  'el impacto causal',
] as const;

const TYPE_MS = 60;     // tipeo por letra
const DELETE_MS = 32;   // borrado por letra
const HOLD_MS = 1600;   // pausa con frase completa (cursor titilando)
const GAP_MS = 320;     // pausa en vacío antes de la siguiente
const REDUCED_MS = 2600;

type Phase = 'typing' | 'holding' | 'deleting' | 'gap';

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(PHRASES[0].length); // SSR: frase 1 COMPLETA
  const [phase, setPhase] = useState<Phase>('holding');
  const [reduced, setReduced] = useState(false);
  const [fontPx, setFontPx] = useState<number | null>(null);

  const boxRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mql.matches);
    apply();
    mql.addEventListener('change', apply);
    return () => mql.removeEventListener('change', apply);
  }, []);

  // Auto-fit: escala el font-size para que la frase entre en 1 línea
  useEffect(() => {
    const fit = () => {
      const box = boxRef.current;
      if (!box) return;
      const cs = getComputedStyle(box);
      const base = parseFloat(cs.fontSize);
      const avail = box.clientWidth;
      if (!base || !avail) return;
      const canvas = (canvasRef.current ||= document.createElement('canvas'));
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.font = `${cs.fontWeight} ${base}px ${cs.fontFamily}`;
      const phrase = PHRASES[index].toUpperCase(); // el h1 va en mayúsculas
      let w = ctx.measureText(phrase).width;
      w += -0.02 * base * phrase.length;           // letter-spacing -0.02em
      const scale = Math.min(1, (avail * 0.97) / w);
      setFontPx(base * scale);
    };
    fit();
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(fit); // re-mide cuando la fuente ya está cargada
    }

    // ResizeObserver en vez de window 'resize': mide el propio box después de que
    // el layout se asienta. El evento 'resize' de window puede dispararse antes de
    // que #hero termine de re-flowear tras un cambio de viewport, dejando `fit()`
    // con un box.clientWidth desactualizado (medido y confirmado: el texto se
    // recorta visualmente contra el borde tras redimensionar la ventana en vivo).
    const box = boxRef.current;
    if (box && typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => fit());
      ro.observe(box);
      return () => ro.disconnect();
    }
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [index]);

  // Modo reducido: rotación simple, sin tipeo
  useEffect(() => {
    if (!reduced) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PHRASES.length),
      REDUCED_MS,
    );
    return () => clearInterval(id);
  }, [reduced]);

  // Máquina de estados del efecto teclado
  useEffect(() => {
    if (reduced) return;
    const full = PHRASES[index].length;

    if (phase === 'typing') {
      if (sub >= full) { setPhase('holding'); return; }
      const id = setTimeout(() => setSub((s) => s + 1), TYPE_MS);
      return () => clearTimeout(id);
    }
    if (phase === 'deleting') {
      if (sub <= 0) { setPhase('gap'); return; }
      const id = setTimeout(() => setSub((s) => s - 1), DELETE_MS);
      return () => clearTimeout(id);
    }
    if (phase === 'holding') {
      const id = setTimeout(() => setPhase('deleting'), HOLD_MS);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % PHRASES.length);
      setPhase('typing');
    }, GAP_MS);
    return () => clearTimeout(id);
  }, [phase, sub, index, reduced]);

  const text = reduced ? PHRASES[index] : PHRASES[index].slice(0, sub);

  return (
    <span className="hero-rotator" ref={boxRef}>
      <span
        className="hero-rotator-text"
        style={fontPx ? { fontSize: `${fontPx}px` } : undefined}
      >
        {text}
      </span>
    </span>
  );
}
