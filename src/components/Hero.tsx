
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Globe, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-500/5 to-transparent rounded-full animate-spin slow"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <Badge className="mb-8 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 text-emerald-300 border-emerald-600/30 px-6 py-3 text-lg font-medium backdrop-blur-sm">
            <Sparkles className="w-5 h-5 mr-2" />
            Enterprise Patent Intelligence
          </Badge>
        </div>
        
        <div className="animate-fade-in animation-delay-200">
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-emerald-300 to-blue-400 bg-clip-text text-transparent leading-tight tracking-tight">
            LOustad Smart IP™
          </h1>
        </div>
        
        <div className="animate-fade-in animation-delay-400">
          <p className="text-3xl md:text-4xl text-slate-200 font-light mb-6 max-w-5xl mx-auto leading-relaxed">
            Global Patent Intelligence Platform
          </p>
        </div>
        
        <div className="animate-fade-in animation-delay-600">
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-4xl mx-auto leading-relaxed">
            AI-powered semantic search across global patent databases.<br />
            <span className="text-emerald-400 font-semibold">Enterprise-grade precision</span> for mission-critical IP decisions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in animation-delay-800">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
          >
            <Brain className="w-6 h-6 mr-3" />
            Start Enterprise Search
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-emerald-600 px-12 py-6 text-xl font-bold rounded-xl transition-all duration-500 backdrop-blur-sm"
          >
            <Globe className="w-6 h-6 mr-3" />
            View Global Coverage
          </Button>
        </div>

        {/* Enhanced visual representation */}
        <div className="relative max-w-6xl mx-auto animate-fade-in animation-delay-1000">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {['USPTO', 'EPO', 'CNIPA', 'JPO', 'WIPO', 'INAPI'].map((db, index) => (
                <div 
                  key={db} 
                  className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-600/30 hover:border-emerald-600/50 transition-all duration-300 hover:scale-105 animate-pulse"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-sm text-slate-300 font-bold">{db}</div>
                  <div className="text-xs text-emerald-400 mt-1">Connected</div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full animate-pulse"></div>
              <div className="mx-6 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full p-4 shadow-lg animate-bounce">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="h-px bg-gradient-to-r from-emerald-500 via-transparent to-transparent w-full animate-pulse"></div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border border-emerald-600/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-emerald-300 font-bold text-2xl mb-3">Unified AI Intelligence Engine</div>
              <div className="text-slate-400 text-lg">Semantic understanding • Global coverage • Enterprise security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
