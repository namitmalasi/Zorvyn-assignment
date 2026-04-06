import { useState } from "react";
import { useStore } from "../../store/useStore";

const AddTransaction = () => {
  const { addTransaction, role } = useStore();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  if (role !== "admin") return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTxn = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    addTransaction(newTxn);

    setForm({
      amount: "",
      category: "",
      type: "expense",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-2xl space-y-4 hover:bg-white/15 transition-all duration-300"
    >
      <h2 className="font-semibold text-slate-200 text-lg mb-6">
        Add Transaction
      </h2>

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="backdrop-blur-sm bg-white/5 border border-white/20 text-slate-200 placeholder-slate-400 px-4 py-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="backdrop-blur-sm bg-white/5 border border-white/20 text-slate-200 placeholder-slate-400 px-4 py-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
        required
      />

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="backdrop-blur-sm bg-white/5 border border-white/20 text-slate-200 px-4 py-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
        required
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="backdrop-blur-sm bg-white/5 border border-white/20 text-slate-200 px-4 py-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 cursor-pointer"
      >
        <option value="expense" className="bg-slate-800 text-slate-200">
          Expense
        </option>
        <option value="income" className="bg-slate-800 text-slate-200">
          Income
        </option>
      </select>

      <button className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900">
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
