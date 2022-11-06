import * as React from "react";
import LinkedIn from "../images/linkedin.svg";

const style = {
  width: "48px",
  height: "48px",
};

const SocialMediaLinks = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/uta-schulz-11b442117/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linkedIn"
      >
        <LinkedIn style={style} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
