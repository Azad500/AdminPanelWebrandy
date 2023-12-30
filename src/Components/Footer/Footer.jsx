import { useRef, useState } from "react";
import stylesFooter from "../Footer/Footer.module.scss";
import styles from "../TabTitle/ChooseFile.module.scss";
import AllInformationsJs from "../../../informations";

export default function Footer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(file);
        setPreviewURL(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewURL(null);
    }
  };

  const handleCustomButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setPreviewURL(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <section className={stylesFooter.FooterSection}>
      <h3>{AllInformationsJs.Footer.Footer}</h3>
      <form>
        <div>
          <div className={styles["file-input-container"]}>
            <label htmlFor="fileInput">
              {AllInformationsJs.Footer.FooterVideo}
            </label>
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button type="button" onClick={handleCustomButtonClick}>
              {AllInformationsJs.SameParts.ChooseFile}
            </button>
            {selectedFile && (
              <div>
                <p>{AllInformationsJs.SameParts.SelectedFile}</p>
                <img src={previewURL} alt="Dosya Önizleme" />
                <button type="button" onClick={handleDelete}>
                  {AllInformationsJs.SameParts.Delete}
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="Mail1">{AllInformationsJs.Footer.Mail1}</label>
            <input
              type="text"
              id="Mail1"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Mail2">{AllInformationsJs.Footer.Mail2}</label>
            <input
              type="text"
              id="Mail2"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber1">
              {AllInformationsJs.Footer.PhoneNumber1}
            </label>
            <input
              type="text"
              id="PhoneNumber1"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber2">
              {AllInformationsJs.Footer.PhoneNumber2}
            </label>
            <input
              type="text"
              id="PhoneNumber2"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber3">
              {AllInformationsJs.Footer.PhoneNumber3}
            </label>
            <input
              type="text"
              id="PhoneNumber3"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Adress">{AllInformationsJs.Footer.Address}</label>
            <input
              type="text"
              id="Adress"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Instagramlink">
              {AllInformationsJs.Footer.InstagramLink}
            </label>
            <input
              type="text"
              id="Instagramlink"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Facebooklink">
              {AllInformationsJs.Footer.FacebookLink}
            </label>
            <input
              type="text"
              id="Facebooklink"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Linkedinlink">
              {AllInformationsJs.Footer.LinkedinLink}
            </label>
            <input
              type="text"
              id="Linkedinlink"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Youtubelink">
              {AllInformationsJs.Footer.YoutubeLink}
            </label>
            <input
              type="text"
              id="Youtubelink"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
