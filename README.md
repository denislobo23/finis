# Finis Business Solutions — Next.js Website

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)

---

## Setup in Cursor

### 1. Open the project
```bash
cd C:\finis
cursor .
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your AI-generated images
Place these files in `C:\finis\public\images\`:

| Filename | Usage | Dimensions |
|---|---|---|
| `hero-bg.jpg` | Home page hero background | 1920×1080 |
| `ai-process.jpg` | Capabilities & process sections | 1200×800 |
| `process-mining.jpg` | AI intelligence block overlay | 1200×800 |
| `team-consulting.jpg` | About page | 1200×800 |
| `abandoned-project.jpg` | Article hero & blog cards | 1200×800 |
| `melbourne-city.jpg` | Footer CTA & contact page | 1920×600 |
| `blog-process.jpg` | Blog card 2 | 800×500 |
| `blog-adoption.jpg` | Blog card 3 | 800×500 |

### 4. Run development server
```bash
npm run dev
```

Visit: http://localhost:3000

---

## Image Prompts for AI Generation

### hero-bg.jpg
```
Dark navy blue abstract technology background, subtle cyan circuit board grid lines, 
deep space atmosphere, ultra minimal, no text, professional corporate, 8K
```

### ai-process.jpg
```
Glowing cyan neural network process flow diagram floating in dark space, connected 
nodes and pathways, data streams, deep navy background, cinematic lighting, no text, 8K
```

### process-mining.jpg
```
Abstract data visualization, glowing blue and cyan flow lines mapping through dark 
space, process intelligence, minimal corporate aesthetic, no text, ultra sharp
```

### team-consulting.jpg
```
Modern Australian corporate office, diverse professional team around large screen 
showing data dashboards, Melbourne CBD view through floor to ceiling windows, 
navy and white interior, photorealistic
```

### abandoned-project.jpg
```
Dramatic abandoned half-built concrete structure at dusk, moody cinematic lighting, 
representing incomplete project, photorealistic, no people, wide angle
```

### melbourne-city.jpg
```
Melbourne Australia CBD skyline at dusk, dramatic sky, city lights reflecting on 
Yarra River, cinematic wide angle, photorealistic, 8K
```

### blog-process.jpg
```
Dark navy background with glowing cyan process flow diagram, BPMN workflow nodes, 
AI data streams, minimal corporate tech aesthetic, no text
```

### blog-adoption.jpg
```
Professional business team in modern boardroom looking at AI dashboard on large 
screen, warm lighting, photorealistic, corporate Australia aesthetic
```

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Home — hero, stats, capabilities, process, AI block |
| `/capabilities` | `src/app/capabilities/page.tsx` | Full capability stack |
| `/about` | `src/app/about/page.tsx` | About Finis |
| `/insights` | `src/app/insights/page.tsx` | Blog index |
| `/insights/the-incompletion-crisis` | `src/app/insights/the-incompletion-crisis/page.tsx` | Feature article |
| `/contact` | `src/app/contact/page.tsx` | Contact form |

---

## Deploy to Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/denislobo23/finis.git
git push -u origin main
```

Then connect to Vercel at vercel.com — it auto-detects Next.js.

Point `finis.com.au` DNS to Vercel:
- A record → `76.76.21.21`
- CNAME `www` → `cname.vercel-dns.com`

---

## Customisation

- **Colours** → `tailwind.config.ts`  
- **Content** → Edit `.tsx` files directly in Cursor  
- **Add blog posts** → Create new folders under `src/app/insights/`  
- **Contact form** → Wire up to Resend, Formspree or any email API in `contact/page.tsx`
