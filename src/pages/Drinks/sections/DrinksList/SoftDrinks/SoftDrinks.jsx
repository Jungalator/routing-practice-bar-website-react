export default function SoftDrinks({ listTitileStyles, listItems }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>SOFT DRINKS</h3>
      <ul>
        {listItems}
        {listItems.slice(0, -1)}
      </ul>
    </article>
  );
}
