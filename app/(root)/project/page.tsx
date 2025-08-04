import { ProjectCard } from '@/components/cards/project-card';
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
    <div>
      {projects?.length > 0 ? (
				<section className="my-30">
					<div className=" mx-auto px-8">
						<div className="text-center mb-16">
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
						</div>

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
  )
}

export default ProjectPage
export const revalidate = 60;





// AI Companion Project Page
export const aiCompanionMetadata: Metadata = {
  title: "AI  Project | UNAIN NextJs Developer | Voice AI Application",
  description: "AI Companion Project | Unain | Voice AI Application built with VAPI, Next.js, and advanced AI technology. Experience natural voice conversations with intelligent AI companions tailored to your needs.",
  
  keywords: [
    "AI Companion",
    "Voice AI",
    "VAPI Integration",
    "Next.js AI Project",
    "AI Voice Assistant",
    "Voice Technology",
    "AI Chat Application",
    "Machine Learning Project",
    "Conversational AI",
    "UNAIN Projects",
	"Wisera"
  ],
  
  openGraph: {
    title: "AI Companion Wisera | Voice AI Application by UNAIN",
    description: "Experience natural voice conversations with intelligent AI companions. Built with VAPI and Next.js by UNAIN.",
    url: 'https://wisera.vercel.app/',
    images: ['https://ik.imagekit.io/a3gy4rsgb/portfolioimages/screencapture-wisera-vercel-app-2025-08-01-13_04_22.png?updatedAt=1754035533383'],
    type: 'article',
  },
  
  twitter: {
    title: "AI Companion | Voice AI Application by UNAIN",
    description: "Experience natural voice conversations with intelligent AI companions. Built with VAPI and Next.js.",
    images: ['https://ik.imagekit.io/a3gy4rsgb/portfolioimages/screencapture-wisera-vercel-app-2025-08-01-13_04_22.png?updatedAt=1754035533383'],
  }
}

