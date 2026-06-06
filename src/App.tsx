import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Sparkles,
  Target,
  LineChart,
  Users,
  Compass,
  Rocket,
  Lightbulb,
  Layers,
  BarChart3,
  GitBranch,
  Database,
  Globe,
  TrendingUp,
  Calendar,
  Quote,
  Send,
  CheckCircle2,
  Download,
  ChevronRight,
} from "lucide-react";

/* Custom brand icons (lucide removed brand logos) */
const Linkedin = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const Twitter = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const Github = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { value: "8+", label: "Years of Experience" },
  { value: "30+", label: "Products Shipped" },
  { value: "15+", label: "Founders Advised" },
  { value: "4.9★", label: "Client Satisfaction" },
];

const EXPERIENCE = [
  {
    role: "Program Manager",
    company: "Kode10x",
    location: "Lagos, Nigeria",
    period: "2022 — Present",
    type: "Full-time",
    description:
      "Leading cross-functional product squads to deliver consumer-facing programs across ed-tech and digital services. Owning the roadmap end-to-end — from discovery to delivery — while aligning engineering, design and growth around measurable outcomes.",
    highlights: [
      "Defined program strategy that scaled active users by 3.2× in 12 months.",
      "Introduced OKR-driven product rituals across 4 teams, cutting release cycle time by 40%.",
      "Partnered with founders on go-to-market for two new product verticals.",
    ],
  },
  {
    role: "Marketing Manager",
    company: "The Place Nigeria",
    location: "Lagos, Nigeria",
    period: "2019 — 2022",
    type: "Full-time",
    description:
      "Owned the brand, growth and customer-experience agenda for one of Lagos' fastest-growing hospitality & lifestyle brands. Translated customer insight into productised offers and loyalty programs.",
    highlights: [
      "Launched a loyalty platform that grew repeat-visit rate by 58%.",
      "Led a cross-channel campaign that drove ₦120M+ in incremental revenue in Q4 2021.",
      "Built the voice-of-customer loop that now informs menu and service design.",
    ],
  },
  {
    role: "Product & Growth Consultant",
    company: "SkillHub Africa",
    location: "Remote",
    period: "2018 — 2019",
    type: "Contract",
    description:
      "Advised early-stage founders on product-market fit, positioning and unit economics for a cohort of learning-tech startups emerging from the SkillHub accelerator.",
    highlights: [
      "Mentored 12 founders; 3 went on to raise pre-seed within 9 months.",
      "Designed the cohort's product-discovery playbook still in use today.",
    ],
  },
  {
    role: "Education",
    company: "University of Lagos",
    location: "Lagos, Nigeria",
    period: "2013 — 2017",
    type: "BSc Economics",
    description:
      "Graduated with a Bachelor of Science in Economics — foundation for a data-driven, incentive-aware approach to product and business.",
  },
];

const SERVICES = [
  {
    icon: Compass,
    title: "Product Strategy",
    description:
      "From 0→1 vision to 1→N scaling. I help founders turn fuzzy ideas into focused roadmaps grounded in real customer problems and viable unit economics.",
    bullets: ["Vision & positioning", "Roadmap design", "Opportunity scoring"],
  },
  {
    icon: Rocket,
    title: "Founder Advisory",
    description:
      "Fractional PM & strategic advisor for early-stage founders. Weekly working sessions to unblock product, hiring and go-to-market decisions.",
    bullets: ["1:1 founder coaching", "Board-readiness", "Investor narrative"],
  },
  {
    icon: LineChart,
    title: "Growth & GTM",
    description:
      "Design and run the experiments that move your metrics. Activation, retention, pricing, lifecycle — built around a learning loop, not a spray of tactics.",
    bullets: ["Experiment design", "Retention loops", "Pricing strategy"],
  },
  {
    icon: Users,
    title: "Team & Ops",
    description:
      "Set up the product operating system — rituals, tooling, hiring bar — so your team can ship fast without burning out. Works with seed → Series B.",
    bullets: ["Product ritualss", "Hiring & interviewing", "Tooling stack"],
  },
  {
    icon: Lightbulb,
    title: "Discovery Sprints",
    description:
      "Two-to-four week engagements to de-risk a new product or feature. Customer interviews, prototyping, and a clear go/no-go recommendation.",
    bullets: ["User research", "Rapid prototyping", "Go / no-go memos"],
  },
  {
    icon: Target,
    title: "Consulting for Founders",
    description:
      "Strategic partner — not just a deck. I sit in the trenches with founders on the hardest calls: what to build next, when to hire, how to price, when to say no.",
    bullets: ["Embedded advisory", "Decision frameworks", "Co-pilot mode"],
  },
];

const SKILLS = [
  { name: "Product Strategy", icon: Compass, level: 95 },
  { name: "Product Operations", icon: Layers, level: 92 },
  { name: "User Research", icon: Users, level: 88 },
  { name: "Financial Analysis", icon: BarChart3, level: 90 },
  { name: "Roadmap & OKRs", icon: Target, level: 93 },
  { name: "Data & Analytics", icon: LineChart, level: 85 },
  { name: "Web Project Mgmt", icon: Globe, level: 89 },
  { name: "Databases / SQL", icon: Database, level: 78 },
  { name: "Agile / Scrum", icon: GitBranch, level: 90 },
  { name: "Growth Experiments", icon: TrendingUp, level: 86 },
];

const TOOLKIT = [
  "Notion", "Linear", "Jira", "Figma", "Amplitude", "Mixpanel",
  "Looker", "SQL", "Google Sheets", "Slack", "Loom", "Miro",
  "Whimsical", "Dovetail", "Hotjar", "Webflow",
];

const PROJECTS = [
  {
    title: "Kode10x Learning Platform",
    tag: "EdTech · 0→1",
    description:
      "Led product from blank canvas to 20k+ active learners in 14 months. Owned discovery, MVP scoping, pricing, and the retention playbook.",
    metric: "20k+ MAU",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "The Place Loyalty Engine",
    tag: "Hospitality · Growth",
    description:
      "Designed and shipped a tiered loyalty product that lifted repeat-visit frequency and gave the ops team a predictive demand signal.",
    metric: "+58% repeat visits",
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "SkillHub Founder Playbook",
    tag: "Consulting · Advisory",
    description:
      "Authored the product-discovery playbook used by 3 cohorts of African founders. Now open-sourced within the SkillHub network.",
    metric: "12 founders mentored",
    accent: "from-sky-500 to-indigo-500",
  },
  {
    title: "Pricing & Packaging Redesign",
    tag: "SaaS · Strategy",
    description:
      "Led a 6-week pricing review for a B2B SaaS client — rebuilt tiers around jobs-to-be-done and lifted ARPU by 34% with zero churn.",
    metric: "+34% ARPU",
    accent: "from-fuchsia-500 to-pink-500",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Lucky has that rare mix — he can sit with engineers in the morning and pitch investors in the afternoon. He made our product roadmap actually feel like a strategy, not a wishlist.",
    name: "Damilare Ayekobinu",
    role: "Head of Agency & Connect, Kode10x",
  },
  {
    quote:
      "Working with Lucky felt like hiring a co-founder. He pushed us to kill half our roadmap and double down on what actually moved retention. Best money we've spent.",
    name: "Founder, SkillHub Cohort '23",
    role: "EdTech Startup, Lagos",
  },
  {
    quote:
      "Structured, calm, and brutally honest. Lucky ran our discovery sprint and the final memo became the basis of our seed round deck.",
    name: "Muomaife David",
    role: "Lead Product Designer",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 COMPONENTS                                 */
/* -------------------------------------------------------------------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm">
              LC
            </span>
            <span className="hidden sm:block font-display font-semibold text-white group-hover:text-emerald-400 transition-colors">
              Lucky<span className="text-emerald-400">.</span>Ofili
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm text-slate-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-200 p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 pt-2 border-t border-white/5 mt-2">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-3 mx-4 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950"
              >
                Let's talk <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for advisory & consulting — Q2 2026
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Hi, I'm <span className="text-gradient">Lucky Ofili</span>.
              <br />
              I turn ideas into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">products</span>
                <span className="absolute inset-x-0 bottom-2 h-3 bg-emerald-500/30 -z-0 rounded-sm" />
              </span>{" "}
              founders love.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed">
              Product Manager, Consultant & Founder based in Lagos, Nigeria. I help
              ambitious founders and teams ship products that users actually pay for —
              through sharp strategy, ruthless prioritisation, and calm execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors hover-lift"
              >
                View my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-emerald-400/50 transition-colors hover-lift"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500">Follow</span>
              <div className="h-px w-10 bg-slate-700" />
              <a href="https://www.linkedin.com/in/lucky-c-ofili-032465109/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Github className="h-5 w-5" /></a>
              <a href="mailto:hello@luckyofili.com" className="hover:text-emerald-400 transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Right: profile card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/30 via-teal-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-slate-950">
                      LO
                    </div>
                    <div>
                      <div className="text-white font-semibold">Lucky C. Ofili</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> Lagos, Nigeria
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                    PM · Advisor
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {STATS.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
                      <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Currently</div>
                  <div className="mt-1 text-sm text-white font-medium">Program Manager @ Kode10x</div>
                  <div className="mt-2 text-xs text-slate-400 leading-relaxed">
                    Building products at the intersection of education, consumer, and growth in Africa.
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 py-2.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors">
                    Book a call <Calendar className="h-3.5 w-3.5" />
                  </a>
                  <a href="https://www.linkedin.com/in/lucky-c-ofili-032465109/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-white hover:bg-white/10 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 hidden md:flex justify-center">
          <div className="flex flex-col items-center gap-2 text-slate-500 text-xs">
            <span className="uppercase tracking-widest">Scroll</span>
            <div className="h-10 w-px bg-gradient-to-b from-emerald-500 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Product Strategy", "Founder Advisory", "GTM & Growth", "Discovery Sprints",
    "OKRs & Roadmaps", "Pricing & Packaging", "Retention Loops", "Team Building",
    "0→1 Product Launch", "Consulting for Founders",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-slate-950/50 py-6">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-10 text-slate-400">
            <span className="font-display text-xl font-semibold tracking-tight">{t}</span>
            <Sparkles className="h-4 w-4 text-emerald-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <SectionLabel>About</SectionLabel>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                Product-minded economist. <span className="text-gradient">Founder-friendly operator.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm Lucky — a Product Manager with over <span className="text-white font-semibold">8 years</span> of
              experience shipping programs, products, and growth loops across ed-tech, hospitality,
              and consumer services. I studied <span className="text-white font-semibold">Economics at the University of
              Lagos</span>, and that training still colours how I think: incentives, trade-offs, and
              systems over features.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Today, as <span className="text-white font-semibold">Program Manager at Kode10x</span>, I lead the product
              operating system that lets our squads ship weekly. Alongside that, I work as a{" "}
              <span className="text-emerald-400 font-semibold">consultant and advisor to founders</span> —
              especially those building for African markets — helping them sharpen positioning,
              price with intent, and build teams that don't need heroism to ship.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: MapPin, label: "Based in", value: "Lagos, Nigeria" },
                { icon: Briefcase, label: "Role", value: "Program Manager, Kode10x" },
                { icon: GraduationCap, label: "Education", value: "BSc Economics, UNILAG" },
                { icon: Sparkles, label: "Focus", value: "0→1, Growth, Advisory" },
              ].map((i) => (
                <div key={i.label} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <i.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">{i.label}</div>
                    <div className="mt-0.5 text-sm text-white font-medium">{i.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#services" className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-semibold">
                See how I can help <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            A career built on <span className="text-gradient">shipping</span> & <span className="text-gradient">advising</span>.
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            From running growth at a Lagos hospitality brand to leading programs at an ed-tech
            company — every role has taught me something about what makes products stick.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative sm:pl-14">
                <div className="absolute left-0 top-2 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border-2 border-emerald-500/40">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="group rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-950 p-6 sm:p-8 hover-lift hover:border-emerald-500/30">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">{exp.period}</div>
                      <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                      <div className="mt-1 text-slate-300 flex items-center gap-2 text-sm">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400 flex items-center gap-1"><MapPin className="h-3 w-3" /> {exp.location}</span>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300 font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <p className="mt-4 text-slate-300 leading-relaxed">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionLabel>Services · Consultant & Founder</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              How I partner with <span className="text-gradient">founders</span>.
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              Not a generic consulting deck. I embed with founders and teams as a working partner —
              hands-on, opinionated, and accountable for outcomes.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 p-7 hover-lift hover:border-emerald-500/30 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/15 transition-colors" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    0{i + 1} / 0{SERVICES.length}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <SectionLabel>Skills & Toolkit</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              The craft behind the <span className="text-gradient">consulting</span>.
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              A blend of product craft, analytical rig, and operator experience. I bring the
              frameworks — and the judgement to know when to ignore them.
            </p>

            <div className="mt-8">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Toolkit</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {TOOLKIT.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {SKILLS.map((s) => (
                <div key={s.name} className="rounded-xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-950 p-5 hover-lift hover:border-emerald-500/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">{s.name}</span>
                        <span className="text-xs text-emerald-400 font-semibold">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Products, programs & <span className="text-gradient">playbooks</span>.
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              A snapshot of work across ed-tech, hospitality, SaaS, and founder advisory.
              Full case studies shared under NDA on request.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-950 overflow-hidden hover-lift hover:border-emerald-500/30"
            >
              <div className={`h-40 bg-gradient-to-br ${p.accent} opacity-80 relative overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-slate-950/70 backdrop-blur border border-white/20 px-3 py-1 text-[11px] text-white font-semibold uppercase tracking-wider">
                    {p.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="rounded-lg bg-slate-950/80 backdrop-blur px-3 py-1.5 text-sm font-bold text-white">
                    {p.metric}
                  </div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.description}</p>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-slate-500">Case study</span>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                    On request <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            Kind words from <span className="text-gradient">founders</span> & teammates.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-950 p-7 hover-lift hover:border-emerald-500/30"
            >
              <Quote className="h-8 w-8 text-emerald-500/40" />
              <blockquote className="mt-4 text-slate-300 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/5">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-slate-950 text-sm">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 border-t border-white/5">
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Let's build something <span className="text-gradient">worth shipping</span>.
            </h2>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              Whether you're a founder looking for a product co-pilot, an operator needing a
              sounding board, or a team ready to level up — my inbox is open. I reply within
              48 hours.
            </p>

            <div className="mt-10 space-y-4">
              <a href="mailto:hello@luckyofili.com" className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-emerald-500/30 transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Email</div>
                  <div className="text-sm text-white font-medium">hello@luckyofili.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/lucky-c-ofili-032465109/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-emerald-500/30 transition-colors">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">LinkedIn</div>
                  <div className="text-sm text-white font-medium">/in/lucky-c-ofili-032465109</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Location</div>
                  <div className="text-sm text-white font-medium">Lagos, Nigeria · Available remotely</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8"
          >
            <h3 className="font-display text-2xl font-bold text-white">Send a message</h3>
            <p className="mt-1 text-sm text-slate-400">Tell me about your product or challenge.</p>

            <div className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Name</label>
                  <input
                    required
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">I'm a…</label>
                <select className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                  <option className="bg-slate-900">Founder / CEO</option>
                  <option className="bg-slate-900">Product Leader</option>
                  <option className="bg-slate-900">Consultant / Advisor</option>
                  <option className="bg-slate-900">Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Message</label>
                <textarea
                  required
                  rows={5}
                  className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none"
                  placeholder="What are you building? What do you need help with?"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-70 transition-colors"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message sent — I'll reply soon
                  </>
                ) : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs">
            LC
          </span>
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Lucky C. Ofili. Crafted in Lagos.
          </div>
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-sm">
          <a href="https://www.linkedin.com/in/lucky-c-ofili-032465109/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          <span>·</span>
          <a href="mailto:hello@luckyofili.com" className="hover:text-emerald-400 transition-colors">Email</a>
          <span>·</span>
          <a href="#home" className="hover:text-emerald-400 transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] uppercase tracking-widest font-semibold text-emerald-400">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    APP                                     */
/* -------------------------------------------------------------------------- */

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden noise">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
