import BeersBottle from "./BeersBottle/BeersBottle";
import MenuArticle from "../../../../components/MenuArticle/MenuArticle";
import Apperitifs from "./Aperitifs";
import Wines from "./Wines";
import DraftBeers from "./DraftBeers";
import WarmDrinks from "./WarmDrinks";
import NonAlcoholicBeers from "./NonAlcoholicBeers";
import SoftDrinks from "./SoftDrinks/SoftDrinks";
import NonAlcoholicCocktails from "./NonAlcoholicCocktails/NonAlcoholicCocktails";
export default function DrinksList({ menuTitle, menuText, listItems }) {
  const listTitileStyles = "text-3xl text-white font-[--small-font] mb-5";
  return (
    <section className=" max-w-[1200px] mx-auto px-35 pt-25 ">
      <MenuArticle menuText={menuText} menuTitle={menuTitle} />
      <ul className="flex justify-between">
        <li>
          <BeersBottle
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
          <DraftBeers
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
          <NonAlcoholicBeers
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
          <NonAlcoholicCocktails
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
        </li>
        <li>
          <Apperitifs
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />

          <Wines listItems={listItems} listTitileStyles={listTitileStyles} />
          <WarmDrinks
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
          <SoftDrinks
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
        </li>
      </ul>
    </section>
  );
}
