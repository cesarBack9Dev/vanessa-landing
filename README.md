# Vanessa — Portfolio Landing

Sitio portfolio de Vanessa (audio, imagen y dirección creativa).  
Stack: **Vite + React 18 + TypeScript + Tailwind CSS v3**. Compatible con Lovable.

## Requisitos

- Node.js 18+ y npm

## Cómo correr en local

```bash
cd vanessa-landing
npm install
npm run dev
```

Abrí la URL que muestra Vite (por defecto `http://localhost:5173`).

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Previsualizar el build |

## Estructura

```
src/
  components/   Header, Hero, Services, Portfolio, Experience, Process, Contact, Footer, WhatsAppFloat
  lib/          constants (WhatsApp)
  App.tsx
  index.css     Tailwind directives
public/photos/  Imágenes del portfolio
```

Alias de path: `@/` → `src/`.

## Publicar en GitHub (más adelante)

Cuando quieras subir el repo a `https://github.com/cesarBack9Dev/vanessa-landing`:

```bash
cd vanessa-landing
git init
git add .
git commit -m "Initial commit: Vanessa portfolio landing"
git branch -M main
git remote add origin https://github.com/cesarBack9Dev/vanessa-landing.git
git push -u origin main
```

> No hagas push todavía si el remoto aún no está listo o si pediste mantenerlo local.

## Notas

- Idioma: español (`lang="es"`)
- WhatsApp: `https://wa.me/584248937296`
- Precios en USD (orientativos)
