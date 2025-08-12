import LinkItem from "./LinkItem/LinkItem";
export default function Nav() {
  const positionLinks = "flex justify-between";
  return (
    <nav className={`${positionLinks} w-[45%]`}>
      <ul className={`${positionLinks} w-[100%]`}>
        <LinkItem linkTo="/" nameLink="HOME" />
        <LinkItem linkTo="/drinks" nameLink="DRINKS" />
        <LinkItem linkTo="/small-hunger" nameLink="SMALL HUNGER" />
        <LinkItem linkTo="/about-us" nameLink="ABOUT US" />
      </ul>
    </nav>
  );
}
