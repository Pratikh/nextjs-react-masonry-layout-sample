import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Masonry from "@mui/lab/Masonry";
import { Box } from "@mui/material";

export default function DogList({ productList, message, ...rest }) {
  if (!productList && !message) {
    return <h1>Loading data</h1>;
  }
  if (message === "done" && !productList?.length) {
    return <h1>Sorry no product found</h1>;
  }
  return (
    <>
      <h1>Products</h1>
      <Box p={2}>
        <Masonry columns={{ xs: 2, sm: 3, md: 3 }} spacing={1}>
          {productList.map((a) => (
            <div key={a.name}>
              <Link
                target="_blank"
                href={
                  "https://artoreal.com/product/" +
                  a.extension_attributes.product_url
                }
                passHref
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="imageList"
                >
                  <Image
                    quality={66}
                    {...a.imageProps}
                    layout="responsive"
                    src={
                      "https://a2pbecdn.artoreal.com/catalog/product" +
                      a.media_gallery_entries[0].file
                    }
                    placeholder="blur"
                    blurDataURL={`${
                      "https://a2pbecdn.artoreal.com/catalog/product" +
                      a.media_gallery_entries[0].file
                    }?width=${parseInt(
                      (a.imageProps.width * 1) / 100
                    )}&height=${parseInt((a.imageProps.height * 1) / 100)}`}
                    alt={a.name}
                  />

                  <h3>{a.name}</h3>
                  <p>By {a.extension_attributes.seller_name}</p>

                  <h3> &#8377; {Number(a.price).toFixed()}</h3>
                </motion.div>
              </Link>
            </div>
          ))}
        </Masonry>
      </Box>
    </>
  );
}
