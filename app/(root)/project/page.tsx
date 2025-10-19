import { ProjectCard } from '@/components/cards/project-card';
import { HeroSection } from '@/components/hero/hero-section';
import { GradientHeading } from '@/components/slider/GradientHeading';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { PROJECT_FETCH_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/types';
import { Metadata } from 'next';
import React from 'react'

const ProjectPage =  async() => {
    const projects = await client.fetch(PROJECT_FETCH_QUERY);
  return (
    <>
			<HeroSection />
    
    <div>
      {projects?.length > 0 ? (
				<section>
					<div className=" mx-auto px-8">
						{/* <div className="text-center mb-16">
							<GradientHeading className="my-4" size="xl">
								All{" "}
								<span className="bg-clip-text text-transparent  bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
									Projects
								</span>
							</GradientHeading>

							<p className="text-gray-400 max-w-2xl mx-auto">
								Explore some of my recent work showcasing web development
								expertise across different industries and technologies.
							</p>
						</div> */}

						<div
							id="portfolio"
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 w-full mx-auto">
							{projects.map((project: Project) => (
								<div key={project._id} className="w-full h-full flex flex-col">
									<ProjectCard project={project} />
								</div>
							))}
						</div>
					</div>
				</section>
			) : (
				<div className="min-h-[200px] flex items-center justify-center">
					<p className="text-gray-400 text-lg font-medium">No Projects Found</p>
				</div>
			)}
    </div>
    </>
  )
}

export default ProjectPage



export const metadata: Metadata = {
  title: "Projects | UNAIN NextJs Developer | Full Stack & AI Portfolio",
  description: "Projects | Unain | Software Engineer | Web Developer | UI/UX Designer | Full-Stack Developer | AI Expert | Explore 30+ completed projects including AI applications, e-commerce platforms, and modern web solutions built with React, Next.js, and cutting-edge technologies.",
  
  keywords: [
    "UNAIN Projects",
    "NextJs Developer Portfolio",
    "Full Stack Projects",
    "AI Projects",
    "React Projects",
    "Web Development Portfolio",
    "Software Engineer Projects",
    "UI/UX Design Projects",
    "E-commerce Development",
    "Modern Web Applications"
  ],
  
  openGraph: {
    title: "Projects Portfolio | UNAIN NextJs Developer",
    description: "Explore 30+ completed projects showcasing expertise in AI applications, e-commerce platforms, and modern web development.",
    url: 'https://unainr.vercel.app/projects',
    images: ['/projects-og.jpg'],
    type: 'website',
  },
  
  twitter: {
    title: "Projects Portfolio | UNAIN NextJs Developer", 
    description: "Explore 50+ completed projects showcasing expertise in AI applications, e-commerce platforms, and modern web development.",
    images: ['/projects-og.jpg'],
  }
}

