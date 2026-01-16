# Portfolio Personal - César Gutiérrez

[![Deploy to GitHub Pages](https://github.com/cesar-gu/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/cesar-gu/portfolio/actions/workflows/deploy.yml)
[![Lighthouse CI](https://img.shields.io/badge/Lighthouse-Performance-brightgreen)]()

> Sitio web personal estático de alto rendimiento con Astro, Vue 3 y Tailwind CSS.

**[🌐 Ver sitio en vivo](https://cesargupe.github.io)**

## 📋 Descripción

Portfolio profesional que muestra:

- 🎯 Información personal y profesional
- 💼 Experiencia laboral (10+ años en desarrollo Frontend)
- 🎓 Formación académica (Máster + Grado en Ingeniería Informática)
- 🛠️ 40+ habilidades técnicas categorizadas
- 📱 Diseño responsive con paleta moderna corporativa
- ✨ Animaciones suaves en scroll con AOS
- 🚀 Optimizado para SEO con Schema.org markup
- ⚡ Core Web Vitals optimizados (Lighthouse 90+)

## 🏗️ Estructura de Proyecto

```
portfolio/
├── src/
│   ├── components/          # Componentes Vue reutilizables
│   │   ├── Navigation.vue
│   │   ├── HeroSection.vue
│   │   ├── SkillsShowcase.vue
│   │   ├── ExperienceSection.vue
│   │   ├── ExperienceCard.vue
│   │   ├── EducationSection.vue
│   │   └── Footer.vue
│   ├── data/
│   │   └── portfolio.json   # Datos del CV en JSON Resume
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/              # Estilos globales
├── public/
│   ├── images/
│   │   └── profile.jpg      # Foto de perfil
│   ├── logos/
│   │   └── logo.svg         # Logo generado con IA
│   └── favicon.svg
├── .github/workflows/
│   └── deploy.yml           # CI/CD para deploy automático
├── astro.config.mjs         # Configuración Astro
├── tailwind.config.js       # Configuración Tailwind CSS
├── tsconfig.json            # Configuración TypeScript
├── .eslintrc.cjs            # Configuración ESLint
├── .prettierrc.json         # Configuración Prettier
└── lighthouserc.json        # Configuración Lighthouse CI
```

## 🛠️ Tech Stack

### Framework & UI

- **[Astro 5](https://astro.build)** - SSG (Static Site Generator)
- **[Vue 3](https://vuejs.org)** - Componentes interactivos (islas)
- **[TypeScript](https://www.typescriptlang.org)** - Type safety

### Estilos & Animaciones

- **[Tailwind CSS 3](https://tailwindcss.com)** - Utilidad-first CSS
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** - Animaciones en scroll

### Calidad de Código

- **[ESLint](https://eslint.org)** - Linting (reglas Vue 3 + TypeScript)
- **[Prettier](https://prettier.io)** - Code formatting
- **[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)** - Validación de Core Web Vitals

### CI/CD

- **[GitHub Actions](https://github.com/features/actions)** - Deploy automático a GitHub Pages
- **[GitHub Pages](https://pages.github.com)** - Hosting estático

### Data Format

- **[JSON Resume](https://jsonresume.org)** - Estándar abierto para CV en JSON

## 🚀 Instalación Local

### Requisitos

- Node.js 18+
- npm 9+

### Pasos

1. **Clonar repositorio**

   ```bash
   git clone https://github.com/cesar-gu/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo**

   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Build para producción**

   ```bash
   npm run build
   ```

   Los archivos estáticos se generarán en carpeta `dist/`.

5. **Previsualizar build**
   ```bash
   npm run preview
   ```

## 📝 Comandos Disponibles

| Comando              | Descripción                                  |
| -------------------- | -------------------------------------------- |
| `npm run dev`        | Inicia servidor de desarrollo con hot reload |
| `npm run build`      | Construye sitio estático para producción     |
| `npm run preview`    | Previsualiza build estático localmente       |
| `npm run lint`       | Valida código con ESLint                     |
| `npm run format`     | Formatea código con Prettier                 |
| `npm run type-check` | Valida tipos TypeScript                      |

## 📊 SEO & Performance

### Meta Tags Automáticos

- Title dinámico
- Meta description
- Keywords
- Open Graph (og:title, og:description, og:image)
- Twitter Card
- Canonical URL

### Schema.org Markup

- `Person` schema con:
  - Nombre, profesión, imagen
  - Email, teléfono
  - URLs de redes sociales
  - Ubicación

### Core Web Vitals Target

- **LCP** (Largest Contentful Paint): < 2.5s ✅
- **CLS** (Cumulative Layout Shift): < 0.1 ✅
- **INP** (Interaction to Next Paint): < 200ms ✅

## 📥 Actualizar Datos del CV

El contenido se extrae automáticamente de `src/data/portfolio.json`. Para actualizar información:

1. **Editar `src/data/portfolio.json`**

   ```json
   {
     "basics": { ... },
     "work": [ ... ],
     "education": [ ... ],
     "skills": [ ... ]
   }
   ```

2. **Commit y push**

   ```bash
   git add src/data/portfolio.json
   git commit -m "Update portfolio data"
   git push origin main
   ```

3. **Deploy automático** - GitHub Actions construirá y desplegará automáticamente.

## 🎨 Personalización

### Paleta de Colores

Editar en `tailwind.config.js`:

```js
colors: {
  primary: { ... },      // Azul corporativo
  accent: {
    orange: '#ff9500',   // Naranjo
    green: '#10b981'     // Verde
  }
}
```

### Tipografía

- Font family: Sistema predeterminado del SO
- Ajustar en `src/pages/index.astro` section `<style>`

### Logo

- Reemplazar `/public/logos/logo.svg` con tu logo generado con IA
- Soporta SVG o PNG

### Foto de Perfil

- Reemplazar `/public/images/profile.jpg`
- Dimensión recomendada: 400x400px
- Compresión automática a AVIF/WebP en build

## 🚢 Deploy en GitHub Pages

El proyecto está configurado para deploy automático con GitHub Actions:

1. **Push a rama `main`** activa GitHub Actions
2. **Workflow `deploy.yml`**:
   - ✅ Valida código (ESLint, Prettier)
   - ✅ Construye proyecto (Astro)
   - ✅ Corre Lighthouse CI
   - ✅ Deploy automático a GitHub Pages

3. **Configurar en GitHub** (una única vez):
   - Settings → Pages
   - Source: **GitHub Actions**
   - Haz clic en **Save**

## 🔧 Troubleshooting

### Build falla

```bash
npm clean-install  # Limpia node_modules y reinstala
npm run build      # Intenta build de nuevo
```

### Lighthouse score bajo

- Comprimir imágenes: Usar [Squoosh](https://squoosh.app)
- Reducir tamaño de bundle: `npm run build --verbose`
- Revisar tiempos de carga en DevTools

### Animaciones no funcionan

- Verificar AOS se cargó correctamente en DevTools console
- Revisar atributos `data-aos` en componentes Vue

## 📄 Licencia

Este proyecto es de código abierto y disponible bajo la licencia [MIT](LICENSE).

## 📧 Contacto

- **Email**: cesargupe95@gmail.com
- **Teléfono**: +34 671 844 950
- **LinkedIn**: [cesargupe](https://www.linkedin.com/in/cesargupe/)
- **GitHub**: [cesar-gu](https://github.com/cesar-gu)
- **GitLab**: [cesargupe](https://gitlab.com/cesargupe)

---

**Hecho con ❤️ por César Gutiérrez**

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
