import { useParams, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Link2, Check, Clock, User } from "lucide-react";
import { papers } from "../data/researchDeskData";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";



/* ── Table of Contents ── */
function TableOfContents({ sections, activeIndex }) {
  return (
  <nav className="sticky top-28 hidden xl:block">
  <p className="text-[10px] uppercase tracking-[0.3em] text-custom-navy mb-4 font-medium">
    Contents
  </p>

  <ol className="space-y-3 border-l border-gray-100 pl-4">
    {sections.map((s, i) => (
      <li key={i}>
        <a
          href={`#section-${i}`}
          className={`
            group flex items-start gap-3 text-sm transition-all duration-200 relative
            ${activeIndex === i ? "text-custom-teal" : "text-gray-400"}
          `}
        >
          {/* Active indicator line */}
          <span
            className={`
              absolute -left-4.25 top-1.5 h-0.5 rounded-full transition-all duration-300
              ${activeIndex === i ? "bg-custom-teal w-4" : "bg-slate-300 w-2"}
            `}
          />

          {/* Text */}
          <span
            className={`
              leading-snug transition-colors duration-200
              group-hover:text-custom-navy
            `}
          >
            {s.heading}
          </span>
        </a>
      </li>
    ))}
  </ol>
</nav>
  );
}

/* ── Share Bar (copy-link only) ── */
function ShareBar() {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="sticky top-28 hidden lg:flex flex-col items-center gap-3">
      <p className="text-[10px] uppercase tracking-[0.3em] text-custom-teal mb-1 font-medium [writing-mode:vertical-lr] rotate-180">
        Share
      </p>
      <button
        onClick={copyLink}
        title="Copy link"
        className={`
    w-9 h-9 rounded-full border flex items-center justify-center 
    transition-all duration-200 hover:scale-110 hover:cursor-pointer relative
    ${copied
            ? "text-white border-custom-gold bg-custom-gold"
            : "text-white border-custom-teal bg-custom-teal"
          }
  `}
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />}
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-custom-gold text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
      <div className="w-px h-12 bg-custom-teal mt-1" />
    </div>
  );
}

/* ── Related Papers ── */
function RelatedPapers({ current, allPapers }) {
  const related = allPapers
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="border-t border-teal-100 pt-16 pb-20 max-w-3xl mx-auto px-6">
      <h3 className="text-xs uppercase tracking-[0.3em] text-custom-navy mb-8 font-medium">
        Continue Reading
      </h3>
      <div className="grid sm:grid-cols-3 gap-6">
        {related.map((p) => (
          <a key={p.slug} href={`/research/${p.slug}`} className="group block">
            <div className="overflow-hidden rounded-xl mb-3 aspect-4/3 bg-gray-100">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-custom-teal mb-1">
              {p.category}
            </p>
            <h4 className="text-sm font-semibold text-custom-navy leading-snug group-hover:text-custom-teal transition-colors line-clamp-2">
              {p.title}
            </h4>
            <p className="text-xs text-custom-navy mt-1 flex items-center gap-1">
              <Clock size={11} />
              {p.readTime}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ── Main Component ── */
export default function ResearchDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  const paper = papers.find((p) => p.slug === slug);

  useEffect(() => {
    if (!paper) return;
    const observers = paper.content.map((_, i) => {
      const el = document.getElementById(`section-${i}`);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(i); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [paper]);

  if (!paper) {
    return (
      <>
        <Navbar />
        <div className="pt-40 text-center">
          <h1 className="text-2xl font-semibold text-custom-navy">Paper not found</h1>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 text-custom-teal hover:underline text-sm inline-flex items-center gap-1"
          >
            <ArrowLeft size={14} /> Go back
          </button>
        </div>
      </>
    );
  }

  const wordCount = paper.content.reduce((acc, s) => acc + (s.body?.split(" ").length || 0), 0);
  const estimatedMinutes = Math.ceil(wordCount / 200);

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-36 pb-0 max-w-4xl mx-auto px-6">
        {/* Back navigation */}
        <Link to="/research-desk"
          className="inline-flex items-center gap-2 text-xs text-custom-navy hover:text-custom-teal transition-colors mb-8 group hover:cursor-pointer"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">
            <ArrowLeft size={16} />
          </span>
          Research Desk
        </Link>

        {/* Category + meta pill row */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase bg-custom-gold text-white">
            {paper.category}
          </span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-custom-navy">{paper.date}</span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-custom-navy inline-flex items-center gap-1">
            <Clock size={11} />
            {estimatedMinutes} min read
          </span>
        </div>

        <h1 className="text-4xl md:text-[3.25rem] font-heading text-custom-navy leading-[1.1] tracking-tight">
          {paper.title}
        </h1>

        {/* Author row */}
        <div className="flex items-center gap-3 mt-6">
          <div className="w-9 h-9 rounded-full bg-custom-teal flex items-center justify-center text-white text-sm font-bold shrink-0">
            {paper.author?.[0] ?? <User size={14} />}
          </div>
          <div>
            <p className="font-medium text-custom-navy">{paper.author}</p>
            <p className="text-sm text-custom-navy">Research Author</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mt-10 rounded-3xl overflow-hidden">
          <img
            src={paper.image}
            alt={paper.title}
            className="w-full h-105 md:h-130 object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none rounded-3xl" />
        </div>
      </section>

      {/* ── BODY LAYOUT ── */}
      <div className="max-w-6xl mx-auto px-6 pb-4 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[48px_1fr_220px] xl:grid-cols-[48px_1fr_240px] gap-x-10">

          {/* Left: share bar */}
          <div className="hidden lg:block">
            <ShareBar />
          </div>

          {/* Center: article body */}
          <article className="min-w-0">
            {/* Abstract callout */}
            {paper.abstract && (
              <blockquote className="border-l-4 border-teal-400 pl-5 py-1 mb-10 text-gray-600 italic text-lg leading-relaxed font-light bg-teal-50/40 rounded-r-xl pr-5">
                {paper.abstract}
              </blockquote>
            )}

            <div className="space-y-12">
              {paper.content.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="scroll-mt-28"
                >
                  <h2 className="text-2xl font-heading text-custom-navy mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  <p className="text-custom-navy leading-[1.85] font-light text-[1.0625rem]">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            {paper.tags?.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-teal-50 text-custom-teal border border-teal-100 hover:bg-teal-100 transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author card */}
            <div className="mt-14 p-6 rounded-3xl border border-custom-teal flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-custom-teal flex items-center justify-center text-white font-bold text-lg shrink-0">
                {paper.author?.[0] ?? <User size={16} />}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-custom-teal mb-1">Written by</p>
                <p className="font-semibold text-custom-navy text-base">{paper.author}</p>
                <p className="text-sm text-custom-navy mt-1 leading-relaxed">
                  A contributor to the Research Desk, exploring emerging ideas at the intersection of technology, policy, and society.
                </p>
              </div>
            </div>

            {/* Mobile share row */}
            <div className="mt-8 flex items-center gap-4 lg:hidden">
              <span className="text-xs text-custom-navy">Share:</span>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="w-8 h-8 rounded-full border border-custom-teal flex items-center justify-center text-custom-teal hover:bg-custom-gold transition-all"
                title="Copy link"
              >
                <Link2 size={14} />
              </button>
            </div>
          </article>

          {/* Right: table of contents */}
          <div className="hidden lg:block">
            <TableOfContents sections={paper.content} activeIndex={activeSection} />
          </div>
        </div>
      </div>

      {/* ── RELATED PAPERS ── */}
      <RelatedPapers current={paper} allPapers={papers} />
    </>
  );
}