export default function MenuItem(props) {
  return (
    <li className="h-20">
      <ul className="flex">
        <li className="mr-5 w-45">
          <h4 className="font-[--small-font] accentColor text-xl">
            {props.itemTitle}
          </h4>
          <p className="text-neutral-500">
            {props.itemCountry}|{props.itemContainer}
          </p>
        </li>
        <li>
          <ul className="flex items-center pt-2.5">
            <li className="mr-4">
              <hr className="text-white/40 w-25" />
            </li>
            <li className="text-white font-semibold">${props.itemPrice}</li>
          </ul>
        </li>
      </ul>
    </li>
  );
}
