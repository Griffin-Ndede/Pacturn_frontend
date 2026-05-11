import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    type: "",
    name: "",
    organisation: "",
    email: "",
    phone: "",
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
    setForm({
      type: "",
      name: "",
      organisation: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-16 max-w-4xl mx-auto px-6 text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-custom-teal">
          Speak to Pacturn Africa
        </p>

        <h1 className="text-4xl md:text-5xl text-custom-navy mt-6 leading-tight">
          Contact Pacturn Africa
        </h1>

        <p className="mt-6 text-gray-600 font-light leading-relaxed">
          For trustee appointments, institutional referrals, governance mandates, and regulatory engagement.
        </p>

        <p className="mt-4 text-sm text-gray-500 font-light">
          All correspondence is handled with institutional discretion and responded to within two business days.
        </p>

        <div className="w-16 h-0.5 bg-custom-gold mx-auto mt-8" />

      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="space-y-10">

          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Institutional engagement"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* DIRECT CONTACT */}
          <div className="space-y-8">

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

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-custom-teal mt-1" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-custom-teal mb-1">
                  Address
                </p>
                <p className="text-base text-custom-navy font-light">
                  Suite 9, Lower-Hill Apartments, Upper Hill, Nairobi, Kenya
                </p>
              </div>
            </div>

          </div>

          <p className="text-sm text-gray-500 font-light">
            pacturnafrica.com · pactumtrust.com
          </p>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg">

          <h2 className="text-xl text-custom-navy mb-6">
            Enquiry Form
          </h2>

          {submitted && (
            <div className="mb-6 text-sm text-teal-700 bg-teal-50 border border-teal-100 px-4 py-3 rounded-lg">
              Enquiry submitted. We will respond within two business days.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* TYPE */}
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border-b border-gray-200 py-3 bg-transparent text-gray-600 outline-none"
              required
            >
              <option value="">Enquiry type</option>
              <option>Trustee appointment — pension scheme</option>
              <option>Trustee appointment — CIS or REIT</option>
              <option>Escrow mandate</option>
              <option>Governance advisory</option>
              <option>Institutional referral</option>
              <option>Research and publications</option>
              <option>Other</option>
            </select>

            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border-b border-gray-200 py-3 bg-transparent outline-none"
              required
            />

            <input
              name="organisation"
              placeholder="Organisation"
              value={form.organisation}
              onChange={handleChange}
              className="w-full border-b border-gray-200 py-3 bg-transparent outline-none"
            />

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-200 py-3 bg-transparent outline-none"
              required
            />

            <input
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-200 py-3 bg-transparent outline-none"
            />

            <textarea
              name="message"
              placeholder="Brief description of enquiry"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full border-b border-gray-200 py-3 bg-transparent outline-none resize-none"
              required
            />

            <button className="btn-primary w-full mt-4">
              Send Enquiry
            </button>

          </form>

        </div>

      </section>

      {/* FOOTNOTE */}
      <div className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <p className="text-sm text-gray-500 font-light">
          All correspondence is treated with confidentiality and institutional discretion.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;