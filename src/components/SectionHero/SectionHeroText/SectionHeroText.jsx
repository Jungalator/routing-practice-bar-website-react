export default function SectionHeroText({
  heroTextBig1,
  heroTextBig2,
  heroTextSmall,
}) {
  const titleText = "text-white text-7xl font-[--small-font]";
  return (
    <>
      <li>
        <h4 className={`${titleText} mb-5`}>{heroTextBig1}</h4>
      </li>
      <li className="flex mb-4">
        <h4 className={`${titleText} mr-10`}>{heroTextBig2}</h4>
        <p className="text-sm text-neutral-500 w-[55%]">{heroTextSmall}</p>
      </li>
    </>
  );
}
