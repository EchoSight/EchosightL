import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <>
      <section className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-hero-foreground mb-4">Privacy Policy</h1>
          <p className="text-hero-foreground/70">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-sm prose-slate">
          <h2 className="text-xl font-bold mb-4">1. Who We Are</h2>
          <p className="text-muted-foreground mb-6">EchoSight is an ecological consultancy support service operated by Jack Curry, based in Newbury, Berkshire, UK. For data protection enquiries, contact us at hello@echosight.co.uk.</p>

          <h2 className="text-xl font-bold mb-4">2. What Data We Collect</h2>
          <p className="text-muted-foreground mb-2">We may collect the following personal data:</p>
          <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
            <li>Name, email address, phone number (via contact forms)</li>
            <li>Company name and project details</li>
            <li>Website usage data via analytics cookies (if consented)</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">3. How We Use Your Data</h2>
          <p className="text-muted-foreground mb-6">Personal data is used to respond to enquiries, provide quotations, deliver services, and improve our website. We do not sell or share personal data with third parties for marketing purposes.</p>

          <h2 className="text-xl font-bold mb-4">4. Cookies</h2>
          <p className="text-muted-foreground mb-2">We use the following types of cookies:</p>
          <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-1">
            <li><strong>Essential cookies:</strong> Required for site functionality.</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (only with your consent).</li>
          </ul>
          <p className="text-muted-foreground mb-6">You can manage your cookie preferences at any time using the cookie banner on our site.</p>

          <h2 className="text-xl font-bold mb-4">5. Data Retention</h2>
          <p className="text-muted-foreground mb-6">Enquiry data is retained for up to 24 months unless you request earlier deletion. Project data retention is agreed on a per-project basis.</p>

          <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-6">Under UK GDPR, you have the right to access, correct, delete, or restrict processing of your personal data. To make a request, email hello@echosight.co.uk.</p>

          <h2 className="text-xl font-bold mb-4">7. Contact</h2>
          <p className="text-muted-foreground">For any data protection queries, please contact us at <Link to="/contact" className="text-primary hover:underline">hello@echosight.co.uk</Link>.</p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
