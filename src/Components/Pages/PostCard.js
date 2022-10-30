import React from "react";
import aniketProfilepic from "../Images/aniketProfilepic.jpg";

const PostCard = () => {
  return (
    <div>
      <div className="post_box">
        <div className="input">
          <div className="input_text">
            <img src={aniketProfilepic} alt="no image" className="profile" />
            <input type="text" value="start a post" className="post_input" />
          </div>
          <div className="input_blocks">
            <div className="input_option">
              <div className="option">
                <i className="bi bi-image" style={{ color: "lightblue" }}></i>{" "}
              </div>
              <div className="option_text">Photo</div>
            </div>
            <div className="input_option">
              <div className="option">
                <i
                  className="bi bi-play-btn-fill"
                  style={{ color: "lightgreen" }}
                ></i>{" "}
              </div>
              <div className="option_text">Video</div>
            </div>
            <div className="input_option">
              <div className="option">
                <i
                  className="bi bi-calendar-event"
                  style={{ color: "orange" }}
                ></i>{" "}
              </div>
              <div className="option_text">Event</div>
            </div>
            <div className="input_option">
              <div className="option">
                <i className="bi bi-card-text" style={{ color: "crimson" }}></i>{" "}
              </div>{" "}
              <div className="option_text">Write article</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
