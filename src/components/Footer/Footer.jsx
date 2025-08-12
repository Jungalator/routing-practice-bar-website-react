import CenterInfo from "./CenterInfo";
import ContactUs from "./ContactUs";
import OpeningHours from "./OpeningHours/OpeningHours";

export default function Footer() {
  return (
    <footer className="w-[100%] px-10 pt-10 pb-7 border-t-1  border-t-amber-200/50">
      <ul className="flex justify-between">
        <ContactUs />
        <CenterInfo />
        <OpeningHours />
      </ul>
    </footer>
  );
}
