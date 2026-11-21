# LUDA website

Next.js 14 (App Router), TypeScript and Tailwind CSS. Built by Steward Eye.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

- `/` Home: rotating hero, priorities list, approach tabs, updates slider, join section
- `/about` Thank-you message and key facts
- `/priorities` Priorities with full plans
- `/updates` All updates, plus `/updates/[slug]` for each one
- `/join` Volunteer sign-up
- `/contact` Contact channels and message form

## Before launch

1. `lib/data.ts`: set the real WhatsApp number and social links, and edit the copy.
2. `public/images/`: add more photos (events, branch visits) and use them in the update cards.
3. `app/api/join/route.ts`: connect sign-ups to Google Sheets, a database or SMS.
4. `components/ContactForm.tsx`: connect the message form the same way.

## Animation

- `components/Reveal.tsx` fades and slides each section in when it scrolls into view.
- Hero headline, tab panels and update pages use the `fadeUp`, `slideInRight` and `growX` keyframes in `tailwind.config.ts`.
- Motion is turned off for users who set "reduce motion" on their device.
