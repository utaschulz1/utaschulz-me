import * as React from "react";
import { useState } from "react";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

const SampleDownload = (props) => {
  const { language } = useI18next();
  const { t } = useTranslation();

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

  const [sampleMail, setSampleMail] = useState("");
  const [sampleFirstName, setSampleFirstName] = useState("");

  const handleClose = () => {
    const modal = document.querySelector(".sample-modal");
    modal.style.display = "none";
  };

  const handleClick = () => {
    const modal = document.querySelector(".sample-modal");
    modal.style.display = "flex";
  };

  const handleEmailChange = (e) => {
    setSampleMail(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setSampleFirstName(e.target.value);
  };

  const handleSampleSubmit = (e) => {
    e.preventDefault();

    // const process.env = require("../sender-data/process.env.json");

    let downloadLink;

    let sampleData = {
      email: sampleMail,
      firstname: sampleFirstName,
    };

    if (language === "de") {
      sampleData.groups = [process.env.sampleDE, process.env.newsletterDE];
      downloadLink =
        "https://drive.google.com/uc?export=download&id=16-8QCUXwTXdiHnlwNusUR8O0Sh0gf84U";
    } else if (language === "en") {
      sampleData.groups = [process.env.sampleEN, process.env.newsletterEN];
      downloadLink =
        "https://drive.google.com/uc?export=download&id=1BXwONY1p3RFDMInkvq7esGpdZHyUIRZS";
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
      body: JSON.stringify(sampleData),
    });
    window.open(downloadLink);
    handleClose();
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        <Trans>Leseprobe herunterladen</Trans> &#8681;
      </button>
      <div className="sample-modal" style={modalStyle}>
        <div className="sample-modal-content" style={modalContentStyle}>
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
            <Trans>
              Vielen dank für dein Interesse an unserem Buch! Gerne schicken wir
              dir die Leseprobe mit 5 Kapiteln als PDF zum Herunterladen zu.
            </Trans>
          </p>
          <form onSubmit={handleSampleSubmit} style={formStyle}>
            <label style={labelStyle}>
              <Trans>Name</Trans>
              <input
                type="text"
                placeholder={t("Dein Name")}
                value={sampleFirstName}
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
                value={sampleMail}
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
              value={t("Leseprobe herunterladen")}
              style={btnStyle}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SampleDownload;
