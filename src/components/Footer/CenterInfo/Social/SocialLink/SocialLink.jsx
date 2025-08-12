export default function SocialLink({ svgLink, socialLink }) {
  return (
    <li className="w-10 ">
      <a href={socialLink} target="_blank" className="flex justify-center">
        <svg className="w-5.5 h-5.5 fill-white hover:w-7 hover:h-7 duration-150 ">
          <use xlinkHref={svgLink}></use>
        </svg>
      </a>
    </li>
  );
}
