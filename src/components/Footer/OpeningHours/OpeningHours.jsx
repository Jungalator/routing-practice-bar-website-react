export default function OpeningHours() {
  const liStyle = "flex flex-col text-neutral-500 text-sm font-semibold";
  return (
    <li className="w-[25%] text-center">
      <h4 className="font-[--small-font] text-3xl text-white mb-4">
        Opening Hours
      </h4>
      <ul className="flex flex-col ">
        <li className={`${liStyle} mb-3`}>
          <p>Monday-Friday:</p> <p>08:00am - 12:00am</p>
        </li>
        <li className={liStyle}>
          <p>Saturday-Sunday:</p>
          <p> 07:00am - 11:00pm</p>
        </li>
      </ul>
    </li>
  );
}
