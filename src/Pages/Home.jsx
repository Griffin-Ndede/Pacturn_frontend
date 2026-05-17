import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { mandates } from "../data/mandates";

function Home() {
    const mandatesdisplayed = mandates.slice(0, 6);

    const principles = [
        {
            number: "01",
            title: "No affiliated interests.",
            description: "We hold no mandate that competes with any structure we govern.",
        },
        {
            number: "02",
            title: "Fiduciary duty, enforced.",
            description:
                "Where interests diverge, we act for the beneficiaries.",
        },
        {
            number: "03",
            title: "Inspection-ready governance. ",
            description:
                "Every decision documented, minuted, and available for review as standard.",
        },
    ];
    return (
        <>
            <Navbar />
            <section className="w-full h-screen flex items-center justify-center bg-white md:bg-transparent">
                <div className="relative w-full h-full flex items-center overflow-hidden">
                    {/* Background Image (ONLY md and above) */}
                    <div
                        className="hidden md:block absolute inset-0 bg-cover bg-center scale-105"
                        style={{
                            backgroundImage:
                                "url('https://cdn.prod.website-files.com/670543794cce277c5f8c849c/670d256b7783d72adf9547cd_Untitled%20(76).png')",
                        }}
                    />
                    {/* Overlay (ONLY md and above) */}
                    <div className="hidden md:block absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
                    {/* Content */}
                    <div className="relative max-w-7xl py-16 md:py-24 px-6 md:mt-0 mt-24 md:ml-36 text-left">

                        <h1 className="w-full md:w-1/2 text-4xl md:text-6xl text-custom-navy leading-tight mb-2">
                            Independent by design.
                        </h1>
                        <p className="text-lg text-custom-navy leading-relaxed mb-10 max-w-xl font-semibold">
                            Kenya&apos;s dedicated corporate trustee institution.
                        </p>
                        <p className="text-base leading-relaxed mb-8 max-w-2xl text-custom-navy font-light">
                            Pacturn Africa acts as fiduciary across pension schemes, collective investment structures, real estate investment trusts, and corporate mandates.
                            Pacturn Africa carries no asset management mandate, holds no assets in custody, and has no lending interest in any structure where it acts as trustee.
                            <span className="font-semibold text-custom-gold">
                                These are not policy commitments. They are structural facts.
                            </span>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Link
                                to="/contact"
                                className="btn-primary font-light w-fit  md:mx-0 mx-auto"
                            >
                                Request a mandate proposal
                            </Link>
                            <Link
                                to="/services"
                                className="btn-outline font-light w-fit  md:mx-0 mx-auto"
                            >
                                View our mandates
                            </Link>
                        </div>
                        <div className="pt-8">
                            <p className="text-xs md:text-xs  text-custom-navy leading-7 mx-w-xl font-light">
                                Incorporated in Kenya under the Companies Act 2015
                                <span className="mx-2">•</span>
                                RBA Corporate Trustee Licence — Application filed May 2026
                                <span className="mx-2">•</span>
                                Suite 9, Upper Hill, Nairobi
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="mb-12 mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl text-custom-navy mb-6">
                            Institutional Statement
                        </h2>
                        <p className="text-lg text-custom-navy font-light leading-relaxed">
                            Most corporate trustees in Kenya operate within financial groups that manage, custody, or lend against the same assets they oversee as trustee. The conflict is structural — not a question of intent, but of how the market was built.
                            Pacturn Africa was incorporated outside that structure. Our only interest in any mandate we hold is the interest of the beneficiaries.
                            Where that interest conflicts with a sponsor, fund manager, or administrator — we act for the beneficiaries. Every time, without qualification.
                            <br /><br />
                            {/* <span className="font-semibold text-custom-navy">
                                Pacturn Africa was established to remove it.
                            </span> */}
                        </p>
                    </div>

                    {/* Practice Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {principles.map((item, index) => (
                            <div key={index}>
                                {/* <span className="text-lg text-custom-gold font-semibold mb-2 block">
                                    {item.number}
                                </span> */}
                                <h3 className="text-xl font-semibold text-custom-navy mb-2">
                                    {item.title}
                                </h3>
                                <p className="leading-relaxed font-light text-custom-navy">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Heading */}
                    <div className="mb-14 max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-custom-navy mb-4">
                            Mandates
                        </h2>
                        <div className="w-16 h-0.5 bg-custom-gold mb-6 mx-auto"></div>

                        <p className="text-gray-600 leading-relaxed">
                            We accept appointment across the following mandates
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="flex flex-col  divide-y w-fit mx-auto divide-custom-gold  overflow-hidden">

                        {mandatesdisplayed.map((mandate, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 hover:bg-gray-50 transition-all duration-300"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-custom-navy">
                                        {mandate.title}
                                    </h3>

                                    {/* {
                                        <p className="text-sm text-gray-600 leading-relaxed mt-2 max-w-3xl">
                                            {mandate.description}
                                        </p>
                                    } */}
                                </div>

                                <Link
                                    to="/mandates"
                                    className="btn-primary w-fit"
                                >
                                    Learn more
                                </Link>
                            </div>
                        ))}

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-14 flex justify-center">
                        <Link
                            to="/mandates"
                            className="btn-primary"
                        >
                            View all mandates
                        </Link>
                    </div>

                </div>
            </section>
            <section className="py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-14 items-start">
                    {/* Text Content */}
                    <div className="md:col-span-5">

                        <p className="text-sm tracking-[0.18em] uppercase text-gray-500">
                            Research Desk
                        </p>

                        <h2 className="text-3xl md:text-4xl text-custom-navy mt-4 leading-tight">
                            Institutional research on fiduciary governance across African markets.
                        </h2>

                        <p className="font-light text-lg text-gray-700 mt-8 leading-relaxed">
                            The Research Desk publishes original analysis on fiduciary governance across African markets.
                            It is not a content function. It is institutional output — read by the same pension boards,
                            law firms, and regulators that appoint trustees.
                        </p>

                        <div className="w-16 h-0.5 bg-custom-gold mt-10" />

                        <Link
                            to="/research-desk"
                            className="btn-secondary flex w-fit items-center gap-3 mt-10"
                        >
                            View Research Desk
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                    {/* Visual + Publication */}
                    <div className="md:col-span-7">

                        <div className="relative">
                            <img
                                src="https://globallawexperts.com/wp-content/uploads/2022/10/colleagues-are-stress-talking-about-the-finance-re-2022-12-16-03-39-19-utc-scaled.jpg"
                                alt="Research and fiduciary governance discussion"
                                className="w-full h-84 object-cover rounded-3xl shadow-3xl"
                                loading="lazy"
                            />

                            <div className="btn-secondary hidden md:block absolute -bottom-6 left-6 bg-white border border-gray-200 px-6 py-4 text-sm font-light rounded-2xl shadow-lg">
                                Vol. I — Inaugural Series
                            </div>
                        </div>

                        {/* Publication Preview */}
                        <div className="mt-14 border-t border-gray-200 pt-10">

                            <p className="text-sm uppercase tracking-[0.16em] text-gray-500">
                                Latest publication — May 2026
                            </p>
                            <h3 className="text-2xl text-custom-navy mt-4 leading-snug">
                                Fiduciary Independence in African Capital Markets
                            </h3>
                            <p className="font-light text-gray-700 mt-4 leading-relaxed max-w-2xl">
                                An institutional analysis of fiduciary independence, governance conflicts, and trustee accountability within emerging African pension and investment structures.
                            </p>
                            <button className="btn-primary mt-8">
                                Notify Me on Publication
                            </button>

                        </div>

                    </div>

                </div>
            </section>
            <section className="py-12 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-5">

                            <div className=" rounded-2xl p-10 h-full flex flex-col justify-between">

                                <div>

                                    <h1 className="text-3xl  text-custom-navy">
                                        Contact Us
                                    </h1>

                                    <p className="font-light text-base  leading-relaxed mt-8">
                                        For trustee appointments, institutional referrals, governance mandates,
                                        or fiduciary consultations, contact Pacturn Africa directly.
                                    </p>

                                    <div className="w-32 h-px bg-custom-gold mt-4" />

                                    {/* Contact Info */}
                                    <div className="mt-10 space-y-6">

                                        <div className="flex items-center gap-5">

                                            <Mail
                                                size={22}
                                                strokeWidth={1.5}
                                                className="text-custom-gold"
                                            />

                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Email
                                                </p>

                                                <p className="text-custom-navy text-lg font-light mt-1">
                                                    info@pacturn.africa
                                                </p>
                                            </div>

                                        </div>

                                        <div className="flex items-center gap-5">

                                            <Phone
                                                size={22}
                                                strokeWidth={1.5}
                                                className="text-custom-gold"
                                            />

                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Telephone
                                                </p>

                                                <p className="text-custom-navy text-lg font-light mt-1">
                                                    +254 XXX XXX XXX
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <Link
                                    to="/contact"
                                    className="btn-primary mt-10 w-fit"
                                >
                                    Contact Us
                                </Link>

                            </div>

                        </div>

                        {/* Right Image */}
                        <div className="lg:col-span-7">

                            <div className="relative overflow-hidden rounded-4xl h-84">

                                <img
                                    src="https://arrowsecurity.com/wp-content/uploads/2024/09/Arrow-New-Website_Contact-Us_Header-Photo_AdobeStock_822313633_Extended-scaled.jpg"
                                    alt="Institutional meeting and governance engagement"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;