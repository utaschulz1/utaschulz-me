import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { authorWrapper, profileImage, authorName } from "./author.module.css";

const Author = ({ author, link }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  let url;
  if (language === "de") {
    url =
      "https://www.amazon.de/Uta-Schulz/e/B09SVCVM7H%3Fref=dbs_a_mng_rwt_scns_share";
  } else if (language === "en") {
    url =
      "https://www.amazon.com/kindle-dbs/entity/author/B09SVCVM7H?_encoding=UTF8&node=283155&offset=0&pageSize=12&searchAlias=stripbooks&sort=author-sidecar-rank&page=1&langFilter=default#formatSelectorHeader";
  }

  const info = {
    author: author || "Uta Schulz",
    link: link || url,
  };

  return (
    <div className={authorWrapper}>
      <StaticImage
        className={profileImage}
        alt={t("Profilbild des Autors")}
        src="../images/authors/uta.jpg"
        width="200"
        loading="eager"
      />
      <p className={authorName}>
        {/* <em>
          <Trans>Autorin</Trans>:
        </em> */}
      </p>
      <p className={authorName}>
        <a href={info.link} target="_blank" rel="noopener noreferrer">
          {info.author}
        </a>
      </p>
    </div>
  );
};

export default Author;
