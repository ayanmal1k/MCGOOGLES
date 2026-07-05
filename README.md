# 🍔 McGoogles ($MCGOOGLES) — The Burger Empire Meme Token

![McGoogles Hero Banner](/hero%20mcgoogles.png)

### 🔗 Official Channels
- **X (Twitter)**: [x.com/mcgooglescoin](https://x.com/mcgooglescoin?s=11&t=9A8TB5U2jYixpYBhO1V8Fg)
- **Telegram Community**: [t.me/Mcgooglescoin](https://t.me/Mcgooglescoin)
- **Pump.fun Launcher**: [pump.fun/coin/6RAJbAeVHc1qNXYmMi9jj4q2PrWPfPkqQQVuCTScpump](https://pump.fun/coin/6RAJbAeVHc1qNXYmMi9jj4q2PrWPfPkqQQVuCTScpump)
- **Contract Address (CA)**: `6RAJbAeVHc1qNXYmMi9jj4q2PrWPfPkqQQVuCTScpump`

Welcome to the official repository of **McGoogles**, the legendary meme token on Solana celebrating the ambitious frog who made it big in crypto and launched a global restaurant franchise.

McGoogles blends financial memes, premium WebGL-level custom aesthetics, and holder utilities (like free burgers!) into a state-of-the-art landing page experience.

---

## 🚀 Key Features & Interactive Polish

### 1. Hero Showcase & Ambient Particle Space
- **Interactive Particle Space**: Canvas-driven background rendering lightweight floating particles that react to mouse pointer movements.
- **Magnetic Action Buttons**: Built-in magnetic attraction forces that snap the cursor onto primary Call-to-Actions (CTAs) for premium feedback.
- **Pump.fun & Social Row**: Quick-access social hub featuring X (Twitter), Telegram, and the official Pump.fun capsule launcher.

### 2. Ecosystem Bento Grid
- **Asymmetric Composition**: Organized into a custom agency-style bento grid separating community narratives, exposure metrics, and network foundations.
- **Vector Scroll Drawing**: A custom SVG trend chart that draws its vector lines dynamically as it enters the viewport.
- **Solana Brand Portal**: A centering neon portal containing the Solana logo which zooms and increases glow on card hover.

### 3. How To Buy Order Flow
- **Sticky Column Device (Desktop)**: Left side pins on scroll and renders a glass screen mockup displaying 3D animated food item looping webm videos.
- **Scroll Synchronized highlights**: Step cards on the right side trigger active states when scrolled to `50%` screen center, updating the active video in real-time.
- **Clipboard CA Copier**: Displays the official contract address with a copy-to-clipboard handler and checkmark animation feedback:
  `6RAJbAeVHc1qNXYmMi9jj4q2PrWPfPkqQQVuCTScpump`
- **Mobile Stack**: Responsive fallback that embeds webm video previews directly inside each step card for single-stream scrolling.

### 4. Perks & Features Utility Grid
- **Perk Cards**: Color-coded borders highlighting utility items:
  - **Free Burger** (`burger.png`) — Community giveaways and events.
  - **Rewards** (`gift.png`) — Holder yield structures.
  - **Marketing** (`marketing.png`) — Aggressive promo campaigns.
- **Aesthetic Glows**: Glowing backdrop sources that follow mouse pointer movements and expand on card hovers.

### 5. Interactive Tokenomics Donut Chart
- **Segmented Donut**: Precise gap-spaced circular slices matching the token allocations.
- **State-Linked Highlights**: Hovering over a segment expands its stroke and highlights the matching legend card. Hovering over a card activates the corresponding chart segment and dims other slices.
- **Floating Face Logo**: Re-scaled borderless `/face.png` logo floating inside the donut center that zooms dynamically on chart interaction.

### 6. Social Channels & Wavy Footer
- **Social Hub**: Right column displays the sleeping McGoogles asset (`/sleep.png`) inside a glass frame, while the left hosts large social buttons and a Solana division row.
- **Wavy Bouncy Footer**: Splits the `MCGOOGLES` logo into individual letters. Hovering the logo creates a sequential wavy bouncing letters sequence. Footer links scale and bounce on cursor hover.

---

## 🛠️ Technology Stack

- **Core**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack compiler)
- **Styling**: Vanilla CSS + Next.js `styled-jsx` for isolated component scopes and global styling overrides.
- **Animations**: 
  - [GSAP (GreenSock)](https://gsap.com/) & ScrollTrigger for viewport reveal animations, drawing paths, and sticky scroll tracking.
  - [Framer Motion](https://www.framer.com/motion/) for React state transitions, spring-based Magnetic pulls, and tab faders.
- **Icons**: Google Material Symbols Outlined + Lucide Icons.
- **Typography**: Google Fonts [Sora](https://fonts.google.com/specimen/Sora) (Body) & [Syne](https://fonts.google.com/specimen/Syne) (Display).

---

## 📦 Getting Started

### 1. Installation
Clone the repository and install all node modules:
```bash
npm install
```

### 2. Run the Development Server
Run the local dev compiler:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the interactive landing page.

### 3. Production Build
Verify the production compilation and static page generation:
```bash
npm run build
```

---

## 🎨 Asset Directory Reference
- `/hero mcgoogles.png` — Main Hero background illustration.
- `/face.png` — High-resolution frog logo for the Tokenomics center.
- `/sleep.png` — Sleepy McGoogles frog for the social section.
- `/logo.jpg` — Brand emblem used in layouts and favicons.
- `/solana-sol-logo.png` — Transparent Solana logo.
- `/features/` — Utility items icons (burger, gift, marketing).
- `/Roadmap/` — Loopable 3D food item webm videos (1-5.webm).
