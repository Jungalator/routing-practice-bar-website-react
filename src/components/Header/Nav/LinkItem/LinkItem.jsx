import { Link } from "react-router-dom";

export default function LinkItem({ linkTo, nameLink }) {
  const navLinkStyles = "text-neutral-400 text-xs font-semibold pt-8";
  return (
    <li className={navLinkStyles}>
      <Link to={linkTo} className="hover:text-white duration-150">
        {nameLink}
      </Link>
    </li>
  );
}
