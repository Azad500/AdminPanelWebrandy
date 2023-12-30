import Footer from "../Footer/Footer";
import TabTitle from "../TabTitle/TabTitle";
import styles from "./informations.module.scss";
import AllInformations from "../../../informations";
export default function Informations({ contents }) {
  return (
    <section className={styles.container}>
      <p>{AllInformations.Navbar.InformationsText}</p>
      <div className={styles.wrapper}>
        <TabTitle contents={contents} />
        <Footer />
      </div>
    </section>
  );
}
