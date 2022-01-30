import React from "react";
import style from "./MasanryList.module.scss";
import Tile from "./Tile";

export default function MasanryList(props) {
  console.log('MasanryList',props.mappedResponse.length);
  return (
    <div className={style.container}>
      {props.mappedResponse.map((a, i) => (
        <Tile {...a} key={a.id} showOnLoad={i < 5} />
      ))}
    </div>
  );
}
