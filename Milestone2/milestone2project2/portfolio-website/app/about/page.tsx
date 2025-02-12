// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Server } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent">
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
            About Me
          </h1>
          
          {/* Education Section */}
          <div className="bg-white shadow-md rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <p className="text-gray-800 text-lg">
              Completed Associate Degree in Computer Information Systems (ADP-CIS)
              at Hamdard University in 2025.
            </p>
          </div>

          {/* Skills & Languages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Technical Skills
              </h2>
              <div className="space-y-6">
                <SkillCategory
                  icon={<Globe className="w-6 h-6 text-primary" />}
                  title="Frontend"
                  skills={[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind CSS",
                    "Bootstrap",
                    "jQuery",
                  ]}
                />
                <SkillCategory
                  icon={<Server className="w-6 h-6 text-primary" />}
                  title="Backend"
                  skills={["PHP"]}
                />
                <SkillCategory
                  icon={<Database className="w-6 h-6 text-primary" />}
                  title="Databases"
                  skills={["SQL", "Firebase"]}
                />
                <SkillCategory
                  icon={<Code className="w-6 h-6 text-primary" />}
                  title="Other"
                  skills={["GitHub", "Next.js", "React", "Agentic AI"]}
                />
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Languages & Learning
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Languages
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>English</li>
                  <li>Urdu</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Ongoing Learning
                </h3>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Full-Stack Development</li>
                  <li>Agentic AI (Governor House IT initiative)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white shadow-md rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>
                Collaborated on GitHub repositories for admin panel development
              </li>
              <li>Successfully deployed multiple projects on Vercel</li>
              <li>
                Hands-on experience with Bootstrap and jQuery in IP Lab
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

function SkillCategory({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
