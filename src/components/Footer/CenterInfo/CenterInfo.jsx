import Social from "./Social/Social";

export default function CenterInfo() {
  return (
    <li className="w-[35%]  text-center">
      <h2 className="mb-4 text-amber-200 text-4xl brightness-77 tracking-widest font-[--small-font]">
        CAFFE REGINA
      </h2>
      <p className="text-white mb-4 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <hr className="text-amber-200 w-[20%] mx-auto mb-4 brightness-77" />
      <Social />
    </li>
  );
}
