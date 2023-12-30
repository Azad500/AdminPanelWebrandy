import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCounter } from "./counter/counterSlice";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SaveButton from "./Components/SaveButton/SaveButton";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCounter());
  }, [dispatch]);
  const contents = useSelector((state) => state.counter.contents);
  const isLoading = useSelector((state) => state.counter.isLoading);
  const error = useSelector((state) => state.counter.error);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <p>{contents.mail1}</p>
      <Navbar />
      <Home contents={contents} />
      <div className="saveButton">
        <SaveButton />
      </div>
    </div>
  );
}

export default App;
