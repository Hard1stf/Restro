# Restro — Premium Restaurant Landing Page

A modern, responsive restaurant landing page built with React, Vite, Tailwind CSS, Motion, and Lenis.

Restro is a frontend-focused UI project designed to explore premium restaurant branding, smooth interactions, responsive layouts, reusable React components, and polished landing-page presentation.

> **Project type:** Frontend / UI implementation  
> **Status:** Portfolio project  
> **Scope:** Restaurant marketing and reservation-focused landing page

---

## ✨ Overview

Restro presents a fictional premium restaurant experience through a single-page website.

The interface is structured around the journey a potential guest would take:

**Discover → Explore dishes → Understand the experience → Learn how booking works → Check timings → Read testimonials → Get answers → Book a table**

The project focuses primarily on **frontend implementation, visual hierarchy, interaction design, responsiveness, and motion** rather than building a complete restaurant management or reservation system.

---

## 🎯 Goals

The project was built to practice and demonstrate:

- Building a polished React landing page from a visual concept
- Structuring a multi-section marketing page with reusable components
- Creating responsive layouts with Tailwind CSS
- Adding subtle motion and scroll interactions
- Implementing smooth scrolling with Lenis
- Managing repeated UI content through data-driven rendering
- Creating a consistent visual language across sections
- Building a frontend that can be extended into a larger product later

---

## 🖥️ Sections

The landing page currently includes:

- Hero section
- About section
- Restaurant highlights / stats
- Featured dishes
- Restaurant features
- Booking process
- Opening hours
- Customer testimonials
- FAQ section
- Call-to-action section
- Navigation and footer

---

## 🧩 Key Features

### Smooth Scrolling

Lenis is used to provide smooth scrolling and animated anchor navigation between sections.

The implementation also respects the user's reduced-motion preference instead of forcing animation when the operating system or browser requests reduced motion.

### Responsive Navigation

The navbar adapts between desktop and mobile layouts and includes a mobile navigation overlay.

### Data-Driven Sections

Repeated content such as dishes, testimonials, FAQs, navigation links, opening hours, and booking steps is maintained as structured data and rendered through React.

### Motion

Motion is used for viewport-based entrance animations and subtle interactive effects throughout the page.

### Responsive UI

The layout uses responsive Tailwind utilities to adapt the experience across desktop, tablet, and mobile screen sizes.

### Accessible Native FAQ Interaction

The FAQ uses native HTML `<details>` and `<summary>` elements, providing built-in expandable/collapsible behavior without unnecessary JavaScript state.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **React 19** | UI development |
| **Vite** | Development server and build tooling |
| **Tailwind CSS 4** | Styling and responsive layouts |
| **Motion** | UI and viewport animations |
| **Lenis** | Smooth scrolling |
| **Lucide React** | Interface icons |
| **Oxlint** | JavaScript/React linting |

---

## 📁 Project Structure

The current project follows a lightweight section-based React structure:

```text
src/
├── components/
│   ├── Animated.jsx
│   ├── LenisScroll.jsx
│   └── Navbar.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Stats.jsx
│   ├── Dishes.jsx
│   ├── Features.jsx
│   ├── BookingProcess.jsx
│   ├── Timing.jsx
│   ├── TestimonialSection.jsx
│   ├── FAQs.jsx
│   └── CTA.jsx
│
├── data/
│   └── data.jsx
│
├── App.jsx
├── main.jsx
└── index.css