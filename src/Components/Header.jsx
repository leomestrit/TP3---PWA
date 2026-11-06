export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">⚽</span>
          <h1 className="text-xl font-bold tracking-wider">ASCENSO NEUQUINO</h1>
        </div>
        <nav className="mt-3 sm:mt-0 flex space-x-6 text-sm font-medium text-slate-300">
          <a href="#inicio" className="hover:text-green-400 transition">Partidos</a>
          <a href="#categorias" className="hover:text-green-400 transition">Categorías</a>
          <a href="#subir" className="hover:text-green-400 transition">Subir Material</a>
        </nav>
      </div>
    </header>
  );
}