"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

type DownloadSize = 256 | 512 | 1024;

const PREVIEW_SIZE = 320;

// NOTA: El QR usa negro puro sobre blanco puro (NO tokens de marca).
// Un QR en color de marca pierde contraste y falla en escáneres low-end.
// Excepción JUSTIFICADA a la regla de "no hex": la librería qrcode requiere
// hex literal y usar tokens comprometería la funcionalidad del producto.
const QR_COLOR = { dark: "#000000", light: "#ffffff" };

export default function QrTool() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [url, setUrl] = useState("https://search.google.com/local/writereview?placeid=");
  const [size, setSize] = useState<DownloadSize>(512);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (!url.trim()) return;

    QRCode.toCanvas(canvasRef.current, url, {
      width: PREVIEW_SIZE,
      margin: 2,
      errorCorrectionLevel: "M",
      color: QR_COLOR,
    })
      .then(() => setError(null))
      .catch((err) => setError(err.message || "No se pudo generar el QR"));
  }, [url]);

  const downloadPng = async () => {
    try {
      const dataUrl = await QRCode.toDataURL(url, {
        width: size,
        margin: 2,
        errorCorrectionLevel: "H",
        color: QR_COLOR,
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `qr-resenas-${size}px.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al exportar PNG");
    }
  };

  const downloadSvg = async () => {
    try {
      const svgString = await QRCode.toString(url, {
        type: "svg",
        margin: 2,
        errorCorrectionLevel: "H",
        color: QR_COLOR,
      });
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = "qr-resenas.svg";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al exportar SVG");
    }
  };

  const urlIsValid = url.trim().length > 0 && !error;

  return (
    <div className="qr-tool">
      <div className="qr-tool__form">
        <div className="qr-tool__field">
          <label className="qr-tool__label" htmlFor="qr-url">URL de destino</label>
          <span className="qr-tool__hint">
            Pegá tu link de Google Reviews, tu Google Maps o cualquier URL.
          </span>
          <input
            id="qr-url"
            type="url"
            className="qr-tool__input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://search.google.com/local/writereview?placeid=..."
            spellCheck={false}
            autoComplete="off"
          />
        </div>

        <fieldset className="qr-tool__field">
          <legend className="qr-tool__label">Tamaño de descarga</legend>
          <div className="qr-tool__sizes">
            {([256, 512, 1024] as DownloadSize[]).map((s) => (
              <label key={s} className="qr-tool__size">
                <input
                  type="radio"
                  name="qr-size"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                />
                <span>{s}px</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="qr-tool__actions">
          <button
            type="button"
            onClick={downloadPng}
            className="qr-tool__btn qr-tool__btn--primary"
            disabled={!urlIsValid}
          >
            Descargar PNG
          </button>
          <button
            type="button"
            onClick={downloadSvg}
            className="qr-tool__btn qr-tool__btn--ghost"
            disabled={!urlIsValid}
          >
            Descargar SVG
          </button>
        </div>

        {error && <p className="qr-tool__error" role="alert">{error}</p>}
      </div>

      <div className="qr-tool__preview">
        <div className="qr-tool__canvas-wrap">
          <canvas
            ref={canvasRef}
            className="qr-tool__canvas"
            aria-label="Vista previa del código QR"
          />
        </div>
        <p className="qr-tool__preview-caption">Vista previa · {PREVIEW_SIZE}px</p>
      </div>
    </div>
  );
}
