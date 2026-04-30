import { useState } from "react";
import { papers } from "../data/researchDeskData";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";

function ResearchDesk() {
  const [search, setSearch] = useState("");

  const filtered = papers.filter((paper) =>
    paper.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-12 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative max-w-3xl mx-auto px-6 text-center">

          {/* Label */}
          <p className="text-xs uppercase tracking-[0.25em] text-custom-teal">
            Research Desk
          </p>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl mt-6 text-custom-navy leading-tight">
            A standing programme of trustee thought.
          </h1>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-custom-gold mx-auto mt-6" />

          {/* Description */}
          <p className="mt-8 text-lg font-light max-w-xl mx-auto text-gray-700 leading-relaxed">
            Structured publications on trusteeship, governance, and African capital markets.
          </p>

          {/* Search Box */}
          <div className="mt-12">
            <div className="relative max-w-xl mx-auto">

              <input
                type="text"
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-b border-gray-300 focus:border-custom-navy outline-none py-4 text-lg font-light bg-transparent"
              />

              {/* Bottom accent line */}
              <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-custom-gold transition-all duration-300 focus-within:w-full" />

            </div>
          </div>

        </div>
      </section>

      {/* PAPERS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {filtered.map((paper, index) => (
            <div
              key={paper.id}
              className="grid md:grid-cols-2 gap-10 items-center group border-b pb-12"
            >

              {/* IMAGE */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-84 rounded-3xl object-cover transition duration-500"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-custom-teal">
                  {paper.category} • {paper.date}
                </p>

                <h2 className="font-heading text-2xl mt-3 text-custom-navy">
                  {paper.title}
                </h2>

                <p className="mt-4 text-gray-600 font-light leading-relaxed">
                  {paper.excerpt}
                </p>

                <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
                  <span>{paper.readTime}</span>

                  <Link
                    to={`/research/${paper.slug}`}
                    className="text-custom-navy font-medium"
                  >
                    Read Paper →
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default ResearchDesk;