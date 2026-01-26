# Portfolio Personal - César Gutiérrez

[![Deploy to GitHub Pages](https://github.com/cesar-gu/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/cesar-gu/portfolio/actions/workflows/deploy.yml)
[![Lighthouse CI](https://img.shields.io/badge/Lighthouse-Performance-brightgreen)]()

> Sitio web personal estático de alto rendimiento con Astro, Vue 3 y Tailwind CSS.

**[🌐 Ver sitio en vivo](https://cesar-gu.github.io/portfolio)**

## 📋 Descripción

Portfolio profesional que muestra:

- 🎯 Información personal y profesional
- 💼 Experiencia laboral (años en desarrollo Frontend)
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
│   ├── components/          # Componentes Vue reutilizables (9 componentes)
│   │   ├── Navigation.vue
│   │   ├── HeroSection.vue
│   │   ├── SkillsShowcase.vue
│   │   ├── ExperienceSection.vue
│   │   ├── ExperienceCard.vue
│   │   ├── EducationSection.vue
│   │   ├── Footer.vue
│   │   ├── SocialLink.vue      # Componente reutilizable
│   │   ├── SectionHeader.vue   # Componente reutilizable
│   │   └── Card.vue
│   ├── models/              # Tipos e interfaces centralizadas
│   │   ├── Basics.ts        # Profile, Location, Basics
│   │   ├── Skill.ts         # Skill, Expertise
│   │   ├── Experience.ts    # Experience
│   │   ├── Education.ts     # Education
│   │   ├── ComponentProps.ts # SocialLinkProps, SectionHeaderProps
│   │   └── index.ts         # Re-exports
│   ├── utils/               # Funciones compartidas
│   │   ├── social.ts        # getSocialNavClass(), getSocialFooterClass()
│   │   ├── date.ts          # formatDate()
│   │   └── tech.ts          # extractTecnologiesFromText(), etc.
│   ├── data/
│   │   └── portfolio.json   # Datos del CV en JSON Resume (730+ líneas)
│   ├── pages/
│   │   └── index.astro      # Página principal
├── public/
│   ├── images/
│   │   └── profile.jpg      # Foto de perfil
│   ├── logos/
│   │   └── logo.svg         # Logo generado con IA
│   ├── docs/                # Documentación
│   ├── robots.txt           # SEO robots
│   └── favicon.svg
├── .github/workflows/
│   └── deploy.yml           # CI/CD para deploy automático
├── astro.config.mjs         # Configuración Astro
├── tailwind.config.js       # Configuración Tailwind CSS
├── tsconfig.json            # Configuración TypeScript
├── .eslintrc.cjs            # Configuración ESLint
├── .prettierrc.json         # Configuración Prettier
├── postcss.config.js        # Configuración PostCSS
├── lighthouserc.json        # Configuración Lighthouse CI
├── AGENTS.md                # Historial de desarrollo
└── README.md                # Este archivo
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

- Node.js 22+ (ver `.nvmrc`)
- npm 10+

### ⚠️ IMPORTANTE: Usar nvm

**ANTES de ejecutar cualquier comando con Node.js/npm, SIEMPRE ejecuta:**

```bash
nvm use
# O especificar la versión:
# nvm use 22
```

El archivo `.nvmrc` está configurado con Node.js 22. Este comando carga automáticamente la versión correcta.

### Pasos

1. **Clonar repositorio**

   ```bash
   git clone https://github.com/cesar-gu/portfolio.git
   cd portfolio
   ```

2. **Activar nvm y instalar dependencias**

   ```bash
   nvm use
   npm install
   ```

3. **Ejecutar servidor de desarrollo**

   ```bash
   npm run dev
   ```

   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

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
- **Lighthouse Performance Score**: 90+ ✅

### Estadísticas del Proyecto

**Contenido**:

- ✅ 8 experiencias laborales (2017-2024)
- ✅ 2 titulaciones académicas
- ✅ 12 categorías de habilidades
- ✅ 150+ tecnologías documentadas
- ✅ Redes sociales (LinkedIn, GitHub, GitLab)

**Código**:

- 9 componentes Vue (~851 líneas)
- 3 archivos de utilidades (~75 líneas)
- 5 archivos de modelos/tipos (~82 líneas)
- Total: ~2,068 líneas de código
- Duplicidad de código: 0% ✅

## 📥 Actualizar Datos del CV

El contenido se extrae automáticamente de `src/data/portfolio.json`. Para actualizar información:

1. **Editar `src/data/portfolio.json`**

   ```json
   {
     "basics": {
       "name": "Tu nombre",
       "label": "Tu profesión",
       "image": "/images/profile.jpg",
       "email": "tu@email.com",
       "phone": "+34 xxx xxx xxx",
       "url": "https://tudominio.com",
       "summary": "Resumen profesional",
       "location": {
         "address": "Ciudad",
         "postalCode": "28001",
         "countryCode": "ES",
         "country": "España"
       },
       "profiles": [
         {
           "network": "LinkedIn",
           "username": "tu-usuario",
           "url": "https://linkedin.com/in/tu-usuario"
         }
       ]
     },
     "work": [
       {
         "name": "Empresa",
         "position": "Cargo",
         "startDate": "2020-01-01",
         "endDate": "2024-12-31",
         "summary": "Descripción del rol",
         "highlights": ["Logro 1", "Logro 2"]
       }
     ],
     "education": [
       {
         "institution": "Universidad",
         "studyType": "Máster",
         "area": "Ingeniería Informática",
         "startDate": "2018-09-01",
         "endDate": "2020-06-30"
       }
     ],
     "skills": [
       {
         "name": "Frontend",
         "level": "expert",
         "keywords": ["Vue", "React", "Angular"]
       }
     ]
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
  primary: '#0066cc',        // Azul corporativo
  accent: {
    orange: '#ff9500',       // Naranja
    green: '#10b981'         // Verde
  }
}
```

### Tipografía

- Font family: Sistema predeterminado del SO (San Francisco, Segoe UI, Roboto)
- Ajustar en `tailwind.config.js` sección `fontFamily`

### Logo

- Reemplazar `/public/logos/logo.svg` con tu logo
- Soporta SVG o PNG
- Tamaño recomendado: 120x40px

### Foto de Perfil

- Reemplazar `/public/images/profile.jpg`
- Dimensión recomendada: 400x400px
- Formatos soportados: JPG, PNG (se convierten a AVIF/WebP automáticamente)

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

### "nvm: command not found"

```bash
# Instalar nvm (si no está instalado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Recargar shell
source ~/.bashrc  # o ~/.zshrc según tu shell
```

### Build falla

```bash
nvm use                    # ← IMPORTANTE: Activar nvm primero
npm clean-install          # Limpia node_modules y reinstala
npm run build              # Intenta build de nuevo
```

### Lighthouse score bajo

- Comprimir imágenes: Usar [Squoosh](https://squoosh.app)
- Reducir tamaño de bundle: `npm run build -- --verbose`
- Revisar tiempos de carga en DevTools

### Animaciones no funcionan

- Verificar AOS se cargó correctamente: DevTools → Console → `window.AOS`
- Revisar atributos `data-aos` en componentes Vue
- Limpiar cache: `npm run build && npm run preview`

## 📄 Licencia

Este proyecto es de código abierto y disponible bajo la licencia [MIT](LICENSE).

## 📧 Contacto

- **Email**: cesargupe95@gmail.com
- **LinkedIn**: [cesargupe](https://www.linkedin.com/in/cesargupe/)
- **GitHub**: [cesar-gu](https://github.com/cesar-gu)
- **GitLab**: [cesargupe](https://gitlab.com/cesargupe)

---

**Hecho con ❤️ por César Gutiérrez**

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 📚 Documentación Adicional

- **[AGENTS.md](AGENTS.md)** - Historial completo de desarrollo, decisiones arquitectónicas e iteraciones
- **[JSON Resume Schema](https://jsonresume.org/schema/)** - Especificación de formato de datos
- **[Astro Docs](https://docs.astro.build)** - Documentación oficial
- **[Vue 3 Docs](https://vuejs.org)** - Documentación oficial

## ⚡ Optimizaciones Implementadas

✅ **Refactorización Iteración 8**: Eliminación de 110+ líneas duplicadas

- Funciones compartidas en `utils/`
- Componentes reutilizables (SocialLink, SectionHeader)
- Interfaces consolidadas

✅ **Refactorización Iteración 9**: Extracción de tipos centralizados

- 11 interfaces en un punto único de verdad
- Mejor IDE support y auto-completado
- Mantenibilidad mejorada

✅ **Zero Duplicity**: 0% de código duplicado

- TypeScript: ✅ PASS
- ESLint: ✅ PASS
- Build: ✅ SUCCESS

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
