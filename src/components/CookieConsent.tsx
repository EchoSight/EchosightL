import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("echosight-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (all: boolean) => {
    localStorage.setItem("echosight-cookie-consent", all ? "all" : analytics ? "analytics" : "essential");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("echosight-cookie-consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up" style={{ animationDelay: "0s" }}>
      <div className="container mx-auto max-w-2xl bg-card border border-border rounded-lg shadow-xl p-5">
        {!showPrefs ? (
          <>
            <p className="text-sm text-foreground/80 mb-4">
              We use cookies to improve your experience. See our{" "}
              <Link to="/privacy" className="text-primary underline hover:no-underline">privacy policy</Link> for details.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={() => accept(true)}>Accept All</Button>
              <Button size="sm" variant="outline" onClick={reject}>Reject Non-Essential</Button>
              <Button size="sm" variant="ghost" onClick={() => setShowPrefs(true)}>Manage Preferences</Button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm font-medium mb-3">Cookie Preferences</p>
            <div className="space-y-3 mb-4">
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" checked disabled className="accent-primary" />
                <span className="text-foreground/60">Essential (always on)</span>
              </label>
              <label className="flex items-center gap-3 text-sm cursor-pointer">
                <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="accent-primary" />
                <span>Analytics & performance</span>
              </label>
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => accept(false)}>Save Preferences</Button>
              <Button size="sm" variant="ghost" onClick={() => setShowPrefs(false)}>Back</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
