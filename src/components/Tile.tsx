import "./Tile.css";
import { motion } from "framer-motion";

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
    <motion.button
      layout
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{
        scale: 1.025,
        boxShadow: "0px 0px 8px -1px rgba(0, 0, 0, 0.3)",
        zIndex: 1, // Bring to front slightly (useful if tiles are close)
      }}
      onClick={() => handleTileClick(index)}
      className={`tile${emptyIndex === index ? " empty" : ""}`}
      style={{
        backgroundPosition: `${(tileIndex % 3) * -100}% ${
          Math.floor(tileIndex / 3) * -100
        }%`,
      }}
      type="button"
    >
      {tileIndex}
    </motion.button>
  );
};

export default Tile;
