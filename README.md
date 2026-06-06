# Lucky C. Ofili — Product Manager Portfolio

A modern, professional portfolio website for **Lucky C. Ofili** — Product Manager, Consultant & Founder based in Lagos, Nigeria.

## 🎯 Overview

This portfolio transforms a developer-focused template into a **Product Manager / Consultant / Founder** showcase, highlighting:

- **Professional Experience**: Program Manager at Kode10x, Marketing roles at The Place Nigeria, and consulting work
- **Consulting Services**: Product Strategy, Founder Advisory, Growth & GTM, Discovery Sprints, and more
- **Skills & Toolkit**: Product Operations, Financial Analysis, User Research, Agile methodologies
- **Selected Projects**: Case studies from ed-tech, hospitality, SaaS, and founder advisory work
- **Testimonials**: Feedback from founders and colleagues

## 🎨 Design Features

- **Dark Theme**: Sophisticated slate-950 background with emerald-500 accents
- **Modern UI**: Glassmorphism effects, gradient text, animated blobs, and grid backgrounds
- **Responsive**: Fully responsive across mobile, tablet, and desktop
- **Interactive**: Smooth scrolling, hover effects, animated marquee, and form validation
- **Typography**: Inter + Space Grotesk fonts for a clean, professional look

## 📦 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **Custom Brand Icons** - LinkedIn, Twitter/X, GitHub SVGs

## 🏗️ Structure

```
src/
├── App.tsx           # Main app with all sections
├── index.css         # Custom animations and styles
├── main.tsx          # Entry point
└── utils/
    └── cn.ts         # Utility functions

Sections:
- Navbar (sticky, responsive with mobile menu)
- Hero (intro, stats card, CTAs)
- Marquee (scrolling skills showcase)
- About (bio and quick facts)
- Experience (timeline of roles)
- Services (6 consulting offerings)
- Skills (10 skills with progress bars + toolkit)
- Projects (4 case studies)
- Testimonials (3 quotes)
- Contact (info cards + form)
- Footer
```

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

The build creates a single `dist/index.html` file (281KB gzipped to 80KB).

### Preview Build

```bash
npm run preview
```

## 📝 Content Sections

### Hero
- Name and tagline: "I turn ideas into products founders love"
- Availability badge: "Available for advisory & consulting — Q2 2026"
- Stats: 8+ years, 30+ products, 15+ founders advised, 4.9★ satisfaction
- Social links: LinkedIn, Twitter, GitHub, Email

### About
- Professional bio emphasizing product mindset and founder-friendly approach
- Quick facts: Location, Role, Education, Focus areas

### Experience
- **Kode10x** (2022-Present): Program Manager
- **The Place Nigeria** (2019-2022): Marketing Manager
- **SkillHub Africa** (2018-2019): Product & Growth Consultant
- **University of Lagos** (2013-2017): BSc Economics

### Services (Consultant & Founder Focus)
1. Product Strategy
2. Founder Advisory
3. Growth & GTM
4. Team & Ops
5. Discovery Sprints
6. Consulting for Founders

### Skills
- Product Strategy (95%), Product Operations (92%), User Research (88%)
- Financial Analysis (90%), Roadmap & OKRs (93%), Data & Analytics (85%)
- Web Project Management (89%), Databases/SQL (78%), Agile/Scrum (90%)
- Growth Experiments (86%)
- Toolkit: Notion, Linear, Jira, Figma, Amplitude, Mixpanel, and more

### Projects
- Kode10x Learning Platform (EdTech · 0→1)
- The Place Loyalty Engine (Hospitality · Growth)
- SkillHub Founder Playbook (Consulting · Advisory)
- Pricing & Packaging Redesign (SaaS · Strategy)

### Contact
- Email: hello@luckyofili.com
- LinkedIn: /in/lucky-c-ofili-032465109
- Location: Lagos, Nigeria (Available remotely)
- Contact form with validation

## 🎨 Customization

### Colors
The color scheme uses Tailwind's emerald palette:
- Primary: `emerald-500` (#10b981)
- Background: `slate-950` (#020617)
- Accents: `teal-400`, `emerald-400`

### Content
All content is defined in the `App.tsx` file in the DATA section at the top. Update:
- `STATS` - Hero statistics
- `EXPERIENCE` - Work history
- `SERVICES` - Consulting offerings
- `SKILLS` - Competencies and levels
- `PROJECTS` - Case studies
- `TESTIMONIALS` - Quotes

### Fonts
Loaded via Google Fonts in `index.html`:
- **Inter** - Body text
- **Space Grotesk** - Headings and display text

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1024px (2-column grid)
- **Desktop**: > 1024px (full layout)

## 🔗 Links

- **LinkedIn**: https://www.linkedin.com/in/lucky-c-ofili-032465109/
- **Email**: hello@luckyofili.com
- **Location**: Lagos, Nigeria

## 📄 License

This project is built for Lucky C. Ofili's personal portfolio.

## 🙏 Credits

- Inspired by Victor Onyemaechi's developer portfolio template
- Built with React, Vite, and Tailwind CSS
- Icons by Lucide React

---

**Built by Lucky C. Ofili** — Product Manager | Consultant | Founder
