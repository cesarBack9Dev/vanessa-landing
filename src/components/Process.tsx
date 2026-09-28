const steps = [
  {
    n: '01',
    title: 'Brief',
    body: 'Me contás el objetivo, tono y plazos. Definimos formato y alcance.',
  },
  {
    n: '02',
    title: 'Propuesta',
    body: 'Te paso pack o horas, entregables y fecha de primer corte.',
  },
  {
    n: '03',
    title: 'Producción',
    body: 'Grabación o locución, edición y primeras revisiones contigo.',
  },
  {
    n: '04',
    title: 'Entrega',
    body: 'Archivos listos (WAV/MP3 o video HD) y ajustes finales acordados.',
  },
]

export default function Process() {
  return (
    <section className="mx-auto max-w-[1120px] px-8 pb-14 pt-10" id="proceso">
      <h2 className="mb-2 font-display text-[34px] font-semibold">Cómo trabajamos</h2>
      <p className="mb-7 max-w-[560px] text-sm text-muted">
        Un flujo simple, sin sorpresas en la entrega.
      </p>
      <div className="mt-2 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.n}
            className="rounded-[14px] border border-line bg-bg-2 px-4 py-[18px]"
          >
            <div className="mb-2.5 text-xs font-semibold tracking-[0.14em] text-lavender">
              {step.n}
            </div>
            <h3 className="mb-1.5 text-[15px] font-semibold">{step.title}</h3>
            <p className="text-xs text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
