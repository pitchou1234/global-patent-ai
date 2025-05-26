
import { Globe, Cpu, Languages, FileText, Shield } from "lucide-react";

const HowItWorks = () => {
  const components = [
    {
      icon: Globe,
      title: "Global Patent Index",
      description: "Includes WIPO, USPTO, EPO, CNIPA, JPO, and regional databases",
      color: "bg-blue-600/20 border-blue-600/30 text-blue-300"
    },
    {
      icon: Cpu,
      title: "Semantic Engine",
      description: "Understands natural language and technical intent",
      color: "bg-emerald-600/20 border-emerald-600/30 text-emerald-300"
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Enables search & understanding across Arabic, English, Chinese, etc.",
      color: "bg-purple-600/20 border-purple-600/30 text-purple-300"
    },
    {
      icon: FileText,
      title: "Citation Generator",
      description: "Automatically drafts patent citation responses and novelty reports",
      color: "bg-amber-600/20 border-amber-600/30 text-amber-300"
    },
    {
      icon: Shield,
      title: "Infringement Checker",
      description: "Predicts overlaps and flags potential risks",
      color: "bg-red-600/20 border-red-600/30 text-red-300"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Architecture
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Five integrated components working together to deliver unparalleled patent intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {components.map((component, index) => (
            <div key={index} className="group relative">
              <div className={`${component.color} border rounded-xl p-6 h-full hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <component.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {component.title}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {component.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              How They Work Together
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our AI semantic engine processes your query, searches across all global databases simultaneously, 
              understands multilingual content, generates comprehensive reports, and flags potential 
              infringement risks — all in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
