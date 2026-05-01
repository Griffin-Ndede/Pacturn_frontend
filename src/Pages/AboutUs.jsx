import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function AboutUs() {
  return (
    <>
      <Navbar />

      {/* FOUNDING PURPOSE */}
      <section className="py-36 md:py-44">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl text-custom-navy leading-tight tracking-tight">
            An institution defined by what it does not do.
          </h1>

          <div className="w-12 h-0.5 bg-custom-gold mt-6" />

          <p className="mt-10 text-base md:text-lg max-w-2xl font-light leading-relaxed text-gray-700">
            Pacturn Africa is an independent corporate trustee. We were not
            created as an extension of a financial institution. We were created
            to stand separate from one.
          </p>
        </div>
      </section>

      {/* MARKET REALITY */}
      <section className="relative bg-custom-navy text-white py-28 overflow-hidden">
        {/* Background */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEjYm17Si6-wM-2rdKHoKVtu1r_bsxk56uA&s"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-custom-navy/80" />

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Header */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl text-custom-gold mb-4">
              Market reality
            </h2>

            <p className="text-base md:text-lg text-white/80 font-light">
              In the current market structure:
            </p>

            <div className="w-16 h-0.5 bg-custom-gold mt-4" />
          </div>

          {/* Points */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Trustees are commonly affiliated with banks",
              "Those banks may act as custodian",
              "The same institutions may also act as fund manager or lender",
            ].map((item, index) => (
              <div key={index}>
                <span className="text-custom-gold text-sm font-semibold block mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base text-white/90 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mt-20 max-w-3xl border-l-2 border-custom-gold pl-6">
            <p className="text-base text-white/90 leading-relaxed font-light">
              This concentration of roles creates inherent conflicts. It is a
              structural feature of the market, not a failure of individual
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* POSITION + STRUCTURE */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {/* OUR POSITION */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl text-custom-navy mb-4">
              Our position
            </h2>
            <div className="w-12 h-0.5 bg-custom-gold mb-6" />
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
              We operate outside that structure. We hold no competing mandate in
              relation to the assets we oversee.
            </p>
          </div>

          {/* WHAT THIS ALLOWS */}
          <div>
            <h2 className="text-2xl md:text-3xl text-custom-navy mb-6">
              What this allows
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                "Independent oversight of fund managers.",
                "Unrestricted challenge of administrators and sponsors.",
                "Objective decision-making in contested situations.",
              ].map((item, index) => (
                <div key={index}>
                  <span className="text-sm text-custom-gold font-semibold mb-2 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-gray-700 leading-relaxed font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FIDUCIARY DUTY */}
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl text-custom-navy mb-4">
              Fiduciary Duty
            </h2>
            <div className="w-12 h-0.5 bg-custom-gold mb-6" />
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light">
              As trustee, our duty is to act in the interests of beneficiaries.
              Where those interests conflict with those of a sponsor, manager, or
              counterparty, we are required to prioritise the beneficiaries. We
              do so without qualification.
            </p>
          </div>

          {/* INSTITUTIONAL CHARACTERISTICS */}
          <div>
            <h2 className="text-2xl md:text-3xl text-custom-navy mb-6">
              Institutional Characteristics
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                "Independent",
                "Authoritative",
                "Precise",
                "Considered",
                "Pan-African in scope",
              ].map((item, index) => (
                <div
                  key={index}
                  className="btn-outline px-4 py-4 text-center text-base font-light"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;




{/* <div className="w-16 h-0.5 bg-custom-gold mt-2" /> */ }

{/* <div className="mt-10 space-y-6  max-w-3xl font-light">
            <p>
              In every mature capital market, trusteeship is a distinct profession — held at arm&apos;s length from the parties whose interests it must reconcile. Across much of Africa, that separation has been imperfect.
            </p>
            <p>
              Trustee duties have too often been bundled with custody, asset management, or sponsor relationships, eroding the independence that gives the office its meaning.
            </p>
            <p>
              Pacturn Africa was incorporated in Kenya to address this directly. We act exclusively as a corporate trustee. We hold no funds under management, take no custody mandates, and earn no commissions from the parties whose conduct we are appointed to oversee.
            </p>
          </div> */}
{/* <blockquote className="border-l-2 border-custom-gold pl-6 mt-14 max-w-3xl font-light">
            <p className="type-quote">
              The office of trustee is a quiet one. It is also, when properly held, the most consequential office in the financial chain.
            </p>
          </blockquote> */}

// const pillars = [
//   { number: "01", title: "Independence", description: "Unaffiliated with any bank, fund manager, custodian or financial group. Trust without conflict." },
//   { number: "02", title: "Fiduciary primacy", description: "The interests of beneficiaries take precedence over commercial convenience, in every decision." },
//   { number: "03", title: "Institutional discipline", description: "Documented processes, codified governance, and an audit trail worthy of regulatory scrutiny." },
//   { number: "04", title: "Regulatory rigour", description: "Operating within the letter and spirit of the laws governing trusteeship in each jurisdiction we serve." },
//   { number: "05", title: "Member alignment", description: "Trustee meetings, reporting and communications structured around the people for whom assets are held." },
//   { number: "06", title: "Pan-African outlook", description: "A mandate that extends across East and Southern Africa, with local sensibility at every appointment." },
//   { number: "07", title: "Quiet excellence", description: "We measure ourselves not by visibility but by the durability of the trusts we hold." },
// ];
{/* PILLARS */ }
{/* <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl text-custom-gold font-light">
            Seven Founding Pillars
          </h2>

          <p className="text-lg font-light mt-6 max-w-2xl">
            The principles upon which the institution was constituted.
          </p>

          <div className="w-16 h-0.5 bg-custom-gold mt-2" />

          <div className="mt-16 divide-y border-y font-light">

            {pillars.map((p) => (
              <div
                key={p.number}
                className="grid md:grid-cols-12 gap-6 py-10 hover:bg-gray-100 transition px-2"
              >
                <div className="md:col-span-1 text-custom-gold font-heading text-xl">
                  {p.number}
                </div>
                <div className="md:col-span-3 font-heading text-lg text-custom-navy">
                  {p.title}
                </div>
                <div className="md:col-span-8 ">
                  {p.description}
                </div>
              </div>
            ))}

          </div>

        </div>
      </section> */}