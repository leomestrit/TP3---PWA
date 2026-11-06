import EventCard from "./EventCard";

export default function EventList({ events }) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p className="text-lg">No se encontraron partidos que coincidan con la búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}