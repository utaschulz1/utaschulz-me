import * as React from "react";
import YoutubeIcon from "../images/youtube_logo_icon.svg";
import FacebookIcon from "../images/facebook_logo_icon.svg";
import InstagramIcon from "../images/instagram_logo_icon.svg";

const style = {
  width: "21px",
  height: "21px",
  margin: "10px 20px",
};

const SocialMediaLinks = () => {
  return (
    <div>
      <a
        href="https://www.youtube.com/channel/UCsfAAH-YLEhkwrhZKM3R-Jw"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="youtube"
      >
        <YoutubeIcon style={style} />
      </a>
      <a
        href="https://www.facebook.com/weonbikes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="facebook"
      >
        <FacebookIcon style={style} />
      </a>
      <a
        href="https://www.instagram.com/weonbikes_on_insta/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="instagram"
      >
        <InstagramIcon style={style} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
