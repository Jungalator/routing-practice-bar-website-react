export default function Apperitifs({ listItems, listTitileStyles }) {
  return (
    <article className="mb-10">
      <h3 className={`${listTitileStyles} `}>APERITIFS/DEGESTIVES</h3>
      <ul>
        {listItems}
        {listItems}
        {listItems}
        {listItems[0]}
      </ul>
    </article>
  );
}
