export default function CenterPromoMenuImg({ imgSrc, imgAlt, imgW }) {
  return (
    <div className={`${imgW} h-[100%] mx-auto`}>
      <img src={imgSrc} alt={imgAlt} className="mx-auto" />
    </div>
  );
}
