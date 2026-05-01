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
      <section className="relative pt-36 pb-12 overflow-hidden h-[70vh] flex items-center justify-center">

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg)",
          }}
        />

        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

        <div className="relative max-w-3xl mx-auto px-3 text-center flex flex-col items-center">

          <p className="text-2xl uppercase tracking-[0.25em] text-custom-teal">
            Research Desk
          </p>

          <h1 className="text-4xl md:text-5xl mt-6 text-custom-navy leading-tight">
            Governance, published
          </h1>

        </div>

      </section>

      {/* GOVERNANCE SECTION (NEW) */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* Core Statement */}
          <div>
            <h2 className="text-2xl md:text-3xl text-custom-navy mb-4">
              Core Statement
            </h2>
            <div className="w-12 h-0.5 bg-custom-gold mb-6" />
            <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
              The Research Desk is part of how Pacturn Africa operates as an institution.
              It is not a marketing function.
            </p>
          </div>

          {/* Purpose + Audience Grid */}
          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h3 className="text-xl text-custom-navy mb-4">Purpose</h3>
              <p className="text-base font-light text-gray-700 mb-4">
                We publish research to:
              </p>
              <ul className="space-y-3 text-base font-light text-gray-700">
                <li>• Examine fiduciary practice in African markets</li>
                <li>• Analyse regulatory developments</li>
                <li>• Define governance standards</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl text-custom-navy mb-4">Audience</h3>
              <p className="text-base font-light text-gray-700 mb-4">
                Our research is read by:
              </p>
              <ul className="space-y-3 text-base font-light text-gray-700">
                <li>• Pension trustees and boards</li>
                <li>• Law firms and advisors</li>
                <li>• Fund managers and administrators</li>
                <li>• Regulators</li>
              </ul>

              <p className="mt-6 text-base font-light text-gray-700">
                These are the same institutions that appoint trustees.
              </p>
            </div>

          </div>

          {/* Publication Discipline */}
          <div>
            <h3 className="text-xl text-custom-navy mb-4">
              Publication Discipline
            </h3>
            <p className="text-base font-light text-gray-700 mb-4">
              We publish on a defined cadence. Each paper is:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {["Structured", "Referenced", "Defensible"].map((item, i) => (
                <div key={i} className={` p-2 text-center ${i % 2 != 0 ? "btn-primary" : "btn-secondary" }`}>
                  <span className="text-sm text-white font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-base font-light text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Access CTA */}
          <div className="border-l-2 border-custom-gold pl-6">
            <h3 className="text-xl text-custom-navy mb-2">
              Access
            </h3>
            <p className="text-base font-light text-gray-700 mb-6">
              All publications are available for download.
            </p>

            <Link
              to="#"
              className="text-custom-navy font-medium"
            >
              View Publications →
            </Link>
          </div>

        </div>
      </section>

      {/* PAPERS */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          {/* SEARCH HEADER */}
          <div className="max-w-2xl mx-auto text-center mb-16">

            <h2 className="text-2xl md:text-3xl text-custom-navy mb-4">
              Publications
            </h2>

            <p className="text-base font-light text-gray-600 mb-10">
              Search structured research, governance papers, and institutional analysis.
            </p>

            {/* Search */}
            <div className="relative">

              <input
                type="text"
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-b border-gray-300 focus:border-custom-navy outline-none py-4 text-base font-light bg-transparent"
              />

              <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-custom-gold transition-all duration-300 group-focus-within:w-full" />

            </div>

          </div>

          {/* PAPERS LIST */}
          <div className="space-y-24">

            {filtered.map((paper, index) => (
              <div
                key={paper.id}
                className="grid md:grid-cols-2 gap-12 items-center border-b border-gray-200 pb-12"
              >

                {/* IMAGE */}
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-80 rounded-2xl object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>

                  <p className="text-xs uppercase tracking-[0.2em] text-custom-teal">
                    {paper.category} • {paper.date}
                  </p>

                  <h3 className="text-2xl md:text-3xl mt-3 text-custom-navy leading-snug">
                    {paper.title}
                  </h3>

                  <p className="mt-5 text-base font-light text-gray-600 leading-relaxed">
                    {paper.excerpt}
                  </p>

                  <div className="mt-6 flex justify-between items-center text-sm text-gray-500">

                    <span>{paper.readTime}</span>

                    <Link
                      to={`/research/${paper.slug}`}
                      className="text-custom-navy font-medium hover:underline"
                    >
                      Read Paper →
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}

export default ResearchDesk;