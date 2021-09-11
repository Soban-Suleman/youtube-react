import React from "react";

const VideoDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div className="ui " />;
  }
  return (
    <>
      <div className="ui embed">
        <iframe
          width="560"
          height="200"
          src={`https://www.youtube.com/embed/${selectedVideo?.id?.videoId}`}
          title={selectedVideo?.snippet?.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={"ui segment"}>
        <h4 className={"ui header"}>{selectedVideo?.snippet?.title}</h4>
        <p className={"content"}>{selectedVideo?.snippet.description}</p>
        <a
          href={`https://www.youtube.com/channel/${selectedVideo?.snippet.channelId}`}
        >
          <img
            alt={"thumbnail"}
            className={"ui avatar image"}
            src={selectedVideo?.snippet.thumbnails.medium.url}
          />
          {selectedVideo?.snippet.channelTitle}
        </a>
      </div>
    </>
  );
};

export default VideoDetails;
