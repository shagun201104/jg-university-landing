"use client";

import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Laptop,
  MapPin,
  Menu,
  Play,
  Sparkles,
  Star,
  UsersRound,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = ["About", "Programs", "Strengths", "Stories", "Contact"];

const stats = [
  ["1965", "Education legacy"],
  ["17+", "Colleges managed by ACT"],
  ["30+", "Future-facing programs"],
  ["24/7", "Campus access culture"]
];

const programs = [
  {
    title: "Management & Commerce",
    detail: "BBA, iMBA, MBA, B.Com, M.Com and international trade pathways.",
    icon: BriefcaseBusiness,
    tone: "bg-red-50 text-red-700"
  },
  {
    title: "Computing & Engineering",
    detail: "BCA, MCA, B.Tech, AI, data science, full stack and cyber security.",
    icon: Laptop,
    tone: "bg-sky-50 text-sky-700"
  },
  {
    title: "Science, Law & Research",
    detail: "Forensic science, food and lifestyle science, law and doctoral study.",
    icon: GraduationCap,
    tone: "bg-emerald-50 text-emerald-700"
  }
];

const strengths = [
  "NEP 2020 and UGC compliant academic structure",
  "Industry use-cases, capstone projects and internships",
  "Faculty mentors from academia and the professional world",
  "Interdisciplinary learning across management, tech and science",
  "R&D, incubation, IIoT lab and tech-enabled library access",
  "Curriculum shaped around employment and entrepreneurship"
];

const testimonials = [
  {
    quote:
      "JG gave me a nurturing environment where I could explore my passions freely and build discipline for my career.",
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer"
  },
  {
    quote:
      "The blend of practical learning, internships and academic rigor helped me build a strong professional foundation.",
    name: "Parth Raval",
    role: "Creative Producer, Viacom 18"
  },
  {
    quote:
      "The BCA program gave me real-world exposure and the confidence to grow in the technology industry.",
    name: "Yatendra Sinh Joddha",
    role: "Technical Lead, TCS"
  }
];

const campusImages = [
  "/campus/campus-entrance.jpg",
  "/campus/campus-building.jpg",
  "/campus/campus-life.jpg"
];

const partners = ["IBM", "ISRO", "SAC", "Yudiz", "Coding Pro", "Asia ACT"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="JG University home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-red-600 text-lg font-black text-white">
            JG
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.2em] text-slate-950">
              JG University
            </span>
            <span className="hidden text-xs font-semibold text-slate-500 sm:block">
              Excellence by choice
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-slate-600 transition hover:text-red-600"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-red-600 md:inline-flex"
        >
          Apply now
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-3 max-w-7xl rounded-3xl p-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-slate-700"
            >
              {item}
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function SectionIntro({ kicker, title, copy }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-red-600">
        {kicker}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-lg leading-8 text-slate-600">{copy}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <section className="relative min-h-screen px-4 pt-32 md:pt-36">
        <div className="absolute inset-x-0 top-0 -z-10 h-[78vh] bg-[linear-gradient(135deg,#fff_0%,#f9fafb_38%,#fee2e2_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="animate-reveal-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-bold text-red-700 shadow-sm">
              <Sparkles size={16} />
              New age tech-driven university in Ahmedabad
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-7xl">
              JG University for future-ready learners.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              A modern academic ecosystem where industry practice, technology,
              mentorship and interdisciplinary learning meet to shape ambitious
              students into confident professionals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-600/25 transition hover:-translate-y-1 hover:bg-red-700"
              >
                Explore programs
                <ArrowRight size={18} />
              </a>
              <a
                href="#stories"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:border-slate-300"
              >
                <Play size={18} />
                Watch walkthrough
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <img
              src="/campus/campus-entrance.jpg"
              alt="JG University campus entrance"
              className="h-[520px] w-full rounded-[2rem] object-cover object-center shadow-2xl shadow-slate-950/20"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 p-5 shadow-2xl backdrop-blur">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map(([value, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-black text-slate-950">{value}</p>
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-float-card absolute -left-3 top-14 hidden rounded-3xl bg-slate-950 p-5 text-white shadow-2xl md:block">
              <BookOpenCheck className="mb-4 text-red-400" size={28} />
              <p className="max-w-[12rem] text-sm font-bold leading-6">
                Knowledge beyond books, designed around real industry challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-red-600">
              About JG University
            </p>
            <h2 className="text-balance text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              An academic campus built around practical ambition.
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-8 text-slate-600">
            <p>
              Sponsored by ASIA Charitable Trust, JG University brings decades
              of educational legacy into a sharper, tech-enabled university
              experience. The redesigned page highlights the university as a
              place for applied learning, career movement and self-discovery.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {["UGC approved", "Industry aligned", "Experiential pedagogy", "Career focused"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <CheckCircle2 className="text-red-600" size={20} />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-slate-950 px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="Programs"
            title="Choose a pathway that keeps pace with tomorrow."
            copy="From commerce and management to AI, forensics, cyber security and doctoral research, the university experience is designed for both employment and entrepreneurship."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {programs.map(({ title, detail, icon: Icon, tone }) => (
              <article
                key={title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-2 hover:bg-white/[0.1]"
              >
                <div className={`mb-8 grid h-14 w-14 place-items-center rounded-2xl ${tone}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{detail}</p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-red-300">
                  View admissions
                  <ArrowRight className="transition group-hover:translate-x-1" size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="strengths" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="Strengths"
            title="Everything a modern learner expects, arranged for momentum."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-7 grid h-11 w-11 place-items-center rounded-full bg-red-600 text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-black leading-7 text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid grid-cols-2 gap-5">
            {campusImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`JG University campus view ${index + 1}`}
                className={`h-72 w-full rounded-[2rem] object-cover shadow-xl ${
                  index === 0 ? "col-span-2" : ""
                }`}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] bg-white p-8 shadow-xl md:p-12">
            <Building2 className="mb-8 text-red-600" size={42} />
            <h2 className="text-4xl font-black tracking-tight text-slate-950">
              Campus life with the right kind of energy.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Labs, library, incubation spaces and a connected campus culture
              give students the infrastructure to build, test, question and grow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["IIoT Lab", "R&D + Incubation", "Wi-Fi Campus", "Tech Library"].map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="overflow-hidden border-y border-slate-200 bg-white py-7">
          <div className="marquee-track flex w-max gap-4">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="grid h-16 min-w-44 place-items-center rounded-full border border-slate-200 bg-slate-50 px-8 text-sm font-black uppercase tracking-[0.18em] text-slate-600"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            kicker="Testimonials"
            title="Alumni stories that feel earned, not advertised."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((story) => (
              <article key={story.name} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-200/70">
                <div className="mb-6 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg leading-8 text-slate-700">"{story.quote}"</p>
                <div className="mt-8 border-t border-slate-100 pt-5">
                  <p className="font-black text-slate-950">{story.name}</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">{story.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr]">
            <div className="p-8 md:p-14">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-red-300">
                Admissions CTA
              </p>
              <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">
                Start building the version of your future that can compete.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                This landing page is structured for a complete walkthrough: hero,
                responsive navigation, program cards, animated partner strip,
                testimonials and a polished CTA.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:vikas@codingjr.online"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-red-700"
                >
                  Submit project
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1"
                >
                  Back to top
                </a>
              </div>
            </div>
            <div className="bg-white p-8 text-slate-950 md:p-14">
              <h3 className="text-2xl font-black">Submission checklist</h3>
              <div className="mt-7 grid gap-4">
                {[
                  "GitHub Repository Link",
                  "Hosted Link",
                  "Demo Video, 2-5 minutes",
                  "Full Name",
                  "Phone Number",
                  "Email to vikas@codingjr.online"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                    <CheckCircle2 className="shrink-0 text-red-600" size={20} />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black text-slate-950">JG University</p>
            <p className="mt-2 flex items-center gap-2 text-sm font-bold text-slate-500">
              <MapPin size={16} />
              Ahmedabad, Gujarat
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-bold text-slate-600">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#strengths">Strengths</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="text-sm font-semibold text-slate-500">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
