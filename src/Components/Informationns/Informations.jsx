import Footer from "../Footer/Footer";
import TabTitle from "../TabTitle/TabTitle";
import styles from "./informations.module.scss";
import AllInformations from "../../../informations";
export default function Informations({
  tabTitle,
  setTabTitle,
  mail1,
  mail2,
  phoneNumber1,
  phoneNumber2,
  phoneNumber3,
  address,
  instagramLink,
  facebookLink,
  linkedinLink,
  youtubeLink,
  setMail1,
  setMail2,
  setPhoneNumber1,
  setPhoneNumber2,
  setPhoneNumber3,
  setAddress,
  setInstagramLink,
  setFacebookLink,
  setLinkedinLink,
  setYoutubeLink,
  keywords,
  setKeywords,
  handleAddInput,
  handleRemoveInput,
  setFavIconImg,
  setLogoLightImg,
  setLogoDarkImg,
  setFooterVideo,
}) {
  return (
    <section className={styles.container}>
      <p>{AllInformations.Navbar.InformationsText}</p>
      <div className={styles.wrapper}>
        <TabTitle
          tabTitle={tabTitle}
          setTabTitle={setTabTitle}
          keywords={keywords}
          setKeywords={setKeywords}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          setFavIconImg={setFavIconImg}
          setLogoLightImg={setLogoLightImg}
          setLogoDarkImg={setLogoDarkImg}
        />
        <Footer
          mail1={mail1}
          mail2={mail2}
          phoneNumber1={phoneNumber1}
          phoneNumber2={phoneNumber2}
          phoneNumber3={phoneNumber3}
          address={address}
          instagramLink={instagramLink}
          facebookLink={facebookLink}
          linkedinLink={linkedinLink}
          youtubeLink={youtubeLink}
          setMail1={setMail1}
          setMail2={setMail2}
          setPhoneNumber1={setPhoneNumber1}
          setPhoneNumber2={setPhoneNumber2}
          setPhoneNumber3={setPhoneNumber3}
          setAddress={setAddress}
          setInstagramLink={setInstagramLink}
          setFacebookLink={setFacebookLink}
          setLinkedinLink={setLinkedinLink}
          setYoutubeLink={setYoutubeLink}
          setFooterVideo={setFooterVideo}
        />
      </div>
    </section>
  );
}
