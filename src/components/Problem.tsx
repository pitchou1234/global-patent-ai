
import { AlertTriangle, Globe, Search, Shield, Clock } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Globe,
      title: "Fragmented patent databases across jurisdictions",
      description: "Navigate separate systems for USPTO, EPO, CNIPA, and dozens of other patent offices"
    },
    {
      icon: Search,
      title: "Language barriers in global patent research",
      description: "Miss critical prior art written in Chinese, Arabic, German, or other languages"
    },
    {
      icon: AlertTriangle,
      title: "Missed prior art due to keyword-only search",
      description: "Traditional search tools fail to understand semantic meaning and technical context"
    },
    {
      icon: Shield,
      title: "Legal & financial risk from incomplete analysis",
      description: "Incomplete patent searches can lead to costly litigation and rejected applications"
    },
    {
      icon: Clock,
      title: "Slow & expensive novelty assessments",
      description: "Weeks of manual research and thousands of dollars in legal fees for basic searches"
    }
  ];

  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Patent Research Challenge
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            IP professionals worldwide face the same critical challenges when conducting patent research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-lg group-hover:bg-red-500/30 transition-colors duration-300">
                  <problem.icon className="h-6 w-6 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              The Cost of Inefficiency
            </h3>
            <p className="text-slate-300 text-lg">
              IP professionals spend <span className="text-red-400 font-semibold">60-80% of their time</span> just 
              finding and organizing patent data, leaving little time for actual analysis and strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
