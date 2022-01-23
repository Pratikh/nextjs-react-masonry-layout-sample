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

export const getStaticProps = async (context) => {
  const result = await axios.get("http://localhost:3000/api/searchPhoto");

  return { props: { result: result.data }, revalidate: 60 * 60 * 24 };
};

export default Index;
