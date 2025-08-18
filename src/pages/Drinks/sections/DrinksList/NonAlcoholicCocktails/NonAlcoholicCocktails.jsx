export default function NonAlcoholicCocktails({ listTitileStyles, listItems }) {
  return (
    <article>
      <h3 className={listTitileStyles}>NON-ALCOHOLIC COCKTAILS</h3>
      <ul>{listItems}</ul>
    </article>
  );
}
