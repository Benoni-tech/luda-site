import PhotoHero from "./PhotoHero";
import type { HeroImage } from "@/lib/heroImages";

type Props = {
  title: string;
  link?: { href: string; label: string };
  image?: HeroImage;
};

export default function PageHero({ title, link, image }: Props) {
  return <PhotoHero title={title} link={link} image={image} />;
}
