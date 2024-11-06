const Button = ({ loading, onClick }) => {
  return (
    <button
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={onClick}
    >
      {loading ? "Fetching..." : "Fetch 🐶"}
    </button>
  );
};

export default Button;
