import MenuArticle from "../../../components/MenuArticle/MenuArticle";
import LittleHunger from "./LittleHunger/LittleHunger";
import PancakesWaffles from "./PancakesWaffles";
import Refreshments from "./Refreshments/Refreshments";
import SavoryMouthPleasure from "./SavoryMouthPleasure/SavoryMouthPleasure";

export default function SmallHungerList({ menuTitle, menuText, listItems }) {
  const listTitileStyles = "text-3xl text-white font-[--small-font] mb-5";
  return (
    <section className=" max-w-[1200px] mx-auto px-35 pt-25 ">
      <MenuArticle menuTitle={menuTitle} menuText={menuText} />
      <ul className="flex justify-between">
        <li>
          <Refreshments
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
          <SavoryMouthPleasure
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
        </li>
        <li>
          <PancakesWaffles
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
          <LittleHunger
            listItems={listItems}
            listTitileStyles={listTitileStyles}
          />
        </li>
      </ul>
    </section>
  );
}
