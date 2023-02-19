//importing the submodule css file
import "./SubModule.css";

const SubModule = (props) => {
  if (!props.items) {
    return <></>;
  } else {
    return (
      <>
        <div className="sub-module-div">
          <div className="tab-btn-div">
            <button
              className="tab-btn"
              onClick={() => {
                props.onClick("Tab 1");
              }}
            >
              Tab 1
            </button>
            <button
              className="tab-btn"
              onClick={() => {
                props.onClick("Tab 2");
              }}
            >
              Tab 2
            </button>
            <button
              className="tab-btn"
              onClick={() => {
                props.onClick("Tab 3");
              }}
            >
              Tab 3
            </button>
          </div>
          <div className="sub-module_content">
            <div className="sub-module_content_img">
              <img
                className="sub-module_image_div"
                src={props.items.imageUrl}
                alt="photos"
              ></img>
            </div>
            <div className="sub-module_content_text">
              <p className="sub-module_content_text__heading">
                {props.items.heading}
              </p>
              <p className="sub-module_content_text__para">
                {props.items.para}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default SubModule;
