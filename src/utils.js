export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getFriendlyUrl = (url) => {
  return url.replace(/^(?:https?:\/\/)?(?:www\.)?/, "");
}