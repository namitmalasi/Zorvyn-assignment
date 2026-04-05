import { useStore } from "../store/useStore";

const TransactionTable = () => {
  const { filter, setFilter, search, setSearch, transactions } = useStore();

  const filteredTransactions = transactions.filter((t) => {
    const matchesFilter = filter === "all" || t.type === filter;

    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      <div className="flex gap-4 mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Category</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="p-2">{t.date}</td>
              <td className="p-2">₹{t.amount}</td>
              <td className="p-2">{t.category}</td>
              <td className="p-2">
                <span
                  className={
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }
                >
                  {t.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
