import React from "react";

const DiscoverCard = () => {
  return (
    <div>
      {" "}
      <div className="sidebar_second_col">
        <div className="sidebar_title">Recent</div>
        <div className="recent">
          <div className="sidebar_second_text">Jobs in Goa</div>
          <div className="sidebar_second_text">
            10 reasons for buying health insurance
          </div>

          <div className="sidebar_second_text">Jobopenings</div>
        </div>
        <div className="sidebar_title" style={{ color: "blue" }}>
          Groups
        </div>

        <div className="recent">
          <div className="sidebar_second_text">
            <i
              className="bi bi-people-fill"
              style={{ marginRight: "10px", fontSize: "medium" }}
            ></i>{" "}
            Jobs in Goa
          </div>
          <div className="sidebar_second_text">
            <i
              className="bi bi-people-fill"
              style={{ marginRight: "10px", fontSize: "medium" }}
            ></i>{" "}
            See all
          </div>
        </div>

        <div className="sidebar_title" style={{ color: "blue" }}>
          Followed Hashtags
        </div>

        <div className="recent">
          <div className="sidebar_second_text"># Job Openings</div>
          <div className="sidebar_second_text">See all</div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
