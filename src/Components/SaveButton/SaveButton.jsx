import styles from "./SaveButton.module.scss";
import AllInformations from "../../../informations";

export default function SaveButton() {
  return (
    <section className={styles.section}>
      <button>{AllInformations.SaveButton.SaveButtonText}</button>
    </section>
  );
}
