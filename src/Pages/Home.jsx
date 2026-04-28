import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router";
import { ArrowRight , Mail, Phone} from "lucide-react";
import { services } from "../data/services";

function Home() {
const servicesdisplayed = services.slice(0, 3);
    return (
        <>
            <Navbar />
            <section className="w-full md:h-[90vh] h-fit flex items-center justify-center bg-white md:bg-transparent">
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
                    <div className="relative max-w-7xl mx-auto py-16 md:py-24 md:px-0 px-6 md:mt-0 mt-24 text-center md:text-left">

                        <h1 className="mx-auto md:mx-0 md:w-1/2 text-3xl md:text-5xl text-custom-navy leading-tight mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ducimus.
                        </h1>

                        <p className="text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta reiciendis dolorum harum labore enim animi minus repellat at excepturi? Laudantium dolores delectus facilis minus sunt totam.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <Link
                                to="/services"
                                className="btn-primary hover:bg-custom-gold inline-flex items-center gap-3 font-light"
                            >
                                Explore our services
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="mb-14 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-semibold text-custom-navy mb-4">
                            Our Services
                        </h2>
                        <div className="w-16 h-0.5 bg-custom-gold mb-6"></div>

                        <p className="text-gray-600 leading-relaxed">
                            Pacturn Africa provides independent trustee and fiduciary services
                            across a range of regulated financial structures.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-3 gap-12">

                        {servicesdisplayed.map((service, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 p-8 rounded-3xl hover:border-custom-gold transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-custom-navy mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <Link
                                    to="/services"
                                    className="btn-primary"
                                >
                                    Learn more
                                </Link>
                            </div>
                        ))}

                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-14 flex justify-center">
                        <Link
                            to="/services"
                            className="btn-primary"
                        >
                            View All Services
                        </Link>
                    </div>

                </div>
            </section>
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-14 items-center">

                    {/* Text Content */}
                    <div className="md:col-span-6 order-2 md:order-1">

                        <h1 className="text-3xl md:text-4xl text-custom-navy">
                            Research Desk
                        </h1>

                        <p className="font-light mt-4">
                            A standing programme of trustee thought, written for the institutional reader.
                        </p>

                        <div className="w-16 h-0.5 bg-custom-gold mt-6" />

                        <p className="font-light text-lg mt-8">
                            The Pacturn Africa Research Desk publishes structured papers on trusteeship,
                            governance, and African capital markets — concise, source-disciplined, and
                            freely accessible to institutional stakeholders.
                        </p>

                        <Link
                            to="/research-desk"
                            className="btn-primary bg-custom-teal hover:bg-custom-gold mt-10 inline-flex items-center gap-3 font-light"
                        >
                            Visit the Research Desk
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                    {/* Visual */}
                    <div className="md:col-span-6 order-1 md:order-2">
                        <div className="relative">
                            <img
                                src="https://globallawexperts.com/wp-content/uploads/2022/10/colleagues-are-stress-talking-about-the-finance-re-2022-12-16-03-39-19-utc-scaled.jpg"
                                alt="Open journal symbolising the Pacturn Research Desk"
                                className="w-full h-full object-cover border border-gray-100"
                                loading="lazy"
                            />
                            <div className="hidden md:block absolute -bottom-6 -left-6 btn-secondary px-6 py-4 text-sm font-light">
                                Vol. I — Inaugural Series
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-28 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-14 items-start">
                    {/* Left Content */}
                    <div className="md:col-span-7">
                        <h2 className="text-3xl md:text-4xl text-custom-navy">
                            Contact us
                        </h2>
                        <p className="font-light mt-4">
                            Engage with Pacturn Africa
                        </p>
                        <div className="w-16 h-0.5 bg-custom-gold mt-6" />
                        <p className="font-light mt-8 max-w-xl">
                            For institutional enquiries, fiduciary appointments, and partnership discussions,
                            please contact us through the channels below. All communications are handled
                            with confidentiality and professional discretion.
                        </p>
                        {/* Contact details */}
                        <div className="mt-10 space-y-5">
                            <div className="flex items-center gap-3 text-custom-navy font-light">
                                <Mail size={24} strokeWidth={1.5} absoluteStrokeWidth className="text-custom-gold" />
                                <span className="">info@pacturn.africa</span>
                            </div>
                            <div className="flex items-center gap-3 text-custom-navy font-light">
                                <Phone size={24} strokeWidth={1.5} absoluteStrokeWidth className="text-custom-gold" />
                                <span className="">+254 XXX XXX XXX</span>
                            </div>
                        </div>
                    </div>

                    {/* Right CTA Panel */}
                    <div className="md:col-span-5">
                        <div className="border border-gray-200 p-10 bg-gray-50 rounded-3xl">
                            <p className="text-2xl text-custom-gold mb-6">
                                Submit an Enquiry
                            </p>
                            <p className="font-light mb-8">
                                Provide a brief overview of your institution or requirement.
                                Our team will respond within a structured review process.
                            </p>
                            <Link
                                to="/contact"
                                className="btn-primary w-fit mx-auto  text-center justify-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;