export default function BarName() {
  return (
    <div className=" h-[100vh]">
      <ul className="text-white absolute top-[160px] left-[70px] font-[--small-font] ">
        <li className="flex items-center text-3xl">
          <p className="mr-2">CAFE</p> <hr className="w-35" />
        </li>
        <li className="flex  items-center">
          <p className="mr-2.5 text-3xl"> REGINA</p>
          <ul className="text-xs ">
            <li>GROTE MARKT 15</li>
            <li className="text-neutral-400 ">9060 ZELZATE</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
