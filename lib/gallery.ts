import { projects } from "./projects";

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  album: Album;
};

export const albums = ["Ayanfuri donation", "On the ground", "Portraits"] as const;
export type Album = (typeof albums)[number];

const donation = projects[0].photos.map((p) => ({ ...p, album: "Ayanfuri donation" as const }));

export const gallery: GalleryPhoto[] = [
  ...donation,
  {
    src: "/images/hero-community.jpg",
    width: 1080,
    height: 811,
    alt: "LUDA with party members in front of a house in the constituency",
    album: "On the ground",
  },
  {
    src: "/images/portrait-3.jpg",
    width: 720,
    height: 1280,
    alt: "LUDA in a maroon shirt and cap, standing at the top of a staircase",
    album: "Portraits",
  },
  {
    src: "/images/community-meeting.jpg",
    width: 1280,
    height: 960,
    alt: "An evening meeting with residents seated in a circle outside",
    album: "On the ground",
  },
  {
    src: "/images/community-seated.jpg",
    width: 822,
    height: 1280,
    alt: "LUDA laughing with party colleagues, seated outside a house",
    album: "On the ground",
  },
  {
    src: "/images/hero-smock.jpg",
    width: 810,
    height: 1080,
    alt: "LUDA in a traditional smock talking with two colleagues",
    album: "On the ground",
  },
  {
    src: "/images/hero-talk.jpg",
    width: 1080,
    height: 810,
    alt: "LUDA in conversation with members under the trees",
    album: "On the ground",
  },
  {
    src: "/images/portrait-1.jpg",
    width: 720,
    height: 1280,
    alt: "LUDA standing on a marble landing",
    album: "Portraits",
  },
  {
    src: "/images/community-roadside.jpg",
    width: 810,
    height: 1080,
    alt: "A roadside conversation with members during a community visit",
    album: "On the ground",
  },
  {
    src: "/images/hero-laugh.jpg",
    width: 1080,
    height: 1439,
    alt: "LUDA sharing a laugh with members outdoors",
    album: "On the ground",
  },
  {
    src: "/images/community-hall.jpg",
    width: 960,
    height: 1280,
    alt: "Members seated inside a hall during a party meeting",
    album: "On the ground",
  },
  {
    src: "/images/hero-pair.jpg",
    width: 1080,
    height: 811,
    alt: "LUDA talking with a colleague outside a house",
    album: "On the ground",
  },
  {
    src: "/images/portrait-2.jpg",
    width: 720,
    height: 1280,
    alt: "LUDA on a marble staircase",
    album: "Portraits",
  },
  {
    src: "/images/hero-trio.jpg",
    width: 810,
    height: 1080,
    alt: "LUDA in a smock with two colleagues outside a building",
    album: "On the ground",
  },
  {
    src: "/images/hero-garden.jpg",
    width: 1080,
    height: 1920,
    alt: "LUDA in a striped smock with a colleague in a garden",
    album: "On the ground",
  },
];
