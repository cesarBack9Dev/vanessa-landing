export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1120px] items-center gap-12 px-8 pb-16 pt-12 md:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-lavender">
          CREATIVA · AUDIO · IMAGEN
        </p>
        <h1 className="mb-[18px] font-display text-[clamp(40px,5vw,56px)] font-semibold leading-[1.12] tracking-[-0.01em]">
          Tu proyecto, con voz,
          <br />
          ritmo y dirección.
        </h1>
        <p className="mb-7 max-w-[420px] text-base text-muted">
          Voces en off, edición de video y asesoría creativa para marcas y productores.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-full bg-lavender px-[22px] py-3 text-sm font-semibold text-bg"
            href="#servicios"
          >
            Ver precios
          </a>
          <a
            className="rounded-full border border-lavender-deep px-[22px] py-3 text-sm font-medium text-lavender"
            href="#trabajo"
          >
            Trabajos
          </a>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-bg-2 shadow-[0_0_0_1px_rgba(196,181,224,0.18),0_24px_60px_rgba(0,0,0,0.45)]">
        <img
          src="/photos/05-112753-2.jpeg"
          alt="Vanessa en producción"
          className="block h-full w-full object-cover object-[center_30%]"
        />
      </div>
    </section>
  )
}
