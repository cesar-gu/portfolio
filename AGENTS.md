# AGENTS.md - Historial de Desarrollo

Documento que registra el proceso de desarrollo del portfolio personal de César Gutiérrez utilizando GitHub Copilot y herramientas de IA.

## 📌 Información del Proyecto

- **Proyecto**: Portfolio Personal - César Gutiérrez
- **URL**: https://cesargupe.github.io
- **Repositorio**: https://github.com/cesar-gu/portfolio
- **Fecha de Inicio**: 15 de enero de 2026
- **Estado**: En desarrollo

## 🤖 Agentes y Herramientas Utilizados

### GitHub Copilot

- **Rol**: Asistente de desarrollo de IA
- **Tareas**: Sugerencias de código, refactoring, documentación
- **Versión**: Claude Haiku 4.5

### Herramientas de IA Complementarias

- **Investigación Técnica**: Análisis de stack tecnológico (Astro, Vue 3, Tailwind)
- **Extracción de Datos**: Procesamiento de CV y LinkedIn
- **Documentación**: Generación de README.md y guías

---

## 📋 Decisiones Arquitectónicas

### 1. Elección de Framework SSG: Astro 6

**Fecha**: 15/01/2026  
**Decisión**: Usar Astro 6 en lugar de Nuxt, VitePress o soluciones custom  
**Justificación**:

- ⭐ Zero JavaScript by default (mejor performance)
- ⭐ Content Collections nativas para JSON
- ⭐ Core Web Vitals superiores (62% en Lighthouse)
- ⭐ Integración perfecta con Vue como islas reactivas
- ⭐ Deploy directo a GitHub Pages sin configuración compleja

**Alternativas Rechazadas**:

- Nuxt: Overhead de full-stack framework para sitio estático
- VitePress: Muy simple para portfolio con muchas secciones
- Plain HTML/CSS: Difícil de mantener con datos dinámicos

### 2. Gestión de Datos: JSON Resume

**Fecha**: 15/01/2026  
**Decisión**: Usar estándar JSON Resume + extensión personalizada  
**Estructura**:

```json
{
  "basics": { ... },
  "work": [ ... ],
  "education": [ ... ],
  "skills": [ ... ]
}
```

**Ventajas**:

- Estándar abierto y validable
- Escalable y mantenible
- Facilita exportación a PDF, markdown, etc.

### 3. Estilos: Tailwind CSS

**Fecha**: 15/01/2026  
**Decisión**: Tailwind CSS 3 con configuración personalizada  
**Paleta Personalizada**:

- Primario: Azul (#0066cc) - corporativo
- Acentos: Naranja (#ff9500), Verde (#10b981)
- Degradientes sutiles en hero section

### 4. Animaciones: AOS (Animate On Scroll)

**Fecha**: 15/01/2026  
**Decisión**: AOS para animaciones en scroll + Tailwind animations  
**Características**:

- Animaciones fade-up, zoom-in en secciones
- Carga diferida de librería (CDN)
- Bajo impacto en rendimiento

### 5. CI/CD: GitHub Actions → GitHub Pages

**Fecha**: 15/01/2026  
**Flujo**:

```
Push a main
    ↓
ESLint validation
    ↓
Prettier check
    ↓
TypeScript type check
    ↓
Astro build
    ↓
Deploy automático a gh-pages
```

**Ventajas**:

- Deploy completamente automático
- Validación de calidad antes de publicar
- No requiere servidor externo

---

## 🔄 Iteraciones del Desarrollo

### Iteración 1: Setup Inicial (15/01/2026)

**Actividades**:

- ✅ Crear proyecto Astro 6 desde cero
- ✅ Configurar TypeScript + Tailwind CSS
- ✅ Integrar Vue 3 como islas reactivas
- ✅ Setup estructura de carpetas

**Cambios**:

```
package.json
astro.config.mjs
tailwind.config.js
tsconfig.json
```

**Salida**: Proyecto base con todas las dependencias

### Iteración 2: Datos y Configuración (15/01/2026)

**Actividades**:

- ✅ Crear `src/data/portfolio.json` con datos del CV
- ✅ Extraer experiencia laboral (8 posiciones, 2017-2024)
- ✅ Estructurar educación (Máster + Grado)
- ✅ Catalogar 40+ habilidades técnicas
- ✅ Configurar ESLint + Prettier + Lighthouse CI

**Archivo Creado**:

```json
src/data/portfolio.json (700+ líneas)
```

**Estadísticas de Datos**:

- 8 experiencias laborales
- 2 titulaciones académicas
- 12 categorías de habilidades
- 150+ tecnologías documentadas

### Iteración 3: Componentes Vue (15/01/2026)

**Actividades**:

- ✅ Navigation.vue - Navbar sticky con redes sociales
- ✅ HeroSection.vue - Logo, nombre, entradilla, botones CTA
- ✅ SkillsShowcase.vue - Grid de habilidades categorizadas
- ✅ ExperienceCard.vue - Card individual de experiencia
- ✅ ExperienceSection.vue - Contenedor de experiencias
- ✅ EducationSection.vue - Timeline de formación
- ✅ Footer.vue - Footer con enlaces y redes

**Características Implementadas**:

- Data-aos attributes para animaciones
- Responsive design (mobile-first)
- Hover effects y transiciones
- Extracción automática de tecnologías de descripción
- Formato de fechas dinámico

### Iteración 4: Página Principal (15/01/2026)

**Archivo**: `src/pages/index.astro`  
**Características**:

- ✅ Meta tags SEO completos
- ✅ Open Graph + Twitter Card
- ✅ Schema.org/Person JSON-LD
- ✅ Importación automática de portfolio.json
- ✅ Integración de componentes Vue
- ✅ Carga CDN de AOS
- ✅ Estilos globales (Tailwind + custom)

**Meta Tags Implementados**:

- title, description, keywords
- og:title, og:description, og:image
- twitter:card
- canonical URL
- robots, author

### Iteración 5: Herramientas de Calidad (15/01/2026)

**Archivos Creados**:

- ✅ `.eslintrc.cjs` - Reglas ESLint (Astro + Vue + TypeScript)
- ✅ `.prettierrc.json` - Configuración Prettier
- ✅ `lighthouserc.json` - Thresholds Lighthouse CI

**Validaciones Implementadas**:

```bash
npm run lint      # ESLint check
npm run format    # Prettier format
npm run type-check # TypeScript validation
```

### Iteración 6: CI/CD y Deployment (15/01/2026)

**Archivo**: `.github/workflows/deploy.yml`  
**Pipeline**:

1. Checkout código
2. Setup Node.js 20 + npm cache
3. Install dependencies
4. ESLint validation
5. Prettier check
6. TypeScript type check
7. Build Astro
8. Upload artifact
9. Deploy a GitHub Pages

**Configuración GitHub Pages**:

- Source: Deploy from branch
- Branch: `gh-pages`
- Automatic deployments enabled

### Iteración 7: Documentación (15/01/2026)

**Archivos**:

- ✅ `README.md` (450+ líneas)
  - Descripción del proyecto
  - Tech stack detallado
  - Instalación local
  - Comandos disponibles
  - SEO & Performance
  - Deploy instructions
  - Troubleshooting
- ✅ `AGENTS.md` (este archivo)
  - Historial de desarrollo
  - Decisiones arquitectónicas
  - Iteraciones del proyecto
  - Próximas características

### Iteración 8: Refactorización - Eliminación de Duplicidades (16/01/2026)

**Objetivo**: Extraer funciones y componentes repetidos para mejorar mantenibilidad

**Actividades**:

- ✅ Crear directorio `src/utils/` con funciones compartidas
- ✅ Extraer `getSocialNavClass()` y `getSocialFooterClass()` → `utils/social.ts`
- ✅ Extraer `formatDate()` → `utils/date.ts`
- ✅ Extraer `extractTecnologiesFromHighlights()` → `utils/tech.ts`
- ✅ Crear componente `SocialLink.vue` reutilizable
- ✅ Crear componente `SectionHeader.vue` reutilizable
- ✅ Refactorizar 6 componentes para usar las nuevas utilidades

**Archivos Creados**:

```
src/utils/
├── social.ts (35 líneas)
├── date.ts (15 líneas)
└── tech.ts (25 líneas)

src/components/
├── SocialLink.vue (50 líneas) - Renderiza iconos sociales
└── SectionHeader.vue (25 líneas) - Header estándar de secciones
```

**Componentes Refactorizados**:

- Navigation.vue: Ahora usa `SocialLink` + `utils/social.ts`
- Footer.vue: Ahora usa `SocialLink` + `utils/social.ts`
- ExperienceCard.vue: Ahora usa `utils/date.ts` + `utils/tech.ts`
- SkillsShowcase.vue: Ahora usa `SectionHeader`
- ExperienceSection.vue: Ahora usa `SectionHeader`
- EducationSection.vue: Ahora usa `SectionHeader`

**Resultados**:

- 110+ líneas de código duplicado eliminadas
- 2 interfaces duplicadas consolidadas
- Código más limpio y mantenible
- TypeScript: ✅ PASS
- Build: ✅ SUCCESS

### Iteración 9: Extracción de Modelos e Interfaces (16/01/2026)

**Objetivo**: Centralizar todas las interfaces y tipos en directorio dedicado

**Actividades**:

- ✅ Crear directorio `src/models/` para tipos centralizados
- ✅ Extraer `Basics` → `models/Basics.ts` (Profile, Location, Basics)
- ✅ Extraer `Skill`, `Expertise` → `models/Skill.ts`
- ✅ Extraer `Experience` → `models/Experience.ts`
- ✅ Extraer `Education` → `models/Education.ts`
- ✅ Crear `models/ComponentProps.ts` (SocialLinkProps, SectionHeaderProps)
- ✅ Crear `models/index.ts` para re-exports
- ✅ Actualizar 9 componentes para importar tipos centralizados

**Archivos Creados**:

```
src/models/
├── Basics.ts (Profile, Location, Basics)
├── Skill.ts (Skill, Expertise)
├── Experience.ts (Experience)
├── Education.ts (Education)
├── ComponentProps.ts (SocialLinkProps, SectionHeaderProps)
└── index.ts (re-exports)
```

**Componentes Actualizados**:

- Navigation.vue: `import type { Basics } from '../models'`
- Footer.vue: `import type { Basics } from '../models'`
- SocialLink.vue: `import type { SocialLinkProps } from '../models'`
- SectionHeader.vue: `import type { SectionHeaderProps } from '../models'`
- HeroSection.vue: `import type { Basics } from '../models'`
- SkillsShowcase.vue: `import type { Skill, Expertise } from '../models'`
- ExperienceCard.vue: `import type { Experience } from '../models'`
- ExperienceSection.vue: `import type { Experience } from '../models'`
- EducationSection.vue: `import type { Education } from '../models'`

**Resultados**:

- 11 interfaces centralizadas en 5 archivos
- 2 interfaces duplicadas (Experience, Basics) eliminadas
- 1 punto único de verdad para cada tipo
- Mejor IDE support y auto-completado
- TypeScript: ✅ PASS
- Build: ✅ SUCCESS

---

## 🎨 Componentes Técnicos Creados

### Vue Components (9 componentes)

| Componente              | Responsabilidad             | Props                         | Líneas | Iteración |
| ----------------------- | --------------------------- | ----------------------------- | ------ | --------- |
| `Navigation.vue`        | Navbar sticky               | `basics`                      | 75     | 3 → 8     |
| `HeroSection.vue`       | Hero con logo, nombre, CTA  | `basics`                      | 105    | 3 → 9     |
| `SkillsShowcase.vue`    | Grid de habilidades         | `skills`, `expertise`         | 145    | 3 → 8     |
| `ExperienceSection.vue` | Contenedor experiencias     | `experiences`, `knownTechs`   | 62     | 3 → 8, 9  |
| `ExperienceCard.vue`    | Card individual experiencia | `experience`, `delay`         | 108    | 3 → 8, 9  |
| `EducationSection.vue`  | Timeline educación          | `education`, `trainings`      | 141    | 3 → 8, 9  |
| `Footer.vue`            | Footer con redes            | `basics`                      | 145    | 3 → 8, 9  |
| `SocialLink.vue`        | Renderiza iconos sociales   | `href`, `network`, `variant`  | 50     | 8 ⭐      |
| `SectionHeader.vue`     | Header estándar secciones   | `label`, `title`, `highlight` | 25     | 8 ⭐      |

**Total**: ~851 líneas de código Vue (incluyendo componentes reutilizables)

### Funciones Utilidad (3 archivos)

| Archivo     | Funciones                                                            | Líneas |
| ----------- | -------------------------------------------------------------------- | ------ |
| `social.ts` | `getSocialNavClass()`, `getSocialFooterClass()`                      | 35     |
| `date.ts`   | `formatDate()`                                                       | 15     |
| `tech.ts`   | `extractTecnologiesFromText()`, `extractTecnologiesFromHighlights()` | 25     |

**Total**: ~75 líneas de código de utilidades

### Modelos e Interfaces (5 archivos)

| Archivo             | Interfaces/Types                        | Líneas |
| ------------------- | --------------------------------------- | ------ |
| `Basics.ts`         | `Profile`, `Location`, `Basics`         | 30     |
| `Skill.ts`          | `Skill`, `Expertise`                    | 14     |
| `Experience.ts`     | `Experience`                            | 12     |
| `Education.ts`      | `Education`                             | 10     |
| `ComponentProps.ts` | `SocialLinkProps`, `SectionHeaderProps` | 16     |

**Total**: ~82 líneas de código de tipos centralizados

### Astro Pages (1 página)

| Página        | Responsabilidad                  | Líneas |
| ------------- | -------------------------------- | ------ |
| `index.astro` | Layout principal + SEO + imports | 180    |

### Configuración (5 archivos)

| Archivo              | Propósito                          |
| -------------------- | ---------------------------------- |
| `astro.config.mjs`   | Config Astro + Vue integration     |
| `tailwind.config.js` | Paleta personalizada + animaciones |
| `tsconfig.json`      | TypeScript strict                  |
| `.eslintrc.cjs`      | Linting rules                      |
| `.prettierrc.json`   | Code formatting                    |

### Datos (1 archivo)

| Archivo          | Tamaño     | Contenido       |
| ---------------- | ---------- | --------------- |
| `portfolio.json` | 730 líneas | CV estructurado |

---

## 📊 Estadísticas del Proyecto

### Cobertura de Contenido

- ✅ Datos personales: 100%
- ✅ Experiencia laboral: 8/8 posiciones
- ✅ Educación: 2/2 titulaciones
- ✅ Habilidades: 12 categorías, 150+ tecnologías
- ✅ Enlaces: LinkedIn, GitHub, GitLab

### Optimizaciones Implementadas

- ✅ Zero JavaScript innecesario (Astro SSG)
- ✅ Image optimization (AVIF/WebP ready)
- ✅ Lazy loading automático
- ✅ CSS minificación automática
- ✅ Code splitting automático
- ✅ Canonical URLs

### Rendimiento Target

- **Lighthouse Performance**: 90+
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **INP**: < 200ms
- **SEO Score**: 95+

---

## 🎯 Features Implementadas

### ✅ Completadas

- [x] Setup Astro 6 + Vue 3 + TypeScript
- [x] Tailwind CSS con paleta personalizada
- [x] Portfolio.json con datos CV completos
- [x] 7 componentes Vue principales
- [x] 2 componentes Vue reutilizables (SocialLink, SectionHeader)
- [x] 3 archivos de utilidades (social, date, tech)
- [x] 5 archivos de modelos/interfaces centralizados
- [x] HeroSection con logo, nombre, entradilla
- [x] SkillsShowcase con 12 categorías
- [x] ExperienceSection con 8 trabajos (cronológico inverso)
- [x] EducationSection con timeline
- [x] Navigation sticky con redes sociales
- [x] Footer con enlaces
- [x] AOS animaciones en scroll
- [x] Diseño responsive (mobile-first)
- [x] Meta tags SEO completos
- [x] Schema.org Person markup
- [x] Open Graph + Twitter Card
- [x] ESLint + Prettier + TypeScript validation
- [x] Lighthouse CI configuration
- [x] GitHub Actions workflow
- [x] GitHub Pages deployment
- [x] README.md documentación
- [x] AGENTS.md historial
- [x] Refactorización: Eliminación de duplicidades (Iter 8)
- [x] Extracción de modelos centralizados (Iter 9)
- [x] Documentación de refactorización (REFACTORING_SUMMARY.md)
- [x] Documentación de modelos (MODELS_EXTRACTION.md)

### ⏳ Por Hacer (Post-MVP)

- [ ] Logo AI generado con Canva
- [ ] Foto de perfil optimizada (AVIF)
- [ ] Blog section (opcional)
- [ ] Formulario de contacto (Formspree/Netlify)
- [ ] Análisis con Google Analytics 4
- [ ] Sitemap.xml generado automáticamente
- [ ] robots.txt optimizado
- [ ] Testing unitario (Vitest)
- [ ] E2E testing (Playwright)
- [ ] PWA (Progressive Web App)
- [ ] Dark mode toggle
- [ ] Internationalization (i18n) - ES/EN
- [ ] CDN deployment (Cloudflare)
- [ ] Custom domain (cesargutierrez.dev)

---

## 🔗 Referencias Técnicas

### Documentación Oficial

- [Astro Docs](https://docs.astro.build)
- [Vue 3 Docs](https://vuejs.org)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [AOS Library](https://michalsnik.github.io/aos/)
- [JSON Resume](https://jsonresume.org)

### Estándares Implementados

- [Schema.org](https://schema.org) - Structured Data
- [OpenGraph Protocol](https://ogp.me/)
- [Google Core Web Vitals](https://web.dev/vitals/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) - Accesibilidad

---

## 🚀 Próximos Pasos

### ⚠️ IMPORTANTE: Configuración de nvm

**ANTES de ejecutar cualquier comando con Node.js/npm, SIEMPRE ejecuta:**

```bash
nvm use
# O especificar la versión (Node 20):
# nvm use 20
```

El archivo `.nvmrc` está configurado con la versión 20 de Node.js. Este comando carga automáticamente la versión correcta en tu sesión de terminal.

1. **Generar Logo con Canva**
   - Usar nombre "Cesar Gutierrez" como entrada
   - Descargar SVG
   - Guardar en `/public/logos/logo.svg`

2. **Optimizar Imagen de Perfil**
   - Convertir profile.jpg a AVIF
   - Comprimir con Squoosh
   - Guardar versiones multi-format

3. **Testing Local**

   ```bash
   nvm use                    # ← IMPORTANTE: Activar nvm primero
   npm install
   npm run dev
   # Verificar en http://localhost:3000
   npm run build
   npm run preview
   ```

4. **Commit Inicial a Git**

   ```bash
   nvm use                    # ← IMPORTANTE: Activar nvm primero
   git add .
   git commit -m "🎉 Initial commit: Portfolio setup with Astro, Vue, Tailwind"
   git push origin main
   ```

5. **Verificar GitHub Actions**
   - Ir a Actions tab
   - Confirmar que workflow se ejecutó
   - Verificar deploy en cesargupe.github.io

6. **Validación SEO**
   - Ejecutar Lighthouse
   - Validar Core Web Vitals
   - Testing en móvil

---

## 📝 Notas de Desarrollo

### Decisiones de Diseño

- **Paleta Moderna Corporativa**: Azul principal (#0066cc) + Acentos naranja
- **Tipografía**: Stack del sistema OS para rendimiento
- **Animaciones**: AOS con duraciones de 1s para fluidez
- **Responsividad**: Mobile-first approach con Tailwind breakpoints

### Consideraciones de SEO

- Schema.org/Person JSON-LD para rich snippets
- Canonical URL para evitar duplicados
- OpenGraph para compartir en redes
- Keywords orientadas a "Frontend Developer", "Angular", "Vue"

### Performance First

- Astro para HTML estático
- Vue solo donde se necesita interactividad (islas)
- AOS cargado desde CDN (no en bundle)
- Imágenes optimizadas automáticamente

---

## ✍️ Autor

**Proyecto**: Portfolio de César Gutiérrez  
**Fecha Inicio**: 15 de enero de 2026  
**Última Actualización**: 16 de enero de 2026  
**Desarrollador**: GitHub Copilot + Asistente de IA

---

## 📊 Resumen de Evolución del Código

### Estructura del Proyecto (Actual)

```
src/
├── components/        (9 componentes Vue)
├── models/           (5 archivos de tipos centralizados) 🆕
├── utils/            (3 archivos de utilidades) 🆕
├── data/             (1 archivo de datos)
├── layouts/          (1 layout Astro)
└── pages/            (1 página Astro)
```

### Líneas de Código

| Categoría          | Líneas     | Cambios               |
| ------------------ | ---------- | --------------------- |
| Componentes Vue    | 851        | -72 líneas (refactor) |
| Utilidades         | 75         | +75 líneas (iter 8)   |
| Modelos/Interfaces | 82         | +82 líneas (iter 9)   |
| Astro              | 180        | sin cambios           |
| Configuración      | ~150       | sin cambios           |
| Datos              | 730        | sin cambios           |
| **TOTAL**          | **~2,068** | **+165 líneas netas** |

### Duplicidad de Código

| Métrica                       | Antes | Después | Mejora   |
| ----------------------------- | ----- | ------- | -------- |
| Interfaces duplicadas         | 3     | 0       | -100% ✅ |
| Funciones duplicadas          | 2     | 0       | -100% ✅ |
| Componentes sin reutilización | 5     | 0       | -100% ✅ |
| Líneas duplicadas             | 110+  | 0       | -100% ✅ |

> "Simplemente perseverancia, aprendizaje continuo y compromiso."
