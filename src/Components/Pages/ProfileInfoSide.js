import React from "react";

const ProfileInfoSide = () => {
  return (
    <div>
      <div className="sidebar_first_col">
        <div
          className="profile_header"
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        ></div>
        <img
          src={
            "https://media-exp1.licdn.com/dms/image/D4D35AQEAFvn-ixqNQQ/profile-framedphoto-shrink_400_400/0/1663218598790?e=1666886400&v=beta&t=ZD8lauvYwUg6F-yTBrOKDifz4tP6WeQstyKlr3DY3ME"
          }
          alt="noimage"
          style={{
            height: "80px",
            width: "80px",
            borderRadius: "50%",
            border: "4px solid white",
            margin: "-35px auto 0 auto",
          }}
        />

        <div className="profile_info">
          <p style={{ textAlign: "center" }} className="act_title">
            Aniket Tari
          </p>
          <p className="account_name">Junior Software Engineer</p>
        </div>

        <div style={{ border: "0.2px solid lightgrey" }}></div>
        <div className="connections">
          <span style={{ float: "left" }} className="text account_name">
            Who viewed your profile
          </span>
          <span style={{ float: "right" }}>
            <a href="#" style={{ color: "blue" }}>
              60
            </a>
          </span>
          <br></br>
        </div>
        <div className="viewed">
          <div className="text account_name">Impressions of your post</div>
          <div>
            <a href="#" style={{ color: "blue" }}>
              226
            </a>
          </div>
        </div>

        <div className="sidebar_access">
          <div className="account_name">Access exclusive tools and sights</div>
          <a href="#"> Try premium for one month</a>
        </div>
        <div className="sidebar_footer">
          <i className="bi bi-bookmark-fill"></i>
          <div>My items</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoSide;
