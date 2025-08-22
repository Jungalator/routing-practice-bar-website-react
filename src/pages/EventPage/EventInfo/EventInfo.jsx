export default function EventInfo({ date, title, text }) {
  const liStyle = "mb-4";
  const pStyle = "mb-4";
  return (
    <ul className="w-[50%] h-[90%]">
      <li className={liStyle}>
        <p className="text-amber-200 font-[--small-font] tracking-widest">
          {date}
        </p>
      </li>
      <li className={liStyle}>
        <h1 className="text-white text-3xl font-[--small-font]">{title}</h1>
      </li>
      <li className={`${liStyle} text-neutral-500 lg:text-sm xl:text-base`}>
        <p className={pStyle}>{text[1]}</p>
        <p className={pStyle}>{text[2]}</p>
        <p className={pStyle}>{text[3]}</p>
      </li>
    </ul>
  );
}
