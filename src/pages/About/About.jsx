import { useState } from "react";
import SectionHero from "../../components/SectionHero/SectionHero";
import AboutInfo from "./AboutInfo/AboutInfo";
import SubmitSection from "../../components/SubmitSection";
export default function About(props) {
  const [currentYear, setCurrnetYear] = useState(1927);
  const handleChooseYear = (year) => {
    setCurrnetYear(year);
  };
  return (
    <>
      <SectionHero
        heroTextBig1="Know about cafe "
        heroTextBig2="Regina"
        heroTextSmall="Are you curious about the oldest café in Zelzate ? Then look no further, because Café Regina is the place to be. This is not only the oldest, but also the nicest café in Zelzate and the surrounding area. So be sure to come by and enjoy a good time!"
      />
      <AboutInfo
        currentYear={currentYear}
        handleChooseYear={handleChooseYear}
      />
      <SubmitSection
        handleChangeTelegramForm={props.handleChangeTelegramForm}
        handleSubmitTelegramForm={props.handleSubmitTelegramForm}
        message={props.message}
      />
    </>
  );
}
