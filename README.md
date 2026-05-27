# DigiConnect Co., Ltd. — Official Website

เว็บไซต์บริษัท DigiConnect Co., Ltd. สร้างด้วย **Next.js 14 (App Router)** + **Tailwind CSS**

โดย Chatchawan Kaewmanee (โค้ชป๊อป) — Founder & CEO

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router, Static Export) |
| Styling | Tailwind CSS |
| Font | Inter + Noto Sans Thai (via `next/font/google`) |
| Icons | lucide-react |
| Language | TypeScript |
| Deploy | Vercel |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Social Proof, Services Preview, CTA |
| `/services` | บริการ 3 กลุ่มพร้อม full detail |
| `/about` | Bio โค้ชป๊อป, Expertise Tags, Mission |
| `/contact` | Contact Form + ช่องทางติดต่อ |

---

## Local Development

### Requirements

- Node.js 18.17+ หรือ 20+
- npm 9+

### Setup

```bash
# 1. Clone repo
git clone https://github.com/<your-username>/digiconnect-website.git
cd digiconnect-website

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

### Available Scripts

```bash
npm run dev      # dev server (http://localhost:3000)
npm run build    # production build
npm run start    # start production server
npm run lint     # run ESLint
```

---

## Deploy to Vercel

### วิธีที่ 1 — Vercel CLI (แนะนำ)

```bash
# ติดตั้ง Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (ครั้งแรก)
vercel

# Deploy to production
vercel --prod
```

### วิธีที่ 2 — GitHub + Vercel Dashboard

1. **Push โค้ดขึ้น GitHub**
   ```bash
   # สร้าง repo บน GitHub ก่อน แล้วรัน:
   git remote add origin https://github.com/<username>/digiconnect-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect กับ Vercel**
   - ไปที่ [vercel.com/new](https://vercel.com/new)
   - เลือก "Import Git Repository"
   - เลือก repo `digiconnect-website`
   - กด **Deploy**

3. **Settings ที่ Vercel จะ detect อัตโนมัติ:**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node.js Version: 20.x (แนะนำ)

4. **Custom Domain** (optional)
   - ไปที่ Settings → Domains
   - เพิ่ม domain เช่น `digiconnect.co.th`

---

## Environment Variables

ไม่มี environment variables ที่จำเป็นสำหรับ static site นี้

หากต้องการเพิ่มในอนาคต (เช่น contact form backend):

```bash
# .env.local (ไม่ commit ขึ้น Git)
NEXT_PUBLIC_SITE_URL=https://digiconnect.co.th
```

---

## Project Structure

```
digiconnect-website/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer + fonts)
│   ├── globals.css         # Tailwind base + utilities
│   ├── page.tsx            # / Home
│   ├── services/
│   │   └── page.tsx        # /services
│   ├── about/
│   │   └── page.tsx        # /about
│   └── contact/
│       └── page.tsx        # /contact
├── components/
│   ├── Navbar.tsx          # Sticky navbar + mobile menu
│   ├── Footer.tsx          # Footer + social links
│   └── ContactForm.tsx     # Client-side contact form
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## Brand

- **Primary:** `#0F2A5E` (Navy)
- **Accent:** `#2563EB` (Blue)
- **Font:** Inter (Latin) + Noto Sans Thai

---

## Contact

- LINE OA: @digiconnect
- Email: sangrat@digiconnect.co.th
- Facebook: DigiConnect - Digital Marketing Agency
