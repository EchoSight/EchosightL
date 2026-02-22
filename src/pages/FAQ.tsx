import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is your typical turnaround time?", a: "PRA reports are delivered within 5 working days. Emergence/return survey reports within 10 working days of the final survey. Acoustic analysis typically takes 5–10 working days depending on data volume. Rush turnaround is available for an additional fee—just ask." },
  { q: "What file formats do you need for acoustic analysis?", a: "We accept all common acoustic file formats including .wav, .zc, .wac, and sequences exported from Kaleidoscope, BatExplorer, or AnalookW. We'll also need deployment logs and detector location information." },
  { q: "What counts as a 'pass' in acoustic analysis?", a: "We follow the standard definition: a single bat call sequence recorded within a defined time window. Multiple pulses from the same individual in one pass are counted as a single pass. Our methodology is consistent with BCT guidelines." },
  { q: "How does your QA process work?", a: "All acoustic analysis undergoes a two-stage QA process: initial automated classification followed by manual verification by an experienced ecologist. We use standardised QA checklists and maintain full audit trails for every dataset." },
  { q: "Do weather conditions affect survey scheduling?", a: "Yes. Bat surveys must meet BCT weather guidelines: temperature above 10°C at sunset, low wind (Beaufort ≤4), and no persistent rain. We monitor forecasts closely and will reschedule surveys if conditions are unsuitable." },
  { q: "How far do you travel for field surveys?", a: "Our base rate covers sites within 60 miles of Newbury, Berkshire. For sites beyond this radius, a travel surcharge applies—quoted at the time of booking. Remote analysis services (acoustic, thermal, video) are available UK-wide." },
  { q: "Is my data kept confidential?", a: "Absolutely. All project data is treated as confidential. We do not share site-specific information with third parties. Data is stored securely and can be deleted on request after project completion." },
  { q: "What software and tools do you use?", a: "We use a combination of Kaleidoscope Pro, BatExplorer, and custom analysis tools for acoustic work. Thermal review uses VLC and specialist annotation software. Reports are delivered in Word/PDF format with supporting data in CSV/Excel." },
  { q: "Can you provide reports in a specific format or template?", a: "Yes. We're happy to work to your report templates and branding guidelines. Just share your templates at the project briefing stage and we'll deliver outputs in your preferred format." },
  { q: "Do you hold a bat survey licence?", a: "Jack Curry holds the relevant qualifications and experience for bat survey work. Specific licensing requirements vary by project—we'll confirm the appropriate arrangements during the scoping stage." },
];

const FAQ = () => {
  return (
    <>
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto">Everything you need to know about working with EchoSight.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hero-foreground mb-4">Still have questions?</h2>
          <p className="text-hero-foreground/70 max-w-lg mx-auto mb-8">We're happy to chat through your requirements. No obligation.</p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Contact Us <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default FAQ;
