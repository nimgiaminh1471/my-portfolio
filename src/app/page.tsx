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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <button 
            className="md:hidden text-text hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-3 space-y-3 bg-background border-t border-border">
            <a href="#about" className="block text-text hover:text-primary transition-colors py-2">About</a>
            <a href="#skills" className="block text-text hover:text-primary transition-colors py-2">Skills</a>
            <a href="#projects" className="block text-text hover:text-primary transition-colors py-2">Projects</a>
            <a href="#experience" className="block text-text hover:text-primary transition-colors py-2">Experience</a>
            <a href="#contact" className="block text-text hover:text-primary transition-colors py-2">Contact</a>
          </div>
        </div>
      </nav>

      {/* Menu Divider */}
      <div className="w-full h-px bg-border"></div>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 bg-background-light">
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
      <section id="about" className="py-16 bg-background">
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
      <section id="skills" className="py-16 bg-background-light">
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
      <section id="projects" className="py-16 bg-background">
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
      <section id="experience" className="py-16 bg-background-light">
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
      <section id="contact" className="py-16 bg-background">
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
      <footer className="py-12 bg-background-light text-center">
        <div className="container mx-auto px-4">
          <p className="text-light-text">&copy; 2024 Nim Gia Minh. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 