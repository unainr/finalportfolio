"use client"

import { motion } from "framer-motion"
import { TechStackAnimatedList } from "./teach-stack"
import { GradientHeading } from "./slider/GradientHeading"

export default function TechStackIcons() {
  return (
    <>
      <div className="container overflow-hidden mx-auto px-6 mb-20 ">
        <div className=" mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <GradientHeading className="my-4" size="lg">
								Technology Stack{" "}
								<span className="bg-clip-text text-transparent  bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
									Stack
								</span>
							</GradientHeading>
                <p className="text-md text-muted-foreground leading-relaxed text-pretty">
                  Our cutting-edge technology stack represents the pinnacle of modern web development. We leverage
                  industry-leading frameworks and tools to build scalable, performant, and maintainable applications
                  that deliver exceptional user experiences.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-md text-muted-foreground leading-relaxed">
                  From frontend frameworks like Next.js and React to robust backend solutions with Node.js, our
                  technology choices are driven by performance, developer experience, and long-term maintainability.
                  Each tool in our stack is carefully selected to work harmoniously with others, creating a cohesive
                  development ecosystem.
                </p>

                <p className="text-md text-muted-foreground leading-relaxed">
                  Whether it's TypeScript for type safety, Tailwind CSS for rapid styling, or Docker for
                  containerization, every technology serves a specific purpose in delivering world-class digital
                  solutions.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Animated Tech Stack List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <TechStackAnimatedList />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
