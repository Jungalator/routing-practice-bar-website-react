export default function NonAlcoholicBeers({ listTitileStyles, listItems }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>NON-ALCOHOLIC BEERS</h3>
      <ul>{listItems}</ul>
    </article>
  );
}
