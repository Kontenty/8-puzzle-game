type Props = {
  onClick: () => void;
};
const WinModal = ({ onClick }: Props) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-200/70 flex justify-center items-center">
      <div className="bg-white/75 py-8 px-12 rounded-2xl">
        <h2 className="text-2xl text-center mb-2">Congratulations !</h2>
        <button
          className="bg-rose-100 py-3 px-8 rounded-xl shadow-lg hover:bg-rose-200 transition"
          onClick={onClick}
        >
          <span className="text-5xl text-rose-800 text-center">You won</span>
        </button>
      </div>
    </div>
  );
};

export default WinModal;
