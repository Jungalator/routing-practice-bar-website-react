export default function Wines({ listTitileStyles, listItems }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>WINES</h3>
      <ul>{listItems}</ul>
    </article>
  );
}
