# TrueNorth Brand System

A complete brand direction and design system for TrueNorth company foundation, including positioning tone, visual system, landing page style, typography guidance, colors, and UI feel.

## North Star

A founder can move from rough idea to a credible first launch with a public surface, operating plan, and outreach-ready assets.

## Features

### Brand Foundation
- Brand positioning and tone guidelines
- Visual identity system (colors, typography, spacing)
- Complete design tokens (JSON exportable)
- Figma handoff documentation

### Design System
- **Colors**: Primary blues, brand colors (navy, gold, cream, charcoal, sage, coral)
- **Typography**: Inter (body), Playfair Display (headings), JetBrains Mono (code)
- **Spacing**: 4px base unit with full scale
- **Animations**: Fade-in, slide-up, slide-down, scale-in
- **Breakpoints**: xs (320px) to 2xl (1536px)

### Component Library
- Button (5 variants: primary, secondary, brand, outline, ghost)
- Card (with header, body, footer subcomponents)
- Nav (responsive with mobile menu)
- Hero (multiple background options)
- Section (layout component with background variants)
- Footer (multi-column with social links)

### Pages
- Landing page with full sections (hero, services, features, testimonials, contact)
- Style guide page documenting all design tokens and components
- Fully responsive across all breakpoints

### Backend API
- `/api/brand` - Brand guidelines endpoint
- `/api/tokens` - Design tokens with optional category filtering
- `/api/contact` - Contact form submission
- `/api/figma/handoff` - Figma-compatible JSON export
- `/health` - Health check endpoint

## Tech Stack

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend**: FastAPI (Python)
- **Testing**: Vitest + React Testing Library + pytest
- **Design**: Figma handoff JSON, design tokens

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Tests
```bash
# Frontend tests
cd frontend && npm test

# Backend tests
pytest tests/backend_test.py -v
```

## Project Structure

```
truenorth-b28121/
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── tokens/        # Design tokens
│   │   └── styles/        # Global styles
│   ├── public/            # Static assets (favicon, OG image)
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── tsconfig.json
├── backend/
│   ├── main.py           # FastAPI application
│   └── requirements.txt
├── design-system/
│   ├── brand-guidelines.md
│   └── figma-handoff.json
├── tests/
│   ├── Button.test.tsx
│   ├── Card.test.tsx
│   ├── Hero.test.tsx
│   └── backend_test.py
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Design Tokens

Design tokens are available in multiple formats:
- JavaScript: `frontend/src/tokens/design-tokens.js`
- JSON: `design-system/figma-handoff.json`
- API: `GET /api/tokens`

## Accessibility

- WCAG 2.1 AA compliant color contrast
- Full keyboard navigation support
- Screen reader friendly with ARIA labels
- Visible focus indicators on all interactive elements
- Semantic HTML throughout

## Deployment

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

### Backend
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

## API Endpoints

### GET /
Root endpoint with API information

### GET /api/brand
Returns brand guidelines (positioning, tone, values, north star)

### GET /api/tokens?category=color
Returns design tokens, optionally filtered by category (color, typography, spacing, animation)

### POST /api/contact
Submit contact form (requires name, email, message)

### GET /api/figma/handoff
Returns complete design system in Figma-compatible JSON format

### GET /health
Health check endpoint

## Color Palette

### Primary Colors
- Navy: `#1a2332`
- Gold: `#d4a843`
- Cream: `#faf8f0`

### Functional Colors
- Primary Blue 500: `#0ea5e9`
- Primary Blue 600: `#0284c7`
- Charcoal: `#2d3748`

## Typography

### Font Families
- **Inter**: Body text, UI elements (400, 500, 600, 700)
- **Playfair Display**: Headings (700, 800)
- **JetBrains Mono**: Code, technical content (400, 500)

## Component Usage

### Button Variants
```tsx
<Button variant="primary">Primary</Button>
<Button variant="brand">Brand</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### Card Components
```tsx
<Card padding="md" hover={true}>
  <CardHeader>Title</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>
```

## License

MIT

## Contact

For questions about the TrueNorth brand system, please reach out through the contact form on the landing page.
