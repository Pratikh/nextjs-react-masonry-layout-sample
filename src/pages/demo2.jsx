import Head from "next/head";
import React from "react";
import MasanryList from "src/components/MasanryList";
import apiCall from "../utils/getAnimalsData";

const Demo1 = (props) => {
  return (
    <>
      <Head>
        <title>Masanary layout loading animation</title>
      </Head>
      <MasanryList mappedResponse={props.result} />
    </>
  );
};

export const getStaticProps = async () => {
  const result = await apiCall("lion");
  return { props: { result }, revalidate: 60 * 60 * 24 };
};

export default Demo1;
