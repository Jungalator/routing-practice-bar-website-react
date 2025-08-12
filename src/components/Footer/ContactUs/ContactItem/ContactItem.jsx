export default function ContactItem({ itemHref, itemText }) {
  return (
    <li className="mb-2 ">
      <a className="hover:text-white duration-150" href={itemHref}>
        {itemText}
      </a>
    </li>
  );
}
