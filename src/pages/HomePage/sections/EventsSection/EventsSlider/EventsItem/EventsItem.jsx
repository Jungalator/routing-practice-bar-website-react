import { Link } from "react-router-dom";

export default function EventsItem({ item, itemRef, itemCount }) {
  return (
    <li
      ref={itemRef}
      className={`mr-10 w-[20%] xl:w-[16%] h-95 xl:h-105 rounded-tr-[50%] rounded-tl-[50%]`}
      style={{ flex: ` 0 0 calc(100% / ${itemCount})` }}
    >
      <img
        src={`${item.img}`}
        alt="Event image"
        className="mb-4 w-[100%] h-[55%] object-cover rounded-tr-[50%] rounded-tl-[50%]"
      />
      <p className="mb-2 text-neutral-400 text-xs font-semibold">{item.date}</p>
      <h5 className="mb-2 text-white text-xl font-[--small-font]">
        {item.title}
      </h5>
      <p className="mb-2 text-sm text-neutral-400">{item.preText}</p>
      <Link
        ref={item}
        to={`event/${item.id}`}
        className="text-amber-200 brightness-77 tracking-widest"
      >
        READ MORE
      </Link>
    </li>
  );
}
