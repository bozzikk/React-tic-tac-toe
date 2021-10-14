import React, { useState } from "react";

export default function Box(props) {
  const [content, setContent] = useState(" ");

  const boxClicked = () => {
    if (content === " ") {
      setContent(props.display);
      props.childClicked(props.value);
    }
    console.log("clicked" + props.display);
  };

  return (
    <div className="box" onClick={boxClicked}>
      {content}
    </div>
  );
}
 