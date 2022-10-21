import React from "react";
import ProfileInfoSide from "./ProfileInfoSide";
import DiscoverCard from "./DiscoverCard";
import PostCard from "./PostCard";
import PostCardUser from "./PostCardUser";
import NewsCard from "./NewsCard";
import Advertising from "./Advertising";

import { NewsData } from "../Data/NewsData";

const MainBody = () => {
  return (
    <div>
      <div className="mainbody">
        <div className="sidebar" style={{ border: "none" }}>
          <ProfileInfoSide />
          <DiscoverCard />
        </div>

        <div className="posts">
          <PostCard />
          <PostCardUser />
        </div>
        <div className="activity">
          <NewsCard NewsData={NewsData} header={"Linkedln News"} />

          <Advertising />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
