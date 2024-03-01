import { YoutubeVideo } from "./youtube_data";

// get 5 most liked videos
export const getMostLikedVideos = (youtubeVideos: YoutubeVideo[]): string[] => {
  return youtubeVideos
    .sort((a:YoutubeVideo, b:YoutubeVideo) => {
      return (
        parseInt(b.likes.replace(/,/g, "")) -
        parseInt(a.likes.replace(/,/g, ""))
      );
    })
    .slice(0, 5)
    .map((video) => video.title);
};
