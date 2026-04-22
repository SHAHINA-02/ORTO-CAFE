const STORAGE_KEYS = {
  cart: "orto_cart",
  bookings: "orto_bookings",
  invoices: "orto_invoices",
  invoiceCounter: "orto_invoice_counter",
  language: "orto_language",
};

const state = {
  language: localStorage.getItem(STORAGE_KEYS.language) || "en",
  category: "all",
  search: "",
  cart: JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]"),
  bookings: JSON.parse(localStorage.getItem(STORAGE_KEYS.bookings) || "[]"),
  invoices: JSON.parse(localStorage.getItem(STORAGE_KEYS.invoices) || "[]"),
};

const i18n = {
  en: {
    navHome: "Home",
    navMenu: "Menu",
    navReservations: "Reservations",
    navBilling: "Billing",
    navAbout: "About",
    navContact: "Contact",
    bookTable: "Book a Table",
    heroKicker: "Dubai's Signature Cafe Lounge",
    heroTitle: "Crafted Coffee, Elegant Brunch, Timeless Hospitality",
    heroDesc:
      "A refined all-day cafe experience in the UAE, blending specialty brews, artisan desserts, and warm family dining.",
    viewMenu: "View Menu",
    orderNow: "Order Now",
    hoursChip: "Open Daily | 7:00 AM - 12:00 AM",
    locationChip: "Jumeirah, Dubai, UAE",
    featuredMenu: "Featured Menu",
    featuredMenuDesc: "Explore chef-curated drinks and dishes made fresh every day.",
    searchPlaceholder: "Search menu...",
    allCategory: "All",
    coffeeCategory: "Coffee",
    breakfastCategory: "Breakfast",
    dessertsCategory: "Desserts",
    mocktailsCategory: "Mocktails",
    juicesCategory: "Juices",
    reservationTitle: "Table Reservations",
    reservationDesc: "Reserve your perfect table in seconds.",
    nameLabel: "Customer Name",
    mobileLabel: "Mobile Number",
    guestsLabel: "Number of Guests",
    dateLabel: "Date",
    timeLabel: "Time",
    tablePrefLabel: "Table Preference",
    specialRequestLabel: "Special Request",
    selectOption: "Select",
    indoor: "Indoor",
    outdoor: "Outdoor",
    family: "Family Area",
    confirmBooking: "Confirm Booking",
    billingTitle: "Live Billing & POS",
    billingDesc: "Professional invoice experience for dine-in and takeaway orders.",
    customerName: "Customer Name",
    tableNo: "Table No.",
    orderType: "Order Type",
    paymentMethod: "Payment Method",
    cash: "Cash",
    card: "Card",
    applePay: "Apple Pay",
    googlePay: "Google Pay",
    wallet: "Wallet",
    invoiceDateTime: "Date & Time",
    dineIn: "Dine-in",
    takeaway: "Takeaway",
    delivery: "Delivery",
    item: "Item",
    qty: "Qty",
    unit: "Unit",
    total: "Total",
    actions: "Actions",
    emptyBill: "No items yet. Add products from the menu.",
    discount: "Discount (AED)",
    serviceCharge: "Service Charge %",
    subtotal: "Subtotal",
    vat: "VAT (5%)",
    grandTotal: "Grand Total",
    clearBill: "Clear Bill",
    printBill: "Print Bill",
    generateReceipt: "Generate Receipt",
    sendWhatsApp: "Send on WhatsApp",
    saveInvoice: "Save Invoice",
    thankYou: "Thank you for choosing Orto Cafe. We look forward to serving you again.",
    adminDashboard: "Admin Dashboard",
    recentBookings: "Recent Bookings",
    aboutTitle: "About Orto Cafe",
    aboutText:
      "Orto Cafe began as a neighborhood coffee concept and evolved into a premium family-friendly destination across the UAE, known for specialty coffee, artisanal brunch, and signature desserts.",
    contactTitle: "Contact Us",
    address: "Al Wasl Road, Jumeirah, Dubai, UAE",
    mapPlaceholder: "Google Map Embed Placeholder",
    invoiceNote: "All prices include quality service standards. VAT shown separately at billing.",
    allRights: "All rights reserved.",
    addToBill: "Add to Bill",
    totalOrders: "Total Orders",
    totalRevenue: "Total Revenue",
    totalBookings: "Total Bookings",
    topSellingItem: "Top Selling Item",
    todaySales: "Today Sales",
    avgOrder: "Average Order",
    reservationSuccess: "Reservation saved successfully.",
    addedToBill: "Item added to bill.",
    billCleared: "Bill cleared.",
    invoiceSaved: "Invoice saved successfully.",
    receiptReady: "Receipt generated. Use Print Bill to print.",
    validationError: "Please complete all required fields.",
  },
  ar: {
    navHome: "الرئيسية",
    navMenu: "المنيو",
    navReservations: "الحجوزات",
    navBilling: "الفاتورة",
    navAbout: "من نحن",
    navContact: "تواصل معنا",
    bookTable: "احجز طاولة",
    heroKicker: "مقهى دبي المميز",
    heroTitle: "قهوة مصنوعة بعناية وبرنش أنيق وضيافة راقية",
    heroDesc: "تجربة مقهى راقية في الإمارات تجمع القهوة المختصة والحلويات الحرفية وأجواء عائلية دافئة.",
    viewMenu: "عرض المنيو",
    orderNow: "اطلب الآن",
    hoursChip: "مفتوح يوميا | 7:00 ص - 12:00 ص",
    locationChip: "جميرا، دبي، الإمارات",
    featuredMenu: "الأصناف المميزة",
    featuredMenuDesc: "اكتشف أطباق ومشروبات مختارة يوميا من الشيف.",
    searchPlaceholder: "ابحث في المنيو...",
    allCategory: "الكل",
    coffeeCategory: "قهوة",
    breakfastCategory: "فطور",
    dessertsCategory: "حلويات",
    mocktailsCategory: "موكتيلات",
    juicesCategory: "عصائر",
    reservationTitle: "حجز الطاولات",
    reservationDesc: "احجز طاولتك بسهولة خلال ثوان.",
    nameLabel: "اسم العميل",
    mobileLabel: "رقم الجوال",
    guestsLabel: "عدد الضيوف",
    dateLabel: "التاريخ",
    timeLabel: "الوقت",
    tablePrefLabel: "تفضيل الطاولة",
    specialRequestLabel: "طلبات خاصة",
    selectOption: "اختر",
    indoor: "داخلي",
    outdoor: "خارجي",
    family: "منطقة عائلية",
    confirmBooking: "تأكيد الحجز",
    billingTitle: "نظام الفوترة ونقطة البيع",
    billingDesc: "تجربة فاتورة احترافية للطلبات الداخلية والسفري.",
    customerName: "اسم العميل",
    tableNo: "رقم الطاولة",
    orderType: "نوع الطلب",
    paymentMethod: "طريقة الدفع",
    cash: "نقدا",
    card: "بطاقة",
    applePay: "آبل باي",
    googlePay: "جوجل باي",
    wallet: "محفظة",
    invoiceDateTime: "التاريخ والوقت",
    dineIn: "داخل المطعم",
    takeaway: "سفري",
    delivery: "توصيل",
    item: "الصنف",
    qty: "الكمية",
    unit: "سعر الوحدة",
    total: "الإجمالي",
    actions: "إجراءات",
    emptyBill: "لا توجد أصناف بعد. أضف منتجات من المنيو.",
    discount: "الخصم (درهم)",
    serviceCharge: "رسوم الخدمة %",
    subtotal: "المجموع الفرعي",
    vat: "ضريبة القيمة المضافة (5%)",
    grandTotal: "الإجمالي النهائي",
    clearBill: "مسح الفاتورة",
    printBill: "طباعة الفاتورة",
    generateReceipt: "إنشاء إيصال",
    sendWhatsApp: "إرسال عبر واتساب",
    saveInvoice: "حفظ الفاتورة",
    thankYou: "شكرا لاختياركم أورتو كافيه. نتطلع لخدمتكم مجددا.",
    adminDashboard: "لوحة الإدارة",
    recentBookings: "آخر الحجوزات",
    aboutTitle: "عن أورتو كافيه",
    aboutText:
      "بدأ أورتو كافيه كمفهوم مقهى محلي ثم تطور إلى وجهة عائلية راقية في الإمارات تشتهر بالقهوة المختصة والبرنش والحلويات المميزة.",
    contactTitle: "تواصل معنا",
    address: "طريق الوصل، جميرا، دبي، الإمارات",
    mapPlaceholder: "مكان مخصص لدمج خرائط جوجل",
    invoiceNote: "الأسعار تشمل معايير خدمة عالية. يتم عرض الضريبة بشكل منفصل في الفاتورة.",
    allRights: "جميع الحقوق محفوظة.",
    addToBill: "أضف للفاتورة",
    totalOrders: "إجمالي الطلبات",
    totalRevenue: "إجمالي الإيرادات",
    totalBookings: "إجمالي الحجوزات",
    topSellingItem: "الأكثر مبيعا",
    todaySales: "مبيعات اليوم",
    avgOrder: "متوسط الطلب",
    reservationSuccess: "تم حفظ الحجز بنجاح.",
    addedToBill: "تمت إضافة الصنف إلى الفاتورة.",
    billCleared: "تم مسح الفاتورة.",
    invoiceSaved: "تم حفظ الفاتورة بنجاح.",
    receiptReady: "تم إنشاء الإيصال. استخدم زر الطباعة لطباعة الفاتورة.",
    validationError: "يرجى تعبئة جميع الحقول المطلوبة.",
  },
};

const refs = {
  menuGrid: document.getElementById("menuGrid"),
  menuSearch: document.getElementById("menuSearch"),
  menuCategory: document.getElementById("menuCategory"),
  billItems: document.getElementById("billItems"),
  billEmptyState: document.getElementById("billEmptyState"),
  subtotalVal: document.getElementById("subtotalVal"),
  vatVal: document.getElementById("vatVal"),
  grandTotalVal: document.getElementById("grandTotalVal"),
  discountInput: document.getElementById("discountInput"),
  serviceChargeInput: document.getElementById("serviceChargeInput"),
  reservationForm: document.getElementById("reservationForm"),
  toast: document.getElementById("toast"),
  langToggle: document.getElementById("langToggle"),
  navToggle: document.getElementById("navToggle"),
  siteNav: document.getElementById("siteNav"),
  invoiceCustomer: document.getElementById("invoiceCustomer"),
  invoiceTable: document.getElementById("invoiceTable"),
  orderType: document.getElementById("orderType"),
  paymentMethod: document.getElementById("paymentMethod"),
  invoiceDateTime: document.getElementById("invoiceDateTime"),
  invoiceNumberDisplay: document.getElementById("invoiceNumberDisplay"),
  kpiGrid: document.getElementById("kpiGrid"),
  recentBookingsBody: document.getElementById("recentBookingsBody"),
  dailySummary: document.getElementById("dailySummary"),
};

const aed = new Intl.NumberFormat("en-AE", {
  style: "currency",
  currency: "AED",
  minimumFractionDigits: 2,
});

function formatAED(value) {
  return aed.format(Number(value || 0));
}

function nextInvoiceNumber() {
  const current = Number(localStorage.getItem(STORAGE_KEYS.invoiceCounter) || "1");
  const formatted = `ORT-2026-${String(current).padStart(4, "0")}`;
  return formatted;
}

function incrementInvoiceCounter() {
  const current = Number(localStorage.getItem(STORAGE_KEYS.invoiceCounter) || "1");
  localStorage.setItem(STORAGE_KEYS.invoiceCounter, String(current + 1));
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add("show");
  setTimeout(() => refs.toast.classList.remove("show"), 2300);
}

function translateUI() {
  const t = i18n[state.language];
  document.documentElement.lang = state.language === "ar" ? "ar" : "en";
  document.body.setAttribute("dir", state.language === "ar" ? "rtl" : "ltr");
  refs.langToggle.textContent = state.language === "ar" ? "EN" : "AR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
}

function getFilteredMenu() {
  return menuItems.filter((item) => {
    const byCategory = state.category === "all" || item.category === state.category;
    const term = state.search.trim().toLowerCase();
    const bySearch =
      !term ||
      item.name.en.toLowerCase().includes(term) ||
      item.name.ar.toLowerCase().includes(term) ||
      item.description.en.toLowerCase().includes(term) ||
      item.description.ar.toLowerCase().includes(term);
    return byCategory && bySearch;
  });
}

function renderMenu() {
  const t = i18n[state.language];
  const items = getFilteredMenu();
  refs.menuGrid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    const name = item.name[state.language];
    const desc = item.description[state.language];

    card.innerHTML = `
      <div class="menu-img" style="background-image:url('${item.image}')"></div>
      <div class="menu-body">
        <div class="menu-tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="menu-title-row">
          <h3>${name}</h3>
          <span class="menu-price">${formatAED(item.priceAED)}</span>
        </div>
        <p>${desc}</p>
        <button class="btn btn-gold add-btn" data-id="${item.id}">${t.addToBill}</button>
      </div>
    `;
    refs.menuGrid.appendChild(card);
  });

  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.id));
  });
}

function getCartItem(itemId) {
  return state.cart.find((entry) => entry.id === itemId);
}

function addToCart(itemId) {
  const existing = getCartItem(itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    const item = menuItems.find((m) => m.id === itemId);
    state.cart.push({ id: item.id, qty: 1, priceAED: item.priceAED, name: item.name });
  }
  persistCart();
  renderCart();
  showToast(i18n[state.language].addedToBill);
}

function updateCartQty(itemId, delta) {
  const entry = getCartItem(itemId);
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) {
    state.cart = state.cart.filter((item) => item.id !== itemId);
  }
  persistCart();
  renderCart();
}

function removeCartItem(itemId) {
  state.cart = state.cart.filter((item) => item.id !== itemId);
  persistCart();
  renderCart();
}

function clearBill() {
  state.cart = [];
  persistCart();
  renderCart();
  showToast(i18n[state.language].billCleared);
}

function persistCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
}

function totals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.qty * item.priceAED, 0);
  const discount = Number(refs.discountInput.value || 0);
  const serviceChargePercent = Number(refs.serviceChargeInput.value || 0);
  const discounted = Math.max(0, subtotal - discount);
  const serviceCharge = discounted * (serviceChargePercent / 100);
  const beforeVat = discounted + serviceCharge;
  const vat = beforeVat * 0.05;
  const grandTotal = beforeVat + vat;
  return { subtotal, discount, serviceCharge, vat, grandTotal };
}

function renderCart() {
  const t = i18n[state.language];
  refs.billItems.innerHTML = "";
  refs.billEmptyState.style.display = state.cart.length ? "none" : "block";

  state.cart.forEach((item) => {
    const tr = document.createElement("tr");
    const lineTotal = item.qty * item.priceAED;
    const name = item.name[state.language];
    tr.innerHTML = `
      <td>${name}</td>
      <td>${item.qty}</td>
      <td>${formatAED(item.priceAED)}</td>
      <td>${formatAED(lineTotal)}</td>
      <td>
        <button class="action-btn" data-op="inc" data-id="${item.id}">+</button>
        <button class="action-btn" data-op="dec" data-id="${item.id}">-</button>
        <button class="action-btn" data-op="del" data-id="${item.id}">x</button>
      </td>
    `;
    refs.billItems.appendChild(tr);
  });

  refs.billItems.querySelectorAll("button").forEach((btn) => {
    const { op, id } = btn.dataset;
    btn.addEventListener("click", () => {
      if (op === "inc") updateCartQty(id, 1);
      if (op === "dec") updateCartQty(id, -1);
      if (op === "del") removeCartItem(id);
    });
  });

  const calc = totals();
  refs.subtotalVal.textContent = formatAED(calc.subtotal);
  refs.vatVal.textContent = formatAED(calc.vat);
  refs.grandTotalVal.textContent = formatAED(calc.grandTotal);
  refs.billEmptyState.textContent = t.emptyBill;
}

function getInvoicePayload() {
  const calc = totals();
  return {
    invoiceNo: refs.invoiceNumberDisplay.textContent,
    dateTime: refs.invoiceDateTime.value,
    customerName: refs.invoiceCustomer.value || "Walk-in Customer",
    tableNumber: refs.invoiceTable.value || "-",
    orderType: refs.orderType.value,
    paymentMethod: refs.paymentMethod.value,
    items: state.cart.map((item) => ({
      name: item.name[state.language],
      qty: item.qty,
      unitPrice: item.priceAED,
      lineTotal: item.qty * item.priceAED,
    })),
    calculations: calc,
  };
}

function saveInvoice() {
  if (!state.cart.length) return showToast(i18n[state.language].emptyBill);
  const payload = getInvoicePayload();
  state.invoices.push(payload);
  localStorage.setItem(STORAGE_KEYS.invoices, JSON.stringify(state.invoices));
  incrementInvoiceCounter();
  refs.invoiceNumberDisplay.textContent = nextInvoiceNumber();
  showToast(i18n[state.language].invoiceSaved);
  renderDashboard();
}

function generateReceipt() {
  if (!state.cart.length) return showToast(i18n[state.language].emptyBill);
  showToast(i18n[state.language].receiptReady);
}

function printBill() {
  window.print();
}

function sendWhatsApp() {
  if (!state.cart.length) return showToast(i18n[state.language].emptyBill);
  const payload = getInvoicePayload();
  const lines = payload.items
    .map((item) => `- ${item.name} x${item.qty}: AED ${item.lineTotal.toFixed(2)}`)
    .join("%0A");
  const msg =
    `*Orto Cafe Invoice*%0A` +
    `Invoice: ${payload.invoiceNo}%0A` +
    `Customer: ${payload.customerName}%0A` +
    `Table: ${payload.tableNumber}%0A` +
    `Order: ${payload.orderType}%0A` +
    `Payment: ${payload.paymentMethod}%0A%0A` +
    `${lines}%0A%0A` +
    `Total: AED ${payload.calculations.grandTotal.toFixed(2)}%0A` +
    `VAT (5%): AED ${payload.calculations.vat.toFixed(2)}%0A` +
    `Thank you for visiting Orto Cafe.`;
  window.open(`https://wa.me/?text=${msg}`, "_blank");
}

function handleReservationSubmit(event) {
  event.preventDefault();
  const formData = new FormData(refs.reservationForm);
  const data = Object.fromEntries(formData.entries());
  const required = ["customerName", "mobile", "guests", "date", "time", "tablePreference"];
  const isValid = required.every((key) => String(data[key] || "").trim());
  if (!isValid) {
    showToast(i18n[state.language].validationError);
    return;
  }
  const booking = { id: Date.now().toString(), ...data };
  state.bookings.unshift(booking);
  localStorage.setItem(STORAGE_KEYS.bookings, JSON.stringify(state.bookings));
  refs.reservationForm.reset();
  showToast(i18n[state.language].reservationSuccess);
  renderDashboard();
}

function topSellingItem() {
  const counts = {};
  state.invoices.forEach((invoice) => {
    invoice.items.forEach((item) => {
      counts[item.name] = (counts[item.name] || 0) + item.qty;
    });
  });
  const [name] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] || ["Spanish Latte"];
  return name;
}

function renderDashboard() {
  const t = i18n[state.language];
  const totalOrders = state.invoices.length;
  const totalRevenue = state.invoices.reduce((sum, inv) => sum + inv.calculations.grandTotal, 0);
  const kpis = [
    { label: t.totalOrders, value: totalOrders },
    { label: t.totalRevenue, value: formatAED(totalRevenue) },
    { label: t.totalBookings, value: state.bookings.length },
    { label: t.topSellingItem, value: topSellingItem() },
  ];

  refs.kpiGrid.innerHTML = kpis
    .map(
      (kpi) => `<article class="kpi-card"><p>${kpi.label}</p><strong>${kpi.value}</strong></article>`
    )
    .join("");

  const averageOrder = totalOrders ? totalRevenue / totalOrders : 0;
  refs.dailySummary.innerHTML = `
    <article class="summary-card"><p>${t.todaySales}</p><strong>${formatAED(totalRevenue * 0.22)}</strong></article>
    <article class="summary-card"><p>${t.avgOrder}</p><strong>${formatAED(averageOrder)}</strong></article>
  `;

  refs.recentBookingsBody.innerHTML = state.bookings
    .slice(0, 6)
    .map(
      (b) =>
        `<tr><td>${b.customerName}</td><td>${b.date}</td><td>${b.time}</td><td>${b.guests}</td></tr>`
    )
    .join("");
}

function attachEvents() {
  refs.menuSearch.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderMenu();
  });

  refs.menuCategory.addEventListener("change", (e) => {
    state.category = e.target.value;
    renderMenu();
  });

  refs.discountInput.addEventListener("input", renderCart);
  refs.serviceChargeInput.addEventListener("input", renderCart);

  refs.reservationForm.addEventListener("submit", handleReservationSubmit);

  refs.langToggle.addEventListener("click", () => {
    state.language = state.language === "en" ? "ar" : "en";
    localStorage.setItem(STORAGE_KEYS.language, state.language);
    translateUI();
    renderMenu();
    renderCart();
    renderDashboard();
  });

  refs.navToggle.addEventListener("click", () => refs.siteNav.classList.toggle("open"));

  document.getElementById("clearBillBtn").addEventListener("click", clearBill);
  document.getElementById("printBillBtn").addEventListener("click", printBill);
  document.getElementById("generateReceiptBtn").addEventListener("click", generateReceipt);
  document.getElementById("sendWhatsAppBtn").addEventListener("click", sendWhatsApp);
  document.getElementById("saveInvoiceBtn").addEventListener("click", saveInvoice);
}

function init() {
  refs.invoiceDateTime.value = new Date().toLocaleString();
  refs.invoiceNumberDisplay.textContent = nextInvoiceNumber();
  document.getElementById("year").textContent = new Date().getFullYear();
  translateUI();
  renderMenu();
  renderCart();
  renderDashboard();
  attachEvents();
}

init();
