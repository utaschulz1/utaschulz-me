import * as React from "react";
import { useState } from "react";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

const RouteDownload = (props) => {
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

  const [routeMail, setRouteMail] = useState("");
  const [routeFirstName, setRouteFirstName] = useState("");

  const handleClose = () => {
    const modal = document.querySelector(".route-modal");
    modal.style.display = "none";
  };

  const handleClick = () => {
    const modal = document.querySelector(".route-modal");
    modal.style.display = "flex";
  };

  const handleEmailChange = (e) => {
    setRouteMail(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setRouteFirstName(e.target.value);
  };

  const handleRouteSubmit = (e) => {
    e.preventDefault();
    // const senderData = require("../sender-data/senderData.json");

    let routeData = {
      email: routeMail,
      firstname: routeFirstName,
    };

    if (language === "de") {
      routeData.groups = [
        process.env.routeMoscowNordcapDE,
        process.env.newsletterDE,
        // senderData.routeMoscowNordcapDE,
        // senderData.newsletterDE,
      ];
    } else if (language === "en") {
      routeData.groups = [
        process.env.routeMoscowNordcapEN,
        process.env.newsletterEN,
      ];
    }
    //  else if (language === "nl") {
    //   // nog te maken email lists voor "nl"
    //   data.groups === [];
    // } else {
    //   // nog te maken email lists voor "pt"
    //   data.groups = [];
    // }

    fetch(process.env.url, {
      method: "POST",
      body: JSON.stringify(routeData),
    });
    window.open(
      "https://drive.google.com/uc?export=download&id=18UuTPrNy3YXpOldPRWdatbbnu96jahlI"
    );
    handleClose();
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick}>
        <Trans>Route herunterladen</Trans> &#8681;
      </button>
      <div className="route-modal" style={modalStyle}>
        <div className="route-modal-content" style={modalContentStyle}>
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
              Unsere Route von Moskau zum Nordkap kannst du hier herunterladen.
              Außerdem bekommst du Zugang zur Karte mit Fotos auf MapHub.
            </Trans>
          </p>
          <form onSubmit={handleRouteSubmit} style={formStyle}>
            <label style={labelStyle}>
              <Trans>Name</Trans>
              <input
                type="text"
                placeholder={t("Dein Name")}
                value={routeFirstName}
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
                value={routeMail}
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
              value={t("Route herunterladen")}
              style={btnStyle}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RouteDownload;
