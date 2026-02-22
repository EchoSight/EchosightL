import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Farm Building Bat Assessment",
    challenge: "A rural consultancy needed a PRA and subsequent emergence surveys for a complex of farm buildings earmarked for residential conversion. Tight planning deadlines required fast turnaround.",
    approach: "Conducted a detailed preliminary roost assessment of three structures, identifying features with moderate–high bat roost potential. Followed up with two dusk emergence surveys during optimal weather windows.",
    outputs: "Full PRA report with photographic evidence, two emergence survey reports, species identification (common and soprano pipistrelle), and clear recommendations for a mitigation licence application.",
    outcome: "Reports delivered within agreed timelines. The consultancy submitted the planning application on schedule, and the local authority accepted the survey work without additional information requests.",
    tags: ["PRA", "Emergence Survey", "Planning Support"],
  },
  {
    title: "Multi-Month Static Detector Programme",
    challenge: "A large housing development required static detector monitoring across five locations over a four-month period (May–August). The client consultancy lacked in-house acoustic analysis capacity.",
    approach: "Processed over 120 detector-nights of acoustic data using a combination of automated classifiers and manual verification. Applied a standardised QA protocol to ensure consistency across all detector locations.",
    outputs: "Comprehensive species list with confidence ratings, monthly activity summary tables (CSV), temporal activity charts, and a consolidated analysis report. All outputs formatted for direct insertion into the client's EcIA.",
    outcome: "The consultancy reported that the analysis saved approximately three weeks of internal work and provided a higher level of species identification confidence than their previous approach.",
    tags: ["Acoustic Analysis", "Static Detectors", "Multi-Site"],
  },
  {
    title: "Infrared Footage Review & Behaviour Tagging",
    challenge: "Thermal camera footage from a church roof survey captured potential bat activity, but the consultancy needed an experienced ecologist to review 12 hours of footage across three survey nights.",
    approach: "Systematically reviewed all footage using a timestamped logging protocol. Identified bat emergence events, flight paths, re-entry behaviours, and social calls. Cross-referenced with concurrent acoustic data.",
    outputs: "Detailed behaviour log with timestamps, species/group identification, annotated video clips of key events (emergence sequences, re-entries), and a summary report characterising the roost.",
    outcome: "The review confirmed a brown long-eared maternity roost, enabling the consultancy to accurately characterise the roost and design appropriate mitigation measures for the planning application.",
    tags: ["Thermal Review", "Video Analysis", "Roost Characterisation"],
  },
];

const CaseStudies = () => {
  return (
    <>
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Example Projects</h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto">Anonymised examples demonstrating our approach and the quality of outputs we deliver.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-6">{cs.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Challenge</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-6">{cs.challenge}</p>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Approach</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">{cs.approach}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Outputs</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed mb-6">{cs.outputs}</p>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Outcome</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hero-foreground mb-4">Have a similar project?</h2>
          <p className="text-hero-foreground/70 max-w-lg mx-auto mb-8">We'd love to hear about it. Get in touch to discuss how we can support your work.</p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Request Availability <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
