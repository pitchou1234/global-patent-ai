
import { Card, CardContent } from "@/components/ui/card";

const UseCases = () => {
  const useCases = [
    {
      title: "Prior Art Search",
      description: "Comprehensive prior art research before patent filing to ensure novelty and strengthen applications",
      icon: "🔍",
      details: "Search across global databases with semantic understanding to find relevant prior art that keyword searches miss"
    },
    {
      title: "Citation Response",
      description: "Draft rejection arguments and novelty reports with AI-generated citations and analysis",
      icon: "📝",
      details: "Automatically generate professional citation responses with relevant prior art analysis and legal arguments"
    },
    {
      title: "Infringement Analysis",
      description: "Check for potential infringement across global patent portfolios and jurisdictions",
      icon: "⚖️",
      details: "Identify potential patent conflicts and freedom-to-operate issues before product launch or R&D investment"
    },
    {
      title: "Technology Research",
      description: "Research overlapping technologies for R&D planning and competitive intelligence",
      icon: "🧬",
      details: "Map technological landscapes and identify white space opportunities for innovation and development"
    },
    {
      title: "IP Due Diligence",
      description: "Support patent lawyers in litigation, licensing, and IP portfolio management",
      icon: "💼",
      details: "Comprehensive IP analysis for M&A transactions, licensing deals, and portfolio valuation"
    }
  ];

  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Use Cases
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From patent filing to litigation support, LOustad Smart IP™ accelerates every aspect of IP work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-emerald-600/50 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {useCase.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
