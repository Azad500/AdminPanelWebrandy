import { useState } from "react";
import AllInformationsJs from "../../../informations";
import styles from "../TabTitle/TabTitle.module.scss";
import FileInputWithPreview from "./ChooseFile";
import { useDispatch } from "react-redux";
import { postCounterItem } from "../../counter/counterSlice";

export default function TabTitle({ contents }) {
  const [keywords, setKeywords] = useState([{ id: 1, value: "" }]);
  const handleAddInput = (e) => {
    e.preventDefault();
    setKeywords((prevKeywords) => [
      ...prevKeywords,
      { id: prevKeywords.length + 1, value: "" },
    ]);
  };
  const handleRemoveInput = (id) => {
    setKeywords((prevKeywords) =>
      prevKeywords.filter((keyword) => keyword.id !== id)
    );
  };
  // ----------------------------------
  const [inputValue, setInputValue] = useState({ tabTitle: "" });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCounterItem(inputValue));
    setInputValue({ tabTitle: "" });
    console.log(inputValue);
  };
  return (
    <section className={styles.informations}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="tabTitle">
            {AllInformationsJs.TabTitle.TabTitleText}
          </label>
          <input
            className={styles.TabTitle}
            type="text"
            id="tabTitle"
            name="tabTitle"
            value={inputValue.tabTitle}
            onChange={handleInput}
            placeholder={AllInformationsJs.Navbar.WebrandyTitle}
          />
          <button>send request</button>
        </div>
        <div>
          <label htmlFor="metaTagKeywords">
            {AllInformationsJs.TabTitle.MetaTagKeywordsText}
          </label>
          {keywords.map((keyword) => (
            <div key={keyword.id} className={styles.TagInput}>
              <input
                placeholder={AllInformationsJs.Navbar.WebrandyTitle}
                type="text"
                name="keywords"
                id="metaTagKeywords"
                onChange={(e) => {
                  const updatedKeywords = keywords.map((k) =>
                    k.id === keyword.id ? { ...k, value: e.target.value } : k
                  );
                  setKeywords(updatedKeywords);
                }}
              />
              <button onClick={() => handleRemoveInput(keyword.id)}>
                <img
                  src={AllInformationsJs.TabTitle.inputButton}
                  alt="Input Button"
                />
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleAddInput} className={styles.addInputButton}>
          <img
            src={AllInformationsJs.TabTitle.addInputButton}
            alt="Add Input Button"
          />
        </button>
      </form>
      <div>
        <FileInputWithPreview />
      </div>
    </section>
  );
}
