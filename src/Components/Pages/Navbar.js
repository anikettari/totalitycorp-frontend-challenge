import React from "react";
import downloadImage from "../Images/download.png";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className="header">
        <div className="header_left">
          <img src={downloadImage} alt="no image" />
          <div className="search_box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="search_input"
              value="Search"
              style={{ borderRadius: "20px" }}
            />
          </div>
        </div>
        <div className="header_right">
          <div className="nav_link ">
            <div className="nav_icon">
              <i
                className="bi bi-house-door-fill"
                style={{ fontSize: "1.3rem" }}
              ></i>
            </div>
            <div className="nav_text">Home</div>
          </div>

          <div className="nav_link network">
            <div className="nav_icon">
              <i
                className="bi bi-people-fill"
                style={{ fontSize: "1.3rem" }}
              ></i>
            </div>
            <div className="nav_text">My Network</div>
          </div>

          <div className="nav_link jobs">
            <div className="nav_icon">
              <i
                className="bi bi-briefcase-fill"
                style={{ fontSize: "1.3rem" }}
              ></i>
            </div>
            <div className="nav_text">Jobs</div>
          </div>

          <div className="nav_link">
            <div className="nav_icon">
              <i
                className="bi bi-chat-dots-fill"
                style={{ fontSize: "1.3rem" }}
              ></i>
            </div>
            <div className="nav_text">Messaging</div>
          </div>

          <div className="nav_link">
            <div className="nav_icon">
              <i className="bi bi-bell-fill" style={{ fontSize: "1.3rem" }}></i>
            </div>
            <div className="nav_text">Notifications</div>
          </div>

          <div className="nav_link">
            <div className="nav_icon">
              <img
                src={
                  "https://media-exp1.licdn.com/dms/image/D4D35AQEAFvn-ixqNQQ/profile-framedphoto-shrink_400_400/0/1663218598790?e=1666886400&v=beta&t=ZD8lauvYwUg6F-yTBrOKDifz4tP6WeQstyKlr3DY3ME"
                }
                alt="non"
                style={{
                  height: "30px",
                  objectFit: "contain",
                  borderRadius: "50px",
                }}
              />
              <div className="nav_text dropdown drop">
                <span>Me</span>
                <i
                  className="bi bi-caret-down-fill dropdown"
                  style={{ fontSize: "1rem", float: "center" }}
                ></i>

                <div className="dropdown-content">
                  <div className="dropdown_profile">
                    <img
                      src={
                        "https://media-exp1.licdn.com/dms/image/D4D35AQEAFvn-ixqNQQ/profile-framedphoto-shrink_400_400/0/1663218598790?e=1666886400&v=beta&t=ZD8lauvYwUg6F-yTBrOKDifz4tP6WeQstyKlr3DY3ME"
                      }
                      style={{
                        height: "50px",
                        objectFit: "contain",
                        borderRadius: "50px",
                      }}
                      alt="noimage"
                    />
                    <div
                      className="dropdown_profile_info"
                      style={{ paddingLeft: "10px" }}
                    >
                      <div className="act_title">Aniket Tari</div>
                      <div className="acoount_name">
                        Junior Software Engineer
                      </div>
                    </div>
                  </div>
                  <div className="profile_view_button">View profile</div>

                  <div className="bdr_bottom"></div>
                  <div className="title" style={{ color: "black" }}>
                    Accounts
                  </div>
                  <div className="list">Try premium for free</div>
                  <div className="list">Settings & Privacy</div>

                  <div className="list">Help</div>
                  <div className="list bdr_bottom">Language</div>

                  <div className="title" style={{ color: "black" }}>
                    Manage
                  </div>
                  <div className="list">Post & Activity</div>
                  <div className="list bdr_bottom">Job Postion Account</div>
                  <div className="list">sign out</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="header_right_2"
            style={{ borderLeft: "1px solid grey" }}
          >
            <div className="nav_link">
              <div className="nav_icon">
                <i
                  className="bi bi-grid-3x3-gap-fill"
                  style={{ fontSize: "1.3rem" }}
                ></i>
                <div className="nav_text dropdown drop">
                  <span>Work</span>
                  <i
                    className="bi bi-caret-down-fill dropdown"
                    style={{ fontSize: "1rem", float: "center" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="right_nav_text ">
              Get hired faster <br />
              try premium free
            </div>
            <div className="small_screen">
              <i className="bi bi-three-dots"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
