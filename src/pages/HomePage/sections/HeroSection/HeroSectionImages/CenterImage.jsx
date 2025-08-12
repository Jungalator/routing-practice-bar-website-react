import { TextCenter } from "./TextCenter";

export default function CenterImage() {
  return (
    <>
      <div className="absolute top-[54.5%] left-1/2 transform  -translate-x-1/2 -translate-y-[57%] text-neutral-500">
        <TextCenter textColor="text-neutral-500" />
      </div>

      <div className="w-85 h-[500px] absolute top-20 left-1/2 transform  -translate-x-1/2 rounded-tl-[38%] overflow-hidden text-center">
        <TextCenter textColor="text-white" />
        <img
          src="images/centerHeroPhoto.jpg"
          className="w-[100%] h-[100%] absolute  left-1/2 transform  -translate-x-1/2 rounded-tl-[38%] rounded-tr-[38%]"
          alt=""
        />
      </div>
    </>
  );
}
