import React, { useState, useRef } from "react";
import styles from "../TabTitle/ChooseFile.module.scss";
import AllInformations from "../../../informations";

export default function FileInputWithPreview({
  setFavIconImg,
  setLogoLightImg,
  setLogoDarkImg,
}) {
  const [selectedFiles, setSelectedFiles] = useState([null, null, null]);
  const [previewURLs, setPreviewURLs] = useState([null, null, null]);
  const fileInputRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const titles = ["FavIcon", "Logo (Light)", "Logo (Dark)"];

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const fileResult = reader.result;

        setSelectedFiles((prev) => {
          const updated = [...prev];
          updated[index] = file;
          return updated;
        });
        setPreviewURLs((prev) => {
          const updated = [...prev];
          updated[index] = fileResult;
          return updated;
        });

        if (index === 0) {
          setFavIconImg(fileResult);
        } else if (index === 1) {
          setLogoLightImg(fileResult);
        } else if (index === 2) {
          setLogoDarkImg(fileResult);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCustomButtonClick = (index) => {
    fileInputRefs.current[index].click();
  };

  const handleDelete = (index) => {
    setSelectedFiles((prev) => {
      const updated = [...prev];
      updated[index] = null;
      return updated;
    });
    setPreviewURLs((prev) => {
      const updated = [...prev];
      updated[index] = null;
      return updated;
    });
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].value = "";
    }

    if (index === 0) {
      setFavIconImg(null);
    } else if (index === 1) {
      setLogoLightImg(null);
    } else if (index === 2) {
      setLogoDarkImg(null);
    }
  };

  return (
    <section className={styles.chooseFileSection}>
      {[0, 1, 2].map((index) => (
        <div key={index} className={styles["file-input-container"]}>
          <label htmlFor={`fileInput${index}`}>{titles[index]}</label>
          <input
            type="file"
            id={`fileInput${index}`}
            ref={(el) => (fileInputRefs.current[index] = el)}
            onChange={(e) => handleFileChange(e, index)}
          />
          <button type="button" onClick={() => handleCustomButtonClick(index)}>
            {AllInformations.SameParts.ChooseFile}
          </button>
          {selectedFiles[index] && (
            <div>
              <p>
                {AllInformations.SameParts.SelectedFile}:{" "}
                {selectedFiles[index]?.name}
              </p>
              <img src={previewURLs[index]} alt="File Preview" />
              <button type="button" onClick={() => handleDelete(index)}>
                {AllInformations.SameParts.Delete}
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
