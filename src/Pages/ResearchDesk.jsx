import { useState } from "react";
import { papers } from "../data/researchDeskData";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import Footer from "../Components/Footer";

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
      <section className=" bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-16">

          {/* Core Statement */}
          <div>
            <h2 className="text-2xl md:text-3xl text-custom-navy mb-4">
              Core Statement
            </h2>
            <div className="w-12 h-0.5 bg-custom-gold mb-6" />
            <p className="text-base font-light text-custom-navy leading-relaxed">
              The Research Desk is not a content function.
              It is the formal research output of Pacturn Africa&apos;s institutional practice — original analysis on fiduciary governance, regulatory developments, and governance standards across African markets.
              We publish because the institutions that appoint trustees read governance research. Pension boards. Law firms. Scheme administrators. Regulators. Our research is written for that audience, at that level.
            </p>
          </div>
          {/* Access CTA */}
          {/* <div className="border-l-2 border-custom-gold pl-6">
            <h3 className="text-xl text-custom-navy mb-2">
              Access
            </h3>
            <p className="text-base font-light text-custom-navy mb-6">
              All publications are available for download.
            </p>

            <Link
              to="#"
              className="text-custom-navy font-medium"
            >
              View Publications →
            </Link>
          </div> */}

        </div>
      </section>

      {/* PAPERS */}
      <section className="">

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
      <section className="max-w-6xl mx-auto py-20">
        <div>
          <h2 className="text-2xl md:text-3xl text-custom-navy mb-4">
            Publication Standard
          </h2>

          <div className="w-12 h-0.5 bg-custom-gold mb-6" />

          <p className="text-base font-light text-custom-navy leading-relaxed">
            Each paper is structured across seven defined sections, referenced to primary Kenyan law and regulation, and written for a professional audience. It carries a practitioner note, an implementation checklist, and a legal review flag on all primary source citations.
          </p>

          <p className="text-base font-light text-custom-navy leading-relaxed mt-6">
            We publish on a defined cadence. Each paper is complete before it is released.
          </p>
        </div>

        {/* Research Alerts */}
        <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 mt-10">

          <h2 className="text-xl text-custom-navy mb-2">
            Research Alerts
          </h2>

          <p className="text-sm text-gray-600 mb-6 font-light">
            To receive new publications by email as they are released:
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <input
              type="email"
              placeholder="Email address"
              className="flex-1 border-b border-gray-300 bg-transparent py-3 outline-none font-light"
            />

            <button className="btn-primary">
              Subscribe to Research Alerts
            </button>

          </div>

          <p className="text-xs text-gray-500 mt-4">
            We do not send marketing communications. Research alerts only.
          </p>

        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ResearchDesk;