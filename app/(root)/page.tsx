import React from "react";
import { HeroSection } from "@/components/hero/hero-section";
import { LogoCarouselMain } from "@/components/slider/LogoCarouselMain";
import { PROJECT_FETCH_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { ProjectCard } from "@/components/cards/project-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { GradientHeading } from "@/components/slider/GradientHeading";
import TextScrollSlide from "@/components/home/module/TextScroll";
import Experience from "@/components/home/module/Experience";
import { TopProject } from "@/components/home/module/FeaturedProject";
import ContactForm from "@/components/home/module/ContactForm";
import MainHeroSection from "@/components/main-hero";
import Features from "@/components/home/module/FeaturedSection";
import { HowWeWorkBento } from "@/components/home/module/SkillsSection";
import TechStackIcons from "@/components/teach-list";

const Home = async () => {
	const projects = await client.fetch(PROJECT_FETCH_QUERY);
	return (
		<>
			{/* <HeroSection /> */}
			<MainHeroSection />
			<div className="my-16">
				<TextScrollSlide />
			</div>
			{/* <LogoCarouselMain /> */}
			<Features />
			{projects?.length > 0 ? (
				<section className="my-20">
					<div className=" mx-auto px-8">
						<div className="text-center mb-16">
							<GradientHeading className="my-4" size="xl">
								Featured{" "}
								<span className="bg-clip-text text-transparent  bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
									Projects
								</span>
							</GradientHeading>

							<p className="text-gray-400 max-w-2xl mx-auto">
								Explore some of my recent work showcasing web development
								expertise across different industries and technologies.
							</p>
						</div>

						<div
							id="portfolio"
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full mx-auto">
							{projects.slice(0, 4).map((project: Project) => (
								<div key={project._id} className="w-full h-full flex flex-col">
									<ProjectCard project={project} />
								</div>
							))}
						</div>

						<div className="text-center mt-12">
							<Link href="/project">
								<Button
									className="bg-gradient-to-r from-rose-600 to-rose-700  px-8 py-3 rounded-full 
    transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium hover:bg-rose-700
     text-white cursor-pointer">
									View All Projects
								</Button>
							</Link>
						</div>
					</div>
				</section>
			) : (
				<div className="min-h-[200px] flex items-center justify-center">
					<p className="text-gray-400 text-lg font-medium">No Projects Found</p>
				</div>
			)}

			<HowWeWorkBento />
			<TechStackIcons/>
			<Experience />
			<TopProject />
			<ContactForm />
		</>
	);
};

export default Home;
export const revalidate = 60;
