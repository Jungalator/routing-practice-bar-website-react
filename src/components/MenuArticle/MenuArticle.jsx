export default function MenuArticle({ menuTitle, menuText }) {
  return (
    <article className="mb-25">
      <h3 className="text-white font-[--small-font] text-4xl text-center mb-5">
        {menuTitle}
      </h3>
      <p className="text-neutral-400 text-center text-sm">{menuText}</p>
    </article>
  );
}
