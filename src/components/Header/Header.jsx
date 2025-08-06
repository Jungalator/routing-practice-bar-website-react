export default function Header() {
  const navLinkStyles = "text-white";
  return (
    <header className="flex justify-end h-40 w-[100%] absolute">
      <nav className="mr-25 w-[45%] flex justify-between items-center">
        <a href="#" className="text-white text-md">
          HOME
        </a>
        <a href="#" className={navLinkStyles}>
          DRINKS
        </a>
        <a href="#" className={navLinkStyles}>
          ABOUT US
        </a>
      </nav>
    </header>
  );
}
