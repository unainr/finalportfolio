import { Suspense } from "react";
import TextScrollSlide from "@/components/home/module/TextScroll";
import { TopProject } from "@/components/home/module/FeaturedProject";
import ContactForm from "@/components/home/module/ContactForm";
import MainHeroSection from "@/components/main-hero";
import Features from "@/components/home/module/FeaturedSection";
import TechStackIcons from "@/components/teach-list";
import FeaturesCards from "@/components/home/module/features-grid";
import ProjectWrapper from "@/components/projectwrapper";
import { ProjectSkeleton } from "@/components/project-skeleton";
import { GradientHeading } from "@/components/slider/GradientHeading";

const Home = async () => {
	return (
		<>
			{/* <HeroSection /> */}
			<MainHeroSection />
			<div className="my-16">
				<TextScrollSlide />
			</div>
			{/* <LogoCarouselMain /> */}
			<Features />
			<div className="text-center mb-16">
				<GradientHeading className="my-4" size="xl">
					Featured{" "}
					<span className="bg-clip-text text-transparent  bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
						Projects
					</span>
				</GradientHeading>

				<p className="text-gray-400 max-w-2xl mx-auto">
					Explore some of my recent work showcasing web development expertise
					across different industries and technologies.
				</p>
			</div>

			<Suspense fallback={<ProjectSkeleton />}>
				<ProjectWrapper />
			</Suspense>
			<FeaturesCards />
			{/* <HowWeWorkBento /> */}
			<TechStackIcons />
			<Suspense fallback={<div>Loading testimonials...</div>}>
				<TopProject />
			</Suspense>
			<ContactForm />
		</>
	);
};

export default Home;
