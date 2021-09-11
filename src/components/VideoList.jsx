import React from "react";
import { VideoItem } from "./index";

const VideoList = ({ videos, onVideoSelect }) => {
  const videosList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className={"ui relaxed divided list"}>{videosList}</div>;
};

export default VideoList;
