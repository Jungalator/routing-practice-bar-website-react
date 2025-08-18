export default function PancakesWaffles({ listItems, listTitileStyles }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>PANCAKES / WAFFLES</h3>
      <ul>{listItems}</ul>
    </article>
  );
}
