import SectionHero from "../../components/SectionHero/SectionHero";
import SubmitSection from "../../components/SubmitSection";
import DrinksList from "./sections/DrinksList/DrinksList";

export default function Drinks(props) {
  return (
    <>
      <SectionHero
        heroTextBig1="View The Extensive"
        heroTextBig2="Drinks Menu"
        heroTextSmall="Would you like to enjoy an extensive drinks menu in Zelzate and the surrounding area? Then look no further, because Café Regina is the place to be! You will find many different drinks here, so you will certainly find something you will like. So be sure to visit the store or contact us!"
      />
      <DrinksList
        listItems={props.listItems}
        menuTitle="Weekend Suggestion"
        menuText=" During the weekend at Café Regina you can treat yourself to a delicious
        hot meal that is prepared with a lot of care and love. Our chef gets to
        work and conjures up traditional Flemish classics that will delight your
        taste buds. So be sure to drop by or contact this business!"
      />
      <SubmitSection
        handleChangeTelegramForm={props.handleChangeTelegramForm}
        handleSubmitTelegramForm={props.handleSubmitTelegramForm}
        message={props.message}
      />
    </>
  );
}
