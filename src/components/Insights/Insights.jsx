import { useStore } from "../../store/useStore";

const Insights = () => {
  const transactions = useStore((state) => state.transactions);

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highestCategory = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1],
  )[0];

  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15">
      <h2 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
        <span className="text-cyan-400">💡</span>
        Insights
      </h2>

      <div className="space-y-4">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 p-4 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-rose-400 text-lg">💸</span>
            <span className="text-slate-300 font-medium">
              Highest Spending Category
            </span>
          </div>
          <p className="text-slate-200 text-lg font-semibold ml-8">
            {highestCategory
              ? `${highestCategory[0]} - ₹${highestCategory[1]}`
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
