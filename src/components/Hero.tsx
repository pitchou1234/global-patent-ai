
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.2),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge className="mb-8 bg-emerald-600/20 text-emerald-300 border-emerald-600/30 px-4 py-2 text-sm font-medium">
          AI-Powered Patent Intelligence
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-emerald-300 bg-clip-text text-transparent leading-tight">
          LOustad Smart IP™
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-300 font-light mb-4 max-w-4xl mx-auto">
          Global Patent Intelligence in One Place
        </p>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
          Semantic search. Global coverage. No subscriptions.<br />
          Pay only for what you use.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Start Searching Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>

        {/* Visual representation */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
              {['USPTO', 'EPO', 'CNIPA', 'JPO', 'WIPO', 'INAPI'].map((db) => (
                <div key={db} className="bg-slate-700/50 rounded-lg p-3 text-center">
                  <div className="text-xs text-slate-400 font-medium">{db}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full"></div>
              <div className="mx-4 bg-emerald-600 rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="h-px bg-gradient-to-r from-emerald-500 via-transparent to-transparent w-full"></div>
            </div>
            <div className="bg-emerald-600/20 border border-emerald-600/30 rounded-lg p-4">
              <div className="text-emerald-300 font-semibold text-lg">Unified AI Search Engine</div>
              <div className="text-slate-400 text-sm mt-1">Semantic understanding across all databases</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
