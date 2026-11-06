export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-green-950 to-slate-900 text-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="bg-green-600 text-xs font-semibold uppercase px-3 py-1 rounded-full inline-block mb-4">
          Fútbol Patagónico y del Ascenso
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Viví la pasión de las categorías de abajo
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mb-8">
          Consultá los fixtures, enterate de las canchas de la provincia del Neuquén y preparate para subir tus fotos y videos alentando a tu club.
        </p>
      </div>
    </section>
  );
}