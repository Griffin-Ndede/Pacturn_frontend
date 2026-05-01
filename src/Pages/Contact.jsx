import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 text-center">
        <p className="text-lg uppercase tracking-[0.3em] text-custom-teal">
          Get in touch with us!
        </p>

        <h1 className="text-4xl md:text-5xl font-heading text-custom-navy mt-6 leading-tight">
          Contact Pacturn Africa
        </h1>

        <p className="mt-6 text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
          For trustee appointments, institutional referrals, and regulatory engagement.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* IMAGE BLOCK */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Research collaboration"
              className="w-full h-64 object-cover"
            />
          </div>

       <div className="space-y-8">

  {/* Email */}
  <div className="flex items-start gap-3">
    <Mail className="w-5 h-5 text-custom-teal mt-1" />
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-custom-teal mb-1">
        Email
      </p>
      <p className="text-base text-custom-navy font-light">
        info@pacturn.africa
      </p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-3">
    <Phone className="w-5 h-5 text-custom-teal mt-1" />
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-custom-teal mb-1">
        Phone
      </p>
      <p className="text-base text-custom-navy font-light">
        +254 xxx xxx xxxx
      </p>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-start gap-3">
    <MapPin className="w-5 h-5 text-custom-teal mt-1" />
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-custom-teal mb-1">
        Location
      </p>
      <p className="text-base text-custom-navy font-light">
        Nairobi, Kenya
      </p>
    </div>
  </div>

</div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative">

          {/* background image layer */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-5">
            <img
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* form card */}
          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-lg">

            <h2 className="text-xl font-heading text-custom-navy mb-6">
              Send a message
            </h2>

            {submitted && (
              <div className="mb-6 text-sm text-teal-700 bg-teal-50 border border-teal-100 px-4 py-3 rounded-lg">
                Message sent successfully. We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-gray-200 focus:border-custom-teal outline-none py-3 bg-transparent"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-gray-200 focus:border-custom-teal outline-none py-3 bg-transparent"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border-b border-gray-200 focus:border-custom-teal outline-none py-3 bg-transparent"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full border-b border-gray-200 focus:border-custom-teal outline-none py-3 bg-transparent resize-none"
                required
              />

              <button
                type="submit"
                className="btn-primary w-fit flex mx-auto  mt-4 hover:cursor-pointer transition-all duration-300"
              >
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>
      
      </section>
        <div className="max-w-4xl mx-auto px-6 pb-10 text-center">
        <p className="text-base font-light text-custom-navy">
          All correspondence is treated with confidentiality and institutional discretion.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Contact;