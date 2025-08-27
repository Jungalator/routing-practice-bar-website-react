import AboutYearsInfo from "./AboutYearsInfo/AboutYearsInfo";
import AboutYearsTabs from "./AboutYearsTabs/AboutYearsTabs";

export default function AboutInfo({ currentYear, handleChooseYear }) {
  const years = [1927, 1940, 1957, 1965, 1979, 1990, 1999, 2010, 2024];
  return (
    <section className="px-10 mb-18">
      <AboutYearsTabs
        years={years}
        handleChooseYear={handleChooseYear}
        currentYear={currentYear}
      />
      <AboutYearsInfo currentYear={currentYear} />
    </section>
  );
}
