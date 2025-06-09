import { motion } from "framer-motion";
import { cva } from "class-variance-authority";

const tile = cva("relative rounded bg-[url(/lighthouse.jpg)]", {
  variants: {
    size: { 3: "size-48", 4: "size-40", 5: "size-40" },
    empty: {
      true: "bg-none",
      false: null,
    },
  },
});

const Tile = ({
  emptyIndex,
  index,
  size,
  tileIndex,
  handleTileClick,
}: {
  tileIndex: number;
  index: number;
  size: 3 | 4 | 5;
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
      className={tile({ size, empty: emptyIndex === index })}
      style={{
        backgroundPosition: `${(tileIndex % size) * -100}% ${
          Math.floor(tileIndex / size) * -100
        }%`,
        backgroundSize: `${size}00% ${size}00%`,
      }}
      type="button"
    >
      {tileIndex}
    </motion.button>
  );
};

export default Tile;
