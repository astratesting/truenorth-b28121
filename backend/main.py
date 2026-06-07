from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(
    title="TrueNorth API",
    description="API for TrueNorth brand and design system",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name: str
    email: str
    message: str


class DesignToken(BaseModel):
    category: str
    name: str
    value: str
    type: str


class BrandGuideline(BaseModel):
    section: str
    title: str
    content: str


@app.get("/")
async def root():
    return {
        "message": "TrueNorth API",
        "version": "1.0.0",
        "endpoints": {
            "brand": "/api/brand",
            "tokens": "/api/tokens",
            "contact": "/api/contact"
        }
    }


@app.get("/api/brand", response_model=List[BrandGuideline])
async def get_brand_guidelines():
    guidelines = [
        BrandGuideline(
            section="positioning",
            title="Brand Positioning",
            content="TrueNorth helps founders navigate from rough idea to credible first launch."
        ),
        BrandGuideline(
            section="tone",
            title="Tone & Voice",
            content="Clear, confident, supportive, and professional. We guide rather than dictate."
        ),
        BrandGuideline(
            section="values",
            title="Core Values",
            content="Clarity over complexity, action over perfection, guidance over dictates."
        ),
        BrandGuideline(
            section="northstar",
            title="North Star",
            content="A founder can move from rough idea to a credible first launch with a public surface, operating plan, and outreach-ready assets."
        )
    ]
    return guidelines


@app.get("/api/tokens", response_model=List[DesignToken])
async def get_design_tokens(category: Optional[str] = None):
    tokens = [
        DesignToken(category="color", name="brand.navy", value="#1a2332", type="color"),
        DesignToken(category="color", name="brand.gold", value="#d4a843", type="color"),
        DesignToken(category="color", name="brand.cream", value="#faf8f0", type="color"),
        DesignToken(category="color", name="brand.charcoal", value="#2d3748", type="color"),
        DesignToken(category="color", name="primary.500", value="#0ea5e9", type="color"),
        DesignToken(category="color", name="primary.600", value="#0284c7", type="color"),
        DesignToken(category="typography", name="font.sans", value="Inter, system-ui, sans-serif", type="fontFamily"),
        DesignToken(category="typography", name="font.serif", value="Playfair Display, Georgia, serif", type="fontFamily"),
        DesignToken(category="typography", name="font.mono", value="JetBrains Mono, monospace", type="fontFamily"),
        DesignToken(category="spacing", name="spacing.4", value="1rem", type="spacing"),
        DesignToken(category="spacing", name="spacing.6", value="1.5rem", type="spacing"),
        DesignToken(category="spacing", name="spacing.8", value="2rem", type="spacing"),
        DesignToken(category="animation", name="duration.fast", value="150ms", type="duration"),
        DesignToken(category="animation", name="duration.normal", value="300ms", type="duration"),
        DesignToken(category="animation", name="easing.ease-out", value="ease-out", type="easing"),
    ]

    if category:
        tokens = [t for t in tokens if t.category == category]

    return tokens


@app.post("/api/contact")
async def submit_contact_form(form: ContactForm):
    if not form.name or not form.email or not form.message:
        raise HTTPException(status_code=400, detail="All fields are required")

    return {
        "success": True,
        "message": "Thank you for your message! We'll be in touch soon.",
        "data": {
            "name": form.name,
            "email": form.email
        }
    }


@app.get("/api/figma/handoff")
async def get_figma_handoff():
    return {
        "version": "1.0.0",
        "colors": {
            "brand-navy": {"value": "#1a2332", "type": "color", "description": "Primary brand color"},
            "brand-gold": {"value": "#d4a843", "type": "color", "description": "Secondary brand color"},
            "brand-cream": {"value": "#faf8f0", "type": "color", "description": "Background color"},
        },
        "typography": {
            "heading": {"fontFamily": "Playfair Display", "weights": [700, 800]},
            "body": {"fontFamily": "Inter", "weights": [400, 500, 600, 700]},
            "code": {"fontFamily": "JetBrains Mono", "weights": [400, 500]}
        },
        "spacing": {
            "unit": 4,
            "scale": [0, 4, 8, 12, 16, 24, 32, 48, 64]
        },
        "components": {
            "button": {
                "variants": ["primary", "secondary", "brand", "outline", "ghost"],
                "sizes": ["sm", "md", "lg"],
                "borderRadius": "8px"
            },
            "card": {
                "padding": {"sm": "16px", "md": "24px", "lg": "32px"},
                "borderRadius": "12px",
                "shadow": "0 4px 6px rgba(0,0,0,0.1)"
            }
        },
        "breakpoints": {
            "xs": "320px",
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px"
        }
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "truenorth-api"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
