import styles from "./SaveButton.module.scss";
import AllInformations from "../../../informations";

export default function SaveButton({ handleSubmit, isFormEmpty }) {
  return (
    <section className={styles.section}>
      <form className={styles.submitButton} onSubmit={handleSubmit}>
        <input
          className={styles.button}
          type="submit"
          value={AllInformations.SaveButton.SaveButtonText}
          disabled={isFormEmpty}
        />
      </form>
    </section>
  );
}
