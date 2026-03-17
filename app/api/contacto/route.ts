import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json({ error: 'Servicio no disponible.' }, { status: 503 })
    }

    const body = await req.json()
    const { nombre, empresa, email, telefono, mensaje } = body

    if (!nombre || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Médano Web <contacto@medano.co>',
      to: ['hola@medano.co'],
      replyTo: email,
      subject: `Nuevo contacto web: ${nombre}${empresa ? ` — ${empresa}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00246b;">Nuevo mensaje desde medano.co</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; width: 120px;">Nombre</td><td style="padding: 8px;">${nombre}</td></tr>
            <tr style="background:#f5f5f5"><td style="padding: 8px; font-weight: bold;">Empresa</td><td style="padding: 8px;">${empresa || '—'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr style="background:#f5f5f5"><td style="padding: 8px; font-weight: bold;">Teléfono</td><td style="padding: 8px;">${telefono || '—'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Mensaje</td><td style="padding: 8px;">${mensaje || '—'}</td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contacto/route]', err)
    return NextResponse.json(
      { error: 'Error al enviar. Intentá de nuevo.' },
      { status: 500 }
    )
  }
}
