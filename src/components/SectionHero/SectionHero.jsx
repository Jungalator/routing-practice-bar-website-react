import Button from "../Button";
import SectionHeroText from "./SectionHeroText/SectionHeroText";

export default function SectionHero(props) {
  return (
    <section className="bg-[url(/images/backgroundPhoto.jpg)] h-[100vh]">
      <ul className="pt-60 px-25 h-[100vh] w-[100vw] bg-black/30 ">
        <SectionHeroText
          heroTextBig1={props.heroTextBig1}
          heroTextBig2={props.heroTextBig2}
          heroTextSmall={props.heroTextSmall}
        />
        <li className="flex">
          <p className="text-amber-200 pt-1.5 brightness-77 mr-5 tracking-widest">
            CONTACT US
          </p>
          <Button />
        </li>
      </ul>
    </section>
  );
}
