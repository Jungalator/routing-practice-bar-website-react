import ContactItem from "./ContactItem/ContactItem";
export default function ContactUs() {
  return (
    <li className=" w-[25%] text-center px-3 xl:px-10">
      <h4 className="font-[--small-font] text-3xl text-white mb-4">
        Contact Us
      </h4>
      <ul className="flex flex-col text-neutral-500 font-semibold text-sm">
        <li className="mb-2">
          Grote Markt 15 9060 Zelzate (East Flanders) Belgium
        </li>
        <ContactItem itemHref="tel:+0468 06 80 91" itemText="+0468 06 80 91" />
        <ContactItem
          itemHref="email:info@caferegina.be"
          itemText="info@caferegina.be"
        />
        <li>VAT BE 0768.703.620</li>
      </ul>
    </li>
  );
}
