import React from "react";

const NewsCard = (props) => {
  return (
    <div>
      {" "}
      <div className="news">
        <div className="news_head">
          <div className="news_title">{props.header}</div>
          <i className="bi bi-info-square-fill" style={{ fontSize: "15px" }}>
            {" "}
          </i>
        </div>
        <br></br>

        {props.NewsData.map((item) => (
          <div className="new_list">
            <div
              className="act_title"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <i
                className="bi bi-record-fill"
                style={{
                  fontSize: "14px",
                  marginRight: "10px",
                  display: "block",
                  marginTop: "5px",
                }}
              ></i>
              {item.news_title}
            </div>
            <div style={{ marginLeft: "25px" }} className="account_name">
              {item.time} ago - {item.read_count} readers
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
