import { WA_URL } from '@/lib/constants'

const links = [
  { href: '#trabajo', label: 'Trabajo' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  return (
    <header className="mx-auto flex max-w-[1120px] items-center justify-between px-8 py-[22px]">
      <div className="font-display text-[22px] font-semibold tracking-[0.12em]">
        VANESSA
      </div>
      <nav className="hidden gap-7 text-[13px] font-medium text-muted md:flex">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-text">
            {l.label}
          </a>
        ))}
      </nav>
      <a
        className="rounded-full bg-lavender px-[18px] py-2.5 text-[13px] font-semibold text-bg"
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </header>
  )
}
