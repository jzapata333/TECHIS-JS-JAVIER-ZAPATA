import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import { canSwap, shuffle, swap, isSolved } from "./helpers";

function Board() {
  // In order to create tiles, we take an empty array, instantiate an array with length of time count
  // and spread it inside the array.
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  console.log("is started:", isStarted);

  const shuffleTiles = () => {
    // we take the shuffle function from ./helpers, save it to a variable, to then set the state to
    // that shuffle.
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    // in order for files to move, we need to check if tiles can move, and then move them.
    // canSwap takes 2 params, source index and destination index. Source index is passed the tile we
    // are clicking, the destination is always the last tile (tile 16, the empty one).
    // if canSwap returns true, then we can swap.
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      // after tile has moved, we set the state to that swap, which is stored in the variable swappedTiles
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index) => {
    // this is the first function that will be called when a tile is clicked. It calls the swapTiles
    // function above.
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    // this function calls shuffleTiles. It is assigned to the restart button
    shuffleTiles();
  };

  const handleStartClick = () => {
    // when start button is clicked, tiles are shuffled, the another state is used to determine if game
    // has begun. This state is set to true.
    shuffleTiles();
    setIsStarted(true);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles);

  return (
    <>
      <h2>
        Tutorial by&nbsp;
        <a
          href="https://www.youtube.com/watch?v=_wdbhVvMOCs&ab_channel=BarelyCodingwithDanielBark"
          target="_blank"
          rel="noreferrer"
        >
          Daniel Bark
        </a>
      </h2>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
        {/* if solve state is met and game has started: */}
      </ul>
      {hasWon && isStarted && <div>Congratulations!</div>}
      {/* if game has not started, set the start button. Otherwise, set the restart button */}
      {!isStarted ? (
        <button onClick={() => handleStartClick()}>Start game</button>
      ) : (
        <button onClick={() => handleShuffleClick()}>Restart game</button>
      )}
    </>
  );
}

export default Board;
