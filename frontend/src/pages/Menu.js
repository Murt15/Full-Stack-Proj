import "./Menu.css";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  //initializing navigate from  the useNavigate Hook
  const navigate = useNavigate();
  //li handler function for handling onClick on the li Element
  const liHandler = async (name) => {
    navigate("/module", { state: { name: name } });
  };
  return (
    <>
      <div className="home-img-div">
        <img
          src="https://cdn-icons-png.flaticon.com/512/15/15766.png"
          alt="home"
          onClick={() => {
            navigate("/"); //redirecting to home page
          }}
        />
      </div>
      <div className="module-div">
        <ul className="module-div__ul">
          <li
            className="module-div__li"
            onClick={() => {
              liHandler("Module One");
            }}
          >
            Module One
          </li>
          <li
            className="module-div__li"
            onClick={() => {
              liHandler("Module Two");
            }}
          >
            Module Two
          </li>
          <li
            className="module-div__li"
            onClick={() => {
              liHandler("Module Three");
            }}
          >
            Module Three
          </li>
          <li
            className="module-div__li"
            onClick={() => {
              liHandler("Module Four");
            }}
          >
            Module Four
          </li>
          <li
            className="module-div__li"
            onClick={() => {
              liHandler("Module Five");
            }}
          >
            Module Five
          </li>
        </ul>
        <button className="module-div__button">
          Select Module <span>→</span>
        </button>
      </div>
      <div className="background2-div"></div>
    </>
  );
};
//exporting the Menu Component
export default Menu;
