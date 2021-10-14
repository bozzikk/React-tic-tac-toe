import React, { useState } from "react";
import Box from "./Box";



export function Board(props) {
    //check mount+unmount
  const [counter, setCounter] = useState(0);
  const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ]; //winConditions

  const nextMove = (turnCounter) =>{
    return turnCounter % 2 === 0 ? "X" : "O";
  }

  const childClicked = (value) => {
    value = parseInt(value);
    if (nextMove(counter) === "X") {
      props.pickedX.push(value);
      if (checkWinner(props.pickedX)) console.log("X won");
    } else {
      props.pickedO.push(value);
      if (checkWinner(props.pickedO)) console.log("O won");
    }
    setCounter(counter + 1);
  }

  const checkWinner = (pickedArray) => {
    winConditions.forEach((element) => {
      let status = 0;
      for (let i = 0; i < 3; i++) {
        if (pickedArray.includes(element[i])) status++;
      }
      if (status === 3) {
        console.log("WIN");
        props.setPickedX(new Array());
        props.setPickedO(new Array());
        return true;
      }
      status = 0;
    });
    return false;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Box
              childClicked={childClicked}
              value="1"
              display={nextMove(counter)}
            />
          </td>
          <td>
            <Box
              childClicked={childClicked}
              value="2"
              display={nextMove(counter)}
            />
          </td>
          <td>
            <Box
              childClicked={childClicked}
              value="3"
              display={nextMove(counter)}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <Box
              childClicked={childClicked}
              value="4"
              display={nextMove(counter)}
            />
          </td>
          <td>
            {" "}
            <Box
              childClicked={childClicked}
              value="5"
              display={nextMove(counter)}
            />
          </td>
          <td>
            {" "}
            <Box
              childClicked={childClicked}
              value="6"
              display={nextMove(counter)}
            />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <Box
              childClicked={childClicked}
              value="7"
              display={nextMove(counter)}
            />
          </td>
          <td>
            {" "}
            <Box
              childClicked={childClicked}
              value="8"
              display={nextMove(counter)}
            />
          </td>
          <td>
            {" "}
            <Box
              childClicked={childClicked}
              value="9"
              display={nextMove(counter)}
            />
          </td>
        </tr>
      </tbody>
    </table> //list
  );
}
