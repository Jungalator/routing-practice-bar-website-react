export default function LittleHunger({ listItems, listTitileStyles }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>LITTLE HUNGER</h3>
      <ul>{listItems}</ul>
    </article>
  );
}
