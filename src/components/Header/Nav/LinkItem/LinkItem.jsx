import { Link } from "react-router-dom";

export default function LinkItem({ linkTo, nameLink, linkId, page }) {
  const navLinkStyles = "text-xs font-semibold hover:text-white duration-150";
  return (
    <li className={`${page !== "/" ? "py-10" : "pt-7"}`}>
      <Link
        id={linkId}
        to={linkTo}
        className={`${navLinkStyles} ${
          page === linkId ? `text-white` : `text-neutral-400`
        }`}
      >
        {nameLink}
      </Link>
    </li>
  );
}
