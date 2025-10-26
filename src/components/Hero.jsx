import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-start justify-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-gray-700">Open to Internship & Full-time roles</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Hi, I’m Aria Patel
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
            A 3rd-year Computer Science student passionate about building delightful, performant web experiences. I love crafting rich interfaces, visualizing data in 3D, and shipping real products.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 font-semibold shadow hover:bg-gray-800 transition-colors"
            >
              <Rocket className="h-5 w-5" />
              Explore Projects
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-gray-800 shadow hover:shadow-md transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-gray-800 shadow hover:shadow-md transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
