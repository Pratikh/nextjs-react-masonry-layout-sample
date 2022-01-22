import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import Jimp from "jimp";
import Tile from "src/components/Tile";
import MasanryList from "src/components/MasanryList";
const Index = (props) => {
  console.log(props);
  React.useEffect(() => {
    console.log("hello");
    const getData = async () => {
      const res = await axios.get("/api/searchPhoto");
      console.log(res);
    };
    getData();
  }, []);
  return (
    <>
      <Head>
        <title>Masanary Layout with animation</title>
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
      console.log("Image", a.urls.regular);
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
