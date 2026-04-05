const Card = ({ title, value, type }) => {
  const color =
    type === "income"
      ? "text-emerald-400"
      : type === "expense"
        ? "text-rose-400"
        : "text-slate-200";

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15 hover:scale-105">
      <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">
        {title}
      </h3>
      <p className={`text-3xl font-bold ${color} drop-shadow-sm`}>₹{value}</p>
    </div>
  );
};

export default Card;
