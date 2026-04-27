function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-navy py-14">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-5 gap-10 mb-12">

          {/* Brand + Positioning */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="images/Logo_2.png"
                alt="Pacturn Africa Logo"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="text-white font-light leading-relaxed max-w-md mb-6">
              Pacturn Africa is an independent corporate trustee institution providing
              fiduciary oversight across pension schemes, collective investment structures,
              and corporate vehicles across East and Southern Africa.
            </p>

            <p className="text-white text-sm">
              Independent. Unconflicted. Institutionally grounded.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg tracking-wider text-custom-gold">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                'Pension Trustee',
                'Collective Investment Schemes',
                'REIT Trustee',
                'Escrow Services',
                'ESOP Trustee',
                'Estate Planning',
                'Governance Advisory'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="text-white hover:text-custom-gold text-sm font-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="font-semibold mb-4 text-lg tracking-wider text-custom-gold">
              Quick Access
            </h4>
            <ul className="space-y-2.5">
              {[
                'About Pacturn',
                'Research Desk',
                'Contact'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-white hover:text-custom-gold text-sm font-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-semibold mb-4 text-lg tracking-wider text-custom-gold">
              Compliance
            </h4>
            <ul className="space-y-2.5">
              {[
                'Privacy Policy',
                'Disclaimer',
                'Regulatory Status'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="text-white hover:text-custom-gold text-sm font-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-white text-sm font-light">
            &copy; {currentYear} Pacturn Africa. All rights reserved.
          </p>

          <p className="text-white/60 text-xs max-w-md text-center sm:text-right font-light">
            Pacturn Africa operates as an independent trustee and fiduciary services provider.
            Information on this site does not constitute financial advice.
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;