
const Closing = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-12 shadow-2xl">
            <div className="text-6xl mb-8">🚀</div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-slate-200 mb-8 leading-relaxed">
              "LOustad Smart IP™ is the Bloomberg Terminal for global patents — 
              but faster, more affordable, and powered by AI."
            </blockquote>
            
            <div className="bg-emerald-600/20 border border-emerald-600/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-emerald-300 mb-4">
                The Future of Patent Intelligence
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Join thousands of IP professionals who have already transformed their workflow with 
                intelligent, semantic patent search. Experience the power of unified global patent 
                intelligence today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Your Free Search
              </button>
              <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">LOustad Smart IP™</h3>
              <p className="text-slate-400 text-sm">
                Global patent intelligence powered by AI
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Platform</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Web App</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API Access</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 LOustad Smart IP™. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Closing;
