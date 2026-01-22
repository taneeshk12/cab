import React from "react";

const clients = [
	{ name: "DIDPL", logo: "/images.png" },
	{ name: "Kruze", logo: "" },
	{ name: "Aakash Marketing", logo: "/1.png" },
	{ name: "Arka Import Exports", logo: "" },
	{ name: "DM Group Of Industries", logo: "" },
	{ name: "Ananta GSFC University", logo: "/a.svg" },
	{ name: "IeltsPrepAI", logo: "/logo_f.webp" },
];

const ClientsSection = () => {
	return (
		<section
			id="clients"
			className="py-24 relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-primary/[0.02] -skew-y-3 transform origin-right" />
			
			<div className="container mx-auto px-6 lg:px-8 relative z-10">
				<div className="text-center mb-20 animate-fade-in">
					<h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
						Trusted by <span className="gradient-text">Innovators</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Empowering companies across industries with robust, scalable technology.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12 items-center">
					{clients.map((client, index) => (
						<div
							key={client.name}
							className="group flex flex-col items-center justify-center transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
						>
              <div className="relative w-full aspect-square flex items-center justify-center p-6 rounded-[2rem] transition-all duration-500 bg-white border border-slate-200 shadow-sm hover:shadow-large hover:bg-white group-hover:-translate-y-2 overflow-hidden">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-[85%] max-w-[85%] object-contain transition-all duration-500 scale-100 group-hover:scale-110 relative z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      // Fallback to text if image fails
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        const fb = document.createElement('div');
                        fb.className = "text-center";
                        fb.innerHTML = `<div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2"><span class="text-xl font-black text-primary">${client.name[0]}</span></div><span class="text-xs font-bold text-slate-900 uppercase tracking-widest">${client.name}</span>`;
                        parent.appendChild(fb);
                      }
                    }}
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                      <span className="text-xl font-black text-primary">{client.name[0]}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-widest transition-colors">
                      {client.name}
                    </span>
                  </div>
                )}
                {/* Decorative background element for the card */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 blur-xl" />
              </div>
						</div>
					))}
				</div>
        
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full glass-card border-primary/10 animate-pulse">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                  {i}+
                </div>
              ))}
            </div>
            <span className="text-sm font-semibold text-muted-foreground italic">
Many more            </span>
          </div>
        </div>
			</div>
		</section>
	);
};

export default ClientsSection;
