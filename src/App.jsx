import { useEffect } from "react";
import { useStore } from "./store/useStore";
import { mockTransactions } from "./data/mockData";

function App() {
  const setTransactions = useStore((state) => state.setTransactions);
 const transactions = useStore((state) => state.transactions);

 console.log(transactions);
  useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>
    </div>
  );
}

export default App;
