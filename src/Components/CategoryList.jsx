import CategoryCard from "./CategoryCard";

export default function CategoryList({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
        Filtrar por categoría:
      </h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <CategoryCard
            key={category}
            category={category}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </div>
    </div>
  );
}