import React from "react";
import aniketProfilepic from "../Images/aniketProfilepic.jpg";

const Advertising = () => {
  return (
    <div>
      <div className="news">
        <div className="news_head">
          <div
            className="text_center"
            style={{ textAlign: "center", marginTop: "5px", color: "grey" }}
          >
            Let us keep you updated on the latest in green technologies
          </div>
        </div>
        <br></br>

        <div className="advertising_card">
          <div className="single_adv_card">
            <img src={aniketProfilepic} className="adv_image"></img>
          </div>
          <div className="single_adv_card">
            <img
              src={
                "https://media-exp1.licdn.com/dms/image/C510BAQFPgrSreOpvjw/company-logo_200_200/0/1552018413762?e=1674691200&v=beta&t=v_EOMqfsBUgvTy0FgJjfVSLpYY7dqIGbTR2Zjylw_OM"
              }
              className="adv_image"
            ></img>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "10px" }}>
          Hitachi Social Innovation is POWERING GOOD
        </div>
      </div>
    </div>
  );
};

export default Advertising;
