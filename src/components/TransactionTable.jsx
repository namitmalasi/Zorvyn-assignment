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
    <div className="premium-card overflow-hidden shadow-2xl shadow-slate-950/20">
      <div className="border-b border-slate-700/50 bg-slate-950/80 px-6 py-5">
        <h2 className="text-xl font-semibold text-white">Transactions</h2>
        <p className="mt-1 text-sm text-slate-400">
          Filter and inspect your latest income and expense activity.
        </p>
      </div>

      <div className="p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select-fancy w-full max-w-xs rounded-2xl px-4 py-3 text-sm shadow-inner shadow-slate-950/10"
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
            className="input-fancy w-full rounded-2xl px-4 py-3 text-sm shadow-inner shadow-slate-950/10"
          />
        </div>

        {filteredTransactions.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-slate-700/60">
                  <th className="whitespace-nowrap px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Amount
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Category
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Type
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredTransactions.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-slate-800 hover:bg-slate-900/70"
                  >
                    <td className="px-4 py-4 text-sm text-slate-200">
                      {t.date}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-200">
                      ₹{t.amount.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-200">
                      {t.category}
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <span
                        className={
                          t.type === "income"
                            ? "rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300"
                            : "rounded-full bg-rose-500/10 px-3 py-1 text-rose-300"
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
        ) : (
          <p className="text-sm text-slate-400">
            No transactions match your current filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionTable;
