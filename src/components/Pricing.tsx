
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Zap, Shield, Target } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      feature: "Prior Art Search",
      price: "$89",
      description: "Comprehensive semantic search across global databases with AI analysis",
      icon: Target,
      color: "from-blue-600/20 to-blue-700/20 border-blue-600/30"
    },
    {
      feature: "Novelty Report",
      price: "$129",
      description: "Detailed patentability analysis with prior art citations and recommendations",
      icon: Shield,
      color: "from-emerald-600/20 to-emerald-700/20 border-emerald-600/30"
    },
    {
      feature: "Citation Draft",
      price: "$69",
      description: "AI-generated citation responses for patent applications and rejections",
      icon: Zap,
      color: "from-purple-600/20 to-purple-700/20 border-purple-600/30"
    },
    {
      feature: "Infringement Analysis",
      price: "$159",
      description: "Freedom-to-operate assessment with risk analysis and mitigation strategies",
      icon: Crown,
      color: "from-amber-600/20 to-amber-700/20 border-amber-600/30"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-emerald-950/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-8 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 text-emerald-300 border-emerald-600/30 px-6 py-3 text-lg font-medium">
            <Crown className="w-5 h-5 mr-2" />
            Enterprise Pricing
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
            Professional-Grade Intelligence
          </h2>
          
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Premium AI-powered patent intelligence for enterprise decisions. 
            <span className="text-emerald-400 font-semibold"> No subscriptions. Pay per insight.</span>
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-600/30 px-4 py-2 text-base">
              No Monthly Fees
            </Badge>
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 px-4 py-2 text-base">
              Enterprise Security
            </Badge>
            <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30 px-4 py-2 text-base">
              Global Coverage
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${tier.color} backdrop-blur-xl border-2 hover:border-emerald-600/50 transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2 shadow-2xl`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <tier.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <CardTitle className="text-white text-xl mb-3">{tier.feature}</CardTitle>
                <div className="text-4xl font-black text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                  {tier.price}
                </div>
                <div className="text-slate-400 text-sm">per analysis</div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-300 text-sm text-center leading-relaxed">
                  {tier.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Why Enterprise Pricing?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="text-emerald-400 text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
                <h4 className="text-xl font-bold text-white mb-3">Premium Quality</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Enterprise-grade AI with human expert validation for mission-critical decisions</p>
              </div>
              <div className="text-center group">
                <div className="text-emerald-400 text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h4 className="text-xl font-bold text-white mb-3">Instant Results</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Advanced semantic AI delivers comprehensive results in minutes, not weeks</p>
              </div>
              <div className="text-center group">
                <div className="text-emerald-400 text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h4 className="text-xl font-bold text-white mb-3">Risk Mitigation</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Reduce IP litigation risk and strengthen patent portfolios with precise analysis</p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 mr-6"
              >
                <Crown className="w-6 h-6 mr-3" />
                Start Enterprise Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-emerald-600 px-12 py-6 text-xl font-bold rounded-xl transition-all duration-500"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
