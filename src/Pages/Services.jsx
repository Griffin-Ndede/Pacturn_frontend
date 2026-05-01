import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { services } from "../data/services";

function Services() {
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
                <div className="absolute inset-0 bg-custom-navy/90" />

                {/* Content */}
                <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

                    <h1 className="text-4xl md:text-6xl text-custom-gold mb-10">
                        Mandates we accept
                    </h1>

                    <p className="font-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-loose">
                        We do not "offer services" in the conventional sense. We accept appointment as fiduciary. Each mandate carries defined legal duties and accountability.
                    </p>
                    {/* 
                    <div className="w-32 h-0.5 bg-custom-gold mx-auto mt-6" />

                    <p className="font-light text-lg md:text-xl mt-8 max-w-3xl mx-auto text-white leading-loose">
                        Pacturn Africa provides independent trustee and fiduciary services
                        across pension schemes, investment structures, corporate transactions,
                        and private trusts. Delivered with institutional discipline and regulatory alignment.
                    </p> */}
                </div>

            </section>

            {/* SERVICES LIST */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-6">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="grid md:grid-cols-12 gap-12 py-20 border-b-2 border-custom-gold last:border-none items-center"
                        >

                            {/* TEXT */}
                            <div
                                className={`md:col-span-7 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"
                                    }`}
                            >
                                <h1 className="font-light text-3xl mt-">
                                    {service.title}
                                </h1>
                                <p className="text-sm font-light text-white bg-custom-gold inline-block mt-4 px-3 py-1 rounded-full">
                                    {service.category}
                                </p>
                                <div className="w-12 h-0.5 bg-custom-gold mt-5" />
                                <p className="font-light mt-6">
                                    {service.description}
                                </p>
                                {/* <p className="font-light mt-4">
                                    {service.details}
                                </p> */}
                                <ul className="mt-6 space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="font-light text-custom-gold">
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={service.cta.link}
                                    className="btn-primary mt-8 inline-block"
                                >
                                    {service.cta.label}
                                </a>
                            </div>

                            {/* IMAGE */}
                            <div
                                className={`md:col-span-5 ${index % 2 !== 0 ? "md:order-1" : "md:order-2"
                                    }`}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-fit h-96 rounded-3xl object-cover border border-gray-200"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Services;