import { motion } from "framer-motion";
type Props = {
  onClick: () => void;
};
const WinModal = ({ onClick }: Props) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto bg-gray-200/70 flex justify-center items-center"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        className="bg-white/75 py-10 px-14 rounded-2xl"
      >
        <h2 className="text-2xl text-center mb-2">Congratulations !</h2>
        <button
          className="bg-rose-100 py-3 px-8 rounded-xl shadow-lg hover:bg-rose-200 transition"
          onClick={onClick}
        >
          <span className="text-5xl text-rose-800 text-center">You won</span>
        </button>
      </motion.div>
    </div>
  );
};

export default WinModal;
