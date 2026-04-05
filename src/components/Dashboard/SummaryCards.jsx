import { useStore } from "../../store/useStore";
import Card from "../UI/Card";

const SummaryCards = () => {
  const transactions = useStore((state) => state.transactions);

  // 💡 Derived state
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card title="Balance" value={balance} />
      <Card title="Income" value={income} type="income" />
      <Card title="Expenses" value={expenses} type="expense" />
    </div>
  );
};

export default SummaryCards;
