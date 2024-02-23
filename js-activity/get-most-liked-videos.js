// get 5 most liked videos
export const getMostLikedVideos = (youtubeVideos) => {
  return youtubeVideos
    .sort((a, b) => {
      return (
        parseInt(b.likes.replace(/,/g, "")) -
        parseInt(a.likes.replace(/,/g, ""))
      );
    })
    .slice(0, 5)
    .map((video) => video.title);
};
