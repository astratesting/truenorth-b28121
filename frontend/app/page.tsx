import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

export default function HomePage() {
  const services = [
    {
      title: 'Brand Strategy',
      description: 'Define your positioning, voice, and visual identity to stand out in the market.',
      icon: '🎯',
    },
    {
      title: 'Product Design',
      description: 'User-centered design that delights and converts, from wireframes to polished UIs.',
      icon: '🎨',
    },
    {
      title: 'Web Development',
      description: 'Fast, accessible, and scalable web applications built with modern technologies.',
      icon: '⚡',
    },
    {
      title: 'Go-to-Market',
      description: 'Launch strategies that get you in front of the right audience at the right time.',
      icon: '🚀',
    },
  ];

  return (
    <div>
      <Hero
        title="Navigate Your Path to Success"
        subtitle="From rough idea to credible first launch. We help founders build public surfaces, operating plans, and outreach-ready assets that convert."
        ctaText="Start Your Journey"
        ctaHref="#contact"
        secondaryCtaText="See How It Works"
        secondaryCtaHref="#services"
        background="navy"
      />

      <Section
        id="services"
        title="What We Do"
        subtitle="Everything you need to go from concept to launch"
        background="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="p-6 h-full">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="about"
        title="Why TrueNorth?"
        subtitle="We bridge the gap between idea and execution"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Clear Direction</h3>
            <p className="text-gray-600">No more guessing. We provide a clear path from concept to launch.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Fast Execution</h3>
            <p className="text-gray-600">Get to market quickly with our streamlined process and expert guidance.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Proven Results</h3>
            <p className="text-gray-600">Join successful founders who launched with confidence using TrueNorth.</p>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        title="Ready to Launch?"
        subtitle="Get in touch and let's build something amazing together"
        background="cream"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-8">
            Whether you're starting from scratch or refining your approach, we're here to help you succeed.
          </p>
          <Button variant="brand" size="lg" href="#contact-form">
            Get Started Today
          </Button>
        </div>
      </Section>
    </div>
  );
}
