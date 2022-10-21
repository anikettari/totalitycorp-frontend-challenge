import React from "react";

import one from "../Images/1.svg";
import two from "../Images/2.svg";
import three from "../Images/2.svg";

import { CardData } from "../Data/CardData";

const PostCardUser = () => {
  console.log(CardData);
  return (
    <>
      {CardData.map((item) => (
        <div>
          <div className="post_item">
            <div className="post_item_header">
              <div className="post_item_info">
                <img
                  src={item.image_logo}
                  alt="no image"
                  className="post_profile"
                  style={{ height: "60px" }}
                />
                <div className="post_item_owner" style={{ marginLeft: "8px" }}>
                  <a href="#" className="act_title">
                    {item.title}
                  </a>
                  <p className="account_name">{item.followers} </p>
                  <p className="account_name">
                    {item.promoted === true ? "Promoted" : <></>}
                  </p>
                </div>
              </div>
              <i className="bi bi-three-dots" style={{ padding: "5px" }}></i>
            </div>

            {item.caption == "" ? (
              <></>
            ) : (
              <div className="post_item_body_info">
                <p style={{ fontSize: "0.95rem" }}>{item.caption}</p>
              </div>
            )}

            <img
              src={item.post_Image}
              alt="noom"
              className="post_item_body_video"
              style={{ width: "100%" }}
            />

            <div className="post_item_comment_info">
              <img src={one} alt="" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <span className="account_name">
                {item.comments_count} Comments
              </span>
            </div>

            <div className="post_item_footer">
              <div className="footer_item">
                <i className="bi bi-hand-thumbs-up"></i> <div>Like</div>
              </div>
              <div className="footer_item">
                <i className="bi bi-chat-text"></i> <div>Comment</div>
              </div>
              <div className="footer_item">
                <i className="bi bi-arrow-90deg-right"></i> <div>Share</div>
              </div>
              <div className="footer_item">
                <i className="bi bi-cursor-fill"></i> <div>Send</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostCardUser;
