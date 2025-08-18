import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const textStyles = "text-5xl font-bold text-white font-[--small-font]";
  return (
    <>
      <div className=" w-[70%] h-[80%] pt-60 mx-auto mb-50 text-center">
        <h1 className={`${textStyles} mb-5`}> Sorry, page not found...</h1>
        <div className={textStyles}>
          Go to
          <Link
            to="/"
            className="text-5xl font-bold text-amber-200 brightness-77 font-[small-font] mr-4 ml-4"
          >
            Home
          </Link>
          page
        </div>
      </div>
    </>
  );
}
