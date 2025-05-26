
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const pricingTiers = [
    {
      feature: "Prior Art Search",
      price: "$4.99",
      description: "Comprehensive semantic search across global databases"
    },
    {
      feature: "Novelty Report",
      price: "$6.99",
      description: "Detailed analysis with prior art citations and recommendations"
    },
    {
      feature: "Citation Draft",
      price: "$3.50",
      description: "AI-generated citation responses for patent applications"
    },
    {
      feature: "Infringement Mapping",
      price: "$9.99",
      description: "Risk analysis and freedom-to-operate assessment"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-emerald-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pay-as-you-go Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            LOustad Smart IP™ uses a transparent pay-as-you-go model. 
            No subscriptions. No hidden fees. Just fast, precise service per request.
          </p>
          <Badge className="bg-emerald-600/20 text-emerald-300 border-emerald-600/30 px-4 py-2 text-lg">
            No Monthly Fees
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-emerald-600/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-lg mb-2">{tier.feature}</CardTitle>
                <div className="text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                  {tier.price}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-300 text-sm text-center leading-relaxed">
                  {tier.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why Pay-as-you-go?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-emerald-400 text-4xl mb-3">💰</div>
                <h4 className="text-lg font-semibold text-white mb-2">Cost Effective</h4>
                <p className="text-slate-300 text-sm">Only pay for searches you actually need</p>
              </div>
              <div className="text-center">
                <div className="text-emerald-400 text-4xl mb-3">⚡</div>
                <h4 className="text-lg font-semibold text-white mb-2">Instant Access</h4>
                <p className="text-slate-300 text-sm">No setup fees or monthly commitments</p>
              </div>
              <div className="text-center">
                <div className="text-emerald-400 text-4xl mb-3">📊</div>
                <h4 className="text-lg font-semibold text-white mb-2">Transparent</h4>
                <p className="text-slate-300 text-sm">Clear pricing with no hidden costs</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Try for Free
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Run Your First Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
