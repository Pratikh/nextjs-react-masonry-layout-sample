import axios from "axios";
import Jimp from "jimp";

export async function getAnimalsData(query) {
  const result = await axios.get(
    "http://localhost:3000/api/searchPhoto?query=" + (query || "dogs")
  );

  const arrayOfPromise = [];
  result.data.mappedResponse.forEach((a) => {
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

  return arrayOfPromise;
}
