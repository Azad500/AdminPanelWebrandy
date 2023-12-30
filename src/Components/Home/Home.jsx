import styles from "./Home.module.scss";
import AllInformations from "../../../informations";
import Informations from "../Informationns/Informations";
import LeftAside from "../LeftAside/LeftAside";

export default function Home({ contents }) {
  return (
    <section className={styles.container}>
      <div className={styles.leftSideElement}>
        <LeftAside />
      </div>
      <div className={styles.informationsElement}>
        <Informations contents={contents} />
      </div>
    </section>
  );
}
