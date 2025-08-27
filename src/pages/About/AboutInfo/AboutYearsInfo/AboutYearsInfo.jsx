import about from "../../../../data/about.json";

export default function AboutYearsInfo({ currentYear }) {
  const currnetArticle = about.find((item) => item.id === currentYear);
  const textStyle = "text-neutral-500 mb-5";
  return (
    <>
      <article className="duration-300">
        <h2 className="mb-5 text-white text-3xl font-[--small-font]">
          {currnetArticle.title}
        </h2>
        <p className={textStyle}>{currnetArticle.body.text1}</p>
        <p className={textStyle}>{currnetArticle.body.text2}</p>
        <p className={textStyle}>{currnetArticle.body.text3}</p>
      </article>
    </>
  );
}
