
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Agitation from "@/components/Agitation";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Audience from "@/components/Audience";
import Pricing from "@/components/Pricing";
import PlatformAccess from "@/components/PlatformAccess";
import Closing from "@/components/Closing";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-grid-white/[0.02] bg-grid-pattern opacity-20 animate-pulse"></div>
      
      <Hero />
      <Problem />
      <Agitation />
      <Solution />
      <HowItWorks />
      <UseCases />
      <Audience />
      <Pricing />
      <PlatformAccess />
      <Closing />
      
      {/* Enhanced scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white p-4 rounded-full shadow-2xl transition-all duration-500 z-50 ${
          showScrollButton ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-75'
        }`}
        size="icon"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;
