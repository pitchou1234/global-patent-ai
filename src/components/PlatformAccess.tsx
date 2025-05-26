
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PlatformAccess = () => {
  const platforms = [
    {
      title: "Web Application",
      description: "Desktop and mobile responsive interface for instant patent searches",
      icon: "🌐",
      features: ["Responsive design", "Real-time search", "Export capabilities"],
      cta: "Launch Web App"
    },
    {
      title: "REST API",
      description: "Integration for law firms, internal tools, and enterprise applications",
      icon: "⚙️",
      features: ["RESTful endpoints", "Authentication", "Rate limiting"],
      cta: "Request API Key"
    },
    {
      title: "Export Formats",
      description: "Professional reports in multiple formats for documentation",
      icon: "📄",
      features: ["PDF reports", "DOCX documents", "XLSX spreadsheets", "WIPO XML"],
      cta: "View Samples"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Platform Access
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Access LOustad Smart IP™ through multiple channels designed for different workflows
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {platforms.map((platform, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-emerald-600/50 transition-all duration-300 group h-full">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <CardTitle className="text-white text-xl mb-2">{platform.title}</CardTitle>
                <p className="text-slate-300 text-sm">{platform.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-400 text-sm flex items-center">
                      <span className="text-emerald-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  {platform.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Enterprise Solutions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-emerald-300 mb-3">Custom Integration</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Seamlessly integrate LOustad Smart IP™ into your existing workflow with our flexible API 
                and custom development services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-emerald-300 mb-3">Volume Pricing</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Enterprise pricing available for high-volume users including law firms, patent offices, 
                and corporate legal departments.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-emerald-600 text-emerald-300 hover:bg-emerald-600 hover:text-white px-8 py-3 font-semibold rounded-lg transition-all duration-300"
            >
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformAccess;
