import React from "react";
import { Motion, spring } from "react-motion";
import { getMatrixPosition, getVisualPosition } from "./helpers";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";

function Tile(props) {
  const { tile, index, width, height, handleTileClick } = props;
  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);
  const tileStyle = {
    width: `calc(100% / ${GRID_SIZE})`,
    height: `calc(100% / ${GRID_SIZE})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundSize: `${BOARD_SIZE * 1.25}px`,
    backgroundPosition: `${(100 / GRID_SIZE) * (tile % GRID_SIZE)}% ${
      (100 / GRID_SIZE) * Math.floor(tile / GRID_SIZE)
    }%`,
  };
  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y),
  };

  return (
    // In order to get smooth transitions, we install react-motion in our project directory, and
    // then wrap our tile in a <Motion /> component
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <li
          style={{
            ...tileStyle,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,

            opacity: tile === TILE_COUNT - 1 ? 0 : 1,
          }}
          className="tile"
          onClick={() => handleTileClick(index)}
        >
          {`${tile + 1}`}
        </li>
      )}
    </Motion>
  );
}

export default Tile;
