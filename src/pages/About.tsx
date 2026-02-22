import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-4">About EchoSight</h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto">Better bat decisions through better data.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Jack Curry</h2>
              <p className="text-primary font-mono text-sm mb-6">MSc, BSc, ACIEEM — Founder, EchoSight</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Jack is an experienced ecologist specialising in bat ecology, with a track record of delivering high-quality survey work and acoustic analysis for consultancies across the UK.
                </p>
                <p>
                  With postgraduate training in ecology and years of hands-on field experience, Jack combines deep species knowledge with a methodical approach to data analysis and quality assurance.
                </p>
                <p>
                  As a qualifying member of CIEEM, Jack is committed to maintaining the highest professional standards in ecological practice.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-semibold text-lg mb-6">Why EchoSight Exists</h3>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Too many consultancies face the same bottleneck: survey data piling up, analysis delayed, and reports stuck in a queue. The result? Missed deadlines, inconsistent outputs, and frustrated clients.
                </p>
                <p>
                  EchoSight was founded to solve exactly that. By providing specialist bat survey support and analysis capacity, we help consultancies deliver better work, faster—without compromising on quality.
                </p>
                <p>
                  Our approach is built on repeatable methods, robust QA, and clear communication. We're not here to replace your team—we're here to make them more effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-alt">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Target size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Evidence-Led</h3>
              <p className="text-sm text-muted-foreground">Every assessment grounded in robust ecological evidence and current best practice guidelines.</p>
            </div>
            <div className="text-center">
              <Award size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Systematic QA processes ensure consistency and accuracy across every output we deliver.</p>
            </div>
            <div className="text-center">
              <Lightbulb size={32} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Process-Driven</h3>
              <p className="text-sm text-muted-foreground">Repeatable workflows and clear templates mean predictable turnarounds and auditable results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hero-foreground mb-4">Work with EchoSight</h2>
          <p className="text-hero-foreground/70 max-w-lg mx-auto mb-8">Whether you need a single PRA or ongoing analysis support, we're here to help.</p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
