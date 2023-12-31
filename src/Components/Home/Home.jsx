import styles from "./Home.module.scss";
import Informations from "../Informationns/Informations";
import LeftAside from "../LeftAside/LeftAside";

export default function Home({
  tabTitle,
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
  setTabTitle,
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
      <div className={styles.leftSideElement}>
        <LeftAside />
      </div>
      <div className={styles.informationsElement}>
        <Informations
          tabTitle={tabTitle}
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
          setTabTitle={setTabTitle}
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
          keywords={keywords}
          setKeywords={setKeywords}
          handleAddInput={handleAddInput}
          handleRemoveInput={handleRemoveInput}
          setFavIconImg={setFavIconImg}
          setLogoLightImg={setLogoLightImg}
          setLogoDarkImg={setLogoDarkImg}
          setFooterVideo={setFooterVideo}
        />
      </div>
    </section>
  );
}
