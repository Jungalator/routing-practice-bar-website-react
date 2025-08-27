import AboutYearsItem from "./AboutYearsItem/AboutYearsItem";

export default function AboutYearsTabs({
  years,
  handleChooseYear,
  currentYear,
}) {
  return (
    <ul className="px-5.5 py-8 mb-12 flex justify-between w-full border-b-1 border-white/50">
      {years.map((year) => {
        return (
          <AboutYearsItem
            key={year}
            year={year}
            currentYear={currentYear}
            handleChooseYear={handleChooseYear}
          />
        );
      })}
    </ul>
  );
}
