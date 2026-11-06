import { useState, useEffect } from 'react';

export default function PartidosEnVivo() {
  const [partidos, setPartidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ejemplo de llamada asíncrona simulando una API de deportes o datos
    const fetchPartidos = async () => {
      try {
        setLoading(true);
        // Aquí harías tu fetch real a una API de fútbol (ej: football-data.org o API-Football)
        const response = await fetch('https://api.football-data.org/v4/matches', {
          headers: {
            // 'X-Auth-Token': 'TU_API_KEY' // Si la API requiere token
          }
        });
        
        if (!response.ok) {
          throw new Error('No se pudieron obtener los datos de los partidos.');
        }

        const data = await response.json();
        setPartidos(data.matches || []); // Guardamos los partidos en el estado
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartidos();
  }, []); // Array de dependencias vacío para que se ejecute al montar la pantalla[cite: 1]

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12 text-slate-400">
        <p className="animate-pulse text-lg font-medium">Cargando datos del servidor...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-8 p-4 bg-red-950 border border-red-800 text-red-200 rounded-xl text-center">
        <p>⚠️ Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span>⚽</span> Partidos y Marcadores en Vivo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {partidos.map((match) => (
          <div key={match.id} className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-md hover:border-green-600 transition">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
              <span className="bg-slate-800 px-2 py-1 rounded text-green-400 font-semibold">{match.competition?.name}</span>
              <span>{new Date(match.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            
            <div className="flex justify-between items-center my-3 font-semibold text-white">
              <span className="w-2/5 text-right">{match.homeTeam?.name}</span>
              <span className="bg-slate-800 px-3 py-1.5 rounded-lg text-green-400 font-mono text-lg">
                {match.score?.fullTime?.home ?? 0} - {match.score?.fullTime?.away ?? 0}
              </span>
              <span className="w-2/5 text-left">{match.awayTeam?.name}</span>
            </div>

            <div className="text-right text-xs text-slate-500 mt-2 uppercase tracking-wider">
              Estado: {match.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}