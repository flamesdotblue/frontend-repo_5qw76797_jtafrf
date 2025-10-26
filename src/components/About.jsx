import React from 'react';
import { User, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
                <User className="h-8 w-8 text-gray-700" /> About Me
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                I’m a 3rd-year CS student specializing in front-end engineering and creative technology. I enjoy blending design and development—bringing interfaces to life with motion, accessibility, and performance in mind. My goal is to join a team where I can learn fast, contribute meaningfully, and build products people love.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-gray-900 font-semibold">
                  <GraduationCap className="h-5 w-5" /> Education
                </div>
                <ul className="mt-3 space-y-3 text-gray-700">
                  <li>
                    <div className="font-medium">B.Sc. Computer Science</div>
                    <div className="text-sm text-gray-600">Tech University • 2022 — Present</div>
                  </li>
                  <li>
                    <div className="font-medium">Data Structures, Web Systems, HCI, 3D Graphics</div>
                    <div className="text-sm text-gray-600">Dean’s List (4 semesters)</div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-gray-900 font-semibold">
                  <Briefcase className="h-5 w-5" /> Experience
                </div>
                <ul className="mt-3 space-y-3 text-gray-700">
                  <li>
                    <div className="font-medium">Frontend Intern • PixelForge</div>
                    <div className="text-sm text-gray-600">Jun 2024 — Aug 2024</div>
                    <p className="text-sm mt-1">Built interactive dashboards with React and integrated WebGL visualizations. Improved page performance by 28%.</p>
                  </li>
                  <li>
                    <div className="font-medium">Teaching Assistant • Web Dev I</div>
                    <div className="text-sm text-gray-600">Jan 2024 — May 2024</div>
                    <p className="text-sm mt-1">Helped 60+ students with component architecture, accessibility, and responsive design.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
