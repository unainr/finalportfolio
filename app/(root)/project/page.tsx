import { HeroSection } from '@/components/hero/hero-section';
import { ProjectSkeleton } from '@/components/project-skeleton';
import ProjectPageWrapper from '@/components/project/project-page-wrapper';


import { Metadata } from 'next';
import { Suspense } from 'react'

const ProjectPage =  async () => {
  return (
    <>
			<HeroSection />
    
    <Suspense fallback={<ProjectSkeleton/>} >
      <ProjectPageWrapper/>
    </Suspense>
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

