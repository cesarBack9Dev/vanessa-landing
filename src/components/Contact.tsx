import { WA_DISPLAY, WA_URL } from '@/lib/constants'

export default function Contact() {
  return (
    <section className="mx-auto max-w-[1120px] px-8 pb-14 pt-10" id="contacto">
      <div className="grid items-center gap-6 rounded-[20px] border border-line bg-card p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="mb-2.5 font-display text-[34px] font-semibold">¿Tenés un proyecto?</h2>
          <p className="mb-5 max-w-[420px] text-sm text-muted">
            Escribime con el brief, links de referencia y fecha ideal. Te respondo con una
            cotización clara.
          </p>
          <div className="flex flex-col gap-2 text-[13px] text-muted">
            <div>
              <strong className="font-semibold text-text">WhatsApp</strong> — {WA_DISPLAY}
            </div>
            <div>
              <strong className="font-semibold text-text">Modalidad</strong> — remoto o presencial
            </div>
            <div>
              <strong className="font-semibold text-text">Moneda</strong> — USD · packs o por hora
            </div>
          </div>
          <div className="mt-[22px] flex flex-wrap gap-3">
            <a
              className="rounded-full bg-lavender px-[22px] py-3 text-sm font-semibold text-bg"
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="rounded-full border border-lavender-deep px-[22px] py-3 text-sm font-medium text-lavender"
              href="#servicios"
            >
              Ver precios
            </a>
          </div>
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-2xl">
          <img
            src="/photos/06-112852.jpeg"
            alt="Vanessa en estudio"
            className="block h-full w-full object-cover object-[center_20%]"
          />
        </div>
      </div>
    </section>
  )
}
