
const Audience = () => {
  const audiences = [
    {
      title: "IP Law Firms",
      description: "Patent attorneys and IP lawyers conducting prior art searches and citation analysis",
      icon: "⚖️",
      color: "bg-blue-600/20 border-blue-600/30"
    },
    {
      title: "Patent Examiners",
      description: "Government patent office examiners reviewing applications and conducting searches",
      icon: "🔍",
      color: "bg-emerald-600/20 border-emerald-600/30"
    },
    {
      title: "Startup Founders",
      description: "Entrepreneurs and inventors validating ideas and preparing patent applications",
      icon: "🚀",
      color: "bg-purple-600/20 border-purple-600/30"
    },
    {
      title: "R&D Departments",
      description: "Corporate research teams mapping technology landscapes and identifying opportunities",
      icon: "🧬",
      color: "bg-amber-600/20 border-amber-600/30"
    },
    {
      title: "Tech Transfer Offices",
      description: "University and research institution IP commercialization teams",
      icon: "🎓",
      color: "bg-red-600/20 border-red-600/30"
    },
    {
      title: "Corporate Legal Teams",
      description: "In-house counsel and legal departments managing IP portfolios and risk",
      icon: "🏢",
      color: "bg-indigo-600/20 border-indigo-600/30"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who Uses LOustad Smart IP™
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Trusted by IP professionals, innovators, and legal experts worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div key={index} className={`${audience.color} border rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group`}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {audience.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-300 mb-4">
              Global Reach
            </h3>
            <p className="text-slate-300 text-lg">
              Used by professionals in over <span className="text-emerald-400 font-semibold">50+ countries</span>, 
              supporting patent research in <span className="text-emerald-400 font-semibold">15+ languages</span> 
              across all major patent jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
