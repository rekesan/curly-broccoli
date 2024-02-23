// get 5 most viewed videos
export const getMostViewedVideos = (youtubeVideos) => {
  return youtubeVideos
    .sort((a, b) => {
      return (
        parseInt(b.views.replace(/,/g, "")) -
        parseInt(a.views.replace(/,/g, ""))
      );
    })
    .slice(0, 5)
    .map((video) => video.title);
};
