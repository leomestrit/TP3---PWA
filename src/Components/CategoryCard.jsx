export default function CategoryCard({ category, selectedCategory, onSelectCategory }) {
  const isSelected = selectedCategory === category;

  return (
    <button
      onClick={() => onSelectCategory(category)}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition shadow-sm ${
        isSelected
          ? "bg-green-700 text-white shadow-md scale-105"
          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
      }`}
    >
      {category}
    </button>
  );
}