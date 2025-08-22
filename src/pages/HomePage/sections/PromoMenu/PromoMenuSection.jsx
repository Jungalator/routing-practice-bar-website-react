import CenterPromoMenuImg from "./CenterPromoMenuImg";
import PromoDescription from "./PromoDescription";
import PromoItmes from "./PromoItems/PromoItems";

export default function PromoMenuSection(props) {
  return (
    <section className="mb-20 w-[100vw] bg-black flex px-10 items-center relative">
      <PromoDescription
        promoTitle={props.promoTitle}
        promoText={props.promoText}
      />
      <CenterPromoMenuImg
        imgSrc={props.imgSrc}
        imgAlt={props.imgAlt}
        imgW={props.imgW}
      />
      <PromoItmes
        toPage={props.toPage}
        itemsArr={props.itemsArr}
        menuName={props.menuName}
      />
    </section>
  );
}
