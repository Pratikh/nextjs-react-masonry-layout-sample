import { createApi } from "unsplash-js";
const api = createApi({
  accessKey: process.env.UNSPLASH_TOKEN,
});

const handler = (req, res) => {
  api.search
    .getPhotos({
      query: "dog",
      orientation: "landscape",
      page: 1,
      perPage: 30,
    })
    .then((result) => {
      const mappedResponse = result.response.results.map((a) => {
        return {
          id: a.id,
          alt: a.alt_description,
          link: a.links,
          urls: a.urls,
        };
      });
      res.json({ result, mappedResponse });
    })
    .catch((error) => {
      console.log("ERROR---", error);
    });
};
export default handler;
