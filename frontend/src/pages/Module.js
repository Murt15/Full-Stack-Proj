import "./Module.css";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Buttons from "../components/UI/Button";
import SubModule from "../components/SubModule";

const Module = () => {
  const [data, setData] = useState(null);

  const dataFetchedRef = useRef(false);

  const { state } = useLocation();

  const heading = state.name;

  // console.log(heading);

  async function getData(tab = "Tab 1") {
    // console.log("1");

    const res = await axios.get("http://localhost:5000/getData", {
      headers: { heading: state.name, tab: tab },
    });

    setData(res.data[0]);
  }

  useEffect(() => {
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
