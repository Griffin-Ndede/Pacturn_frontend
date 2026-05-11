import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mandates } from "../data/mandates";
import { Link } from "react-router";

function Mandates() {

    const appointmentProcess = [
        {
            step: "01",
            title: "Initial conversation",
            description:
                "We discuss the mandate, structure, and requirements. If we are not the right fit, we will say so.",
        },
        {
            step: "02",
            title: "Written proposal",
            description:
                "We set out our proposed governance approach, scope, and fee structure in writing.",
        },
        {
            step: "03",
            title: "Appointment and onboarding",
            description:
                "We execute the appointment documentation and begin the governance onboarding.",
        },
    ];
    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="relative  flex items-center justify-center py-32 overflow-hidden h-200">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url(https://img.freepik.com/premium-photo/nairobi-city-county-kenyas-capital-cityscapes-skyline-skyscrapers-highrise-buildings-architecture_257688-271.jpg?semt=ais_hybrid&w=740&q=80)",
                    }}
                />

                {/* Overlay (very important for readability) */}
                <div className="absolute inset-0 bg-custom-navy/75" />

                {/* Content */}
                <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

                    <h1 className="text-4xl md:text-6xl text-custom-gold mb-10">
                        Mandates we accept
                    </h1>

                    <p className="font-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-loose">
                        We accept appointment as fiduciary. Each mandate carries defined legal duties and full accountability to the beneficiaries.
                        This is not a service catalogue. It is a statement of the mandates we are equipped to govern, and what governing them requires of us.
                    </p>
                </div>
            </section>

            {/* SERVICES LIST */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-6">

                    {mandates.map((mandate, index) => (
                        <div
                            key={index}
                            className="grid md:grid-cols-12 gap-12 py-10 border-b-2 border-custom-gold last:border-none items-center"
                        >
                            {/* TEXT */}
                            <div
                                className={`md:col-span-7 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"
                                    }`}
                            >
                                <h1 className="font-light text-2xl md:text-3xl mb-2 text-custom-navy">
                                    {mandate.title}
                                </h1>
                                <div className="w-20 h-0.5 bg-custom-gold" />

                                <p className="text-sm font-light text-white bg-custom-gold inline-block mt-4 px-3 py-1 rounded-full">
                                    {mandate.category}
                                </p>
                                <p className="font-light mt-6 leading-loose text-custom-navy">
                                    {mandate.description}
                                </p>

                                <ul className="mt-6 space-y-2">
                                    {mandate.features && mandate.features.map((feature, i) => (
                                        <li key={i} className="font-light text-custom-gold">
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                                {mandate.note && (
                                    <p className="font-light text-sm mt-4 text-custom-navy border-l border-custom-gold pl-6">
                                        {mandate.note}
                                    </p>
                                )}
                                <a
                                    href={mandate.cta.link}
                                    className="btn-primary mt-8 inline-block"
                                >
                                    {mandate.cta.label}
                                </a>
                            </div>

                            {/* IMAGE */}
                            <div
                                className={`md:col-span-5 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"
                                    }`}
                            >
                                <img
                                    src={mandate.image}
                                    alt={mandate.title}
                                    loading="lazy"
                                    className="w-fit h-96 rounded-3xl object-cover border border-gray-200"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </section>
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="mb-14">
                        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                            Appointment Process
                        </p>

                        <h2 className="text-3xl md:text-4xl text-custom-navy mt-4">
                            How an appointment works
                        </h2>

                        <div className="w-16 h-0.5 bg-custom-gold mt-6" />
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {appointmentProcess.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-3xl p-8 bg-gray-50"
                            >
                                <p className="text-base text-custom-gold ">
                                    {item.step}
                                </p>
                                <h3 className="text-lg font-medium text-custom-navy mt-4">
                                    {item.title}
                                </h3>
                                <p className="text-custom-navy font-light leading-relaxed mt-4">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 flex justify-start">
                        <Link
                            to="/contact"
                            className="btn-primary"
                        >
                            Begin a Conversation
                        </Link>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default Mandates;