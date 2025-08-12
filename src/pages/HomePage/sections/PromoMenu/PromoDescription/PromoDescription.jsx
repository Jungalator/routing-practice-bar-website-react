export default function PromoDescription({ promoTitle, promoText }) {
  return (
    <article className="h-[30%] w-[30%] text-sm absolute top-1/2 left-15 transform -translate-y-1/2">
      <h3 className="text-white text-3xl font-[--small-font]">{promoTitle}</h3>
      <p className="text-neutral-500">{promoText}</p>
    </article>
  );
}
