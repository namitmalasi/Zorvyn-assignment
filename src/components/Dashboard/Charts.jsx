import {
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useStore } from "../../store/useStore";

const preparePieData = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(map).map((key) => ({
    name: key,
    value: map[key],
  }));
};

const prepareLineData = (transactions) => {
  let balance = 0;

  return transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((t) => {
      balance += t.type === "income" ? t.amount : -t.amount;

      return {
        date: t.date,
        balance,
      };
    });
};

const Charts = () => {
  const transactions = useStore((state) => state.transactions);

  const lineData = prepareLineData(transactions);
  const pieData = preparePieData(transactions);

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
        <h2 className="mb-4 font-semibold text-slate-200 text-lg">
          Balance Trend
        </h2>
        <LineChart width={400} height={250} data={lineData}>
          <XAxis
            dataKey="date"
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              color: "#e2e8f0",
            }}
          />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#38bdf8"
            strokeWidth={3}
            dot={{ fill: "#38bdf8", strokeWidth: 2, r: 4 }}
            activeDot={{
              r: 6,
              stroke: "#38bdf8",
              strokeWidth: 2,
              fill: "#0f172a",
            }}
          />
        </LineChart>
      </div>

      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
        <h2 className="mb-4 font-semibold text-slate-200 text-lg">
          Spending Breakdown
        </h2>
        <PieChart width={400} height={250}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#38bdf8"
            stroke="#0f172a"
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              color: "#e2e8f0",
            }}
          />
        </PieChart>
      </div>
    </div>
  );
};  

export default Charts;
