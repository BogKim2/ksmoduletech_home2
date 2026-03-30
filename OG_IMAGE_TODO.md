# Open Graph Image TODO

## Current Status
- `public/og-image.png` is currently empty (0 bytes)
- A temporary SVG placeholder has been created at `public/og-image.svg`

## Required Action
Create a proper 1200x630px PNG image for social media previews (Open Graph).

### Option 1: Convert SVG to PNG
Use the SVG placeholder as a starting point:
```bash
# Using ImageMagick (if available)
magick convert -background none -size 1200x630 public/og-image.svg public/og-image.png

# Or using a browser/Node.js tool
npx svg-to-img public/og-image.svg -o public/og-image.png -w 1200 -h 630
```

### Option 2: Design Tool
Use Figma, Canva, or Photoshop to create a branded image with:

**Specifications:**
- Dimensions: 1200x630px
- Format: PNG
- Max file size: Keep under 1MB for optimal loading

**Design Elements:**
- Company name: "KS Module Tech"
- Primary color: #0A2540 (deep blue)
- Accent color: #00C2FF (cyan)
- Tagline: "기술로 연결하는 미래"
- Subtitle: "PCB 전기전자 제조 · AI/AX 기술 솔루션"

**Best Practices:**
- Keep text legible at small sizes
- Use high contrast
- Test how it looks on various social platforms (Facebook, LinkedIn, Twitter)
- Safe zone: Keep important content within center 1200x600px (some platforms crop edges)

### Option 3: HTML Canvas Script
Create a Node.js script using `canvas` package:
```bash
npm install canvas
node scripts/generate-og-image.js
```

## Verification
After creating the image, verify it works:
1. Check file size: `ls -lh public/og-image.png`
2. Test with Open Graph debuggers:
   - Facebook: https://developers.facebook.com/tools/debug/
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - Twitter: https://cards-dev.twitter.com/validator

## Alternative (Temporary)
If PNG creation is not immediately possible, update `index.html` to reference the SVG:
```html
<meta property="og:image" content="/og-image.svg" />
```
Note: Some platforms may not support SVG for OG images.
