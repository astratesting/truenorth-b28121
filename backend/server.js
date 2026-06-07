const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

const brandGuidelines = [
  {
    section: 'positioning',
    title: 'Brand Positioning',
    content: 'TrueNorth helps founders navigate from rough idea to credible first launch.'
  },
  {
    section: 'tone',
    title: 'Tone & Voice',
    content: 'Clear, confident, supportive, and professional. We guide rather than dictate.'
  },
  {
    section: 'values',
    title: 'Core Values',
    content: 'Clarity over complexity, action over perfection, guidance over dictates.'
  }
];

const designTokens = [
  { category: 'color', name: 'brand.navy', value: '#1a2332', type: 'color' },
  { category: 'color', name: 'brand.gold', value: '#d4a843', type: 'color' },
  { category: 'color', name: 'brand.cream', value: '#faf8f0', type: 'color' },
  { category: 'typography', name: 'font.sans', value: 'Inter, system-ui, sans-serif', type: 'fontFamily' },
  { category: 'typography', name: 'font.serif', value: 'Playfair Display, Georgia, serif', type: 'fontFamily' },
  { category: 'spacing', name: 'spacing.4', value: '1rem', type: 'spacing' },
  { category: 'spacing', name: 'spacing.6', value: '1.5rem', type: 'spacing' }
];

app.get('/', (req, res) => {
  res.json({
    message: 'TrueNorth API',
    version: '1.0.0',
    endpoints: {
      brand: '/api/brand',
      tokens: '/api/tokens',
      contact: '/api/contact'
    }
  });
});

app.get('/api/brand', (req, res) => {
  res.json(brandGuidelines);
});

app.get('/api/tokens', (req, res) => {
  const { category } = req.query;
  if (category) {
    return res.json(designTokens.filter(t => t.category === category));
  }
  res.json(designTokens);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  res.json({
    success: true,
    message: 'Thank you for your message! We\'ll be in touch soon.',
    data: { name, email }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'truenorth-api' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`TrueNorth server running on port ${PORT}`);
});
