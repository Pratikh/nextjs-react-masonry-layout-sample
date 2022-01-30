import { createApi } from "unsplash-js";
import Jimp from "jimp";

const api = createApi({
  accessKey: process.env.UNSPLASH_TOKEN,
});

const dataGetter = async (query) => {
  const result = await api.search.getPhotos({
    query,
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
  return mappedResponse;
};

export default dataGetter;
