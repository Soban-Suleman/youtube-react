import React, { useState } from "react";
import youtube from "./api/youtube";
import "./App.css";

// eslint-disable-next-line
import { SearchBar, VideoDetails, VideoList } from "./components";
const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onVideoSearch = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: { q: term || "buildings" },
      });
      setVideos(response?.data?.items);
      setSelectedVideo(videos[0]);
    } catch (err) {
      console.log(err?.message);
    }
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className={"ui container"}>
      <SearchBar onFormSubmit={onVideoSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className={"eleven wide column"}>
            <VideoDetails selectedVideo={selectedVideo} />
          </div>
          <div className={"five wide column"}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
