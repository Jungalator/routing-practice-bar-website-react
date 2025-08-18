export default function LabelBorder() {
  const lineStyles = "w-[46.7%] text-white/30";
  return (
    <div className="flex items-center w-[100%] relative h-25 mb-15">
      <hr className={`${lineStyles} mr-22`} />
      <svg className="w-25 h-25 fill-white absolute left-1/2 transform -translate-x-1/2">
        <use xlinkHref="favicon/sprites.svg#barLogo"></use>
      </svg>
      <hr className="w-[47.5%] text-white/30" />
    </div>
  );
}
