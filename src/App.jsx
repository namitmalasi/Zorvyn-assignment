import { useEffect } from "react";
import { useStore } from "./store/useStore";
import { mockTransactions } from "./data/mockData";
import TransactionTable from "./components/TransactionTable";
import SummaryCards from "./components/Dashboard/SummaryCards";

function App() {
  const setTransactions = useStore((state) => state.setTransactions);

  useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Finance Dashboard</h1>

      <SummaryCards />

      <TransactionTable />
    </div>
  );
}

export default App;
