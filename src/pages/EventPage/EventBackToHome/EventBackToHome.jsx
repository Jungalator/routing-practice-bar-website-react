import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function EventBackToHome() {
  return (
    <div className="w-[100%] py-4.5  border-b-1 border-white/20 flex justify-center ">
      <Link to="/" className="flex items-center justify-between w-60">
        <Button direction="-scale-x-100" />
        <p className="text-amber-200 brightness-90 tracking-widest text-sm">
          BACK TO HOME
        </p>
      </Link>
    </div>
  );
}
