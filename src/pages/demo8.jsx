import Head from "next/head";
import axios from "axios";
import React from "react";
import MasanryList from "src/components/MasanryList";
import data from 'src/utils/dummyData.json'
const Demo1 = (props) => {
  console.log(data);
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
  // return { props: { result: result.data }, revalidate: 60 * 60 * 24 };
  return { props: { result: result.data }, revalidate: 60 * 60 * 24 };
};

export default Demo1;
