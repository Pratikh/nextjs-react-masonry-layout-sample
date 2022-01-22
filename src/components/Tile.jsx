import React from "react";
import Image from "next/image";
import style from "./MasanryList.module.scss";
import { motion } from "framer-motion";

var options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

export default function Tile(props) {
  const [state, setState] = React.useState(false);
  const ref = React.useRef(null);
  const refAgain = React.useRef(0);
  React.useEffect(() => {
    if (state) {
      return;
    }
    const observer = new IntersectionObserver(() => {
      refAgain.current += 1;
      if (!state && refAgain.current > 1) {
        setState(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [state]);
  return (
    <figure className={style.figure} ref={ref}>
      <motion.div
        variants={{
          visible: { opacity: 1, y: "0" },
          hidden: { opacity: 0, y: "100vh" },
        }}
        whileHover={{
          y: -15,
          transition: { duration: 0.2 },
        }}
        initial="hidden"
        animate={state ? "visible" : "hidden"}
        transition={{ ease: "linear", duration: 0.5 }}
      >
        <Image
          className={style.img}
          src={props.urls.regular}
          alt={props.alt}
          width={props.imageProps.width}
          height={props.imageProps.height}
        />
        <p>{props.alt}</p>
      </motion.div>
    </figure>
  );
}
