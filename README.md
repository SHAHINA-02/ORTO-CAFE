# ORTO CAFE — Full-Stack Cafe Management System for the UAE

![Status](https://img.shields.io/badge/Status-Production-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![i18n](https://img.shields.io/badge/Bilingual-Arabic%20%2F%20English-D97706?style=flat-square)

### Crafted Coffee, Elegant Brunch, Timeless Hospitality — Dubai's Signature Cafe Lounge.

**LIVE DEMO:** https://orto-cafe-01.vercel.app
!

SCREENSHOTS-
## Screenshots

<p align="center">
  <img src="C:\Users\USER\Downloads\ORTO-SC" />
  <img src="images/screenshot2.png" width="32%" />
  <img src="images/screenshot3.png" width="32%" />
</p>

---

## ABOUT

Orto Cafe is a full-stack cafe management web application built for a premium UAE dining context. It combines a bilingual customer-facing experience (Arabic / English with full RTL support) with an operational backend — featuring a live menu, table reservation system, and a POS billing dashboard with admin analytics.

Located in Jumeirah, Dubai. Open daily 7:00 AM – 12:00 AM.

---

## HOW IT WORKS

```
Customer Side                          Operations Side
─────────────────────                  ─────────────────────
Browse Menu (EN / AR)                  POS — Add items to bill
Filter by category                     Set order type, payment method
Add to Bill                            Generate invoice (ORT-2026-XXXX)
Book a Table                           Admin Dashboard — live stats
Contact / About                        Track orders, revenue, bookings
```

---

## FEATURES

**Bilingual Interface — Arabic / English**
- One-click language toggle (AR / EN) in the navbar
- Full RTL layout switch for Arabic — navigation, forms, menu cards, and CTAs
- All content translated: menu items, reservation form, billing section

**Featured Menu**
- Search menu by name
- Filter by category: All, Drinks, Food, Desserts
- Item cards with high-resolution photography, badge tags (Popular / Bestseller / Chef's Choice)
- Prices in AED
- Add to Bill button per item

**Table Reservations**
- Customer name, mobile number, number of guests
- Date picker, time picker, table preference selector
- Special requests textarea
- Confirm Booking CTA

**Live Billing & POS**
- Invoice number auto-generated (ORT-2026-0001 format)
- Customer name, table number, order type (Dine-in / Takeaway), payment method (Cash / Card)
- Live date and time stamp
- Item list with quantity, unit price, and total
- Discount field
- Printable invoice layout

**Admin Dashboard**
- Total Orders, Total Revenue (AED)
- Total Bookings, Top Selling Item
- Today's Sales, Average Order Value
- Recent Bookings log

---

## TECH STACK

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| i18n | Custom Arabic / English toggle with RTL |
| State Management | React useState / Context |
| Deployment | Vercel |

---

## INSTALLATION

**Prerequisites:** Node.js 18+

```bash
git clone https://github.com/YOUR_USERNAME/orto-cafe.git
cd orto-cafe
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## ROADMAP

- [ ] Backend integration (orders and reservations persisted to database)
- [ ] WhatsApp confirmation on booking
- [ ] QR code menu for in-cafe use
- [ ] Payment gateway integration (Stripe / Telr)
- [ ] Kitchen display system (KDS) view

---

## AUTHOR

**SHAHINA S** — Full Stack Developer & AI Engineer, UAE

- Portfolio: https://yoursite.com
- LinkedIn: https://linkedin.com/in/yourhandle
- Email: you@email.com

---

*MIT License. Open source. Built for the UAE hospitality market.*
