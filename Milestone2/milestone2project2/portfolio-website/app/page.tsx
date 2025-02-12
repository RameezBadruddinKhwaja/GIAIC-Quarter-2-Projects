"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <section className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-gray-800">
            Rameez Badruddin Khwaja
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full-Stack Engineer in Training
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="https://github.com/RameezBadruddinKhwaja"
              target="_blank"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <GithubIcon className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <LinkedinIcon className="w-8 h-8" />
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              <MailIcon className="w-8 h-8" />
            </Link>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4">
                {project.Url && (
                  <Link
                    href={project.Url}
                    target="_blank"
                    className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </Link>
                )}
                {project.sourceUrl && (
                  <Link
                    href={project.sourceUrl}
                    target="_blank"
                    className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:opacity-90 transition-opacity"
                  >
                    Source Code
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: "Typescript Resume Builder",
    description: "A web application for creating customizable resumes with PDF generation capabilities.",
    Url: "https://milestone-5-two-lake.vercel.app/",
    sourceUrl: "https://github.com/RameezBadruddinKhwaja/GIAIC-Quarter-2-Projects/tree/64aa7e662665cf43b6f765ab70c0531db08df4b1/Hackathon/Milestone5",
  },
  {
    title: "Social Media App",
    description: "A modern social media platform built with Flutter and Firebase.",
    Url: "https://socialmedia-app-sigma.vercel.app/",
    sourceUrl: "https://github.com/RameezBadruddinKhwaja/socialmedia-app/tree/eaca0114dec2e81b3fb69dafe3cb0a1b5dddf608/build/web",
  },
  {
    title: "Wander Travel",
    description: "A sleek website for booking travel tickets, designed with Bootstrap and jQuery.",
    Url: "https://open-end1.vercel.app/",
    sourceUrl: "https://github.com/RameezBadruddinKhwaja/OpenEnd1/blob/01504393b74ea5b083ad68db8da5ebcc6818b980/index.html",
  },
  {
    title: "Tech Shop Website",
    description: "An e-commerce site developed using Bootstrap and jQuery for a modern tech shop.",
    Url: "https://open-end2.vercel.app/",
    sourceUrl: "https://github.com/RameezBadruddinKhwaja/OpenEnd2/blob/ebf684e388439b1ec25d7f3a0d69c48a8c0c35c8/index.html",
  },
  {
    title: "Multi-Page Website",
    description: "A dynamic multi-page website created with Next.js.",
    Url: "https://milestone-2-assignment-2-xi.vercel.app/contact",
    sourceUrl: "https://github.com/RameezBadruddinKhwaja/milestone-2-assignment-2/tree/fa0914568fb701479f9bd489b2811784bf1135f8/milestone-2-assignment-2",
  },
];
