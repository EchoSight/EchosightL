import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Radio, Eye, BarChart3, FileText, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const servicesSections = [
  {
    id: "bat-surveys",
    icon: Shield,
    title: "Bat Surveys (PRA, Emergence & Return, Activity)",
    who: "Consultancies needing additional surveyor capacity or full bat survey packages for planning applications.",
    deliverables: ["Preliminary Roost Assessment reports", "Emergence/return survey reports with species ID", "Activity survey summaries", "Recommendations for further work or mitigation"],
    inputs: "Site address, access arrangements, planning context, any existing survey data.",
    turnaround: "PRA reports within 5 working days. Emergence/return reports within 10 working days of final survey.",
    price: "From £350 (PRA) / £500 per survey visit",
  },
  {
    id: "acoustic-analysis",
    icon: BarChart3,
    title: "Static Detector Acoustic Analysis",
    who: "Consultancies with acoustic data from static detectors (SM2, SM4, Anabat, AudioMoth) needing expert species identification and analysis.",
    deliverables: ["Species identification with confidence ratings", "Activity summary tables (CSV/Excel)", "Nightly pass counts and temporal analysis", "QA-checked outputs ready for reporting"],
    inputs: "Raw acoustic files (.wav, .zc, etc.), deployment logs, detector locations.",
    turnaround: "Typically 5–10 working days depending on volume. Rush turnaround available.",
    price: "From £150 per detector-month",
  },
  {
    id: "thermal-review",
    icon: Eye,
    title: "Thermal & Video Review",
    who: "Consultancies with infrared or video footage from bat surveys needing ecologist-led review and behaviour documentation.",
    deliverables: ["Timestamped behaviour log", "Species/group identification where possible", "Annotated video clips of key events", "Summary report with roost characterisation"],
    inputs: "Video files, survey date/time, camera position details, site context.",
    turnaround: "5–7 working days per survey night.",
    price: "From £200 per survey night",
  },
  {
    id: "data-process",
    icon: FileText,
    title: "Data & Process Support",
    who: "Consultancies looking to standardise survey workflows, improve QA processes, or build internal capacity.",
    deliverables: ["Customised survey templates and checklists", "QA frameworks for acoustic analysis", "Training materials and SOPs", "Process review and optimisation recommendations"],
    inputs: "Current workflows, team size, typical project types.",
    turnaround: "Scoped on a project basis.",
    price: "From £500 per engagement",
  },
  {
    id: "surveyor-support",
    icon: Users,
    title: "Subcontract Surveyor Support",
    who: "Consultancies needing additional licensed surveyors during peak season (May–September).",
    deliverables: ["Experienced bat surveyors for emergence/return surveys", "Equipment provision where needed", "Survey data and field notes", "Post-survey debrief and reporting support"],
    inputs: "Survey dates, site locations, access details, team requirements.",
    turnaround: "Subject to availability—book early for peak season.",
    price: "Day rates from £300. Travel charges may apply beyond 60 miles of Newbury.",
  },
];

const Services = () => {
  return (
    <>
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Specialist Bat Survey Support</h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto">From field surveys to data analysis, we provide the specialist capacity your consultancy needs—delivered to your standards, on your timelines.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-20">
          {servicesSections.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid grid-cols-1 lg:grid-cols-5 gap-10 ${i > 0 ? "pt-12 border-t border-border" : ""}`}>
              <div className="lg:col-span-2">
                <s.icon size={32} className="text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-3">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.who}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Starting from</p>
                  <p className="text-lg font-semibold text-primary">{s.price}</p>
                </div>
                <Button asChild>
                  <Link to="/contact">Request a Quote <ArrowRight className="ml-1" size={16} /></Link>
                </Button>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">What You Get</h3>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm"><CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />{d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Inputs Needed</h3>
                  <p className="text-sm text-muted-foreground">{s.inputs}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Typical Turnaround</h3>
                  <p className="text-sm text-muted-foreground">{s.turnaround}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hero-foreground mb-4">Need something bespoke?</h2>
          <p className="text-hero-foreground/70 max-w-lg mx-auto mb-8">We're happy to scope custom packages for complex projects. Get in touch and we'll work out the best approach together.</p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
