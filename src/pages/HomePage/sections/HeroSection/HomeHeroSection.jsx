import BarName from "./BarName";
import ContactButton from "./ContactButton";
import { RightImage, LeftImage, SmallText } from "./HeroSectionImages";
import CenterImage from "./HeroSectionImages";

export default function HomeHeroSection() {
  return (
    <>
      <section className="bg-[url(/images/backgroundPhoto.jpg)] text-center">
        <div className="bg-black/30">
          <BarName />
          <RightImage />
          <CenterImage />
          <LeftImage />
          <SmallText />
          <ContactButton />
        </div>
      </section>
    </>
  );
}
