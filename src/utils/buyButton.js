import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { useI18next } from "gatsby-plugin-react-i18next";

const BuyButton = (props) => {
  const { language } = useI18next();

  const link =
    language === "de"
      ? "https://www.bod.de/buchshop/catalogsearch/result/?q=Uta+Schulz"
      : "https://www.amazon.com/Uta-Schulz/e/B09SVCVM7H/ref=aufs_dp_fta_dsk";

  const style = {
    margin: props?.margin || "0",
    display: "block",
    textDecoration: "none",
    padding: props?.padding || "5px 15px",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#ee6556",
    color: props?.color || "white",
    fontWeight: props?.fontWeight || "normal",
    fontSize: props?.fontSize || "1em",
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={style}>
      <Trans>Jetzt Buch kaufen</Trans>
    </a>
  );
};

export default BuyButton;
