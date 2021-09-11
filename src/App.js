import React, { useState } from "react";
import youtube from "./api/youtube";
import "./App.css";

// eslint-disable-next-line
import { SearchBar, VideoDetails, VideoList } from "./components";
const App = () => {
  const [videos, setVideos] = useState([]);
  const onVideoSearch = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: { q: term },
      });
      setVideos(response?.data?.items);
    } catch (err) {
      console.log(err?.message);
    }
  };
  return (
    <div className={"ui container"}>
      <SearchBar onFormSubmit={onVideoSearch} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
