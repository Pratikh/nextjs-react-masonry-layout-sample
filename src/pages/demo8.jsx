import Head from "next/head";
import axios from "axios";
import React from "react";
import MasanryList from "src/components/MasanryList";
const Demo1 = (props) => {
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
  const result = await axios.get(
    "http://localhost:3000/api/searchPhoto?query=deer"
  );
  return { props: { result: result.data } };
};

export default Demo1;
