import React from "react";
import "../App.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className={"item"}>
      <div>
        <img
          alt={"thumbnail"}
          className={"ui image"}
          src={video.snippet.thumbnails.medium.url}
        />
        <div className={"content"}>
          <div className={"header"}>{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
