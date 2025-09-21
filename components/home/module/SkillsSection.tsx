"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconCode, IconDatabase, IconTools } from "@tabler/icons-react";
import { Bot, Calendar, Bell, Share2, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, audience, and requirements to create a comprehensive project roadmap.",
  },
  {
    title: "Design & Prototyping",
    description: "Crafting user-friendly UI/UX wireframes and interactive prototypes with modern design systems for optimal user experience.",
  },
  {
    title: "Development",
    description: "Agile development of scalable frontend, backend, and AI integrations with clean code architecture and best practices.",
  },
  {
    title: "Deployment & Growth",
    description: "Seamless launch with CI/CD pipelines, performance monitoring, and continuous optimization for long-term success.",
  },
];

const workflowFeatures = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Document Everything",
    description: "We maintain comprehensive documentation throughout the entire development process for transparency and future scalability.",
    highlights: [
      "Project requirements & specifications",
      "Technical architecture documentation", 
      "API documentation & guides",
      "Deployment & maintenance guides"
    ]
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Real-time Updates", 
    description: "Stay informed with instant notifications about project milestones, code deployments, and important developments.",
    highlights: [
      "Daily progress reports",
      "Milestone completion alerts",
      "Code deployment notifications",
      "Issue resolution updates"
    ]
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Seamless Integrations",
    description: "Connect with 100+ tools and services including payment gateways, analytics, CRMs, and third-party APIs for enhanced functionality.",
    highlights: [
      "Payment gateway integrations",
      "Analytics & monitoring tools",
      "CRM & marketing platforms", 
      "Custom API integrations"
    ]
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Structured Timeline",
    description: "Every project follows a carefully planned timeline with clear milestones, deadlines, and deliverable schedules.",
    highlights: [
      "Project milestone planning",
      "Sprint-based development",
      "Regular review meetings",
      "Flexible timeline adjustments"
    ]
  }
];

const techStack = [
  { name: "Next.js", category: "Frontend", icon: <IconCode className="w-5 h-5" /> },
  { name: "React", category: "Frontend", icon: <IconCode className="w-5 h-5" /> },
  { name: "TypeScript", category: "Language", icon: <IconCode className="w-5 h-5" /> },
  { name: "Tailwind CSS", category: "Styling", icon: <IconCode className="w-5 h-5" /> },
  { name: "Node.js", category: "Backend", icon: <IconDatabase className="w-5 h-5" /> },
  { name: "MongoDB", category: "Database", icon: <IconDatabase className="w-5 h-5" /> },
  { name: "PostgreSQL", category: "Database", icon: <IconDatabase className="w-5 h-5" /> },
  { name: "Docker", category: "DevOps", icon: <IconTools className="w-5 h-5" /> },
  { name: "Vercel", category: "Deployment", icon: <IconTools className="w-5 h-5" /> },
  { name: "OpenAI API", category: "AI", icon: <Bot className="w-5 h-5" /> },
  { name: "Google Gemini", category: "AI", icon: <Bot className="w-5 h-5" /> },
];

export function HowWeWorkBento() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(230,10,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(230,10,100,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span>How We</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
              Work
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A clear process and the right tools help us deliver{" "}
            <span className="text-rose-600 font-medium">scalable, AI-powered solutions</span>{" "}
            that drive business growth.
          </p>
        </motion.div>

        {/* Process Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:border-rose-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-rose-600/20 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-rose-600">{step.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Workflow Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Workflow Excellence</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've refined our workflow to ensure transparency, efficiency, and exceptional results in every project we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflowFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="hover:border-rose-600/30 transition-all duration-300 hover:shadow-lg h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-rose-600/10 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <h4 className="text-xl font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, highlightIdx) => (
                        <li key={highlightIdx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Tech Stack</h3>
            <p className="text-muted-foreground">
              The tools and technologies we use to build modern, scalable applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2 px-4 py-2 bg-rose-600/10 text-rose-600 border border-rose-600/20 hover:bg-rose-600 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {tech.icon}
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Simple Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}