export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-r from-slate-900 via-green-950 to-slate-900 text-white py-14 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Título, descripción y llamada a la acción */}
        <div className="text-center md:text-left">
          <span className="bg-green-600 text-xs font-semibold uppercase px-3 py-1 rounded-full inline-block mb-4">
            Fútbol Patagónico y del Ascenso
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Viví la pasión de las categorías de abajo
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-8">
            Consultá los fixtures, enterate de las canchas de la provincia del
            Neuquén y preparate para subir tus fotos y videos alentando a tu
            club.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#eventos"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition inline-block"
            >
              Ver partidos y eventos
            </a>
          </div>
        </div>

        {/* Recurso visual */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-green-800/50">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80"
              alt="Cancha y pelota de fútbol representando el espíritu del ascenso"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}