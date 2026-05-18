import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";

function AboutUs() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-36 md:pt-44 pb-28 border-b border-gray-200">

        {/* Background Pattern */}
        <div className=" inset-0 opacity-[0.03] fixed">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[80px_80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-16 item-center">

            {/* Left */}
            <div className="lg:col-span-7">

              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                About Pacturn Africa
              </p>

              <h1 className="text-3xl md:text-4xl text-custom-navy tracking-tight mt-6 max-w-4xl">
                Built for one purpose.
              </h1>

              <div className="w-20 h-px bg-custom-gold mt-10" />

              <div className="mt-12 space-y-8 max-w-4xl">

                <p className="text-base md: text-custom-navy leading-relaxed font-light">
                  Pacturn Africa is a corporate trustee institution.
                  <span className="font-medium">
                    {" "}That is the whole of what we are.
                  </span>
                </p>

                <p className=" text-custom-navy leading-loose font-light">
                  Not a trustee function within a bank. Not a fiduciary
                  service line within a financial group. A standalone
                  institution whose only mandate is governance.
                </p>

                <p className=" text-custom-navy leading-loose font-light">
                  Pacturn Africa carries no asset management mandate, holds no
                  assets in custody, and has no lending interest in any
                  structure where it acts as trustee.
                </p>

                <p className=" text-custom-navy leading-relaxed font-medium border-l-2 border-custom-gold pl-6">
                  These are not policy commitments. They are structural facts.
                </p>

              </div>

            </div>

            {/* Right */}
            <div className="lg:col-span-5">

              <div className="relative overflow-hidden rounded-4xl h-135">

                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                  alt="Institutional governance"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-custom-navy/70 via-custom-navy/20 to-transparent" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MARKET STRUCTURE */}
      <section className="relative bg-custom-navy py-32 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-custom-navy/90" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-5xl">
            <p className="text-base text-white/80  tracking-wider font-light">
              The Market Structure
            </p>
            <h2 className="text-3xl md:text-4xl text-white leading-tight mt-6">
              The trustee market was built inside financial institutions.
            </h2>
            <div className="w-20 h-px bg-custom-gold mt-10" />
            <div className="mt-12 space-y-4">
              <p className=" text-white leading-loose font-light">
                The corporate trustee market in Kenya was built around financial
                institutions. Banks became trustees because they already held
                the assets — in custody, in management, on their balance sheets
                as loans.
              </p>
              <p className=" text-white leading-loose font-light">
                That concentration created an inherent conflict. The trustee
                whose duty is to challenge a fund manager or administrator is
                commercially dependent on that same relationship.
              </p>
              <p className=" text-white leading-loose font-light">
                It is not a question of competence. It is a question of
                structure. Most trustees in this market operate within that
                constraint because they were built within it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="py-32 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-20">

            {/* LEFT SIDEBAR */}
            <div className="lg:col-span-4">

              <div className="sticky top-32">

                <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                  Institutional Position
                </p>

                <h2 className="text-4xl text-custom-navy leading-tight mt-6">
                  Independence is a structural requirement.
                </h2>

                <div className="w-16 h-px bg-custom-gold mt-8" />

                <p className=" text-custom-navy leading-relaxed font-light mt-8">
                  Pacturn Africa was incorporated outside the commercial
                  structure that defines most trustee institutions.
                </p>

                <div className="mt-12 flex flex-col gap-4">

                  <Link
                    to="/mandates"
                    className="btn-primary w-fit"
                  >
                    View Our Mandates
                  </Link>

                  <Link
                    to="/team"
                    className="btn-secondary w-fit"
                  >
                    Meet the Team
                  </Link>

                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-8 space-y-24">

              {/* OUR POSITION */}
              <div className="border-b border-gray-200 pb-16">

                <h1 className="text-2xl text-custom-navy">
                  Our Position
                </h1>



                <div className="w-12 h-px bg-custom-gold my-2" />

                <div className="space-y-6 text-custom-navy leading-loose font-light">

                  <p>
                    We were incorporated to operate outside that structure.
                    Pacturn Africa has no affiliated bank, no fund manager
                    parent, and no custodian affiliate. In every mandate we
                    hold, our interest is singular: the interest of the
                    beneficiaries.
                  </p>

                  <p>
                    That means we can do what an independent trustee is
                    required to do — challenge fund managers without commercial
                    constraint, scrutinise administrators without institutional
                    hesitation, and act in contested situations without
                    reference to a wider group interest.
                  </p>

                </div>

              </div>

              {/* FIDUCIARY DUTY */}
              <div className="border-b border-gray-200 pb-16">

                <h1 className="text-2xl text-custom-navy">
                  Fiduciary Duty
                </h1>

                <div className="w-12 h-px bg-custom-gold my-2" />

                <div className="space-y-6 text-custom-navy leading-loose font-light">

                  <p>
                    The trustee&apos;s legal duty is to the beneficiaries.
                    Where the interests of beneficiaries conflict with those of a sponsor, manager, or administrator — the trustee is required to act for the beneficiaries.
                  </p>

                  <p>
                    Not to balance competing interests. Not to find a commercial accommodation. To act for the beneficiaries.
                    Pacturn Africa enforces that duty without qualification.
                  </p>

                </div>

              </div>

              {/* HOW WE OPERATE */}
              <div className="border-b border-gray-200 pb-16">

                <h1 className="text-2xl text-custom-navy">
                  How We Operate
                </h1>

                <div className="w-12 h-px bg-custom-gold my-2" />

                <div className="space-y-6 text-custom-navy leading-loose font-light">

                  <p>
                    Every trustee decision is documented and minuted. Every file is maintained in inspection-ready condition as a standing operational standard — not assembled ahead of a regulatory visit.
                  </p>

                  <p>
                    Our governance framework was built to satisfy the most demanding scrutiny: regulatory review, legal challenge, and independent audit. We apply that standard as a matter of course.
                  </p>

                </div>

              </div>

              {/* INSTITUTIONAL CONTINUITY */}
              <div>

                <h1 className="text-2xl text-custom-navy">
                  Institutional Continuity
                </h1>

                <div className="w-12 h-px bg-custom-gold my-2" />

                <div className="space-y-6 text-custom-navy leading-loose font-light">

                  <p>
                    Pacturn Africa is structured so the institution does not
                    depend on any single director or officer.
                    Operating standards are documented and role-agnostic.
                    Governance authority rests with the Board and the
                    institution.
                  </p>

                  <p>
                    That is what makes a corporate trustee different from an
                    individual trustee — and what makes institutional continuity
                    real rather than claimed.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default AboutUs;