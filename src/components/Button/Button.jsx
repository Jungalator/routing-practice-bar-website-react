export default function Button({ style, handleClick }) {
  return (
    <>
      <button
        className={`${style} w-21 h-9 cursor-pointer `}
        onClick={handleClick}
      >
        <div className="relative w-24">
          <div className="h-5 flex items-center absolute  -bottom-2 ">
            <div className="bg-amber-200  text-xs relative w-17 h-[1px] duration-200 ease-in-out[1,2] brightness-77">
              <div className="absolute w-1.5 h-1.5 right-0 top-[43%] border-r-1 border-r-amber-200 border-t-1 border-t-amber-200 trans transform -translate-y-[43%] rotate-45"></div>
            </div>
          </div>
          <span className="w-8.5 h-8.5 border-1 border-white inline-block rounded-[50%] absolute -bottom-4 right-3.5"></span>
        </div>
      </button>
    </>
  );
}
