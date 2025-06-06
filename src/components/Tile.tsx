import "./Tile.css";

const Tile = ({
  tileIndex,
  index,
  emptyIndex,
  handleTileClick,
}: {
  tileIndex: number;
  index: number;
  emptyIndex: number;
  handleTileClick: (clickedIndex: number) => void;
}) => {
  return (
    <button
      onClick={() => handleTileClick(index)}
      className={`tile ${emptyIndex === index ? "empty" : ""}`}
      style={{
        backgroundPosition: `${(tileIndex % 3) * -100}% ${
          Math.floor(tileIndex / 3) * -100
        }%`,
      }}
    >
      {tileIndex}
    </button>
  );
};

export default Tile;
