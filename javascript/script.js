// Initialize
function handleResize() {
  // Placeholder for handleResize logic
}

function openContactForm() {
  const modal = document.getElementById("contactModal")
  modal.classList.add("active")
  modal.style.display = "flex"
  document.body.style.overflow = "hidden"
}

function closeContactForm() {
  const modal = document.getElementById("contactModal")
  modal.classList.remove("active")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

function openQuoteForm() {
  const modal = document.getElementById("quoteModal")
  modal.classList.add("active")
  modal.style.display = "flex"
  document.body.style.overflow = "hidden"
}

function closeQuoteForm() {
  const modal = document.getElementById("quoteModal")
  modal.classList.remove("active")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

window.onclick = (event) => {
  const contactModal = document.getElementById("contactModal")
  const quoteModal = document.getElementById("quoteModal")

  if (event.target === contactModal) {
    closeContactForm()
  }
  if (event.target === quoteModal) {
    closeQuoteForm()
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeContactForm()
    closeQuoteForm()
  }
})

function handleContactSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  console.log("[v0] Formulario de contacto enviado:", data)

  // Mostrar mensaje de éxito
  alert(
    "¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.\n\nDatos recibidos:\nNombre: " +
      data.name +
      "\nEmail: " +
      data.email +
      "\nTeléfono: " +
      data.phone,
  )

  // Limpiar formulario y cerrar modal
  event.target.reset()
  closeContactForm()
}

function handleQuoteSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData)

  console.log("[v0] Formulario de cotización enviado:", data)

  // Mostrar mensaje de éxito con información de contacto
  alert(
    "¡Solicitud de cotización recibida!\n\nNos pondremos en contacto contigo en las próximas 24 horas.\n\nTambién puedes llamarnos directamente:\n📞 +57 (1) 234-5678\n📱 WhatsApp: +57 300 123 4567",
  )

  // Limpiar formulario y cerrar modal
  event.target.reset()
  closeQuoteForm()
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Console message
console.log("%c¡Bienvenido a Estructura X!", "color: #FDB714; font-size: 20px; font-weight: bold;")
console.log("%cSitio desarrollado con HTML, CSS y JavaScript", "color: #1A2332; font-size: 14px;")
