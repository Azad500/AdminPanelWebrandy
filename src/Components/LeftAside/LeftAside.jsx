import styles from "./LeftAside.module.scss";
import AllInformations from "../../../informations";
import { useState } from "react";

export default function LeftAside() {
  const [pagesTexts, setPagesTexts] = useState("");
  const [informationsTexts, setInformationsTexts] = useState("");
  const [portfolioTexts, setPortfolioTexts] = useState("");
  const [servicesTexts, setServicesTexts] = useState("");
  const [partnersTexts, setPartnersTexts] = useState("");
  const [teamTexts, setTeamTexts] = useState("");

  const selectPagesTexts = () => {
    setPagesTexts(!pagesTexts);
    setInformationsTexts(false);
    setPortfolioTexts(false);
    setServicesTexts(false);
    setPartnersTexts(false);
    setTeamTexts(false);
  };

  const selectInformationsTexts = () => {
    setInformationsTexts(!informationsTexts);
    setPagesTexts(false);
    setPortfolioTexts(false);
    setServicesTexts(false);
    setPartnersTexts(false);
    setTeamTexts(false);
  };

  const selectPortfolioTexts = () => {
    setPortfolioTexts(!portfolioTexts);
    setPagesTexts(false);
    setInformationsTexts(false);
    setServicesTexts(false);
    setPartnersTexts(false);
    setTeamTexts(false);
  };

  const selectServicesTexts = () => {
    setServicesTexts(!servicesTexts);
    setPagesTexts(false);
    setInformationsTexts(false);
    setPortfolioTexts(false);
    setPartnersTexts(false);
    setTeamTexts(false);
  };

  const selectPartnersTexts = () => {
    setPartnersTexts(!partnersTexts);
    setPagesTexts(false);
    setInformationsTexts(false);
    setPortfolioTexts(false);
    setServicesTexts(false);
    setTeamTexts(false);
  };

  const selectTeamTexts = () => {
    setTeamTexts(!teamTexts);
    setPagesTexts(false);
    setInformationsTexts(false);
    setPortfolioTexts(false);
    setServicesTexts(false);
    setPartnersTexts(false);
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerText}>
          <p>{AllInformations.HamburgerBar.MainPageText}</p>
        </div>
        <div
          onClick={selectInformationsTexts}
          className={`${styles.informationsText} ${
            informationsTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformations.HamburgerBar.Informations}</p>
        </div>
        <div className={styles.pagesContainer}>
          <div
            onClick={selectPagesTexts}
            className={styles.pagesTextAndImgContainer}
          >
            <div className={styles.pagesTextAndImg}>
              <img
                src={AllInformations.HamburgerBar.PagesImg}
                alt="Page Image"
              />
              <p>{AllInformations.HamburgerBar.PagesText}</p>
            </div>
            <div className={styles.downArrowElement}>
              <img
                src={AllInformations.HamburgerBar.DownArrow}
                alt="Down Arrow"
              />
            </div>
          </div>
          {pagesTexts && (
            <ul>
              <li>{AllInformations.HamburgerBar.HomePage}</li>
              <li>{AllInformations.HamburgerBar.Portfolio}</li>
              <li>{AllInformations.HamburgerBar.Services}</li>
              <li>{AllInformations.HamburgerBar.Blog}</li>
              <li>{AllInformations.HamburgerBar.ContactWithUs}</li>
            </ul>
          )}
        </div>
        <div
          onClick={selectPortfolioTexts}
          className={`${styles.portfolioElement} ${
            portfolioTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformations.HamburgerBar.Portfolio}</p>
        </div>
        <div
          onClick={selectServicesTexts}
          className={`${styles.servicesElement} ${
            servicesTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformations.HamburgerBar.Services}</p>
        </div>
        <div
          onClick={selectPartnersTexts}
          className={`${styles.partnersElement} ${
            partnersTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformations.HamburgerBar.Partners}</p>
        </div>
        <div
          onClick={selectTeamTexts}
          className={`${styles.teamElement} ${
            teamTexts ? styles.activeElement : ""
          }`}
        >
          <p>{AllInformations.HamburgerBar.Team}</p>
        </div>
      </div>
    </section>
  );
}
