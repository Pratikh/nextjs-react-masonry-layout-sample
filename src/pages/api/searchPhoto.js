import { createApi } from "unsplash-js";
import Jimp from "jimp";

const api = createApi({
  accessKey: process.env.UNSPLASH_TOKEN,
});

const handler = async (req, res) => {
  const result = await api.search.getPhotos({
    query: req.query.query || "dog",
    page: 1,
    perPage: 30,
  });
  const mappedResponse = result.response.results.map((a) => {
    return {
      id: a.id,
      alt: a.alt_description,
      link: a.links,
      urls: a.urls,
    };
  });

  const arrayOfPromise = [];
  mappedResponse.forEach((a) => {
    const promise = new Promise((resolve) => {
      Jimp.read(a.urls.regular).then((data) => {
        a.imageProps = {
          width: data.bitmap.width,
          height: data.bitmap.height,
        };
        resolve();
      });
    });
    arrayOfPromise.push(promise);
  });
  await Promise.all(arrayOfPromise);
  res.json({ mappedResponse });
};

export default handler;
