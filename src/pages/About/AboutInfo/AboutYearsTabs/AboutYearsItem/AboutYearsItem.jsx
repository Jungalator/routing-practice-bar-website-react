export default function AboutYearsItem({
  year,
  currentYear,
  handleChooseYear,
}) {
  return (
    <li>
      <button
        onClick={() => handleChooseYear(year)}
        className={`${
          currentYear === year
            ? " text-amber-200 brightness-77 "
            : " text-neutral-500 "
        }cursor-pointer hover:text-amber-200 hover:brightness-77 font-semibold duration-150`}
      >
        {year}
      </button>
    </li>
  );
}
