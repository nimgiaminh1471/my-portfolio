'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background shadow-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">NGM</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-text hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-text hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-text hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-text hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="text-text hover:text-primary transition-colors">Contact</a>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Divider */}
      <div className="w-full h-px bg-border"></div>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="/avatar.jpg"
                alt="Nim Gia Minh"
                fill
                className="rounded-full object-cover border-4 border-primary shadow-lg"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Nim Gia Minh</h1>
              <h2 className="text-2xl md:text-3xl text-primary mb-6">Backend Developer</h2>
              <p className="text-lg text-text-light mb-8 max-w-2xl">
                10+ years of experience in web development, specializing in Laravel and modern backend technologies
              </p>
              <a
                href="#contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-border"></div>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-light-text mb-6">
              I am a passionate backend developer with 10 years of experience in web development, particularly in Laravel. 
              I specialize in building robust, scalable applications and have a strong track record of delivering projects on time and within budget.
            </p>
            <p className="text-lg text-light-text mb-4">My expertise includes:</p>
            <ul className="list-disc list-inside space-y-2 text-light-text">
              <li>Design and implementation of complex web applications</li>
              <li>Integration of automation tests and CI/CD pipelines</li>
              <li>Team leadership and project management</li>
              <li>Microservices architecture and API development</li>
              <li>Performance optimization and system scalability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-light-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="text-text">Backend Development</h3>
              <ul className="text-text-light">
                <li>PHP</li>
                <li>Laravel</li>
                <li>NodeJS</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>AWS Lambda</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="text-text">Frontend & Tools</h3>
              <ul className="text-text-light">
                <li>ReactJS</li>
                <li>Angular</li>
                <li>TypeORM</li>
                <li>Jenkins</li>
                <li>Docker</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3 className="text-text">Databases & APIs</h3>
              <ul className="text-text-light">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Microservices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="text-text">Lighthouse</h3>
              <p className="text-text-light">Built an omnichannel system integrating with Shopee, Lazada, TikTok, and Shopify. Implemented using NodeJS, ReactJS, TypeScript, and TypeORM.</p>
              <div className="project-tech">
                <span>NodeJS</span>
                <span>ReactJS</span>
                <span>TypeScript</span>
                <span>TypeORM</span>
              </div>
            </div>
            <div className="project-card">
              <h3 className="text-text">ECQ</h3>
              <p className="text-text-light">Developed a Cyber Range system for Security Training for banks, featuring microservices architecture and virtual machine integration.</p>
              <div className="project-tech">
                <span>Laravel</span>
                <span>ReactJS</span>
                <span>Microservices</span>
              </div>
            </div>
            <div className="project-card">
              <h3 className="text-text">ReelUp</h3>
              <p className="text-text-light">Created a Reel system similar to Instagram for Shopify App, implementing video crawling from Instagram and TikTok.</p>
              <div className="project-tech">
                <span>NodeJS</span>
                <span>ReactJS</span>
                <span>Shopify API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-light-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="grid md:grid-cols-[150px_1fr] gap-8">
              <div className="font-semibold text-primary">2021 - Present</div>
              <div className="border-l-2 border-border-color pl-6">
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <h4 className="text-light-text mb-4">TheGoodGuys</h4>
                <ul className="space-y-2 text-light-text">
                  <li>Lead development of multiple enterprise-level projects</li>
                  <li>Implemented microservices architecture for scalable solutions</li>
                  <li>Managed team of 12 developers</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-[150px_1fr] gap-8">
              <div className="font-semibold text-primary">2017 - 2021</div>
              <div className="border-l-2 border-border-color pl-6">
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <h4 className="text-light-text mb-4">The New District</h4>
                <ul className="space-y-2 text-light-text">
                  <li>Led team of 3 developers</li>
                  <li>Built and maintained commercial websites with payment integration</li>
                  <li>Developed CRM system with marketing campaign integration</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-[150px_1fr] gap-8">
              <div className="font-semibold text-primary">2015 - 2017</div>
              <div className="border-l-2 border-border-color pl-6">
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <h4 className="text-light-text mb-4">HIQ</h4>
                <ul className="space-y-2 text-light-text">
                  <li>Developed corporate websites using Laravel and WordPress</li>
                  <li>Built IoT product APIs and smart home controller system</li>
                  <li>Managed team of 10 developers</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-[150px_1fr] gap-8">
              <div className="font-semibold text-primary">2014 - 2015</div>
              <div className="border-l-2 border-border-color pl-6">
                <h3 className="text-xl font-semibold">Web Developer</h3>
                <h4 className="text-light-text mb-4">Nam Viet</h4>
                <ul className="space-y-2 text-light-text">
                  <li>Developed e-commerce websites using WordPress and PHP</li>
                  <li>Participated in team projects and successful collaborations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-light-text">Email: nimgiaminh1471@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-light-text">Phone: 0344401830</p>
              </div>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-light-text">Location: Vietnam</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border-color focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                  status === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary hover:bg-secondary'
                }`}
              >
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent!'
                  : status === 'error'
                  ? 'Error - Try Again'
                  : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-light-background text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-text hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-text hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-2.007-1.225-2.007-1.225 0-1.413.957-1.413 1.944v5.667h-3v-11h3v1.62h.045c.58-1.1 1.995-2.262 4.108-2.262 4.39 0 5.5 2.89 5.5 6.648v6.094z"/>
              </svg>
            </a>
            <a href="#" className="text-text hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
          <p className="text-light-text">&copy; 2024 Nim Gia Minh. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 