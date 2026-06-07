import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="p-6 h-full">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="p-6 h-full">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </Card>
  );
}

export default function LandingPage() {
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

  const testimonials = [
    {
      quote: 'TrueNorth transformed our vague idea into a compelling brand and launch-ready product in weeks.',
      author: 'Sarah Chen',
      role: 'Founder, EcoTrack',
    },
    {
      quote: 'The design system they built became the foundation of our entire product. Invaluable.',
      author: 'Michael Rodriguez',
      role: 'CTO, DataFlow',
    },
    {
      quote: 'Finally, a partner who understands both the business and technical sides of launching.',
      author: 'Emily Watson',
      role: 'CEO, HealthHub',
    },
  ];

  const features = [
    {
      title: 'Positioning & Messaging',
      description: 'Crystal-clear value proposition and brand voice',
    },
    {
      title: 'Visual Identity',
      description: 'Logo, color palette, typography, and design system',
    },
    {
      title: 'Landing Page',
      description: 'Conversion-optimized, responsive, and accessible',
    },
    {
      title: 'Outreach Assets',
      description: 'Pitch deck, one-pager, and email templates',
    },
    {
      title: 'Operating Plan',
      description: '90-day roadmap with milestones and metrics',
    },
    {
      title: 'Technical Foundation',
      description: 'Scalable architecture and deployment pipeline',
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
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      <Section
        id="features"
        title="What You Get"
        subtitle="A complete foundation for your startup launch"
        background="gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-[#d4a843] rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#1a2332]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="testimonials"
        title="What Founders Say"
        subtitle="Don't just take our word for it"
        background="cream"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        title="Ready to Launch?"
        subtitle="Get in touch and let's build something amazing together"
        background="navy"
      >
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#d4a843]"
                placeholder="Tell us about your project..."
              />
            </div>
            <Button variant="brand" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </Section>
    </div>
  );
}
