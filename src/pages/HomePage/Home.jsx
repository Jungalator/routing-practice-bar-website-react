import HomeHeroSection from "./sections/HeroSection";
import PromoMenuSection from "./sections/PromoMenu";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <PromoMenuSection
        imgSrc="images/drinksPromoPhoto.jpg"
        imgAlt="Coktail"
        imgW="50%"
        promoTitle="Extensive Drinks"
        promoText="At Café Regina you will always find something you would like to drink. They have a very extensive drinks menu, so there is something for everyone. So be sure to contact us via telephone number or email address or simply drop by the café for a pleasant time!"
        toPage="/drinks"
        itemsArr={[
          "BEERS BOTTLE",
          "APERITIES / DEGESTIVES",
          "DRAFT BEERS",
          "SOFT DRINKS",
        ]}
        menuName="BAR"
      />
      <PromoMenuSection
        imgSrc="images/foodPromoPhoto.jpg"
        imgAlt="Chips"
        imgW="30%"
        promoTitle="Small Hunger"
        promoText="Also if you want to eat, you should go to Café Regina! For example, you can eat something here if you are feeling a little hungry. There is the farmer's board. The board is filled with a selection of artisan cheeses, cold cuts and crispy freshly baked bread. At the weekend you will find many tasty Flemish classics here, such as home-made stew and pork cheeks with abbey beer."
        toPage="/small-hunger"
        itemsArr={[
          "REFRESHMENTS",
          "PANCAKES / WAFFLES",
          "SAVORY",
          "LITTLE HUNGER",
        ]}
        menuName="MENU"
      />
    </>
  );
}
