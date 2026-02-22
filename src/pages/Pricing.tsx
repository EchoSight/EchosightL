import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "PRA Report",
    price: "£350",
    unit: "per building/structure",
    features: ["Preliminary Roost Assessment", "Internal & external inspection", "Bat roost potential grading", "Recommendations for further surveys", "Report within 5 working days"],
    popular: false,
  },
  {
    name: "Emergence / Return Survey",
    price: "£500",
    unit: "per survey visit",
    features: ["Experienced bat surveyor(s)", "Dusk or dawn survey", "Species identification", "Full survey report", "Equipment provided", "Report within 10 working days"],
    popular: true,
  },
  {
    name: "Acoustic Analysis",
    price: "£150",
    unit: "per detector-month",
    features: ["Species identification (manual + auto)", "Activity summary tables", "Nightly pass counts", "QA-checked outputs", "CSV/Excel deliverables", "5–10 working day turnaround"],
    popular: false,
  },
  {
    name: "Thermal / Video Review",
    price: "£200",
    unit: "per survey night",
    features: ["Ecologist-led footage review", "Timestamped behaviour log", "Annotated video clips", "Roost characterisation", "Summary report", "5–7 working day turnaround"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <>
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Transparent, Predictable Pricing</h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto">Clear starting prices with no hidden costs. Complex projects quoted individually.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`relative bg-card border rounded-lg p-6 flex flex-col ${pkg.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                )}
                <h3 className="font-semibold text-lg mb-1">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold gradient-text">{pkg.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">{pkg.unit}</span>
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={pkg.popular ? "default" : "outline"} className="w-full">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-muted rounded-lg p-6 text-sm text-muted-foreground space-y-3">
            <h3 className="font-semibold text-foreground text-base">Additional Information</h3>
            <p><strong>Travel:</strong> Field surveys within 60 miles of Newbury, Berkshire are included in the base price. Surcharges apply for sites beyond this radius—quoted at the time of booking.</p>
            <p><strong>Complex projects:</strong> Multi-site programmes, extended monitoring, and bespoke analysis packages are quoted individually. <Link to="/contact" className="text-primary hover:underline">Request a quote</Link>.</p>
            <p><strong>Invoicing:</strong> Invoices are issued upon completion, reflecting actual hours where applicable. Standard payment terms are 30 days.</p>
          </div>
        </div>
      </section>

      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-hero-foreground mb-4">Not sure which package you need?</h2>
          <p className="text-hero-foreground/70 max-w-lg mx-auto mb-8">We'll help you scope the right services for your project. No obligation, no jargon.</p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Discuss Your Project <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Pricing;
