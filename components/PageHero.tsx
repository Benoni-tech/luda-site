import PhotoHero, { type HeroImage } from "./PhotoHero";

type Props = {
  title: string;
  intro?: string;
  link?: { href: string; label: string };
  image?: HeroImage;
};

export default function PageHero({ title, intro, link, image }: Props) {
  return <PhotoHero title={title} intro={intro} link={link} image={image} />;
}
