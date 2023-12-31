import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCounter, postContent } from "./counter/counterSlice";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SaveButton from "./Components/SaveButton/SaveButton";

function App() {
  const dispatch = useDispatch();
  const [tabTitle, setTabTitle] = useState("");
  const [mail1, setMail1] = useState("");
  const [mail2, setMail2] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [phoneNumber3, setPhoneNumber3] = useState("");
  const [address, setAddress] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [favIconImg, setFavIconImg] = useState("");
  const [logoLightImg, setLogoLightImg] = useState("");
  const [logoDarkImg, setLogoDarkImg] = useState("");
  const [footerVideo, setFooterVideo] = useState("");

  const isFormEmpty =
    !tabTitle &&
    !mail1 &&
    !mail2 &&
    !phoneNumber1 &&
    !phoneNumber2 &&
    !phoneNumber3 &&
    !address &&
    !instagramLink &&
    !facebookLink &&
    !linkedinLink &&
    !youtubeLink;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormEmpty) {
      console.log("Formda doldurulmuş bir alan yok.");
      return;
    }
    const metaTagKeywords = keywords.map((k) => k.value);
    dispatch(
      postContent({
        Tabtitle: tabTitle,
        MetaTagKeywords: metaTagKeywords,
        Mail1: mail1,
        Mail2: mail2,
        PhoneNumber1: phoneNumber1,
        PhoneNumber2: phoneNumber2,
        PhoneNumber3: phoneNumber3,
        Address: address,
        InstagramLink: instagramLink,
        FacebookLink: facebookLink,
        LinkedinLink: linkedinLink,
        YoutubeLink: youtubeLink,
        FavIconImg: favIconImg,
        LogoLightImg: logoLightImg,
        LogoDarkImg: logoDarkImg,
        FooterVideo: footerVideo,
      })
    );
    //
  };
  useEffect(() => {
    dispatch(fetchCounter());
  }, [dispatch]);

  const contents = useSelector((state) => state.counter.contents);

  useEffect(() => {
    if (contents.length > 0) {
      const latestData = contents[contents.length - 1];
      setTabTitle(latestData.Tabtitle);
      setMail1(latestData.Mail1);
      setMail2(latestData.Mail2);
      setPhoneNumber1(latestData.PhoneNumber1);
      setPhoneNumber2(latestData.PhoneNumber2);
      setPhoneNumber3(latestData.PhoneNumber3);
      setAddress(latestData.Address);
      setInstagramLink(latestData.InstagramLink);
      setFacebookLink(latestData.FacebookLink);
      setLinkedinLink(latestData.LinkedinLink);
      setYoutubeLink(latestData.YoutubeLink);
      if (
        latestData.MetaTagKeywords &&
        Array.isArray(latestData.MetaTagKeywords)
      ) {
        const transformedKeywords = latestData.MetaTagKeywords.map(
          (keyword, index) => ({
            id: index,
            value: keyword,
          })
        );
        setKeywords(transformedKeywords);
      }
    }
  }, [contents]);
  // ---------------------ForTabTitle---------------
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

  return (
    <div className="container">
      <Navbar />
      <Home
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
      <div className="saveButton">
        <SaveButton handleSubmit={handleSubmit} isFormEmpty={isFormEmpty} />
      </div>
    </div>
  );
}

export default App;
