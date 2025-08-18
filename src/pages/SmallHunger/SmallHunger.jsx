import SectionHero from "../../components/SectionHero/SectionHero";
import SubmitSection from "../../components/SubmitSection";
import SmallHungerList from "./SmallHungerList/SmallHungerList";

export default function SmallHunger({
  listItems,
  message,
  handleChangeTelegramForm,
  handleSubmitTelegramForm,
}) {
  return (
    <>
      <SectionHero
        heroTextBig1="Small Hunger?"
        heroTextBig2="Drop By!"
        heroTextSmall="Are you looking for a cozy café in Zelzate ? Then look no further, because Café Regina is the right place for you! You can of course drink a lot of different things here, but if you want to eat something small, you are more than welcome here. You can always come here if you are hungry!"
      />
      <SmallHungerList
        listItems={listItems}
        menuTitle="Delicious Options"
        menuText="At Café Regina you will find plenty of delicious options. This way you can satisfy your tasty cravings without it being too heavy on the stomach. For example, you can opt for the farm plank. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread."
      />
      <SubmitSection
        message={message}
        handleChangeTelegramForm={handleChangeTelegramForm}
        handleSubmitTelegramForm={handleSubmitTelegramForm}
      />
    </>
  );
}
