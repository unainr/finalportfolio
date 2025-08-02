"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconCode,
  IconDatabase,
  IconTools,
  IconServer,
} from "@tabler/icons-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: <IconDatabase className="w-8 h-8" />,
    description: "Server-side technologies and database management",
    skills: [
      { name: "Node.js / Express", level: 85, category: "Runtime" },
      { name: "Appwrite", level: 80, category: "BaaS" },
      { name: "MongoDB / Mongoose", level: 85, category: "Database" },
      { name: "MySQL / PostgreSQL", level: 78, category: "Database" },
      { name: "Supabase", level: 82, category: "BaaS" },
      { name: "Laravel", level: 70, category: "Framework" },
    ],
  },
  {
    title: "Frontend Development",
    icon: <IconCode className="w-8 h-8" />,
    description: "Modern UI/UX and interactive web applications",
    skills: [
      { name: "Next.js", level: 90, category: "Framework" },
      { name: "React.js", level: 88, category: "Library" },
      { name: "TypeScript", level: 85, category: "Language" },
      { name: "Tailwind CSS", level: 92, category: "Styling" },
      { name: "JavaScript", level: 90, category: "Language" },
      { name: "Framer Motion", level: 78, category: "Animation" },
    ],
  },
  {
    title: "DevOps & Deployment",
    icon: <IconTools className="w-8 h-8" />,
    description: "Development tools and deployment solutions",
    skills: [
      { name: "Git/GitHub", level: 90, category: "Version Control" },
      { name: "Docker", level: 80, category: "Containerization" },
      { name: "Vercel", level: 90, category: "Cloud Platform" },
      { name: "Netlify", level: 80, category: "Cloud Platform" },
      { name: "CI/CD (GitHub Actions)", level: 80, category: "Automation" },
      { name: "Sentry", level: 70, category: "Monitoring" },
    ],
  },
  {
    title: "AI & Voice Applications",
    icon: <Bot className="w-8 h-8" />,
    description: "AI-powered applications and voice assistants",
    skills: [
      { name: "Google Gemini", level: 84, category: "Multimodal AI" },
      { name: "OpenAI API (GPT-4, Whisper)", level: 78, category: "AI Integration" },
      { name: "Groq (LLaMA 3, Mixtral)", level: 82, category: "LLM Hosting" },
      { name: "Meta LLaMA", level: 80, category: "Open-Source LLM" },
      { name: "AI Agent Development", level: 77, category: "AI Systems" },
      { name: "Image Generation", level: 80, category: "Generative AI" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    category: string;
  };
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-3 group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-medium transition-colors duration-300">
            {skill.name}
          </span>
          <Badge
            variant="secondary"
            className="text-xs bg-rose-600/10 text-rose-600 border-rose-600/20 hover:bg-rose-600/20 transition-colors duration-300"
          >
            {skill.category}
          </Badge>
        </div>
        <span className="text-sm font-semibold text-rose-600 group-hover:text-rose-600 transition-colors duration-300">
          {skill.level}%
        </span>
      </div>

      <div className="relative">
        <div className="h-2 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.8, delay: index * 0.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-rose-600 to-rose-700 rounded-full relative overflow-hidden"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 3s infinite",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export function SkillsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 from-rose-600 to-rose-700 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(230,10,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(230,10,100,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className=" mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>Technical</span>{" "}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
                Expertise
              </span>
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Crafting digital experiences with{" "}
            <span className="text-rose-600 font-medium">
              cutting-edge technologies
            </span>{" "}
            and modern development practices that drive innovation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full hover:border-rose-600/50 backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:shadow-rose-600/20">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-rose-600/10 text-rose-600 group-hover:bg-rose-600/20 transition-all duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-rose-600 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-sm mt-1 transition-colors duration-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard key={skillIndex} skill={skill} index={skillIndex} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-rose-600/20 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 left-20 w-16 h-16 border border-rose-600/30 rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-4 w-2 h-20 bg-gradient-to-b from-rose-600 to-rose-700  rounded-full animate-pulse delay-1000" />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
