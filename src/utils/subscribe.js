import * as React from "react";
import { useState } from "react";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

const Subscribe = (props) => {
  const { language } = useI18next();
  const { t } = useTranslation();

  // Styles
  const buttonStyle = {
    display: props?.display || "block",
    width: props?.width || "100%",
    margin: props?.margin || "10px 0",
    padding: props?.padding || "5px 15px",
    textAlign: props?.textAlign || "center",
    color: props?.color || "white",
    backgroundColor: props?.backgroundColor || "#0d4880",
    border: props?.border || "2px solid #0d4880",
    fontSize: props?.fontSize || "1em",
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
    width: "500px",
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

  const [subMail, setSubMail] = useState("");
  const [subFirstName, setSubFirstName] = useState("");

  const handleClose = () => {
    const modal = document.querySelector(".sub-modal");
    modal.style.display = "none";
  };

  const handleClick = () => {
    const modal = document.querySelector(".sub-modal");
    modal.style.display = "flex";
  };

  const handleEmailChange = (e) => {
    setSubMail(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setSubFirstName(e.target.value);
  };

  const handleSubSubmit = (e) => {
    e.preventDefault();

    // const process.env = require("../sender-data/process.env.json");

    let newsletterId = "";

    if (language === "de") {
      newsletterId = process.env.newsletterDE;
    } else if (language === "en") {
      newsletterId = process.env.newsletterEN;
    }
    //  else if (language === "nl") {
    //   // nog te maken email lists voor "nl"
    // } else {
    //   // nog te maken email lists voor "pt"
    // }

    let subData = {
      email: subMail,
      firstname: subFirstName,
      groups: [newsletterId],
    };

    fetch(process.env.url, {
      method: "POST",
      body: JSON.stringify(subData),
    });

    handleClose();
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        <Trans>Newsletter abonnieren</Trans>
      </button>
      <div className="sub-modal" style={modalStyle}>
        <div className="sub-modal-content" style={modalContentStyle}>
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
          <form onSubmit={handleSubSubmit} style={formStyle}>
            <label style={labelStyle}>
              <Trans>Name</Trans>
              <input
                type="text"
                placeholder={t("Dein Name")}
                value={subFirstName}
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
                value={subMail}
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
              value={t("Newsletter abonnieren")}
              style={btnStyle}
            />
          </form>
          <p style={labelStyle}>
            <Trans>
              Etwa 1 E-Mail pro Woche. Wir respektieren deine Privatsphäre und
              senden keine irrelevanten E-Mails. Du kannst dich jederzeit
              abmelden.
            </Trans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
