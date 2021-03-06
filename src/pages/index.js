import Head from "next/head";
import axios from "axios";
import React from "react";
import apiCall from "../utils/getAnimalsData";
import MasanryList from "src/components/MasanryList";
const Index = (props) => {
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
  const result = await apiCall("dog");
  return { props: { result }, revalidate: 60 * 60 * 24 };
};

export default Index;
