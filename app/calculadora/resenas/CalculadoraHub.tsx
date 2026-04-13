"use client"

import { useState } from "react"
import Link from "next/link"
import { CalculadoraTool } from "@/app/calculadora/resenas/[vertical]/[ciudad]/CalculadoraTool"
import type { Vertical } from "@/data/verticales"
import type { Ciudad } from "@/data/ciudades"

const PAISES = [
  { slug: "argentina" as const,  label: "Argentina" },
  { slug: "costa-rica" as const, label: "Costa Rica" },
  { slug: "panama" as const,     label: "Panamá" },
]

type PaisSlug = "argentina" | "costa-rica" | "panama"

type Props = {
  verticales: Vertical[]
  ciudades: Ciudad[]
}

export function CalculadoraHub({ verticales, ciudades }: Props) {
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null)
  const [selectedPais, setSelectedPais] = useState<PaisSlug | null>(null)

  const vertical = verticales.find((v) => v.slug === selectedVertical)

  const paisesDisponibles = selectedVertical
    ? PAISES.filter((p) =>
        ciudades.some(
          (c) =>
            c.pais === p.slug &&
            (c.tipo === "comercial" || c.verticalesTouristicos?.includes(selectedVertical))
        )
      )
    : []

  const ciudadesFiltradas =
    selectedVertical && selectedPais
      ? ciudades.filter(
          (c) =>
            c.pais === selectedPais &&
            (c.tipo === "comercial" || c.verticalesTouristicos?.includes(selectedVertical))
        )
      : []

  function handleVerticalSelect(slug: string) {
    setSelectedVertical(slug)
    setSelectedPais(null)
  }

  return (
    <>
      {/* ── Calculadora conectada al rubro seleccionado ── */}
      <section id="calc-hub-tool" className="calc-hub-tool">
        <div className="calc-hub-tool-inner">
          <h2 className="calc-hub-tool-title">
            {vertical
              ? `Calculadora para ${vertical.labelPlural}`
              : "Calculadora de reseñas"}
          </h2>
          {!vertical && (
            <p className="calc-hub-tool-hint">
              Elegí tu rubro más abajo para cargar los promedios de tu sector
            </p>
          )}
          <CalculadoraTool
            key={selectedVertical ?? "default"}
            defaultReviews={vertical?.avgReviews ?? 60}
            defaultRating={vertical?.avgRating ?? 4.1}
          />
        </div>
      </section>

      {/* ── Navegador de rubros → país → ciudad ── */}
      <section id="calc-hub-nav" className="calc-hub-nav">
        <div className="calc-hub-nav-inner">

          {/* ── Paso 1: Rubro ── */}
          <div className="calc-hub-step">
            <div className="calc-hub-step-header">
              <span className="calc-hub-step-num" aria-hidden="true">01</span>
              <h2 className="calc-hub-step-title">¿Qué tipo de negocio tenés?</h2>
            </div>
            <div className="calc-hub-verticals" role="list">
              {verticales.map((v) => (
                <button
                  key={v.slug}
                  role="listitem"
                  className={`calc-hub-vertical-btn${selectedVertical === v.slug ? " active" : ""}`}
                  onClick={() => handleVerticalSelect(v.slug)}
                  aria-pressed={selectedVertical === v.slug}
                >
                  <span className="calc-hub-vertical-name">{v.labelPlural}</span>
                  <span className="calc-hub-vertical-context">{v.context}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Paso 2: País ── */}
          {selectedVertical && (
            <div
              className="calc-hub-step calc-hub-step--in"
              key={`pais-${selectedVertical}`}
            >
              <div className="calc-hub-step-header">
                <span className="calc-hub-step-num" aria-hidden="true">02</span>
                <h3 className="calc-hub-step-title">¿En qué país?</h3>
              </div>
              <div className="calc-hub-countries" role="list">
                {paisesDisponibles.map((p) => (
                  <button
                    key={p.slug}
                    role="listitem"
                    className={`calc-hub-country-btn${selectedPais === p.slug ? " active" : ""}`}
                    onClick={() => setSelectedPais(p.slug)}
                    aria-pressed={selectedPais === p.slug}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Paso 3: Ciudades ── */}
          {selectedVertical && selectedPais && ciudadesFiltradas.length > 0 && (
            <div
              className="calc-hub-step calc-hub-step--in"
              key={`ciudades-${selectedVertical}-${selectedPais}`}
            >
              <div className="calc-hub-step-header">
                <span className="calc-hub-step-num" aria-hidden="true">03</span>
                <h3 className="calc-hub-step-title">Elegí tu ciudad</h3>
              </div>
              <div className="calc-hub-cities" role="list">
                {ciudadesFiltradas.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/calculadora/resenas/${selectedVertical}/${c.slug}`}
                    className="calc-hub-city-link"
                  >
                    <span className="calc-hub-city-name">{c.label}</span>
                    <span className="calc-hub-city-prov">{c.provincia}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
