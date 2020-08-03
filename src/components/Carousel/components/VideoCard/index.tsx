import React, { useState, useEffect } from "react";
import { VideoCardContainer, VideoCardContainerVideo } from "./styles";
interface IVideoCard {
  videoTitle: string;
  videoURL: string;
  categoryColor: string;
}
function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }: IVideoCard) {
  const [uri, setUri] = useState("");
  // const image = `https://img.youtube.com/vi/${getYouTubeId(
  //   videoURL
  // )}/hqdefault.jpg`;
  const youtubeID = getYouTubeId(videoURL);
  useEffect(() => {
    setUri(`https://www.youtube.com/embed/${youtubeID}?autoplay=0`);
  }, [youtubeID]);

  function handleMouseHover(id: string) {
    setUri(
      `https://www.youtube.com/embed/${youtubeID}?autoplay=1&start=120&end=135`
    );
  }
  function handleMouseHoverOut(id: string) {
    setUri(`https://www.youtube.com/embed/${youtubeID}?autoplay=0`);
  }

  return (
    <VideoCardContainerVideo>
      <iframe
        title="Titulo do Iframe"
        src={uri}
        onMouseEnter={() => handleMouseHover(youtubeID)}
        onMouseLeave={() => handleMouseHoverOut(youtubeID)}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoCardContainerVideo>
  );
}

export default VideoCard;
