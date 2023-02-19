//requiring the css file
import "./Buttons.css";
//importing useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";
const Buttons = () => {
  //setting up useNavigate Hooks
  const navigate = useNavigate();
  return (
    <>
      <div className="search-img-div">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoUxkJ7qDJlw59eRKzazXzFoaKIh1VMXUgA&usqp=CAU"
          alt="search"
          onClick={() => {
            navigate("/search");
          }}
        />
      </div>
      <div className="home-img-div">
        <img
          src="https://icon-library.com/images/home-icon-transparent-background/home-icon-transparent-background-20.jpg"
          alt="home"
          onClick={() => {
            navigate("/menu");
          }}
        />
      </div>
    </>
  );
};
export default Buttons;
