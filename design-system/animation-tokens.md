# TrueNorth Animation Tokens

## Overview

Animation tokens define the motion language for TrueNorth's interface, ensuring consistent, accessible, and performant animations across the brand.

## Design Principles

1. **Purposeful**: Every animation serves a function (guide attention, show relationship, provide feedback)
2. **Performant**: Use transform and opacity only (GPU-accelerated)
3. **Accessible**: Honor `prefers-reduced-motion` preferences
4. **Subtle**: Enhance, never distract

## Duration Tokens

| Token | Value | Usage |
|-------|-------|--------|
| `--duration-fast` | 150ms | Micro-interactions (hover, focus) |
| `--duration-normal` | 300ms | Standard transitions (color, background) |
| `--duration-slow` | 500ms | Larger animations (slide, fade) |
| `--duration-slower` | 700ms | Page transitions, hero animations |

## Easing Tokens

| Token | Value | Usage |
|-------|-------|--------|
| `--easing-ease` | ease | Standard easing |
| `--easing-ease-in` | ease-in | Elements entering |
| `--easing-ease-out` | ease-out | Elements exiting |
| `--easing-ease-in-out` | ease-in-out | Elements moving across screen |
| `--easing-spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | Playful, bouncy animations |

## Animation Presets

### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn var(--duration-slow) var(--easing-ease-out);
}
```

### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp var(--duration-slow) var(--easing-ease-out);
}
```

### Slide Down
```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slideDown var(--duration-slow) var(--easing-ease-out);
}
```

### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn var(--duration-normal) var(--easing-ease-out);
}
```

## Component Animations

### Buttons
- **Hover**: Background color transition (300ms ease)
- **Active**: Scale down to 0.98 (150ms ease)
- **Focus**: Outline animation (200ms ease)

### Cards
- **Hover**: Shadow transition (300ms ease)
- **Entrance**: Slide up (500ms ease-out)

### Navigation
- **Mobile menu**: Slide down (300ms ease-out)
- **Dropdown**: Fade in + slide down (200ms ease-out)

### Modals
- **Entrance**: Scale in + fade in (300ms ease-out)
- **Exit**: Scale out + fade out (200ms ease-in)

## Reduced Motion

### Implementation
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### JavaScript Detection
```typescript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Disable non-essential animations
}
```

## Performance Guidelines

### Do's
- ✅ Use `transform` and `opacity` only
- ✅ Use `will-change` sparingly (only for elements that will animate)
- ✅ Use `requestAnimationFrame` for JS animations
- ✅ Test on low-powered devices

### Don'ts
- ❌ Animate `width`, `height`, `top`, `left` (triggers layout)
- ❌ Animate `box-shadow` (expensive)
- ❌ Use `!important` with animations
- ❌ Animate more than 3 properties at once

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // ... other keyframes
      },
    },
  },
}
```

## Usage Examples

### React Component
```tsx
import { useState } from 'react';

function Card({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`card ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}
```

### CSS Classes
```html
<!-- Fade in on load -->
<div class="animate-fade-in">Content</div>

<!-- Slide up on scroll -->
<div class="opacity-0 scroll-animate" data-animation="slide-up">
  Content
</div>

<!-- Hover scale -->
<button class="transition-transform hover:scale-105">
  Hover me
</button>
```

## Testing Animations

### Checklist
- [ ] Animation does not cause seizures (no flashing >3Hz)
- [ ] Animation respects `prefers-reduced-motion`
- [ ] Animation does not block main thread
- [ ] Animation is smooth (60fps)
- [ ] Animation has purpose and meaning

### Tools
- Chrome DevTools Performance tab
- Lighthouse accessibility audit
- `prefers-reduced-motion` emulator
- `requestAnimationFrame` debugger

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Animations | ✓ 43+ | ✓ 16+ | ✓ 9+ | ✓ 12+ |
| CSS Transitions | ✓ 26+ | ✓ 16+ | ✓ 9+ | ✓ 12+ |
| `prefers-reduced-motion` | ✓ 74+ | ✓ 63+ | ✓ 10.1+ | ✓ 79+ |

## Resources

- [MDN Web Animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [WCAG 2.1 - Animation](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html)
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
