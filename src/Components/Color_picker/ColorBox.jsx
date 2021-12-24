import React from "react";
import * as styles from "./ColorBox.module.scss";

const ColorBox = (props) => {
  return (
    <div
      className={styles.colorBox}
      style={{ backgroundColor: props.color }}
      onClick={() => props.clicked(props.color)}
    ></div>
  );
};

export default ColorBox;
