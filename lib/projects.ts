import type { HeroImage } from "./heroImages";

export type ProjectPhoto = { src: string; width: number; height: number; alt: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  when: string;
  status: string;
  image: HeroImage;
  summary: string;
  body: string[];
  items: string[];
  partners: string[];
  photos: ProjectPhoto[];
};

export const projects: Project[] = [
  {
    slug: "ayanfuri-health-centre-donation",
    title: "A birthday gift to the Ayanfuri health centre",
    category: "Health",
    location: "The Church of Pentecost Health Center, Ayanfuri",
    when: "On LUDA's birthday",
    status: "Delivered",
    image: "donation",
    summary:
      "LUDA spent his birthday at the Church of Pentecost Health Center in Ayanfuri, donating food, water and toiletries for patients and staff.",
    body: [
      "Instead of a celebration, Kingsley Ofori Aidoo (LUDA) marked his birthday by giving back. He delivered a large donation of food and essential supplies to The Church of Pentecost Health Center in Ayanfuri, handed over to staff at the facility's outpatient department.",
      "The donation included bags of rice, cooking oil, cartons of sardines and mackerel, baby diapers, toiletries and many other items for patients, nursing mothers and the staff who care for them.",
      "Constituency Chairman Joseph Mawuli Golomeke stood with LUDA at the presentation and supported the donation.",
      "Health centres like Ayanfuri serve families from across Upper Denkyira West every day. Supporting them is part of what it means to serve the constituency, in office and out of it.",
    ],
    items: [
      "Rice",
      "Cooking oil",
      "Sardines",
      "Mackerel",
      "Baby diapers",
      "Toiletries",
      "Toilet rolls",
      "Bathing soap",
      "Liquid bleach",
      "Bottled water",
    ],
    partners: ["Joseph Mawuli Golomeke, Constituency Chairman", "Staff of the Ayanfuri health centre"],
    photos: [
      {
        src: "/images/donation-2.jpg",
        width: 1280,
        height: 960,
        alt: "LUDA, Chairman Joseph Mawuli Golomeke and health centre staff behind the donated rice, water, mackerel and toilet rolls",
      },
      {
        src: "/images/donation-1.jpg",
        width: 960,
        height: 1280,
        alt: "The donation stacked in front of the outpatient department at the Ayanfuri health centre",
      },
      {
        src: "/images/donation-3.jpg",
        width: 960,
        height: 1280,
        alt: "LUDA and the team with health centre staff at the presentation",
      },
      {
        src: "/images/donation-4.jpg",
        width: 960,
        height: 1280,
        alt: "Bags of rice, cartons of mackerel, bleach and bottled water presented to the health centre",
      },
    ],
  },
];
