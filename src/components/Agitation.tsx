
const Agitation = () => {
  const limitations = [
    "Searching USPTO, EPO, CNIPA, WIPO separately — each with different interfaces and search syntaxes",
    "Manual filtering through thousands of irrelevant results from keyword-based searches",
    "Needing legal help just to interpret citations and understand patent landscapes",
    "No intelligent semantic understanding or multilingual mapping across databases",
    "Paying expensive subscription fees for basic access to fragmented tools"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-red-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Traditional Tools Fall Short
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Current patent research methods are stuck in the past, forcing professionals into inefficient workflows
          </p>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-red-400 mb-8">
              What you're dealing with right now:
            </h3>
            
            <div className="space-y-6">
              {limitations.map((limitation, index) => (
                <div key={index} className="flex items-start space-x-4 text-left">
                  <div className="bg-red-500/20 rounded-full p-1 mt-1 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-300 text-lg">{limitation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border border-emerald-600/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-emerald-300 mb-4">
              What if one single, intelligent platform could do all of that instantly?
            </h3>
            <p className="text-slate-300 text-lg">
              Imagine having global patent intelligence at your fingertips, with AI that understands 
              technical language and delivers precise results in seconds, not hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agitation;
