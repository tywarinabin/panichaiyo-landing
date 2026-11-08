/**
 * Pani Chaiyo — Kathmandu Distribution Platform Engine
 * 100% Self-Contained JavaScript
 */

const KATHMANDU_ZONES = [
  {
    id: "ktm-north",
    name: "Central & North",
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

const LANGUAGE_COPY = {
  ne: {
    title: "पानी चाहियो — काठमाडौंमा पिउने पानी डेलिभरी",
    "banner.message": "काठमाडौंका ४० क्षेत्रमा सेवा सुरु गर्ने तयारीमा",
    "banner.helpline": "सहायता:",
    "language.label": "भाषा छान्नुहोस्",
    "nav.areas": "क्षेत्रहरू",
    "nav.offers": "हाम्रा सेवाहरू",
    "nav.how": "कसरी काम गर्छ",
    "nav.contact": "सम्पर्क",
    "nav.contactMobile": "सम्पर्क तथा सहयोग",
    "nav.toggle": "मेनु खोल्नुहोस् वा बन्द गर्नुहोस्",
    "banner.close": "सूचना बन्द गर्नुहोस्",
    "waitlist.join": "जानकारी पाउनुहोस्",
    "waitlist.joinMobile": "जानकारी पाउनुहोस्",
    "hero.eyebrow": "अनलाइन पिउने पानी डेलिभरी",
    "hero.title": "काठमाडौंका लागि पिउने पानी डेलिभरी सेवा",
    "hero.description": "घर होस् वा अफिस, २० लिटरको जार अब सजिलै मगाउनुहोस्। <span class=\"brand-wordmark hero-inline-brand\" aria-label=\"Pani Chaiyo\"><span class=\"logo-blue\">pani</span><span class=\"logo-red\">chaiyo</span></span> बाट अर्डर गर्नुहोस्, पानी सिधै तपाईंको घरसम्म।",
    "hero.offerAria": "२० लिटर जारको सुरुवाती मूल्य: ५० रुपैयाँ, ८० बाट घटाइएको",
    "hero.imageAlt": "पानी चाहियो २० लिटर शुद्ध पानीको जार",
    "hero.priceLabel": "२० लिटर जारको सुरुवाती मूल्य",
    "hero.notify": "सुरुवातको जानकारी पाउनुहोस्",
    "hero.explore": "सेवाहरू हेर्नुहोस्",
    "hero.metricAreas": "योजनामा रहेका क्षेत्र",
    "hero.metricSupport": "ग्राहक सहायता",
    "hero.metricOffers": "थप सेवाहरू",
    "hero.metricCountAreas": "४०",
    "hero.metricCountSupport": "२४ घण्टा",
    "hero.metricCountOffers": "छिट्टै",
    "hero.product": "२० लिटर शुद्ध पानीको जार",
    "common.comingSoon": "छिट्टै आउँदैछ",
    "areas.eyebrow": "योजनामा रहेको सेवा क्षेत्र",
    "areas.title": "काठमाडौंका ४ क्षेत्रमा ४० वटा योजनाबद्ध बस्ती",
    "areas.description": "यी क्षेत्रहरू भविष्यमा सेवा सुरु गर्ने योजनामा छन्। हाल यहाँ डेलिभरी उपलब्ध छैन। सुरुवातको जानकारीका लागि प्रतीक्षा सूचीमा नाम लेखाउनुहोस्।",
    "areas.searchPlaceholder": "क्षेत्र खोज्नुहोस्, जस्तै बालुवाटार",
    "areas.searchLabel": "योजनामा रहेका काठमाडौंका क्षेत्र खोज्नुहोस्",
    "areas.tabAll": "सबै क्षेत्र ({count})",
    "areas.tab.ktm-north": "मध्य र उत्तर ({count})",
    "areas.tab.ktm-east": "पूर्व र विमानस्थल ({count})",
    "areas.tab.ktm-west": "पश्चिम र रिङ रोड ({count})",
    "areas.tab.ktm-south": "दक्षिण र सम्पदा क्षेत्र ({count})",
    "areas.neighborhoods": "योजनाबद्ध बस्तीहरू ({count})",
    "areas.noResultsTitle": "“{query}” सँग मिल्ने काठमाडौंको बस्ती भेटिएन।",
    "areas.noResultsText": "बालुवाटार, बानेश्वर, थमेल, कलंकी वा न्युरोड खोज्नुहोस्।",
    "zone.ktm-north": "मध्य र उत्तर",
    "zone.ktm-east": "पूर्व र विमानस्थल",
    "zone.ktm-west": "पश्चिम र रिङ रोड",
    "zone.ktm-south": "दक्षिण र सम्पदा क्षेत्र",
    "offers.eyebrow": "हाम्रा सेवाहरू",
    "offers.title": "पानी मगाउन अब अझ सजिलो",
    "offers.description": "घर र व्यवसायका लागि उचित मूल्य, सहज अर्डर र भरपर्दो सहायता।",
    "offers.priceTitle": "उचित मूल्य",
    "offers.priceText": "सामान्य ₹८० पर्ने २० लिटरको जार अब ₹५० मा।",
    "offers.deliveryTitle": "₹५०० भन्दा माथिको अर्डरमा निःशुल्क डेलिभरी",
    "offers.deliveryText": "₹५०० भन्दा बढीको अर्डरमा डेलिभरी शुल्क लाग्दैन।",
    "offers.homeTitle": "ढोकामै सुविधा",
    "offers.homeText": "पिउने पानी तपाईंले चाहेको ठाउँमै पाउनुहोस्।",
    "offers.simpleTitle": "सजिलो अर्डर",
    "offers.simpleText": "आफूलाई चाहिएको पानी छानेर सजिलै अर्डर गर्नुहोस्।",
    "offers.flexibleTitle": "आफ्नो समयअनुसार अर्डर",
    "offers.flexibleText": "एकपटक, दैनिक, साप्ताहिक वा मासिक डेलिभरी रोज्नुहोस्।",
    "offers.hassleTitle": "झन्झट कम",
    "offers.hassleText": "पानी मिलाउन बारम्बार फोन गर्नुपर्ने झन्झट हटाउनुहोस्।",
    "offers.invoiceTitle": "व्यवसायका लागि बिल",
    "offers.invoiceText": "कार्यालयको हिसाबका लागि स्पष्ट बिल पाउनुहोस्।",
    "offers.recordsTitle": "दैनिक वा मासिक रेकर्ड",
    "offers.recordsText": "अर्डर र खर्चको विवरण सजिलै राख्नुहोस्।",
    "offers.supportTitle": "२४ घण्टा सहायता",
    "offers.supportText": "अर्डरसम्बन्धी सहयोगका लागि हाम्रो टोलीलाई सम्पर्क गर्नुहोस्।",
    "workflow.eyebrow": "सरल प्रक्रिया",
    "workflow.title": "अर्डर प्रक्रिया",
    "workflow.description": "पानी छान्नेदेखि घरमै पाउनेसम्मका तीन सजिला चरण।",
    "workflow.stage1": "चरण ०१",
    "workflow.title1": "अर्डर गर्नुहोस्",
    "workflow.text1": "घर वा कार्यालयका लागि २० लिटरको जार वा सिलबन्दी बोतल अर्डर गर्नुहोस्।",
    "workflow.stage2": "चरण ०२",
    "workflow.title2": "अर्डर तयार हुन्छ",
    "workflow.text2": "तपाईंको क्षेत्रमा डेलिभरीका लागि पानी तयार गरिन्छ।",
    "workflow.stage3": "चरण ०३",
    "workflow.title3": "घरमै डेलिभरी",
    "workflow.text3": "आफ्नो ढोकामै जार लिनुहोस् र उपलब्ध माध्यमबाट भुक्तानी गर्नुहोस्।",
    "contact.eyebrow": "ग्राहक सहायता",
    "contact.title": "हाम्रो सेवाबारे केही सोध्नुछ?",
    "contact.description": "अर्डर वा डेलिभरीबारे सहयोग चाहिन्छ? हाम्रो टोली तपाईंलाई मद्दत गर्न तयार छ।",
    "contact.phoneTitle": "फोन गर्नुहोस्",
    "contact.phoneHint": "सहयोगका लागि फोन गर्नुहोस्",
    "contact.hoursTitle": "सेवा समय",
    "contact.hoursValue": "बिहान ७ – बेलुका ८",
    "contact.hoursHint": "सोमबारदेखि आइतबारसम्म",
    "contact.emailTitle": "इमेल",
    "contact.emailHint": "२४ घण्टाभित्र जवाफ",
    "contact.address": "केन्द्रीय कार्यालय: वडा ४, बालुवाटार, काठमाडौं, नेपाल",
    "contact.addressShort": "वडा ४, बालुवाटार, काठमाडौं, नेपाल",
    "footer.description": "काठमाडौंका घरपरिवार र व्यवसायका लागि पिउने पानी डेलिभरी।",
    "footer.contactTitle": "सम्पर्क तथा ठेगाना",
    "footer.copyright": "© २०२६ पानी चाहियो नेपाल प्रा.लि. सर्वाधिकार सुरक्षित।",
    "footer.tagline": "काठमाडौं उपत्यकाको पिउने पानी डेलिभरी सेवा",
    "waitlist.title": "जानकारी पाउनुहोस्",
    "waitlist.subtitle": "काठमाडौंमा डेलिभरी सुरु हुँदा जानकारी पाउनुहोस्।",
    "waitlist.phone": "मोबाइल नम्बर",
    "waitlist.phonePlaceholder": "98XXXXXXXX",
    "waitlist.location": "डेलिभरी ठेगाना",
    "waitlist.locationPlaceholder": "टोल, सडक वा नजिकको चिनारी",
    "waitlist.email": "इमेल ठेगाना",
    "waitlist.optional": "(वैकल्पिक)",
    "waitlist.emailPlaceholder": "you@example.com",
    "waitlist.privacy": "अनावश्यक सन्देश पठाउँदैनौँ। सेवा सुरु भएपछि जानकारी दिन्छौँ।",
    "waitlist.successTitle": "तपाईंको नाम सूचीमा थपियो!",
    "waitlist.successPrefix": "दर्ता गर्नुभएकोमा धन्यवाद।",
    "waitlist.successNear": "ठेगाना:",
    "waitlist.successSuffix": "काठमाडौंमा डेलिभरी सुरु भएपछि जानकारी दिनेछौँ।",
    "waitlist.alert": "सुरुवातको सूचना",
    "waitlist.noSpam": "स्पाम सन्देश छैन",
    "waitlist.done": "हुन्छ, धन्यवाद",
    "modal.close": "झ्याल बन्द गर्नुहोस्",
    "validation.phone": "कृपया नेपालको मान्य १० अङ्कको मोबाइल नम्बर लेख्नुहोस् (जस्तै ९८XXXXXXXX)।",
  },
  en: {
    title: "Pani Chaiyo — Drinking Water Delivery in Kathmandu",
    "banner.message": "Planning launch in 40 Kathmandu areas.",
    "banner.helpline": "Helpline:",
    "language.label": "Choose language",
    "nav.areas": "Areas",
    "nav.offers": "What We Provide",
    "nav.how": "How It Works",
    "nav.contact": "Contact",
    "nav.contactMobile": "Contact & Support",
    "nav.toggle": "Toggle navigation menu",
    "banner.close": "Close notification",
    "waitlist.join": "Join Waitlist",
    "waitlist.joinMobile": "Join Customer Waitlist",
    "hero.eyebrow": "On-Demand Drinking Water Delivery",
    "hero.title": "Drinking water delivery for Kathmandu",
    "hero.description": "For home or office, ordering a 20 L jar is easy. Order from <span class=\"brand-wordmark hero-inline-brand\" aria-label=\"Pani Chaiyo\"><span class=\"logo-blue\">pani</span><span class=\"logo-red\">chaiyo</span></span> and get water delivered to your door.",
    "hero.offerAria": "20 L jar launch price: 50 rupees, reduced from 80 rupees",
    "hero.imageAlt": "Pani Chaiyo 20 L purified water jar",
    "hero.priceLabel": "20 L jar launch price",
    "hero.notify": "Get Notified",
    "hero.explore": "Explore Our Offers",
    "hero.metricAreas": "Planned Areas",
    "hero.metricSupport": "Customer Support",
    "hero.metricOffers": "More Offers",
    "hero.metricCountAreas": "40",
    "hero.metricCountSupport": "24h",
    "hero.metricCountOffers": "Soon",
    "hero.product": "20 L Purified Water Jar",
    "common.comingSoon": "Coming Soon",
    "areas.eyebrow": "Planned Launch Coverage",
    "areas.title": "40 Planned Neighborhoods Across 4 Kathmandu Areas",
    "areas.description": "These neighborhoods are planned for a future launch. Delivery is not available here yet. Join the waitlist for launch updates.",
    "areas.searchPlaceholder": "Search areas, e.g. Baluwatar",
    "areas.searchLabel": "Search planned Kathmandu areas",
    "areas.tabAll": "All Areas ({count})",
    "areas.tab.ktm-north": "Central & North ({count})",
    "areas.tab.ktm-east": "East & Airport ({count})",
    "areas.tab.ktm-west": "West & Ring Road ({count})",
    "areas.tab.ktm-south": "South & Heritage ({count})",
    "areas.neighborhoods": "Planned neighborhoods ({count})",
    "areas.noResultsTitle": "No Kathmandu neighborhood matches “{query}”.",
    "areas.noResultsText": "Try Baluwatar, Baneshwor, Thamel, Kalanki, or New Road.",
    "zone.ktm-north": "Central & North",
    "zone.ktm-east": "East & Airport",
    "zone.ktm-west": "West & Ring Road",
    "zone.ktm-south": "South & Heritage",
    "offers.eyebrow": "What We Provide",
    "offers.title": "Water delivery, made easier",
    "offers.description": "Fair prices, easy ordering, and dependable support for homes and businesses.",
    "offers.priceTitle": "Lower prices",
    "offers.priceText": "Get a 20 L jar for ₹50 instead of the usual ₹80.",
    "offers.deliveryTitle": "Free delivery over ₹500",
    "offers.deliveryText": "Delivery is free when your order total is above ₹500.",
    "offers.homeTitle": "Convenient doorstep service",
    "offers.homeText": "Get drinking water delivered where you need it.",
    "offers.simpleTitle": "Simple ordering",
    "offers.simpleText": "Choose what you need and place an order easily.",
    "offers.flexibleTitle": "Flexible order options",
    "offers.flexibleText": "Choose one-time, daily, weekly, or monthly delivery.",
    "offers.hassleTitle": "Less hassle",
    "offers.hassleText": "Skip repeated calls to arrange your water.",
    "offers.invoiceTitle": "Business invoices",
    "offers.invoiceText": "Get clear invoices for your workplace records.",
    "offers.recordsTitle": "Daily or monthly records",
    "offers.recordsText": "Track your orders and spending with clear records.",
    "offers.supportTitle": "24-hour support",
    "offers.supportText": "Contact our team for help with your order.",
    "workflow.eyebrow": "Simple Process",
    "workflow.title": "How Ordering Works",
    "workflow.description": "Three easy steps from choosing your water to doorstep delivery.",
    "workflow.stage1": "Step 01",
    "workflow.title1": "Place Your Order",
    "workflow.text1": "Order a 20 L jar or sealed bottle pack for your home or office.",
    "workflow.stage2": "Step 02",
    "workflow.title2": "We Prepare Your Order",
    "workflow.text2": "Your water is prepared for delivery in your area.",
    "workflow.stage3": "Step 03",
    "workflow.title3": "Delivered to Your Door",
    "workflow.text3": "Receive your jars at the door and pay with an available payment method.",
    "contact.eyebrow": "Customer Support",
    "contact.title": "Have a question about our service?",
    "contact.description": "Need help with an order or delivery? Our local team is ready to help.",
    "contact.phoneTitle": "Call Us",
    "contact.phoneHint": "Call for assistance",
    "contact.hoursTitle": "Operating Hours",
    "contact.hoursValue": "7:00 AM – 8:00 PM",
    "contact.hoursHint": "Monday through Sunday",
    "contact.emailTitle": "Email Inquiries",
    "contact.emailHint": "Reply within 24 hours",
    "contact.address": "Central Office: Ward 4, Baluwatar, Kathmandu, Nepal",
    "contact.addressShort": "Ward 4, Baluwatar, Kathmandu, Nepal",
    "footer.description": "On-demand drinking water delivery for Kathmandu households and businesses.",
    "footer.contactTitle": "Contact & Location",
    "footer.copyright": "© 2026 Pani Chaiyo Nepal Pvt. Ltd. All rights reserved.",
    "footer.tagline": "Drinking water delivery across Kathmandu Valley",
    "waitlist.title": "Join the Waitlist",
    "waitlist.subtitle": "Get notified when delivery starts in Kathmandu.",
    "waitlist.phone": "Mobile Number",
    "waitlist.phonePlaceholder": "98XXXXXXXX",
    "waitlist.location": "Delivery location",
    "waitlist.locationPlaceholder": "Area, street, or nearby landmark",
    "waitlist.email": "Email Address",
    "waitlist.optional": "(Optional)",
    "waitlist.emailPlaceholder": "you@example.com",
    "waitlist.privacy": "No spam. We will notify you when we launch.",
    "waitlist.successTitle": "You’re on the Waitlist!",
    "waitlist.successPrefix": "Thanks for signing up.",
    "waitlist.successNear": "Delivery location:",
    "waitlist.successSuffix": "We’ll notify you when delivery launches in Kathmandu.",
    "waitlist.alert": "Launch Alert Active",
    "waitlist.noSpam": "No Spam",
    "waitlist.done": "Got It, Thanks",
    "modal.close": "Close modal",
    "validation.phone": "Please enter a valid 10-digit Nepal mobile number (e.g. 98XXXXXXXX).",
  },
}

const NEPALI_ZONES = {
  "ktm-north": ["बालुवाटार", "महाराजगञ्ज", "लाजिम्पाट", "ठमेल", "पानीपोखरी", "सामाखुसी", "बुढानीलकण्ठ", "नक्साल", "धुम्बाराही", "टोखा"],
  "ktm-east": ["नयाँ बानेश्वर", "पुरानो बानेश्वर", "कोटेश्वर", "टिंकुने", "सिनामंगल", "माइतीघर", "गौशाला", "चाबहिल", "बौद्ध", "जोरपाटी"],
  "ktm-west": ["कलंकी", "स्वयम्भू", "सीतापाइला", "बालाजु", "गोंगबु", "माछापोखरी", "कालीमाटी", "कुलेश्वर", "बल्खु", "बाफल"],
  "ktm-south": ["त्रिपुरेश्वर", "बसन्तपुर", "टेकु", "असन", "न्युरोड", "सुन्धारा", "बबरमहल", "मीनभवन", "अनामनगर", "शंखमूल"],
}

let currentLanguage = "ne"
let activeZoneTab = "all"
let searchQuery = ""

function translate(key, replacements = {}) {
  let value = LANGUAGE_COPY[currentLanguage][key] || LANGUAGE_COPY.en[key] || key
  for (const [placeholder, replacement] of Object.entries(replacements)) {
    value = value.replace(`{${placeholder}}`, replacement)
  }
  return value
}

function formatCount(value) {
  return currentLanguage === "ne"
    ? String(value).replace(/\d/g, (digit) => "०१२३४५६७८९"[digit])
    : String(value)
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character])
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "ne"
  document.documentElement.lang = currentLanguage
  document.title = translate("title")

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n)
  })

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml)
  })

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder)
  })

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria))
  })

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = translate(element.dataset.i18nAlt)
  })

  document.querySelectorAll(".tab-pill").forEach((button) => {
    const zone = button.dataset.zone || "all"
    const key = zone === "all" ? "areas.tabAll" : `areas.tab.${zone}`
    const count = zone === "all"
      ? KATHMANDU_ZONES.reduce((total, item) => total + item.places.length, 0)
      : KATHMANDU_ZONES.find((item) => item.id === zone)?.places.length || 0
    button.textContent = translate(key, { count: formatCount(count) })
  })

  document.querySelectorAll(".language-toggle button").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage
    button.classList.toggle("is-active", isActive)
    button.setAttribute("aria-pressed", String(isActive))
  })
  try {
    localStorage.setItem("pc_language", currentLanguage)
  } catch (error) {}

  renderLaunchAreas()
}

document.addEventListener("DOMContentLoaded", () => {
  let savedLanguage = "ne"
  try {
    savedLanguage = localStorage.getItem("pc_language") || "ne"
  } catch (error) {}
  applyLanguage(savedLanguage)
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
      const placesToShow = zone.places
        .map((place, index) => ({
          english: place,
          nepali: NEPALI_ZONES[zone.id][index],
        }))
        .filter((place) => !searchQuery ||
          place.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
          place.nepali.includes(searchQuery))

      if (searchQuery && placesToShow.length === 0) return ""

      return `
      <div class="zone-box">
        <div>
          <h3 class="zone-title">${translate(`zone.${zone.id}`)}</h3>
          <span style="font-size: 0.675rem; font-weight: 700; text-transform: uppercase; color: var(--color-slate-400); display: block; margin-bottom: 0.35rem;">
            ${translate("areas.neighborhoods", { count: formatCount(placesToShow.length) })}
          </span>

          <div class="places-list">
            ${placesToShow
              .map((place) => `
              <span class="place-tag">
                <i class="fa-solid fa-location-dot"></i>
                <span>${currentLanguage === "ne" ? place.nepali : place.english}</span>
              </span>
            `)
              .join("")}
          </div>
        </div>

      </div>
    `
    })
    .filter(Boolean)
    .join("")

  if (!html) {
    const safeQuery = escapeHTML(searchQuery)
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2.5rem 1rem; text-align: center; background: var(--color-slate-50); border: 1px dashed var(--color-slate-300); border-radius: 1rem;">
        <p style="font-size: 0.875rem; font-weight: 700; color: var(--color-slate-700);">${translate("areas.noResultsTitle", { query: safeQuery })}</p>
        <p style="font-size: 0.75rem; color: var(--color-slate-400); margin-top: 0.25rem;">${translate("areas.noResultsText")}</p>
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
  const location = document.getElementById("customerLocation").value.trim()
  const email = document.getElementById("customerEmail").value.trim()

  // Validate 10-digit mobile
  if (!/^9[78]\d{8}$/.test(phone)) {
    alert(translate("validation.phone"))
    return
  }

  const submission = {
    phone,
    location,
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
  const locationDisplay = document.getElementById("registeredLocationDisplay")

  if (phoneDisplay) phoneDisplay.textContent = phone
  if (locationDisplay) locationDisplay.textContent = location
  if (formView) formView.style.display = "none"
  if (successView) successView.style.display = "block"
}

function initEventListeners() {
  document.querySelectorAll(".language-toggle button").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.language)
    })
  })

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

  // Modal Backdrop Clicks
  const modal = document.getElementById("waitlistModal")
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeWaitlistModal()
    })
  }

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeWaitlistModal()
    }
  })
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

// Check for dismissed banner on initial load
try {
  if (sessionStorage.getItem("pc_banner_dismissed") === "1") {
    const bar = document.getElementById("topAnnouncementBar")
    if (bar) bar.style.display = "none"
  }
} catch (e) {}
