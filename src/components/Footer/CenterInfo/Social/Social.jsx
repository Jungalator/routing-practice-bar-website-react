import SocialLink from "./SocialLink";
export default function Social() {
  return (
    <ul className="flex justify-center">
      <SocialLink
        socialLink="https://www.facebook.com"
        svgLink="favicon/sprites.svg#facebook"
      />
      <SocialLink
        socialLink="https://web.telegram.org"
        svgLink="favicon/sprites.svg#telegram"
      />
      <SocialLink
        socialLink="https://www.instagram.com"
        svgLink="favicon/sprites.svg#instagram"
      />
    </ul>
  );
}
