"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Earth from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { Label } from "@/components/ui/label";
import { Check, Loader2 } from "lucide-react";
import MainForm from "./Form";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const formRef = useRef(null);
	const isInView = useInView(formRef, { once: true, amount: 0.3 });

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Perform form submission logic here
			console.log("Form submitted:", { name, email, message });
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setName("");
			setEmail("");
			setMessage("");
			setIsSubmitted(true);
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error("Error submitting form:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="bg-background  relative w-full overflow-hidden py-16 md:py-24">
			<div
				className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
				style={{
					background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
				}}
			/>
			<div
				className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
				style={{
					background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
				}}
			/>

			<div className="relative z-10 container mx-auto px-4 md:px-6">
				<div className="border-border/40 bg-secondary/20 mx-auto  overflow-hidden rounded-[28px] border shadow-xl backdrop-blur-sm">
					<div className="grid md:grid-cols-2">
						<div className="relative p-6 md:p-10" ref={formRef}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="flex w-full gap-2">
								<h2 className="from-foreground to-foreground/80 mb-2 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
									Contact
								</h2>
								<span className="text-primary relative z-10 w-full text-4xl font-bold tracking-tight italic md:text-5xl">
									Us
								</span>
								<SparklesCore
									id="tsparticles"
									background="transparent"
									minSize={0.6}
									maxSize={1.4}
									particleDensity={500}
									className="absolute inset-0 top-0 h-24 w-full"
									particleColor="#e60a64"
								/>
							</motion.div>

							<motion.div className="my-5"
								initial={{ opacity: 0, y: 20 }}
								animate={
									isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ duration: 0.5, delay: 0.1 }}>
								<MainForm />
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="relative my-8 flex items-center justify-center overflow-hidden pr-8">
							<div className="flex flex-col items-center justify-center overflow-hidden">
								<article className="relative mx-auto h-[350px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border bg-gradient-to-b from-[#e60a64] to-[#e60a64]/5 p-6 text-3xl tracking-tight text-white md:h-[450px] capitalize md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
									Ready to elevate your product Let’s connect
									<div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-28 md:-bottom-28 md:max-w-[550px]">
										<Earth
											scale={1.1}
											baseColor={[1, 0, 0.3]}
											markerColor={[0, 0, 0]}
											glowColor={[1, 0.3, 0.4]}
										/>
									</div>
								</article>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
