import React from "react";
import style from "./MasanryList.module.scss";
import Tile from "./Tile";

export default function MasanryList(props) {
  return (
    <div className={style.container}>
      {props.mappedResponse.map((a) => (
        <Tile {...a} key={a.id} />
      ))}
    </div>
  );
}
