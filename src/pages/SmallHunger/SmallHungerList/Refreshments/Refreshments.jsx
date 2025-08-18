export default function Refreshments({ listItems, listTitileStyles }) {
  return (
    <article className="mb-10">
      <h3 className={listTitileStyles}>REFRESHMENTS</h3>
      <ul>
        {listItems}
        {listItems.slice(0, 2)}
      </ul>
    </article>
  );
}
