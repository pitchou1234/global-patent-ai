
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles, Globe, Brain, Shield } from "lucide-react";

const Solution = () => {
  const features = [
    {
      text: "Global patent coverage (USPTO, EPO, CNIPA, JPO, INAPI, WIPO, etc.)",
      icon: Globe
    },
    {
      text: "Cross-lingual search in English, Arabic, French, Chinese, etc.",
      icon: Brain
    },
    {
      text: "Smart novelty checks, citation suggestions, and risk evaluations",
      icon: Sparkles
    },
    {
      text: "Enterprise-grade security and instant access",
      icon: Shield
    },
    {
      text: "Professional pay-per-analysis pricing",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-emerald-950/20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
      <div className="absolute top-40 left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-8 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 text-emerald-300 border-emerald-600/30 px-6 py-3 text-lg font-medium animate-fade-in">
              <Sparkles className="w-5 h-5 mr-2" />
              The Solution
            </Badge>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent animate-fade-in animation-delay-200">
              What is LOustad Smart IP™?
            </h2>
            
            <p className="text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
              LOustad Smart IP™ is a next-generation AI platform that centralizes global patent data into one unified, 
              intelligent interface. It understands technical language, finds relevant prior art, generates citation 
              drafts, and provides patentability assessments — all with enterprise-grade semantic intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in animation-delay-600">
              <h3 className="text-3xl font-bold text-emerald-300 mb-8">
                Enterprise Features:
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="bg-emerald-600/20 p-3 rounded-xl group-hover:bg-emerald-600/30 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-slate-300 text-lg leading-relaxed">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-10 py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                <Brain className="w-6 h-6 mr-3" />
                Discover the Platform
              </Button>
            </div>

            <div className="relative animate-fade-in animation-delay-800">
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 shadow-2xl">
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 border border-emerald-600/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center mb-3">
                      <Brain className="w-8 h-8 text-emerald-400 mr-4" />
                      <div className="text-emerald-300 font-bold text-xl">AI-Powered Search</div>
                    </div>
                    <div className="text-slate-400">Understands technical intent and semantic meaning across languages</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-600/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center mb-3">
                      <Globe className="w-8 h-8 text-blue-400 mr-4" />
                      <div className="text-blue-300 font-bold text-xl">Global Database Access</div>
                    </div>
                    <div className="text-slate-400">Unified interface for worldwide patent offices and databases</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-600/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center mb-3">
                      <Sparkles className="w-8 h-8 text-purple-400 mr-4" />
                      <div className="text-purple-300 font-bold text-xl">Smart Analytics</div>
                    </div>
                    <div className="text-slate-400">Advanced citation generation and novelty assessment</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 border border-amber-600/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center mb-3">
                      <Shield className="w-8 h-8 text-amber-400 mr-4" />
                      <div className="text-amber-300 font-bold text-xl">Enterprise Security</div>
                    </div>
                    <div className="text-slate-400">Professional-grade data protection and compliance</div>
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
