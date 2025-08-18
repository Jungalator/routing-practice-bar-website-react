export default function BeersBottle({ listItems, listTitileStyles }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>BEERS BOTTLE</h3>
      <ul>
        {listItems}
        {listItems}
        {listItems}
        {listItems}
      </ul>
    </article>
  );
}
