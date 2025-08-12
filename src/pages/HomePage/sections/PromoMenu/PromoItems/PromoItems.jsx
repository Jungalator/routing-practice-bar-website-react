import { Link } from "react-router-dom";
import Button from "../../../../../components/Button";

export default function PromoItmes({ itemsArr, toPage, menuName }) {
  return (
    <div className="w-[25%] absolute right-10">
      <ul>
        {itemsArr.map((item, index) => (
          <li
            className="mb-5 text-xl font-semibold text-white font-[--small-font]"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-between w-35">
        <p className="text-amber-200 text-sm brightness-77 pt-1.5  tracking-widest">
          {menuName}
        </p>

        <Link to={toPage}>
          <Button></Button>
        </Link>
      </div>
    </div>
  );
}
