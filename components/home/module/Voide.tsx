"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Geometry, Base, Subtraction } from "@react-three/csg";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { Bloom, N8AO, SMAA, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { Mesh } from "three";
import { KernelSize } from "postprocessing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

function Shape() {
	const meshRef = useRef<Mesh>(null);
	const innerSphereRef = useRef<Mesh>(null);

	useFrame((_: any, delta: number) => {
		if (meshRef.current) {
			meshRef.current.rotation.x += delta * 0.5;
			meshRef.current.rotation.y += delta * 0.3;
			meshRef.current.rotation.z += delta * 0.2;
		}
		if (innerSphereRef.current) {
			innerSphereRef.current.rotation.x += delta * 0.3;
			innerSphereRef.current.rotation.y += delta * 0.5;
			innerSphereRef.current.rotation.z += delta * 0.1;
		}
	});

	return (
		<>
			<mesh ref={meshRef}>
				<meshPhysicalMaterial
					roughness={0}
					metalness={0.95}
					clearcoat={1}
					clearcoatRoughness={0.1}
					color="#eb1515"
				/>

				<Geometry>
					<Base>
						<primitive object={new RoundedBoxGeometry(2, 2, 2, 7, 0.2)} />
					</Base>

					<Subtraction>
						<sphereGeometry args={[1.25, 64, 64]} />
					</Subtraction>
				</Geometry>
			</mesh>

			<mesh ref={innerSphereRef}>
				<sphereGeometry args={[0.8, 32, 32]} />
				<meshPhysicalMaterial
					color="#ffffff"
					emissive={"white"}
					emissiveIntensity={1}
				/>
			</mesh>
		</>
	);
}

function Environment() {
	return (
		<>
			<directionalLight
				position={[-5, 5, -5]}
				intensity={0.2}
				color="#e6f3ff"
			/>

			<directionalLight
				position={[0, -5, 10]}
				intensity={0.4}
				color="#fff5e6"
			/>

			<ambientLight intensity={0.8} color="#404040" />

			<pointLight
				position={[8, 3, 8]}
				intensity={0.2}
				color="#ffeecc"
				distance={20}
			/>

			<pointLight
				position={[-8, 3, -8]}
				intensity={0.2}
				color="#ccf0ff"
				distance={20}
			/>

			<directionalLight
				position={[0, -10, 0]}
				intensity={0.2}
				color="#f0f0f0"
			/>
		</>
	);
}

function Scene() {
	return (
		<>
			<Canvas
				className="w-full h-full"
				camera={{ position: [5, 5, 5], fov: 50 }}>
				<Environment />
				<Shape />
				<EffectComposer multisampling={0}>
					<N8AO
						halfRes
						color="black"
						aoRadius={2}
						intensity={1}
						aoSamples={6}
						denoiseSamples={4}
					/>
					<Bloom
						kernelSize={3}
						luminanceThreshold={0}
						luminanceSmoothing={0.4}
						intensity={0.6}
					/>
					<Bloom
						kernelSize={KernelSize.HUGE}
						luminanceThreshold={0}
						luminanceSmoothing={0}
						intensity={0.5}
					/>
					<SMAA />
				</EffectComposer>
			</Canvas>
		</>
	);
}

export const Hero = ({ description }: { description: string }) => {
	return (
		<div className="w-full h-full bg-gray-100 dark:bg-[#0A0A0A] relative">
			<div className="absolute inset-0">
				<Scene />
			</div>

			{/* Option 1: Center-left positioning */}
			<div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 max-w-lg">
			{/* text="We Build Scalable AI-Powered Web Apps for" */}
				<ContainerTextFlip
					words={["AI Startups", "SaaS Brands", "AI Ventures", "Tech Leaders"]}
				/>
				<div className="my-4">
					<p className=" text-sm md:text-base leading-relaxed font-light tracking-tight text-white/60">
						{description}
					</p>
					<div className="flex my-3 gap-3">
						<Link target="_blank" href={"https://cal.com/unain/meeting"}>
							<Button className=" bg-gradient-to-b  from-rose-600 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
								Free Call
							</Button>
						</Link>
							<Link  href={"/project"}>
						<Button
							variant="outline"
							className="border border-rose-600 bg-transparent shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] dark:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.3)_inset] hover:bg-rose-50 dark:hover:bg-rose-950">
							View Project
						</Button>{" "}
								</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
