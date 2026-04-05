import { useStore } from "../../store/useStore";

const RoleSwitcher = () => {
  const { role, setRole } = useStore();

  return (
    <div className="flex items-center gap-3">
      <span className="font-medium text-slate-300 text-sm uppercase tracking-wider">
        Role:
      </span>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="backdrop-blur-md bg-white/10 border border-white/20 text-slate-200 px-4 py-2 rounded-xl shadow-lg hover:bg-white/15 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 cursor-pointer"
      >
        <option value="viewer" className="bg-slate-800 text-slate-200">
          Viewer
        </option>
        <option value="admin" className="bg-slate-800 text-slate-200">
          Admin
        </option>
      </select>
    </div>
  );
};

export default RoleSwitcher;
