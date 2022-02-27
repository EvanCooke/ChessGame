//import React from 'react';

import './Chessboard.css'
import Tile from './Tile/Tile'

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

// non pawn pieces setup
for(let p = 0; p < 2; p++){
  const type = (p === 0) ? "dt" : "lt"; // if p = 0 -> type = dt. else, type = lt (20:00 tutorial 2)
  const y = (p === 0) ? 7 : 0;

  pieces.push({ image: `assets/images/Chess_r${type}60.png`, x: 0, y });
  pieces.push({ image: `assets/images/Chess_r${type}60.png`, x: 7, y });
  pieces.push({ image: `assets/images/Chess_n${type}60.png`, x: 1, y });
  pieces.push({ image: `assets/images/Chess_n${type}60.png`, x: 6, y });
  pieces.push({ image: `assets/images/Chess_b${type}60.png`, x: 2, y });
  pieces.push({ image: `assets/images/Chess_b${type}60.png`, x: 5, y });
  pieces.push({ image: `assets/images/Chess_k${type}60.png`, x: 3, y });
  pieces.push({ image: `assets/images/Chess_q${type}60.png`, x: 4, y });
}

// black pawn setup
for(let i = 0; i < 8; i++){
    pieces.push({ image: "/assets/images/Chess_pdt60.png", x: i, y: 6 });
}

// white pawn setup
for(let i = 0; i < 8; i++){
    pieces.push({ image: "/assets/images/Chess_plt60.png", x: i, y: 1 });
}

export default function Chessboard(){
  let board = [];
  let number = 0;

  for(let j = verticalAxis.length - 1; j >= 0; j--){
    for(let i = 0; i < horizontalAxis.length; i++){

      let image = undefined

      pieces.forEach((p) => { // enhanced for loop
          if(p.x === i && p.y === j){
            image = p.image;
          }
      });

      board.push(<Tile image={image} number={number} />);
      number++;
    }

  number++;
  }
  return <div id="chessboard">{board}</div>;
}