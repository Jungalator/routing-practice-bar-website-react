import Nav from "./Nav";

export default function Header() {
  return (
    <header className=" px-25 flex justify-between h-30 w-[100%] absolute">
      <img
        src="images/barLogo.svg"
        alt="Bar Logo"
        width={105}
        height={105}
        className=" pt-4 "
      />
      <Nav />
    </header>
  );
}
