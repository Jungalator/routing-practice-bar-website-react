import Nav from "./Nav";

export default function Header({ page }) {
  return (
    <header
      className={`px-25 flex justify-between h-30 w-[100%] absolute ${
        page !== "/" && "border-b-1 border-b-neutral-400/30"
      }`}
    >
      <svg className="w-21.5 h-21.5 fill-white mt-4 ">
        <use xlinkHref="favicon/sprites.svg#barLogo"></use>
      </svg>
      <Nav page={page} />
    </header>
  );
}
