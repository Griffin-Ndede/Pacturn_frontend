import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function AboutUs() {
  const pillars = [
    { number: "01", title: "Independence", description: "Unaffiliated with any bank, fund manager, custodian or financial group. Trust without conflict." },
    { number: "02", title: "Fiduciary primacy", description: "The interests of beneficiaries take precedence over commercial convenience, in every decision." },
    { number: "03", title: "Institutional discipline", description: "Documented processes, codified governance, and an audit trail worthy of regulatory scrutiny." },
    { number: "04", title: "Regulatory rigour", description: "Operating within the letter and spirit of the laws governing trusteeship in each jurisdiction we serve." },
    { number: "05", title: "Member alignment", description: "Trustee meetings, reporting and communications structured around the people for whom assets are held." },
    { number: "06", title: "Pan-African outlook", description: "A mandate that extends across East and Southern Africa, with local sensibility at every appointment." },
    { number: "07", title: "Quiet excellence", description: "We measure ourselves not by visibility but by the durability of the trusts we hold." },
  ];

  return (
    <>
      <Navbar />

      {/* FOUNDING PURPOSE */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl text-custom-navy">
            Founding Purpose
          </h1>

          <p className="mt-6 max-w-3xl font-light">
            Trusteeship, properly separated.
          </p>

          <div className="w-16 h-0.5 bg-custom-gold mt-2" />

          <div className="mt-10 space-y-6  max-w-3xl font-light">
            <p>
              In every mature capital market, trusteeship is a distinct profession — held at arm&apos;s length from the parties whose interests it must reconcile. Across much of Africa, that separation has been imperfect.
            </p>
            <p>
              Trustee duties have too often been bundled with custody, asset management, or sponsor relationships, eroding the independence that gives the office its meaning.
            </p>
            <p>
              Pacturn Africa was incorporated in Kenya to address this directly. We act exclusively as a corporate trustee. We hold no funds under management, take no custody mandates, and earn no commissions from the parties whose conduct we are appointed to oversee.
            </p>
          </div>
          <blockquote className="border-l-2 border-custom-gold pl-6 mt-14 max-w-3xl font-light">
            <p className="type-quote">
              The office of trustee is a quiet one. It is also, when properly held, the most consequential office in the financial chain.
            </p>
          </blockquote>

        </div>
      </section>

      {/* INDEPENDENCE BAND */}
      <section className="relative bg-custom-navy text-white py-28 overflow-hidden">

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEjYm17Si6-wM-2rdKHoKVtu1r_bsxk56uA&s"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-custom-navy/70" />

        <div className="max-w-6xl mx-auto px-6 relative">

          <h1 className="text-4xl  text-custom-gold">
            Independence Positioning
          </h1>

          <p className=" mt-6 text-white max-w-3xl font-light">
            Not a subsidiary. Not an affiliate. Not a side business.
          </p>

          <div className="w-16 h-0.5 bg-custom-gold mt-2" />

          <div className="mt-14 grid md:grid-cols-3 gap-10">

            <div>
              <p className=" text-custom-gold font-light text-xl">No banking ties</p>
              <p className=" mt-3 text-white font-light">
                We are not part of, nor owned by, any banking group operating in our markets.
              </p>
            </div>

            <div>
              <p className=" text-custom-gold font-light text-xl">No asset management</p>
              <p className=" mt-3 text-white font-light">
                We do not manage funds, set investment mandates, or earn performance fees.
              </p>
            </div>

            <div>
              <p className=" text-custom-gold font-light text-xl">No custody business</p>
              <p className=" mt-3 text-white font-light">
                We do not custody assets. The separation of trustee from custodian is preserved by design.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PILLARS */}
      <section className="py-28">
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
      </section>      
<Footer/>
    </>
  );
}

export default AboutUs;