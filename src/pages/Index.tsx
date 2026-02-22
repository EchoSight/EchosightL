import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Radio, Eye, BarChart3, FileText, CheckCircle2, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Shield, title: "Preliminary Roost Assessment", desc: "Building and tree inspections for bat roost potential. Clear grading, actionable recommendations.", link: "/services" },
  { icon: Radio, title: "Emergence & Return Surveys", desc: "Dusk/dawn survey support with experienced surveyors. Full reporting and species ID.", link: "/services" },
  { icon: BarChart3, title: "Static Detector Analysis", desc: "Expert analysis of acoustic data from static detectors. Species ID, activity summaries, QA'd outputs.", link: "/services" },
  { icon: Eye, title: "Thermal / Video Review", desc: "Ecologist-led review of infrared and video footage. Behaviour tagging and annotated clips.", link: "/services" },
  { icon: FileText, title: "Data & Process Support", desc: "Standardised templates, QA checklists, and workflow tools for your survey teams.", link: "/services" },
  { icon: Users, title: "Subcontract Surveyor Support", desc: "Additional surveyor capacity for your team during peak survey season.", link: "/services" },
];

const steps = [
  { num: "01", title: "Brief", desc: "Share your project details—site info, survey requirements, and timelines. We'll scope the work and confirm availability." },
  { num: "02", title: "Survey or Analysis", desc: "We carry out fieldwork or process your data using robust, repeatable methods with full QA." },
  { num: "03", title: "Deliverables", desc: "Receive clear reports, data outputs, annotated media, and recommendations—on time, every time." },
];

const deliverables = [
  "Species identification reports",
  "Activity summary tables (CSV/Excel)",
  "Annotated thermal/video clips",
  "Bat roost assessment reports",
  "QA-checked acoustic analysis",
  "Recommendations for mitigation",
];

const testimonials = [
  { quote: "EchoSight turned around our acoustic analysis in 48 hours—the quality was exceptional. They've become our go-to for static detector work.", author: "Senior Ecologist", company: "Thames Valley Ecology Ltd" },
  { quote: "Jack's PRA reports are consistently thorough and clearly written. Our clients and planners love the clarity.", author: "Director", company: "Southern Counties Environmental" },
  { quote: "Having reliable subcontract support during survey season has been a game-changer for our capacity planning.", author: "Project Manager", company: "Berkshire Wildlife Consultants" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6 animate-fade-in">Ecological Consultancy Support</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6 leading-tight animate-fade-in-up max-w-4xl mx-auto text-balance">
            Bat survey support, powered by precision.
          </h1>
          <p className="text-lg md:text-xl text-hero-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Specialist bat analysis and field support for UK ecological consultancies. Ecologist-led, QA-driven, and built around your deadlines.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Request Availability <ArrowRight className="ml-1" size={18} /></Link>
            </Button>
            <Button asChild size="lg" variant="hero-outline">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-2"><Shield size={16} className="text-primary" /> Bat Specialist</span>
            <span className="flex items-center gap-2"><Users size={16} className="text-primary" /> Ecologist-led QA</span>
            <span className="flex items-center gap-2"><Radio size={16} className="text-primary" /> UK-wide Remote Analysis</span>
            <span className="flex items-center gap-2"><BarChart3 size={16} className="text-primary" /> Newbury, Berkshire</span>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialist Bat Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From fieldwork to data processing, we provide the support your consultancy needs to deliver high-quality bat survey outputs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <s.icon size={28} className="text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight size={14} className="ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Clear steps, predictable timelines, quality outputs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.num} className="text-center md:text-left">
                <span className="text-5xl font-bold gradient-text font-mono">{step.num}</span>
                <h3 className="font-semibold text-xl mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">What You Receive</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Clear, Professional Deliverables</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Every project comes with structured outputs designed for direct inclusion in your reports. No ambiguity, no chasing—just clean, QA-checked data.
              </p>
              <ul className="space-y-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent rounded-lg p-8 lg:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-accent-foreground/40 mb-4">Example Output</p>
              <div className="space-y-3 font-mono text-sm text-accent-foreground/70">
                <p><span className="text-primary">Species:</span> Common pipistrelle</p>
                <p><span className="text-primary">Passes:</span> 247</p>
                <p><span className="text-primary">Period:</span> June–September 2025</p>
                <p><span className="text-primary">Peak Activity:</span> 22:15–23:30</p>
                <p><span className="text-primary">Confidence:</span> High (manual QA)</p>
                <p><span className="text-primary">Status:</span> Reviewed ✓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Client Feedback</p>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by Ecologists</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">Ready to streamline your bat survey work?</h2>
          <p className="text-hero-foreground/70 max-w-lg mx-auto mb-8">Get in touch to discuss your project requirements and check availability. We typically respond within one business day.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Request Availability <ArrowRight className="ml-1" size={18} /></Link>
            </Button>
            <Button asChild size="lg" variant="hero-outline">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
