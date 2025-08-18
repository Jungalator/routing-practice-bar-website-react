export default function SavoryMouthPleasure({ listItems, listTitileStyles }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>SAVORY PLEASURE</h3>
      <ul>{listItems.slice(0, 3)}</ul>
    </article>
  );
}
