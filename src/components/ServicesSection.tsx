import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Code, Rocket, ArrowRight, Globe, Smartphone, Database, Cpu, Megaphone, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		icon: Lightbulb,
		title: "Tech Consultancy",
		description:
			"Strategic technology guidance to accelerate your business growth. We help you make informed decisions about technology stack, architecture, and digital transformation.",
		features: [
			"Technology Strategy",
			"Architecture Planning",
			"Digital Transformation",
			"Risk Assessment",
		],
		color: "primary",
	},
	{
		icon: Code,
		title: "Custom Software Development",
		description:
			"Bespoke software solutions tailored to your unique business needs. From web applications to enterprise systems, we build scalable and maintainable solutions.",
		features: [
			"Web Applications",
			"Mobile Apps",
			"API Development",
			"System Integration",
		],
		color: "secondary",
	},
	{
		icon: Rocket,
		title: "Personal SaaS Products",
		description:
			"Innovative SaaS solutions designed to solve real-world problems. We create and launch our own products while partnering with clients on theirs.",
		features: [
			"Product Development",
			"MVP Launch",
			"Scaling Solutions",
			"Market Research",
		],
		color: "accent",
	},
	{
		icon: Globe,
		title: "Website Development",
		description:
			"Modern, responsive websites optimized for performance, accessibility and conversions.",
		features: [
			"Responsive Design",
			"SEO-Friendly",
			"E-commerce",
			"CMS Integration",
		],
		color: "primary",
	},
	{
		icon: Smartphone,
		title: "Mobile Applications Development",
		description:
			"Native and cross-platform mobile apps with delightful UX, performance and store-ready builds.",
		features: [
			"iOS & Android",
			"React Native / Flutter",
			"App Store Deployment",
			"Offline Support",
		],
		color: "secondary",
	},
	{
		icon: Database,
		title: "CRM / ERP Software",
		description:
			"Custom CRM and ERP solutions to centralize operations, improve reporting and streamline workflows.",
		features: [
			"CRM Customization",
			"ERP Integration",
			"Reporting & Dashboards",
			"Role-based Access",
		],
		color: "accent",
	},
	{
		icon: Cpu,
		title: "AI Automations / Automating Workflows",
		description:
			"Automate repetitive tasks and build intelligent workflows using AI, integrations and scripting.",
		features: [
			"Workflow Automation",
			"RPA & Integrations",
			"Custom AI Models",
			"Monitoring & Alerts",
		],
		color: "primary",
	},
	{
		icon: Megaphone,
		title: "Digital Marketing",
		description:
			"Data-driven digital marketing to grow traffic, leads and conversions across channels.",
		features: [
			"SEO & Content",
			"PPC Campaigns",
			"Social Media",
			"Analytics & Reporting",
		],
		color: "secondary",
	},
	{
		icon: PenTool,
		title: "Graphic Designing",
		description:
			"Branding, UI graphics and visual assets that communicate your story and delight customers.",
		features: ["Brand Identity", "UI / UX Assets", "Print & Digital", "Illustration"],
		color: "accent",
	},
];

const ServicesSection = () => {
	return (
		<section id="services" className="py-24 lg:py-40 relative overflow-hidden">
			{/* Background patterns */}
			<div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
			<div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

			<div className="container mx-auto px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-24 max-w-3xl mx-auto animate-fade-in">
					<h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
						<span className="gradient-text">Powering</span> Your Growth
					</h2>
					<p className="text-xl text-muted-foreground leading-relaxed">
						Our multi-disciplinary team delivers cutting-edge solutions across the
						entire digital spectrum.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
					{services.map((service, index) => {
						const IconComponent = service.icon;
						return (
							<Card
								key={service.title}
								className={`group relative border-none p-[2px] rounded-[2.5rem] transition-all duration-500 hover:scale-[1.03] animate-slide-up bg-slate-200 dark:bg-white/10 hover:bg-gradient-to-br ${
									service.color === "primary"
										? "hover:from-primary hover:to-secondary"
										: service.color === "secondary"
										? "hover:from-secondary hover:to-orange-400"
										: "hover:from-blue-500 hover:to-cyan-400"
								} shadow-medium hover:shadow-glow`}
								style={{ animationDelay: `${index * 0.15}s` }}
							>
								<CardContent className="h-full bg-white dark:bg-slate-900 rounded-[2.3rem] p-10 flex flex-col justify-between relative z-10">
									<div>
										<div
											className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-medium ${
												service.color === "primary"
													? "from-primary to-blue-600 shadow-blue-500/20"
													: service.color === "secondary"
													? "from-secondary to-orange-500 shadow-orange-500/20"
													: "from-blue-400 to-indigo-600 shadow-indigo-500/20"
											}`}
										>
											<IconComponent className="w-8 h-8 text-white stroke-[2.5px]" />
										</div>
										<h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors text-slate-900 dark:text-white">
											{service.title}
										</h3>
										<p className="text-slate-600 dark:text-muted-foreground leading-relaxed mb-6 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
											{service.description}
										</p>
									</div>

									<ul className="space-y-3 mt-4">
										{service.features.map((feature) => (
											<li key={feature} className="flex items-center text-sm font-bold text-slate-700 dark:text-foreground/70">
												<div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
												{feature}
											</li>
										))}
									</ul>

									<div className="mt-10 pt-6 border-t border-border/50 flex items-center group/btn cursor-pointer">
										<span className="text-sm font-bold uppercase tracking-widest text-primary">
											Learn More
										</span>
										<ArrowRight className="ml-2 w-4 h-4 text-primary transition-transform group-hover/btn:translate-x-2" />
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;