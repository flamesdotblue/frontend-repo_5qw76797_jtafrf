import React, { useMemo, useState } from 'react';
import { BadgeCheck, Code, Mail } from 'lucide-react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Three.js / Spline', level: 70 },
  { name: 'Node.js', level: 75 },
];

const badges = [
  { name: 'Frontend Developer', issuer: 'Meta', year: 2024 },
  { name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: 2023 },
  { name: 'Cloud Practitioner', issuer: 'AWS', year: 2024 },
  { name: 'UI/UX Foundations', issuer: 'Google', year: 2023 },
];

const Progress = ({ value }) => (
  <div className="h-2 w-full rounded-full bg-slate-200">
    <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" style={{ width: `${value}%` }} />
  </div>
);

const SkillsContact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const subject = useMemo(() => encodeURIComponent('Portfolio inquiry'), []);
  const body = useMemo(
    () =>
      encodeURIComponent(
        `Hi Aria,\n\n${form.message}\n\n— ${form.name} (${form.email})`
      ),
    [form]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:aria@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Skills & Badges */}
          <div>
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-gray-800" />
              <h2 className="text-3xl font-extrabold text-gray-900">Skills</h2>
            </div>
            <p className="mt-2 text-gray-600">A mix of technical and creative skills I use daily.</p>
            <div className="mt-6 space-y-5">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between text-sm text-gray-700">
                    <span className="font-medium">{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <Progress value={s.level} />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-6 w-6 text-gray-800" />
                <h3 className="text-2xl font-bold text-gray-900">Digital Badges & Certifications</h3>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {badges.map((b) => (
                  <div key={b.name} className="rounded-xl border bg-slate-50 p-4">
                    <div className="font-semibold text-gray-900">{b.name}</div>
                    <div className="text-sm text-gray-700">{b.issuer}</div>
                    <div className="text-xs text-gray-500">Earned {b.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-gray-800" />
              <h2 className="text-3xl font-extrabold text-gray-900">Contact</h2>
            </div>
            <p className="mt-2 text-gray-600">Have an opportunity, collaboration, or question? Let’s talk.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="name@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="I’d love to discuss…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white shadow hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-600">
              Or email me directly at <a href="mailto:aria@example.com" className="font-medium text-gray-900 underline">aria@example.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsContact;
