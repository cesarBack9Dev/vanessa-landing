import { WA_URL } from '@/lib/constants'

const plans = [
  {
    tag: 'Audio',
    title: 'Voces en off',
    blurb: 'Narración cercana para spots, docs, reels y piezas digitales.',
    amount: '$45',
    unit: '/pieza',
    featured: false,
    cta: 'Pedir voz',
    items: [
      'Hasta 60 segundos de locución',
      '2 rondas de ajustes',
      'Entrega WAV + MP3',
      'Guion corto opcional',
    ],
  },
  {
    tag: 'Pack edición',
    title: 'Edición de video',
    blurb: 'De la grabación al corte listo para publicar o emitir.',
    amount: '$120',
    unit: '/pack',
    featured: true,
    cta: 'Quiero este pack',
    items: [
      'Hasta 3 minutos de pieza final',
      'Corte, ritmo y texto en pantalla',
      'Color básico + mezcla de audio',
      '2 rondas de revisión',
      'Export para redes o full HD',
    ],
  },
  {
    tag: 'Por hora',
    title: 'Asesorías',
    blurb: 'Dirección creativa y acompañamiento en producción.',
    amount: '$20',
    unit: '/hora',
    featured: false,
    cta: 'Agendar hora',
    items: [
      'Brief y roadmap del proyecto',
      'Revisión de guion o rough cut',
      'Criterio de set, audio e imagen',
      'Sesión por Zoom o presencial',
    ],
  },
]

export default function Services() {
  return (
    <section className="mx-auto max-w-[1120px] px-8 pb-14 pt-10" id="servicios">
      <h2 className="mb-2 font-display text-[34px] font-semibold">Servicios y precios</h2>
      <p className="mb-7 max-w-[560px] text-sm text-muted">
        Tres líneas claras: voz, edición y asesoría. Precios en USD. Ajustamos según alcance del
        proyecto.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`relative flex flex-col gap-3 rounded-[18px] border bg-card px-[22px] py-[26px] ${
              plan.featured
                ? 'border-[rgba(196,181,224,0.55)] shadow-[0_0_0_1px_rgba(196,181,224,0.25),0_18px_40px_rgba(0,0,0,0.35)]'
                : 'border-line'
            }`}
          >
            <span className="self-start rounded-full bg-lavender px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-bg">
              {plan.tag}
            </span>
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="min-h-[40px] text-[13px] text-muted">{plan.blurb}</p>
            <div className="font-display text-[42px] font-semibold leading-none">
              {plan.amount}
              <span className="ml-1 font-sans text-base font-medium text-muted">{plan.unit}</span>
            </div>
            <ul className="mb-4 mt-2 flex list-none flex-col gap-2">
              {plan.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-[18px] text-[13px] text-text before:absolute before:left-0 before:top-[7px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-lavender"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              className={`mt-auto rounded-full px-4 py-[11px] text-center text-[13px] font-semibold ${
                plan.featured
                  ? 'border border-transparent bg-lavender text-bg'
                  : 'border border-lavender-deep text-lavender'
              }`}
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-[18px] rounded-[18px] border border-line bg-bg-2 p-6 md:grid-cols-2">
          <div>
            <h4 className="mb-1.5 font-display text-[22px]">Pack Edición Plus</h4>
            <p className="text-[13px] text-muted">
              Para piezas más largas o con más assets: entrevistas, BTS y eventos.
            </p>
            <div className="mt-2.5 font-display text-[28px]">
              $220 <span className="font-sans text-[13px] text-muted">/pack · hasta 8 min</span>
            </div>
          </div>
          <div>
            <p className="mb-2.5 text-[13px] font-semibold text-text">Incluye</p>
            <p className="text-[13px] text-muted">
              · Multicámara o varios clips
              <br />
              · Subtítulos / lower thirds
              <br />
              · Música libre de derechos
              <br />
              · 3 rondas de revisión
            </p>
          </div>
        </div>
        <div className="rounded-[18px] border border-line bg-bg-2 p-6">
          <h4 className="mb-1.5 font-display text-[22px]">Combo voz + edición</h4>
          <p className="text-[13px] text-muted">
            Locución + corte de la misma pieza, con un solo flujo de entregas.
          </p>
          <div className="mt-2.5 font-display text-[28px]">
            $150 <span className="font-sans text-[13px] text-muted">/combo</span>
          </div>
          <p className="mt-2.5 text-[13px] text-muted">Ideal para spots y reels de marca.</p>
        </div>
      </div>

      <p className="mt-3.5 text-xs text-muted">
        Precios orientativos en USD. Proyectos institucionales o coberturas en vivo se cotizan
        aparte.
      </p>
    </section>
  )
}
