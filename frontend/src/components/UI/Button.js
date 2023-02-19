import "./Buttons.css";
import { useNavigate } from "react-router-dom";
const Buttons = () => {
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
          src="https://cdn-icons-png.flaticon.com/512/15/15766.png"
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
