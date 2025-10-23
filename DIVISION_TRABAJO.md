# División de Trabajo - Estructura X Landing Page

## 📋 Estructura del Proyecto

\`\`\`
estructura-x/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad JavaScript
├── README.md           # Documentación del proyecto
└── DIVISION_TRABAJO.md # Este archivo
\`\`\`

## 👨‍💻 DESARROLLADOR 1 - Frontend Structure & Design

### Archivos Asignados:
- ✅ `index.html` - Estructura HTML completa
- ✅ `styles.css` - Todos los estilos CSS
- ✅ `README.md` - Documentación

### Responsabilidades:
1. **HTML (index.html)**
   - Estructura semántica de todas las secciones
   - Header con navegación
   - Hero section con imagen
   - Sección de bienvenida
   - Sección de servicios
   - Testimonios
   - Precios
   - Noticias
   - Footer con enlaces y redes sociales
   - Modales de formularios

2. **CSS (styles.css)**
   - Sistema de colores y variables CSS
   - Diseño responsivo (mobile-first)
   - Animaciones y transiciones
   - Estilos de componentes (cards, buttons, forms)
   - Media queries para diferentes dispositivos
   - Estilos de modales y formularios

3. **Documentación (README.md)**
   - Instrucciones de instalación
   - Descripción del proyecto
   - Estructura de archivos

### Comandos Git:
\`\`\`bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Crear rama de trabajo
git checkout -b dev1-html-css

# Añadir archivos
git add index.html styles.css README.md

# Commit
git commit -m "feat: estructura HTML y estilos CSS completos"

# Push
git push origin dev1-html-css
\`\`\`

---

## 👨‍💻 DESARROLLADOR 2 - JavaScript & Interactivity

### Archivos Asignados:
- ✅ `script.js` - Toda la funcionalidad JavaScript
- ✅ `DIVISION_TRABAJO.md` - Documentación de división de trabajo

### Responsabilidades:
1. **JavaScript (script.js)**
   - Navegación suave (smooth scrolling)
   - Menú móvil interactivo
   - Carruseles de servicios y testimonios
   - Efectos parallax en hero section
   - Animaciones al hacer scroll (Intersection Observer)
   - Funcionalidad de modales (abrir/cerrar)
   - Validación de formularios
   - Manejo de eventos de formularios
   - Efectos de hover y clicks
   - Lazy loading de imágenes

2. **Funcionalidades Específicas:**
   - `openContactForm()` - Abrir formulario de contacto
   - `closeContactForm()` - Cerrar formulario de contacto
   - `openQuoteForm()` - Abrir formulario de cotización
   - `closeQuoteForm()` - Cerrar formulario de cotización
   - `handleContactSubmit()` - Procesar envío de contacto
   - `handleQuoteSubmit()` - Procesar envío de cotización
   - Carruseles interactivos
   - Animaciones de scroll

### Comandos Git:
\`\`\`bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Crear rama de trabajo
git checkout -b dev2-javascript

# Añadir archivos
git add script.js DIVISION_TRABAJO.md

# Commit
git commit -m "feat: funcionalidad JavaScript e interactividad completa"

# Push
git push origin dev2-javascript
\`\`\`

---

## 🔄 Flujo de Trabajo Colaborativo

### 1. Configuración Inicial
\`\`\`bash
# Ambos desarrolladores clonan el repo
git clone [URL_DEL_REPOSITORIO]
cd estructura-x
\`\`\`

### 2. Trabajo en Paralelo
- **Dev 1**: Trabaja en `dev1-html-css` branch
- **Dev 2**: Trabaja en `dev2-javascript` branch

### 3. Integración
\`\`\`bash
# Dev 1 hace merge primero
git checkout main
git merge dev1-html-css

# Dev 2 actualiza su rama y hace merge
git checkout dev2-javascript
git pull origin main
git checkout main
git merge dev2-javascript
\`\`\`

### 4. Resolución de Conflictos
Si hay conflictos (poco probable con esta división):
\`\`\`bash
git status  # Ver archivos en conflicto
# Editar archivos manualmente
git add .
git commit -m "fix: resolver conflictos de merge"
\`\`\`

---

## 📦 Características Implementadas

### ✅ Funcionalidades Completas:
- Navegación suave entre secciones
- Menú móvil responsive
- Formulario de contacto funcional
- Formulario de cotización con teléfono colombiano
- Enlaces de redes sociales funcionales
- Precios en pesos colombianos (COP)
- Imágenes con placeholders descriptivos
- Animaciones y efectos visuales
- Diseño 100% responsivo
- Modales interactivos

### 🎨 Secciones:
1. Header con navegación
2. Hero section con CTA
3. Bienvenida con características
4. Servicios (3 cards)
5. Testimonios de clientes
6. Planes y precios
7. Noticias y proyectos
8. CTA final
9. Footer completo

---

## 📞 Información de Contacto en el Sitio

- **Teléfono**: +57 (1) 234-5678
- **WhatsApp**: +57 300 123 4567
- **Email**: info@estructurax.com
- **Dirección**: Calle 100 #15-20, Bogotá, Colombia

---

## 🚀 Despliegue

### Opción 1: GitHub Pages
\`\`\`bash
# En la configuración del repositorio
Settings > Pages > Source: main branch
\`\`\`

### Opción 2: Netlify
1. Conectar repositorio de GitHub
2. Deploy automático

### Opción 3: Vercel
1. Importar proyecto desde GitHub
2. Deploy automático

---

## ✅ Checklist de Tareas

### Desarrollador 1:
- [ ] Crear estructura HTML completa
- [ ] Implementar todos los estilos CSS
- [ ] Asegurar diseño responsivo
- [ ] Documentar en README.md
- [ ] Hacer commit y push

### Desarrollador 2:
- [ ] Implementar navegación suave
- [ ] Crear funcionalidad de modales
- [ ] Programar formularios
- [ ] Añadir animaciones JavaScript
- [ ] Hacer commit y push

### Ambos:
- [ ] Revisar código del otro
- [ ] Probar en diferentes navegadores
- [ ] Verificar responsive en móviles
- [ ] Hacer merge a main
- [ ] Desplegar sitio

---

## 📝 Notas Importantes

1. **No hay dependencias externas** excepto Font Awesome (CDN)
2. **Todo funciona offline** una vez cargado
3. **Sin backend** - formularios muestran alertas (conectar a backend real después)
4. **Imágenes placeholder** - reemplazar con imágenes reales del proyecto
5. **Números de teléfono** - actualizar con números reales de la empresa

---

¡Buena suerte con el desarrollo! 🚀
