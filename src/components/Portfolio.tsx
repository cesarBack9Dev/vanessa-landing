const tiles = [
  {
    src: '/photos/03-112753.jpeg',
    alt: 'Cobertura de concierto en vivo',
    cap: 'Cobertura en vivo · Escenario',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/photos/02-112547-1.jpeg',
    alt: 'Producción nocturna',
    cap: 'Evento nocturno',
    className: '',
  },
  {
    src: '/photos/01-112547.jpeg',
    alt: 'Cámara en galería',
    cap: 'Producción en galería',
    className: '',
  },
  {
    src: '/photos/05-112753-2.jpeg',
    alt: 'Retrato en set',
    cap: 'Retrato / BTS',
    className: 'md:row-span-2',
  },
  {
    src: '/photos/04-112753-1.jpeg',
    alt: 'Panel y transmisión',
    cap: 'Panel / transmisión',
    className: '',
  },
  {
    src: '/photos/08-112919.jpeg',
    alt: 'Rodaje en espacio cultural',
    cap: 'Rodaje cultural',
    className: '',
  },
  {
    src: '/photos/07-112852-1.jpeg',
    alt: 'Entrevista',
    cap: 'Entrevista',
    className: '',
  },
  {
    src: '/photos/06-112852.jpeg',
    alt: 'En estudio',
    cap: 'En estudio',
    className: '',
  },
]

export default function Portfolio() {
  return (
    <section className="mx-auto max-w-[1120px] px-8 pb-14 pt-10" id="trabajo">
      <h2 className="mb-2 font-display text-[34px] font-semibold">Trabajos recientes</h2>
      <p className="mb-7 max-w-[560px] text-sm text-muted">
        Set, cobertura en vivo, paneles y piezas culturales. Del detrás de cámara al corte final.
      </p>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:grid-cols-4">
        {tiles.map((tile) => (
          <div
            key={tile.src + tile.cap}
            className={`relative overflow-hidden rounded-[14px] border border-[rgba(196,181,224,0.12)] bg-bg-2 ${tile.className}`}
          >
            <img src={tile.src} alt={tile.alt} className="block h-full w-full object-cover" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(28,28,34,0.85)] to-transparent px-3.5 py-3 text-xs font-medium">
              {tile.cap}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
