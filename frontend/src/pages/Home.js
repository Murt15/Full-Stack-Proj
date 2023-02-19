import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-div">
        <h1 className="home-div_h1">Fusce sem magna pharetra cursus</h1>
        <p className="home-div_p">
          Morbi tincidunt nisi id vulputate consequat. Morbi arcu libero,
          pellentesque eu bibendum non, eleifend ut nisi. Phasellus mattis nibh
          ullamcorper euismod sodales. Donec metus eros, euismod dapibus
          fermentum non, gravida id ex. Duis vitae dui sit amet lectus ultrices
          lacinia eget in tellus. Vivamus lacinia lectus id justo fermentum
          tincidunt. Duis consectetur porttitor tincidunt. Sed dapibus nulla
          vitae risus elementum dictum
        </p>
        <button
          className="home-div_button"
          onClick={() => {
            navigate("/menu");
          }}
        >
          Enter <span>→</span>
        </button>
      </div>
      <div className="background1-div"></div>
    </>
  );
};

export default Home;
