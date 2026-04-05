import { create } from "zustand";

export const useStore = create((set) => ({
  transactions: [],
  role: "viewer",
  filter: "all",
  search: "",

  setTransactions: (data) => set({ transactions: data }),

  addTransaction: (txn) =>
    set((state) => ({
      transactions: [...state.transactions, txn],
    })),

  setRole: (role) => set({ role }),

  setFilter: (filter) => set({ filter }),

  setSearch: (search) => set({ search }),
}));
