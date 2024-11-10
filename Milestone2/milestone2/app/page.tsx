'use client'

import React, { useState, useEffect } from 'react';

// Define the types for the component props
interface TypingAnimationProps {
  words: string[]; // The 'words' prop should be an array of strings
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

const Portfolio: React.FC = () => {
  const animatedWords = [
    'Full Stack Developer',
    'Computer Science Student',
    'TypeScript Enthusiast'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m Rameez B. Khwaja
          </h1>
          <div className="text-xl md:text-2xl text-blue-400 mb-8">
            <TypingAnimation words={animatedWords} />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2><br></br>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
              <ul className="space-y-2">
                <li>• Full Name: Rameez Badruddin Khwaja</li>
                <li>• Location: Karachi, Pakistan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <p>ADP-CIS (Associate Degree in Computer Information Systems)</p>
              <p>Hamdard University</p>
              <p>Expected Graduation: 2025</p>
              <p>Major: Programming and Software Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <ul className="space-y-2">
                <li>• C++</li>
                <li>• JavaScript</li>
                <li>• TypeScript</li>
                <li>• Jquery</li>
                <li>• CSS3</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Frameworks and others</h3>
              <ul className="space-y-2">
                <li>• Next.js</li>
                <li>• Bootstrap 5.3.3</li>
                <li>• Flutter</li>
                <li>• Html</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
              <ul className="space-y-2">
                <li>• SQL Databases</li>
                <li>• IoT Development</li>
                <li>• Proteus</li>
                <li>• Generative AI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Resume Builder</h3>
              <p className="text-gray-300">A TypeScript-based project with PDF generation capabilities and customizable templates.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">E-learning Platform</h3>
              <p className="text-gray-300">Built using HTML5, CSS3, JavaScript, and TypeScript.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Banking System</h3>
              <p className="text-gray-300">Developed in C++ with core banking functionalities.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-4">Flutter Sign-In Page</h3>
              <p className="text-gray-300">A mobile-first authentication interface built with Flutter.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
