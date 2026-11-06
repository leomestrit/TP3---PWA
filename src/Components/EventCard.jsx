export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col justify-between border border-slate-100">
      <div>
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
          <span className="absolute top-3 right-3 bg-green-700 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
            {event.category}
          </span>
        </div>
        <div className="p-5">
          <p className="text-xs text-green-700 font-semibold mb-1">{event.date}</p>
          <h3 className="text-lg font-bold text-slate-800 mb-2">{event.title}</h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{event.description}</p>
          <p className="text-xs text-slate-500 flex items-center mb-4">
            📍 <span className="ml-1">{event.location}</span>
          </p>
        </div>
      </div>
      <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
        <span className="text-sm font-bold text-slate-900">{event.price}</span>
        <button className="bg-slate-900 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}