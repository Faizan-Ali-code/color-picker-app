import React, { useState } from "react";
import ColorBox from "./Components/Color_picker/ColorBox";
import * as styles from "./App.module.scss";

const App = () => {
  const [color, setcolor] = useState("");
  const [ArrayOfColor, setArrayOfColor] = useState([
    "red",
    "blue",
    "green",
    "orange",
    "navy",
    "brown",
    "gold",
  ]);

  const ColorChanger = (color) => {
    setcolor(color);
  };

  return (
    <div className={styles.App}>
      <p>click on any Color box</p>
      <h1 style={{ color: color }}>Auxilium</h1>
      <div className={styles.box_container}>
        {ArrayOfColor.map((element, index) => {
          return (
            <ColorBox
              color={element}
              key={index}
              clicked={() => ColorChanger(element)}
            />
          );
        })}
      </div>
      <p style={{ color: color }}>
        Replicate this kind of text color changer upon click
      </p>
    </div>
  );
};

export default App;
