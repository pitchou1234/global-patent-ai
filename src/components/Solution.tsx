
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const Solution = () => {
  const features = [
    "Global patent coverage (USPTO, EPO, CNIPA, JPO, INAPI, WIPO, etc.)",
    "Cross-lingual search in English, Arabic, French, Chinese, etc.",
    "Smart novelty checks, citation suggestions, and risk evaluations",
    "Instant access, no login required to test",
    "Pay-as-you-go only"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-emerald-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-emerald-600/20 text-emerald-300 border-emerald-600/30 px-4 py-2">
              The Solution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              What is LOustad Smart IP™?
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              LOustad Smart IP™ is a next-gen AI platform that centralizes global patent data into one unified, 
              searchable interface. It understands technical language, finds relevant prior art, generates citation 
              drafts, and helps you assess patentability — all with semantic intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-emerald-300 mb-6">
                Key Features:
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Discover the Platform
              </Button>
            </div>

            <div className="relative">
              <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-emerald-600/20 border border-emerald-600/30 rounded-lg p-4">
                    <div className="text-emerald-300 font-semibold text-lg mb-2">AI-Powered Search</div>
                    <div className="text-slate-400 text-sm">Understands technical intent and semantic meaning</div>
                  </div>
                  
                  <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-4">
                    <div className="text-blue-300 font-semibold text-lg mb-2">Global Database Access</div>
                    <div className="text-slate-400 text-sm">Unified interface for worldwide patent offices</div>
                  </div>
                  
                  <div className="bg-purple-600/20 border border-purple-600/30 rounded-lg p-4">
                    <div className="text-purple-300 font-semibold text-lg mb-2">Multilingual Support</div>
                    <div className="text-slate-400 text-sm">Search and understand patents in any language</div>
                  </div>
                  
                  <div className="bg-amber-600/20 border border-amber-600/30 rounded-lg p-4">
                    <div className="text-amber-300 font-semibold text-lg mb-2">Citation Generation</div>
                    <div className="text-slate-400 text-sm">Automated patent citation drafts and reports</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
