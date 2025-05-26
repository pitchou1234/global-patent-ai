
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

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
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
      
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;
