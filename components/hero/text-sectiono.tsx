import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Cover } from "../ui/Cover";

export const TextSection = () => {
	return (
		<div className="max-w-7xl relative mx-auto z-10 py-10 md:py-20 px-4 w-full left-0 top-0 text-center">
			<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold dark:text-white">
				MERN Stack 
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
					<Cover className="z-10 cursor-pointer">Developer</Cover>
				</span>
			</h1>
			<p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 mx-auto">
				I develop AI-powered applications and intelligent agents that solve real business problems. Specializing in conversational AI, automated workflows, and generative solutions using modern web technologies
			</p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7, duration: 0.8 }}
				className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
				<Link href="/project">
					<Button
					size={'lg'}
						className="w-full bg-gradient-to-b cursor-pointer from-rose-600 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
						Explore My Work
					</Button>
				</Link>

				<Link href={"/resume.pdf"} target="_blank">
					<Button
  size="lg"
  className="w-full cursor-pointer rounded-full bg-transparent text-white border border-rose-600 hover:bg-rose-600 transition-colors duration-300 ease-in"
>
  Download CV
</Button>

				</Link>
			</motion.div>
		</div>
	);
};