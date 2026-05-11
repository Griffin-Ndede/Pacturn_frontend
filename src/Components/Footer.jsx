import { Link } from "react-router";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* BRAND */}
          <div className="md:col-span-1">
            <img
              src="/images/Pacturn white logo.png"
              alt="Pacturn Africa"
              className="h-12 w-auto object-contain mb-4"
            />

            <p className="text-sm font-light leading-relaxed">
              Independent Corporate Trustee · Fiduciary Services · Nairobi, Kenya
            </p>

            <p className="text-xs text-white/60 mt-4">
              Independent by design.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>


            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link to="/" className="hover:text-custom-gold transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-custom-gold transition-colors">
                  About
                </Link>
              </li>

              <li>
                <Link to="/mandates" className="hover:text-custom-gold transition-colors">
                  Mandates
                </Link>
              </li>

              <li>
                <Link to="/team" className="hover:text-custom-gold transition-colors">
                  Team
                </Link>
              </li>

              <li>
                <Link to="/research-desk" className="hover:text-custom-gold transition-colors">
                  Research Desk
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-custom-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-custom-gold text-sm uppercase tracking-[0.18em] mb-4">
              Contact
            </h4>

            <ul className="space-y-2 text-sm font-light">
              <li>info@pacturn.africa</li>
              <li>pacturnafrica.com</li>
              <li>pactumtrust.com</li>
              <li className="pt-2">
                Suite 9, Lower-Hill Apartments<br />
                Upper Hill, Nairobi, Kenya
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-custom-gold text-sm uppercase tracking-[0.18em] mb-4">
              Regulatory & Legal
            </h4>

            <p className="text-xs font-light leading-relaxed text-white/80">
              Pactum Limited is incorporated in Kenya under the Companies Act 2015, Registration No. [●].
            </p>

            <p className="text-xs font-light leading-relaxed text-white/80 mt-3">
              RBA Corporate Trustee Licence — Application filed May 2026.
              <br />
              CMA registration — in process.
            </p>

            <p className="text-xs font-light leading-relaxed text-white/80 mt-3">
              Pacturn Africa is the trading name of Pactum Limited.
            </p>

            <p className="text-xs font-light leading-relaxed text-white/80 mt-3">
              Pacturn Africa carries no asset management mandate, holds no assets in custody,
              and has no lending interest in any structure where it acts as trustee.
              These are structural facts.
            </p>
          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="border-t border-white/10 pt-8 mb-10">
          <p className="text-xs text-white/60 font-light leading-relaxed max-w-4xl">
            The information on this website is provided for institutional and professional reference only.
            It does not constitute legal, financial, or investment advice. Pactum Limited is not responsible
            for the content of third-party websites.
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

          <p className="text-sm text-white/70 font-light">
            © {currentYear} Pactum Limited. All rights reserved.
          </p>

          <p className="text-xs text-white/50 font-light max-w-md text-left md:text-right">
            Pacturn Africa operates as an independent corporate trustee institution providing fiduciary oversight across regulated structures in Kenya and East Africa.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;