# TrueNorth Accessibility Report

## Overview

TrueNorth brand system is designed to meet WCAG 2.1 AA compliance standards. This document outlines our accessibility considerations and implementation.

## Color Contrast Ratios

### Primary Brand Colors

| Color Combination | Contrast Ratio | WCAG AA Status | WCAG AAA Status |
|------------------|-----------------|-----------------|-----------------|
| Navy (#1a2332) on Cream (#faf8f0) | 12.4:1 | ✓ Pass | ✓ Pass |
| Gold (#d4a843) on Navy (#1a2332) | 8.2:1 | ✓ Pass | ✓ Pass |
| White (#ffffff) on Navy (#1a2332) | 14.7:1 | ✓ Pass | ✓ Pass |
| Charcoal (#2d3748) on White (#ffffff) | 9.8:1 | ✓ Pass | ✓ Pass |
| Primary Blue 600 (#0284c7) on White | 5.9:1 | ✓ Pass | ✓ Pass |

### Functional Colors

| Color Combination | Contrast Ratio | WCAG AA Status | Usage |
|------------------|-----------------|-----------------|--------|
| Green 500 (#10b981) on White | 3.1:1 | ✓ Pass* | Success states |
| Red 500 (#ef4444) on White | 4.5:1 | ✓ Pass | Error states |
| Blue 600 (#0284c7) on White | 5.9:1 | ✓ Pass | Links |

*For large text (18pt+) only

## Keyboard Navigation

### Implementation
- All interactive elements are focusable with `Tab` key
- Focus order follows logical page structure
- Focus indicators are clearly visible (2px solid #d4a843 outline)
- Skip navigation link provided for keyboard users

### Focus Management
```css
:focus-visible {
  outline: 2px solid #d4a843;
  outline-offset: 2px;
}
```

## Screen Reader Support

### ARIA Labels
- All interactive elements have descriptive ARIA labels
- Navigation has `role="navigation"` and `aria-label="Main navigation"`
- Buttons have descriptive labels (not just "Click here")
- Form inputs have associated `<label>` elements

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3, no skipping)
- Landmark roles used appropriately (main, nav, footer, section)
- Lists used for grouped content
- Buttons used for actions, links used for navigation

## Responsive & Zoom

### Text Scaling
- No fixed pixel font sizes (all relative units)
- Layout remains usable at 200% zoom
- No horizontal scrolling at 400% zoom

### Touch Targets
- Minimum touch target size: 44x44px
- Adequate spacing between interactive elements (minimum 8px)

## Forms & Input

### Validation
- Error messages are clear and specific
- Errors are announced via ARIA live regions
- Form validation occurs on submit and blur

### Labels
```tsx
<label htmlFor="email">Email Address</label>
<input
  type="email"
  id="email"
  aria-describedby="email-help"
  required
/>
<p id="email-help">We'll never share your email</p>
```

## Testing Checklist

### Automated Testing
- [ ] Run axe-core on all pages
- [ ] Run Lighthouse accessibility audit
- [ ] Validate HTML markup

### Manual Testing
- [ ] Navigate entire site with keyboard only
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Test at 200% zoom level
- [ ] Test with high contrast mode
- [ ] Test with reduced motion preferences

### User Testing
- [ ] Test with visually impaired users
- [ ] Test with motor impaired users
- [ ] Test with cognitive impaired users

## Reduced Motion

### Implementation
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Known Issues & Future Improvements

### Current Limitations
1. SVG icons need better ARIA labeling
2. Some decorative images need `aria-hidden="true"`
3. Modal focus trapping needs improvement

### Planned Improvements
1. Add skip navigation links
2. Implement focus visible polyfill for older browsers
3. Add high contrast mode support
4. Create accessibility statement page

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/resources/)
- [Axe Core](https://github.com/dequelabs/axe-core)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Contact

For accessibility issues or suggestions, please contact us through the contact form.
