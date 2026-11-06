/**
 * Pani Chaiyo — Kathmandu Distribution Platform Engine
 * 100% Self-Contained JavaScript
 */

const KATHMANDU_ZONES = [
  {
    id: "ktm-north",
    name: "Central & North",
    hub: "Central Route Belt",
    places: [
      "Baluwatar",
      "Maharajgunj",
      "Lazimpat",
      "Thamel",
      "Panipokhari",
      "Samakhusi",
      "Budhanilkantha",
      "Naxal",
      "Dhumbarahi",
      "Tokha",
    ],
  },
  {
    id: "ktm-east",
    name: "East & Airport",
    hub: "East Ring Corridor",
    places: [
      "New Baneshwor",
      "Old Baneshwor",
      "Koteshwor",
      "Tinkune",
      "Sinamangal",
      "Maitighar",
      "Gaushala",
      "Chabahil",
      "Bouddha",
      "Jorpati",
    ],
  },
  {
    id: "ktm-west",
    name: "West & Ring Road",
    hub: "West Transit Belt",
    places: [
      "Kalanki",
      "Swoyambhu",
      "Sitapaila",
      "Balaju",
      "Gongabu",
      "Machhapokhari",
      "Kalimati",
      "Kuleshwor",
      "Balkhu",
      "Bafal",
    ],
  },
  {
    id: "ktm-south",
    name: "South & Heritage",
    hub: "Heritage & South Route",
    places: [
      "Tripureshwor",
      "Basantapur",
      "Teku",
      "Ason",
      "New Road",
      "Sundhara",
      "Babarmahal",
      "Minbhawan",
      "Anamnagar",
      "Shankhamul",
    ],
  },
]

let activeZoneTab = "all"
let searchQuery = ""

document.addEventListener("DOMContentLoaded", () => {
  renderLaunchAreas()
  initEventListeners()
})

function renderLaunchAreas() {
  const container = document.getElementById("zonesGrid")
  if (!container) return

  const filteredZones = KATHMANDU_ZONES.filter((zone) => {
    if (activeZoneTab !== "all" && zone.id !== activeZoneTab) return false
    return true
  })

  const html = filteredZones
    .map((zone) => {
      const placesToShow = searchQuery
        ? zone.places.filter((p) =>
            p.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : zone.places

      if (searchQuery && placesToShow.length === 0) return ""

      return `
      <div class="zone-box">
        <div>
          <h3 class="zone-title">${zone.name}</h3>
          <p class="zone-caption">
            <i class="fa-solid fa-location-dot" style="color: var(--color-primary); font-size: 0.65rem;"></i>
            <span>${zone.hub}</span>
          </p>

          <span style="font-size: 0.675rem; font-weight: 700; text-transform: uppercase; color: var(--color-slate-400); display: block; margin-bottom: 0.35rem;">
            Neighborhoods (${placesToShow.length})
          </span>

          <div class="places-list">
            ${placesToShow
              .map(
                (place) => `
              <span class="place-tag">
                <i class="fa-solid fa-check"></i>
                <span>${place}</span>
              </span>
            `,
              )
              .join("")}
          </div>
        </div>

        <div style="padding-top: 0.85rem; margin-top: 0.85rem; border-top: 1px solid var(--color-slate-100); display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.675rem; color: #047857; font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">
            <span style="width: 5px; height: 5px; border-radius: 50%; background: #10b981;"></span>
            <span>Launch Area</span>
          </span>
          <span style="font-size: 0.675rem; color: var(--color-slate-400); font-weight: 600;">Doorstep Hub</span>
        </div>
      </div>
    `
    })
    .filter(Boolean)
    .join("")

  if (!html) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2.5rem 1rem; text-align: center; background: var(--color-slate-50); border: 1px dashed var(--color-slate-300); border-radius: 1rem;">
        <p style="font-size: 0.875rem; font-weight: 700; color: var(--color-slate-700);">No Kathmandu neighborhood matches "${searchQuery}"</p>
        <p style="font-size: 0.75rem; color: var(--color-slate-400); margin-top: 0.25rem;">Try searching Baluwatar, Baneshwor, Thamel, Kalanki, or New Road.</p>
      </div>
    `
  } else {
    container.innerHTML = html
  }
}

function resetModalStateOnSubmit(modalId) {
  // 1. Blur active input to dismiss keyboard and cancel input focus
  if (
    document.activeElement &&
    typeof document.activeElement.blur === "function"
  ) {
    document.activeElement.blur()
  }

  // 2. Auto zoom-out mobile browser back to default viewport scale
  const viewportMeta = document.querySelector('meta[name="viewport"]')
  if (viewportMeta) {
    const originalContent = viewportMeta.content
    viewportMeta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0"
    setTimeout(() => {
      viewportMeta.content = originalContent
    }, 350)
  }

  // 3. Reset modal card scroll to top so full success view fits with zero scroll
  if (modalId) {
    const modal = document.getElementById(modalId)
    if (modal) {
      const card = modal.querySelector(".modal-card")
      if (card) card.scrollTop = 0
    }
  }
}

function openWaitlistModal() {
  const modal = document.getElementById("waitlistModal")
  const formView = document.getElementById("waitlistFormView")
  const successView = document.getElementById("waitlistSuccessView")

  if (formView) formView.style.display = "block"
  if (successView) successView.style.display = "none"

  const form = document.getElementById("customerWaitlistForm")
  if (form) form.reset()

  if (modal) {
    const card = modal.querySelector(".modal-card")
    if (card) card.scrollTop = 0
    modal.classList.add("open")
  }
}

function closeWaitlistModal() {
  const modal = document.getElementById("waitlistModal")
  if (modal) modal.classList.remove("open")
}

function handleWaitlistSubmit(e) {
  e.preventDefault()
  const phone = document.getElementById("customerPhone").value.trim()
  const email = document.getElementById("customerEmail").value.trim()

  // Validate 10-digit mobile
  if (!/^9[78]\d{8}$/.test(phone)) {
    alert(
      "Please enter a valid 10-digit Nepal mobile number (e.g. 98XXXXXXXX).",
    )
    return
  }

  const submission = {
    phone,
    email: email || null,
    registeredAt: new Date().toISOString(),
  }

  const list = JSON.parse(localStorage.getItem("pc_customer_waitlist") || "[]")
  list.push(submission)
  localStorage.setItem("pc_customer_waitlist", JSON.stringify(list))

  // Trigger mobile auto zoom-out, keyboard dismiss, and scroll reset
  resetModalStateOnSubmit("waitlistModal")

  // Show Full Modal Green Tick Success View with smooth transition
  const formView = document.getElementById("waitlistFormView")
  const successView = document.getElementById("waitlistSuccessView")
  const phoneDisplay = document.getElementById("registeredPhoneDisplay")

  if (phoneDisplay) phoneDisplay.textContent = phone
  if (formView) formView.style.display = "none"
  if (successView) successView.style.display = "block"
}

function initEventListeners() {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById("mobileToggle")
  const mobilePanel = document.getElementById("mobileNavPanel")
  if (toggleBtn && mobilePanel) {
    toggleBtn.addEventListener("click", () => {
      mobilePanel.classList.toggle("open")
    })
  }

  // Search input for launch locations
  const searchInput = document.getElementById("locationSearchInput")
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim()
      renderLaunchAreas()
    })
  }

  // Zone Tabs
  document.querySelectorAll(".tab-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".tab-pill")
        .forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
      activeZoneTab = btn.getAttribute("data-zone") || "all"
      renderLaunchAreas()
    })
  })

  // Customer Waitlist Form
  const form = document.getElementById("customerWaitlistForm")
  if (form) {
    form.addEventListener("submit", handleWaitlistSubmit)
  }

  // Partner Network Form
  const partnerForm = document.getElementById("partnerNetworkForm")
  if (partnerForm) {
    partnerForm.addEventListener("submit", handlePartnerSubmit)
  }

  // Modal Backdrop Clicks
  const modal = document.getElementById("waitlistModal")
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeWaitlistModal()
    })
  }

  const pModal = document.getElementById("partnerModal")
  if (pModal) {
    pModal.addEventListener("click", (e) => {
      if (e.target === pModal) closePartnerModal()
    })
  }

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeWaitlistModal()
      closePartnerModal()
    }
  })
}

function openPartnerModal() {
  const modal = document.getElementById("partnerModal")
  const formView = document.getElementById("partnerFormView")
  const successView = document.getElementById("partnerSuccessView")

  if (formView) formView.style.display = "block"
  if (successView) successView.style.display = "none"

  const form = document.getElementById("partnerNetworkForm")
  if (form) form.reset()

  if (modal) {
    const card = modal.querySelector(".modal-card")
    if (card) card.scrollTop = 0
    modal.classList.add("open")
  }
}

function closePartnerModal() {
  const modal = document.getElementById("partnerModal")
  if (modal) modal.classList.remove("open")
}

function handlePartnerSubmit(e) {
  e.preventDefault()
  const phone = document.getElementById("partnerPhone").value.trim()
  const email = document.getElementById("partnerEmail").value.trim()
  const location = document.getElementById("partnerLocation").value.trim()
  const message = document.getElementById("partnerMessage").value.trim()

  if (!/^9[78]\d{8}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number (e.g. 98XXXXXXXX).")
    return
  }

  const submission = {
    phone,
    email,
    location,
    message: message || null,
    submittedAt: new Date().toISOString(),
  }

  const list = JSON.parse(localStorage.getItem("pc_partner_inquiries") || "[]")
  list.push(submission)
  localStorage.setItem("pc_partner_inquiries", JSON.stringify(list))

  // Trigger mobile auto zoom-out, keyboard dismiss, and scroll reset
  resetModalStateOnSubmit("partnerModal")

  const formView = document.getElementById("partnerFormView")
  const successView = document.getElementById("partnerSuccessView")
  const phoneDisplay = document.getElementById("partnerPhoneDisplay")

  if (phoneDisplay) phoneDisplay.textContent = phone
  if (formView) formView.style.display = "none"
  if (successView) successView.style.display = "block"
}

// Dismiss Top Announcement Banner
function dismissTopBanner() {
  const bar = document.getElementById("topAnnouncementBar")
  if (bar) {
    bar.style.opacity = "0"
    bar.style.transform = "translateY(-100%)"
    setTimeout(() => {
      bar.style.display = "none"
    }, 200)
    try {
      sessionStorage.setItem("pc_banner_dismissed", "1")
    } catch (e) {}
  }
}

// Expose modal and banner handlers globally
window.dismissTopBanner = dismissTopBanner
window.openWaitlistModal = openWaitlistModal
window.closeWaitlistModal = closeWaitlistModal
window.openPartnerModal = openPartnerModal
window.closePartnerModal = closePartnerModal

// Check for dismissed banner on initial load
try {
  if (sessionStorage.getItem("pc_banner_dismissed") === "1") {
    const bar = document.getElementById("topAnnouncementBar")
    if (bar) bar.style.display = "none"
  }
} catch (e) {}
