export default function DraftBeers({ listTitileStyles, listItems }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>DRAFT BEERS</h3>
      <ul>{listItems}</ul>
    </article>
  );
}
