import * as React from "react";
import { useState } from "react";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

const SevenRoutesDownload = (props) => {
  const { language } = useI18next();
  const { t } = useTranslation();

  const downloadLink =
    props?.link ||
    "https://drive.google.com/drive/folders/1P1qLipD4Hsn8BEy0DcPQxa68Bcwyc9ut?usp=sharing";

  const text = props?.text || "KML/ GPX herunterladen";
  // Styles
  const buttonStyle = {
    display: props?.display || "block",
    width: props?.width || "100%",
    margin: props?.margin || "10px 0",
    padding: props?.padding || "5px 15px",
    textAlign: props?.textAlign || "center",
    color: props?.color || "#0d4880",
    backgroundColor: props?.backgroundColor || "#e7ecffbb",
    border: props?.border || "2px solid #0d4880",
    fontWeight: "bold",
  };

  const modalStyle = {
    display: "none",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
  };

  const modalContentStyle = {
    backgroundColor: "white",
    color: "black",
    position: "absolute",
    top: "30%",
    width: "550px",
    maxWidth: "90%",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    display: "block",
    margin: "5px",
    padding: "5px",
  };

  const labelStyle = {
    padding: "5px",
    textAlign: "left",
  };

  const btnStyle = {
    margin: "5px",
    padding: "5px",
    fontWeight: "bold",
    backgroundColor: "#77d6e9",
  };

  const closeBtnStyle = {
    float: "right",
    margin: "5px",
    padding: "0px",
    backgroundColor: "#ff00009c",
  };

  const lineStyle = {
    stroke: "black",
    strokeWidth: "7px",
    strokeLinecap: "round",
  };

  const [sevenRoutesMail, setSevenRoutesMail] = useState("");
  const [sevenRoutesFirstName, setSevenRoutesFirstName] = useState("");

  const handleClose = () => {
    const modal = document.querySelector(".seven-routes-modal");
    modal.style.display = "none";
  };

  const handleClick = () => {
    const modal = document.querySelector(".seven-routes-modal");
    modal.style.display = "flex";
  };

  const handleEmailChange = (e) => {
    setSevenRoutesMail(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setSevenRoutesFirstName(e.target.value);
  };

  const handleSampleSubmit = (e) => {
    e.preventDefault();

    // const process.env = require("../sender-data/process.env.json");

    let sevenRoutesData = {
      email: sevenRoutesMail,
      firstname: sevenRoutesFirstName,
    };

    if (language === "de") {
      sevenRoutesData.groups = [
        process.env["7routenDE"],
        process.env.newsletterDE,
      ];
    } else if (language === "en") {
      sevenRoutesData.groups = [
        process.env["7routenEN"],
        process.env.newsletterEN,
      ];
    }
    //  else if (language === "nl") {
    //   // nog te maken email lists voor "nl"
    //   data.groups === [];
    //   downloadLink = "";
    // } else {
    //   // nog te maken email lists voor "pt"
    //   data.groups = [];
    //   downloadLink = "";
    // }

    fetch(process.env.url, {
      method: "POST",
      body: JSON.stringify(sevenRoutesData),
    });
    window.open(downloadLink);
    handleClose();
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        <Trans>{text}</Trans> &#8681;
      </button>
      <div className="seven-routes-modal" style={modalStyle}>
        <div style={modalContentStyle}>
          <button
            className="close"
            onClick={handleClose}
            style={closeBtnStyle}
            aria-label="close"
          >
            <svg widht={"30"} height={"30"} viewBox={"0 0 80 80"}>
              <line
                x1={"20"}
                y1={"20"}
                x2={"60"}
                y2={"60"}
                style={lineStyle}
              ></line>
              <line
                x1={"60"}
                y1={"20"}
                x2={"20"}
                y2={"60"}
                style={lineStyle}
              ></line>
            </svg>
          </button>
          <p style={labelStyle}>
            <Trans>Ja Ich möchte gerne die Routen herunterladen!</Trans>
          </p>
          <form onSubmit={handleSampleSubmit} style={formStyle}>
            <label style={labelStyle}>
              <Trans>Name</Trans>
              <input
                type="text"
                placeholder={t("Dein Name")}
                value={sevenRoutesFirstName}
                onChange={handleFirstNameChange}
                required
                style={inputStyle}
              />
            </label>
            <label style={labelStyle}>
              <Trans>E-Mail</Trans>:
              <input
                type="email"
                placeholder={t("Deine E-Mail")}
                value={sevenRoutesMail}
                onChange={handleEmailChange}
                required
                style={inputStyle}
              />
            </label>
            <label style={labelStyle}>
              <input type="checkbox" required />
              <Trans>
                Ich möchte auf dem Laufenden bleiben und den Newsletter
                abonnieren
              </Trans>
            </label>
            <input
              type="submit"
              value={t("Routen herunterladen")}
              style={btnStyle}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SevenRoutesDownload;
