export default function WarmDrinks({ listTitileStyles, listItems }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>WARM DRINKS</h3>
      <ul>{listItems}</ul>
    </article>
  );
}
