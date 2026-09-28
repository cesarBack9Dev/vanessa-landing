const cards = [
  {
    title: 'Producción y set',
    body: 'Coordinación en estudio y locación: cámara, audio, tiempos y equipo. Experiencia en paneles, entrevistas y piezas institucionales.',
  },
  {
    title: 'Cobertura en vivo',
    body: 'Eventos nocturnos, escenario y público. Registro limpio para redes o emisión, con ojo en el ritmo de la noche.',
  },
  {
    title: 'Postproducción',
    body: 'Edición con criterio narrativo: corte, texto, color y sonido para que el mensaje se entienda sin ruido.',
  },
  {
    title: 'Asesoría creativa',
    body: 'Ayuda a definir tono, estructura y entregables antes de gastar presupuesto. Ideal si estás armando tu primera pieza o un brief de marca.',
  },
]

export default function Experience() {
  return (
    <section className="mx-auto max-w-[1120px] px-8 pb-14 pt-10" id="experiencia">
      <h2 className="mb-2 font-display text-[34px] font-semibold">Experiencia</h2>
      <p className="mb-7 max-w-[560px] text-sm text-muted">
        Producción de TV, cobertura de eventos y acompañamiento creativo de punta a punta.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-line bg-card p-[22px]"
          >
            <h3 className="mb-2 text-base font-semibold">{card.title}</h3>
            <p className="text-[13px] text-muted">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
