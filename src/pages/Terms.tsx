import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <>
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-hero-foreground mb-4">Terms of Service</h1>
          <p className="text-hero-foreground/70">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-sm prose-slate">
          <h2 className="text-xl font-bold mb-4">1. Booking & Confirmation</h2>
          <p className="text-muted-foreground mb-6">All work is subject to a written scope of works agreed prior to commencement. Survey dates are confirmed subject to availability and weather conditions. We will provide as much notice as possible if surveys need to be rescheduled due to unsuitable conditions.</p>

          <h2 className="text-xl font-bold mb-4">2. Scope of Work</h2>
          <p className="text-muted-foreground mb-6">Deliverables and timelines are agreed at the project scoping stage. Any changes to scope must be agreed in writing and may affect pricing and turnaround times.</p>

          <h2 className="text-xl font-bold mb-4">3. Pricing & Payment</h2>
          <p className="text-muted-foreground mb-6">Prices are quoted ex-VAT unless otherwise stated. Invoices are issued upon completion of work. Standard payment terms are 30 days from invoice date. Travel surcharges apply for sites beyond 60 miles of Newbury, Berkshire.</p>

          <h2 className="text-xl font-bold mb-4">4. Cancellation</h2>
          <p className="text-muted-foreground mb-6">Cancellations made less than 48 hours before a scheduled survey may incur a cancellation fee. Analysis work in progress at the time of cancellation will be invoiced for time spent.</p>

          <h2 className="text-xl font-bold mb-4">5. Confidentiality</h2>
          <p className="text-muted-foreground mb-6">All project data and site-specific information is treated as confidential. EchoSight will not disclose project details to third parties without express written consent, except where required by law.</p>

          <h2 className="text-xl font-bold mb-4">6. Liability</h2>
          <p className="text-muted-foreground mb-6">EchoSight maintains professional indemnity insurance. Our liability for any claim arising from services provided is limited to the fee paid for the specific service in question.</p>

          <h2 className="text-xl font-bold mb-4">7. Governing Law</h2>
          <p className="text-muted-foreground mb-6">These terms are governed by the laws of England and Wales.</p>

          <h2 className="text-xl font-bold mb-4">8. Contact</h2>
          <p className="text-muted-foreground">For any questions about these terms, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.</p>
        </div>
      </section>
    </>
  );
};

export default Terms;
