import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { Link } from "react-router"

function Home() {
    return (
        <>
            <Navbar />
            <section className="min-h-screen w-full flex items-center bg-linear-to-r from-white to-tranparent md:mt-0">
                <div className=" max-w-5/6 mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center">
                   <div
                        className="absolute inset-0 bg-cover bg-center scale-105"
                        style={{
                            backgroundImage:
                                'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600)',
                        }}
                    />
                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-regular text-custom-navy leading-tight mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ducimus.
                        </h1>
                        <p className="text-lg md:text-lg  font-light leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta reiciendis dolorum harum labore enim animi minus repellat at excepturi? Laudantium dolores delectus facilis minus sunt totam.
                        </p>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center md:justify-start mb-4 w-fit mx-auto md:mx-0">
                            <Link to="/services" className="border border-custom-navy text-custom-navy px-6 py-3 w-fit mx-auto rounded-3xl font-medium hover:bg-custom-navy hover:text-white transition">
                                Explore our services
                            </Link>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="images/Strivos-heroimage.png"
                            alt="Hero"
                            className="w-full max-w-md md:max-w-lg object-contain"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home
