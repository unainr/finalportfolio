"use client";

import { GradientHeading } from "@/components/slider/GradientHeading";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLightbulb,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";

const aboutStats = [
  { icon: FaProjectDiagram, title: "Projects", value: "30+ Completed", delay: 0.2 },
  { icon: FaBrain, title: "Focus", value: "AI & ML", delay: 0.4 },
  { icon: FaLightbulb, title: "Interests", value: "AI & Web3", delay: 0.6 },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#e60a64]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-[#e60a64]/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GradientHeading className="my-4" size="xl">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-700 animate-gradient">
              Me
            </span>
          </GradientHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto"
          >
            I'm a passionate Full Stack Developer with expertise in modern web
            technologies. With a strong foundation in both front-end and
            back-end development, I create seamless, user-centric applications
            that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {aboutStats.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: item.delay }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-gray-800 
                hover:border-[#e60a64]/50 transition-all duration-300 
                hover:shadow-xl hover:shadow-rose-600/20 group"
            >
              <item.icon className="text-rose-600 text-4xl mb-6 transition-transform duration-300" />
              <h3 className="text-rose-600 font-semibold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
