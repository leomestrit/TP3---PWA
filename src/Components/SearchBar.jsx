export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-4">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
          🔍
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar partidos por equipo, estadio o descripción..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
        />
      </div>
    </div>
  );
}