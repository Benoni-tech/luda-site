import type { HeroImage } from "./heroImages";

export const site = {
  name: "LUDA",
  fullName: "Kingsley Ofori Aidoo",
  role: "Deputy Secretary",
  party: "NDC",
  constituency: "Upper Denkyira West",
  region: "Central Region",
  slogan: "Building the Ghana We Want",
  // Replace with LUDA's real number and handles before launch
  whatsapp: "https://wa.me/233000000000",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com",
  instagram: "https://instagram.com",
};

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/priorities", label: "Priorities" },
  { href: "/updates", label: "Updates" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
];

export const heroSlides = [
  "A man born for the people.",
  "Diverse experience. Proactive leadership.",
  "Effective service, wherever the party needs him.",
];

export type Priority = {
  num: string;
  title: string;
  short: string;
  detail: string[];
};

export const priorities: Priority[] = [
  {
    num: "01",
    title: "Stronger branches",
    short:
      "Regular visits and check-ins with branch executives, so no branch feels forgotten between elections.",
    detail: [
      "A visit schedule that reaches every branch in the constituency each quarter.",
      "A direct WhatsApp line between branch secretaries and the constituency office.",
      "Branch concerns logged and followed up at every executive meeting.",
    ],
  },
  {
    num: "02",
    title: "Clean records",
    short:
      "An up-to-date membership register and proper minutes for every meeting, kept safe and easy to find.",
    detail: [
      "Membership register reviewed and updated with each branch.",
      "Minutes for every constituency meeting, shared within a week.",
      "Digital backups so party records are never lost.",
    ],
  },
  {
    num: "03",
    title: "Faster communication",
    short:
      "Party notices reach every branch on time through WhatsApp, SMS and this website.",
    detail: [
      "One official channel for notices, so members hear it from the party first.",
      "SMS alerts for members without smartphones.",
      "Meeting dates and results posted here as they happen.",
    ],
  },
  {
    num: "04",
    title: "Youth on board",
    short:
      "Bringing more young people into party work now, so the constituency is organised and ready for 2028.",
    detail: [
      "A youth volunteer team for branch mobilisation and social media.",
      "Training sessions on party structure and campaign work.",
      "Clear roles so young members can grow inside the party.",
    ],
  },
];

export type Approach = {
  name: string;
  big: string;
  caption: string;
  image: HeroImage;
  head: string;
  body: string;
};

export const approach: Approach[] = [
  {
    name: "Listen",
    big: "01",
    caption: "Hearing every branch first",
    image: "talk",
    head: "Listening first",
    body: "Every plan starts with what members say. LUDA meets branch executives in person and keeps a line open on WhatsApp for concerns.",
  },
  {
    name: "Organise",
    big: "02",
    caption: "Records and structure that work",
    image: "community",
    head: "Organising the office",
    body: "Clean registers, clear minutes and a calendar every branch can see, so the secretariat runs on facts, not guesswork.",
  },
  {
    name: "Communicate",
    big: "03",
    caption: "Information that moves fast",
    image: "laugh",
    head: "Keeping everyone informed",
    body: "Notices, results and meeting dates go out quickly, so every member hears it from the party first.",
  },
];

export type Update = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  image: HeroImage;
  body: string[];
};

export const updates: Update[] = [
  {
    slug: "luda-elected-deputy-secretary",
    tag: "October 2026",
    title: "LUDA elected Deputy Secretary",
    summary: "Delegates back a young voice for the constituency secretariat.",
    image: "community",
    body: [
      "Kingsley Ofori Aidoo, popularly known as LUDA, has been elected Deputy Secretary of the NDC in Upper Denkyira West Constituency.",
      "In his first words after the result, LUDA thanked delegates, branch executives and party members for their trust, and promised to put the work of the secretariat first.",
      "He will work with the constituency secretariat on records, communication and support for every branch.",
    ],
  },
  {
    slug: "thank-you-tour",
    tag: "Branch visits",
    title: "Thank-you tour of the branches",
    summary: "Meeting executives and members to listen and plan.",
    image: "laugh",
    body: [
      "LUDA is visiting branches across the constituency to thank members for their support.",
      "Each stop is also a listening session, where branch executives share concerns the secretariat should act on.",
    ],
  },
  {
    slug: "first-executive-meeting",
    tag: "Office",
    title: "First executive meeting of the term",
    summary: "Setting the secretariat plan and the calendar ahead.",
    image: "talk",
    body: [
      "The new constituency executives have met to agree on priorities and a calendar for the year.",
      "Records, branch support and communication were top of the agenda.",
    ],
  },
  {
    slug: "youth-volunteer-drive",
    tag: "Youth",
    title: "Youth volunteer drive opens",
    summary: "Young members can sign up to support branch work.",
    image: "trio",
    body: [
      "Young party members in Upper Denkyira West can now sign up to volunteer.",
      "Volunteers will support branch mobilisation, events and the party's social media presence.",
    ],
  },
  {
    slug: "membership-register-update",
    tag: "Records",
    title: "Membership register update",
    summary: "Branches asked to confirm member details with the office.",
    image: "smock",
    body: [
      "The constituency office is updating the membership register.",
      "Branch secretaries are asked to confirm member details so the party has accurate records.",
    ],
  },
];
