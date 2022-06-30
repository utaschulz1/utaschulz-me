import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import BuyButton from "../utils/buyButton";

import {
  takeActionWrapper,
  takeActionContentWrapper,
  takeActionBookPrices,
  price,
  book,
} from "./takeAction.module.css";

const TakeAction = () => {
  return (
    <div className={takeActionWrapper}>
      <div className={takeActionContentWrapper}>
        <h2>
          <Trans>Sei dabei!</Trans>
        </h2>
        <p>
          <Trans>
            Wenn dir unser Projekt gefällt, abonniere unseren Newsletter, um auf
            dem Laufenden zu bleiben.
          </Trans>
        </p>
        {/* TODO: immer her damit wordt contact form naar clickup*/}
        <p>
          <Trans>
            Du kannst uns mit Vorschlägen zur Route, zu Fahrradmodellen,
            Equipment und was du sonst noch wichtig findest auf Facebook,
            Instagram und Youtube unterstützen. Außerdem haben wir interessante
            Anregungen in unserem Mitmach-Programm. Wenn du noch eine Idee hast
            - immer her damit!
          </Trans>
        </p>
        <p>
          <Trans>
            Den bebilderten Reisebericht Von Moskau zum Nordkap bekommst du
            überall im Handel und in allen gängigen Online-Shops. Für uns ist es
            allerdings am besten, wenn du das Buch über den BoD-Link unten
            bestellst.
          </Trans>
        </p>
        <div className={takeActionBookPrices}>
          <div>
            <p className={price}>€7,99</p>
            <p className={book}>
              <Trans>E-Book</Trans>
            </p>
          </div>
          <div>
            <p className={price}>€12,99</p>
            <p className={book}>
              <Trans>Paperback</Trans>
            </p>
          </div>
          <div>
            <p className={price}>€21,99</p>
            <p className={book}>
              <Trans>Hardcover - Fotoqualität</Trans>
            </p>
          </div>
        </div>
        <div>
          <BuyButton
            color="#0d4880"
            margin="10px"
            padding="20px"
            fontWeight="bold"
            fontSize="larger"
          />
        </div>
      </div>
    </div>
  );
};

export default TakeAction;
