import { useEffect } from "react";
import { useStore } from "./store/useStore";
import { mockTransactions } from "./data/mockData";
import TransactionTable from "./components/TransactionTable";
import SummaryCards from "./components/Dashboard/SummaryCards";
import Charts from "./components/Dashboard/Charts";
import RoleSwitcher from "./components/UI/RoleSwitcher";
import AddTransaction from "./components/Transactions/AddTransaction";
import Insights from "./components/Insights/Insights";

function App() {
  const setTransactions = useStore((state) => state.setTransactions);

  useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Finance Dashboard
        </h1>
        <RoleSwitcher />
      </div>

      <SummaryCards />
      <Charts />
      <Insights />
      <AddTransaction />
      <TransactionTable />
    </div>
  );
}

export default App;
