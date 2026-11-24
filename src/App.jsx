import { useState } from 'react';
import { events } from './data/events';
import Header from './Components/Header';
import Hero from './Components/Hero';
import CategoryList from './Components/CategoryList';
import SearchBar from './Components/SearchBar';
import EventList from './Components/EventList';
import Footer from './Components/Footer';

export default function App() {
  // Estado para la categoría seleccionada (por defecto "Todos")
  const [selectedCategory, setSelectedCategory] = useState("Todos");  
  
  //Los corchetes [ ] no están creando dos variables arbitrarias, sino que están desempaquetando lo que devuelve useState
  //Los Hooks siempre devuelven un arreglo con exactamente dos elementos, y los corchetes [ ] a la izquierda sirven para "sacar" esos dos elementos y asignarles un nombre propio en una sola línea.
  //Se denomina desestructuración de arreglos de JavaScript.

  // Estado para el texto ingresado en la barra de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Obtener categorías únicas a partir de los datos y agregar "Todos" al inicio
  const categories = ["Todos", ...new Set(events.map((e) => e.category))];

  //events.map(...) extrae todas las categorías repetidas en un arreglo normal.

  //new Set(...) recibe ese arreglo y elimina automáticamente todos los duplicados. 
  // Si había diez partidos de "Fútbol", el Set se queda con uno solo.

  //Como un Set no es un arreglo clásico y necesitábamos volver a convertirlo 
  // en uno para poder usarlo y mostrar los botones en la interfaz, 
  // le aplicamos el operador de propagación (...) para desplegar 
  // sus elementos limpios dentro del nuevo arreglo junto a "Todos".

  // Filtrar eventos según categoría y término de búsqueda
  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === "Todos" || event.category === selectedCategory;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      <div>
        <Header />
        <Hero />

        <div id="categorias" className="max-w-7xl mx-auto pt-6">
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        <main id="eventos" className="scroll-mt-20">
          <EventList events={filteredEvents} />
        </main>
      </div>

      <Footer />
    </div>
  );
}