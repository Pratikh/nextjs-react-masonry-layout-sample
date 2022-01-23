import Head from "next/head";
import axios from "axios";
import React from "react";
import Jimp from "jimp";
import MasanryList from "src/components/MasanryList";
const Index = (props) => {
  return (
    <>
      <Head>
        <title>Masanary layout loading animation</title>
      </Head>
      <MasanryList mappedResponse={props.result.mappedResponse} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const result = await axios.get("http://localhost:3000/api/searchPhoto");

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

  return { props: { result: result.data } };
};

export default Index;
