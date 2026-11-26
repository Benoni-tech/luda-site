// Hero / featured photos with the focal point to keep in frame when cropped
export const heroImages = {
  community: { src: "/images/hero-community.jpg", position: "50% 30%" },
  smock: { src: "/images/hero-smock.jpg", position: "50% 42%" },
  talk: { src: "/images/hero-talk.jpg", position: "50% 30%" },
  laugh: { src: "/images/hero-laugh.jpg", position: "50% 45%" },
  field: { src: "/images/hero-field.jpg", position: "65% 30%" },
  pair: { src: "/images/hero-pair.jpg", position: "48% 20%" },
  trio: { src: "/images/hero-trio.jpg", position: "50% 20%" },
  garden: { src: "/images/hero-garden.jpg", position: "55% 20%" },
  donation: { src: "/images/donation-2.jpg", position: "50% 35%" },
  donationTall: { src: "/images/donation-1.jpg", position: "50% 30%" },
  portrait: { src: "/images/portrait-3.jpg", position: "50% 22%" },
  meeting: { src: "/images/community-meeting.jpg", position: "50% 55%" },
  seated: { src: "/images/community-seated.jpg", position: "50% 55%" },
};

export type HeroImage = keyof typeof heroImages;
