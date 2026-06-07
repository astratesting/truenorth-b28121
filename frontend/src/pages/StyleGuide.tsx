import Card from '../components/Card';
import Button from '../components/Button';

export default function StyleGuide() {
  const colors = {
    primary: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    brand: [
      { name: 'navy', hex: '#1a2332' },
      { name: 'gold', hex: '#d4a843' },
      { name: 'cream', hex: '#faf8f0' },
      { name: 'charcoal', hex: '#2d3748' },
      { name: 'sage', hex: '#687864' },
      { name: 'coral', hex: '#e07a5f' },
    ],
  };

  const typography = [
    { name: 'Inter', class: 'font-sans', usage: 'Body text, UI elements' },
    { name: 'Playfair Display', class: 'font-serif', usage: 'Headings, display text' },
    { name: 'JetBrains Mono', class: 'font-mono', usage: 'Code, technical content' },
  ];

  const spacing = ['0', '1', '2', '4', '6', '8', '12', '16', '24', '32', '48', '64'];

  const animations = [
    { name: 'fade-in', description: 'Opacity 0 → 1 over 0.5s' },
    { name: 'slide-up', description: 'Translate Y 20px → 0 over 0.6s' },
    { name: 'slide-down', description: 'Translate Y -20px → 0 over 0.6s' },
    { name: 'scale-in', description: 'Scale 0.95 → 1 over 0.4s' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TrueNorth Style Guide</h1>
          <p className="text-xl text-gray-600">
            Complete design system documentation for the TrueNorth brand
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Brand Positioning</h2>
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">North Star</h3>
            <p className="text-lg mb-6">
              A founder can move from rough idea to a credible first launch with a public surface,
              operating plan, and outreach-ready assets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Tone & Voice</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clear and direct</li>
                  <li>• Confident but not arrogant</li>
                  <li>• Supportive and empowering</li>
                  <li>• Professional yet approachable</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Key Values</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clarity over complexity</li>
                  <li>• Action over perfection</li>
                  <li>• Guidance over dictates</li>
                  <li>• Progress over polishing</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Color Palette</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Primary Blues</h3>
            <div className="grid grid-cols-6 md:grid-cols-11 gap-2">
              {colors.primary.map((shade) => (
                <div key={shade} className="text-center">
                  <div
                    className={`h-20 rounded-lg bg-blue-${shade} mb-2`}
                    style={{ backgroundColor: `var(--color-primary-${shade})` }}
                  />
                  <p className="text-xs text-gray-600">{shade}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {colors.brand.map((color) => (
                <Card key={color.name} className="p-4 text-center">
                  <div
                    className="h-16 rounded-lg mb-3 mx-auto"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="font-semibold capitalize">{color.name}</p>
                  <p className="text-sm text-gray-600">{color.hex}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Typography</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Font Families</h3>
            <div className="space-y-6">
              {typography.map((font) => (
                <Card key={font.name} className="p-6">
                  <div className={`${font.class} mb-2`}>
                    <p className="text-3xl">{font.name}</p>
                  </div>
                  <p className="text-gray-600">{font.usage}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Type Scale</h3>
            <Card className="p-6 space-y-4">
              <div>
                <h1 className="font-serif text-6xl font-bold">Heading 1</h1>
                <p className="text-sm text-gray-600 mt-1">text-6xl / 3.75rem / 60px</p>
              </div>
              <div>
                <h2 className="font-serif text-4xl font-bold">Heading 2</h2>
                <p className="text-sm text-gray-600 mt-1">text-4xl / 2.25rem / 36px</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold">Heading 3</h3>
                <p className="text-sm text-gray-600 mt-1">text-3xl / 1.875rem / 30px</p>
              </div>
              <div>
                <p className="text-base">Body text - Inter, 1rem / 16px, line-height 1.5</p>
                <p className="text-sm text-gray-600 mt-1">text-base / 1rem / 16px</p>
              </div>
              <div>
                <p className="text-sm">Small text - 0.875rem / 14px</p>
                <p className="text-sm text-gray-600 mt-1">text-sm / 0.875rem / 14px</p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Spacing Scale</h2>
          <Card className="p-6">
            <div className="space-y-3">
              {spacing.map((space) => (
                <div key={space} className="flex items-center space-x-4">
                  <span className="w-16 text-sm text-gray-600">p-{space}</span>
                  <div className="bg-[#d4a843] h-8" style={{ width: `${parseInt(space) * 4 || 0}px` }} />
                  <span className="text-sm text-gray-600">{parseInt(space) * 4 || 0}px</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Buttons</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Primary</h4>
                <Button variant="primary">Primary Button</Button>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Secondary</h4>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Brand</h4>
                <Button variant="brand">Brand Button</Button>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Outline</h4>
                <Button variant="outline">Outline Button</Button>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Ghost</h4>
                <Button variant="ghost">Ghost Button</Button>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Sizes</h4>
                <div className="flex items-center space-x-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h4 className="font-bold mb-2">Default Card</h4>
              <p className="text-gray-600">Standard card with padding and hover shadow</p>
            </Card>
            <Card className="p-6" hover={false}>
              <h4 className="font-bold mb-2">Non-hover Card</h4>
              <p className="text-gray-600">Card without hover effects</p>
            </Card>
            <Card padding="lg">
              <h4 className="font-bold mb-2">Large Padding</h4>
              <p className="text-gray-600">Card with large padding (p-8)</p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Animations</h2>
          <Card className="p-6">
            <div className="space-y-4">
              {animations.map((anim) => (
                <div key={anim.name} className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div>
                    <p className="font-semibold">{anim.name}</p>
                    <p className="text-sm text-gray-600">{anim.description}</p>
                  </div>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">{`animate-${anim.name}`}</code>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Responsive Breakpoints</h2>
          <Card className="p-6">
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <code className="font-semibold">xs</code>
                <span>320px</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <code className="font-semibold">sm</code>
                <span>640px</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <code className="font-semibold">md</code>
                <span>768px</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <code className="font-semibold">lg</code>
                <span>1024px</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <code className="font-semibold">xl</code>
                <span>1280px</span>
              </div>
              <div className="flex justify-between py-2">
                <code className="font-semibold">2xl</code>
                <span>1536px</span>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Accessibility Notes</h2>
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold">WCAG 2.1 AA Compliant</p>
                  <p className="text-gray-600">All color combinations meet minimum contrast ratios</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Keyboard Navigation</p>
                  <p className="text-gray-600">All interactive elements are keyboard accessible</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Screen Reader Support</p>
                  <p className="text-gray-600">ARIA labels and semantic HTML throughout</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Focus Indicators</p>
                  <p className="text-gray-600">Visible focus states on all interactive elements</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
