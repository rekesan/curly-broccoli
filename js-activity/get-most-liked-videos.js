// get 5 most liked videos
export const getMostLikedVideos = (youtubeVideos) =>
  youtubeVideos
    .sort(
      (a, b) =>
        parseInt(b.likes.replace(/,/g, "")) -
        parseInt(a.likes.replace(/,/g, ""))
    )
    .slice(0, 5)
    .map((video) => video.title);
