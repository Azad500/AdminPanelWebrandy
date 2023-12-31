import styles from "../Navbar/Navbar.module.scss";
import AllInformationsJs from "../../../informations";
import HamburgerBar from "./HamburgerBar";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <HamburgerBar />
        </li>
        <li className={styles.WebrandyLogo}>
          <img
            src={AllInformationsJs.Navbar.WebrandyLogo}
            alt="Webrandy Logo"
          />
          <h1>
            <a href="/">{AllInformationsJs.Navbar.WebrandyTitle}</a>
          </h1>
        </li>
        <li className={styles.ProfilePhotos}>
          <img
            src={AllInformationsJs.Navbar.ProfilePhotos}
            alt="Profil Photo"
          />
        </li>
      </ul>
    </nav>
  );
}
