import "./Module.css";
//importing the dependencies from react and react-router-dom
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
//importing axios for network calls
import axios from "axios";
//importing the other smaller components
import Buttons from "../components/UI/Button";
import SubModule from "../components/SubModule";

const Module = () => {
  //setting up useState
  const [data, setData] = useState(null);
  //setting up useRefs
  const dataFetchedRef = useRef(false);
  //setting state
  const { state } = useLocation();

  const heading = state.name;

  // console.log(heading);

  async function getData(tab = "Tab 1") {
    try {
      //network call through axios to  backend  server for getting data
      const res = await axios.get("http://52.198.200.5:5000/getData", {
        headers: { heading: state.name, tab: tab },
      });
      //setting data
      setData(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    //function for calling the backend only once
    if (dataFetchedRef.current) return;

    dataFetchedRef.current = true;

    getData();
  }, []);

  return (
    <>
      <div className="body-div">
        <Buttons />
        <div className="heading-div">
          <p>{heading}</p>
        </div>
        <SubModule items={data} onClick={getData} />
      </div>
      <div className="background3-div"></div>
    </>
  );
};
export default Module;
