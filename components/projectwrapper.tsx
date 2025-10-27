import { client } from '@/sanity/lib/client';
import { PROJECT_FETCH_QUERY } from '@/sanity/lib/queries';
import { Project } from '@/types';
import React from 'react'
import { ProjectCard } from './cards/project-card';
import Link from 'next/link';
import { Button } from './ui/button';
import { GradientHeading } from './slider/GradientHeading';
import { cacheLife } from 'next/cache';
import { EliteProjectCard } from './cards/elight-card';

const ProjectWrapper = async () => {
	'use cache'
	cacheLife('hours')
const projects = await client.fetch(PROJECT_FETCH_QUERY);
    
  return (
    <div>
      {projects?.length > 0 ? (
				<section className="my-20">
					<div className=" mx-auto px-8">
						
						<div
							id="portfolio"
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full mx-auto">
							{projects.slice(0, 3).map((project: Project) => (
								<div key={project._id} className="w-full h-full flex flex-col">
									<EliteProjectCard  project={project} />
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
    </div>
  )
}

export default ProjectWrapper
