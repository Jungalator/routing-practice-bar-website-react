import LinkItem from "./LinkItem/LinkItem";
export default function Nav({ page }) {
  const positionLinks = "flex justify-between";
  return (
    <nav className={`${positionLinks} w-[45%]`}>
      <ul className={`${positionLinks} w-[100%]`}>
        <LinkItem linkTo="/" nameLink="HOME" linkId="/" page={page} />
        <LinkItem
          linkTo="/drinks"
          nameLink="DRINKS"
          linkId="/drinks"
          page={page}
        />
        <LinkItem
          linkTo="/small-hunger"
          nameLink="SMALL HUNGER"
          linkId="/small-hunger"
          page={page}
        />
        <LinkItem
          linkTo="/about-us"
          nameLink="ABOUT US"
          linkId="/about-us"
          page={page}
        />
      </ul>
    </nav>
  );
}
