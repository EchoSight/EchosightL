import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Enquiry sent", description: "We'll get back to you within one business day." });
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-4">Get in Touch</h1>
          <p className="text-hero-foreground/70 max-w-2xl mx-auto">Request availability, ask a question, or discuss your project requirements.</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required placeholder="Your name" maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Company name" maxLength={100} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.co.uk" maxLength={255} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+44 7..." maxLength={20} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select name="service">
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pra">Preliminary Roost Assessment</SelectItem>
                        <SelectItem value="emergence">Emergence / Return Survey</SelectItem>
                        <SelectItem value="acoustic">Acoustic Analysis</SelectItem>
                        <SelectItem value="thermal">Thermal / Video Review</SelectItem>
                        <SelectItem value="process">Data & Process Support</SelectItem>
                        <SelectItem value="surveyor">Subcontract Surveyor Support</SelectItem>
                        <SelectItem value="other">Other / Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postcode">Site Location (postcode)</Label>
                    <Input id="postcode" name="postcode" placeholder="e.g. RG14 5BY" maxLength={10} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dates">Required Dates</Label>
                  <Input id="dates" name="dates" placeholder="e.g. June–August 2026, flexible" maxLength={200} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Project Notes</Label>
                  <Textarea id="notes" name="notes" rows={4} placeholder="Tell us about your project, site, and any specific requirements..." maxLength={2000} />
                </div>
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Enquiry"} <ArrowRight className="ml-1" size={18} />
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@echosight.co.uk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone / WhatsApp</p>
                      <p className="text-muted-foreground">+44 (0) 1234 567890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Newbury, Berkshire, UK</p>
                      <p className="text-muted-foreground text-xs mt-1">UK-wide remote analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">Within 1 business day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
