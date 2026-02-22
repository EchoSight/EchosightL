import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Echo</span>
              <span>Sight</span>
            </Link>
            <p className="mt-3 text-sm text-accent-foreground/60 leading-relaxed max-w-xs">
              Specialist bat survey support and ecological analysis for UK consultancies. Based in Newbury, Berkshire.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-accent-foreground/40">Services</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Bat Surveys</Link>
              <Link to="/services" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Acoustic Analysis</Link>
              <Link to="/services" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Thermal / Video Review</Link>
              <Link to="/pricing" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Pricing & Packages</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-accent-foreground/40">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">About EchoSight</Link>
              <Link to="/case-studies" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Case Studies</Link>
              <Link to="/faq" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">FAQ</Link>
              <Link to="/contact" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-accent-foreground/40">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-accent-foreground/70">
              <p>hello@echosight.co.uk</p>
              <p>+44 (0) 1234 567890</p>
              <p className="mt-2">Newbury, Berkshire, UK</p>
              <p className="text-accent-foreground/40 text-xs mt-1">UK-wide remote analysis available</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-accent-foreground/40">
            © {new Date().getFullYear()} EchoSight. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-accent-foreground/40 hover:text-accent-foreground/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-accent-foreground/40 hover:text-accent-foreground/70 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
