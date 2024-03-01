import { YoutubeVideo } from "./youtube_data";

// get 5 most viewed videos
export const getMostViewedVideos = (youtubeVideos: Array<YoutubeVideo>): Array<string> => {
  return youtubeVideos
    .sort((a: YoutubeVideo, b:YoutubeVideo) => {
      return (
        parseInt(b.views.replace(/,/g, "")) -
        parseInt(a.views.replace(/,/g, ""))
      );
    })
    .slice(0, 5)
    .map((video: YoutubeVideo) => video.title);
};
