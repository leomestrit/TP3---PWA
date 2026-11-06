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
  // Estado para el texto ingresado en la barra de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Obtener categorías únicas a partir de los datos y agregar "Todos" al inicio
  const categories = ["Todos", ...new Set(events.map((e) => e.category))];

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

        <main>
          <EventList events={filteredEvents} />
        </main>
      </div>

      <Footer />
    </div>
  );
}