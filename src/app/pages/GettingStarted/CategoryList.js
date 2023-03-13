import PropTypes from 'prop-types';
import { useState } from 'react';
import Category from './Category';

function CategoryList({ categories, onSubmit }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategorySelect = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(selectedCategories);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            selected={selectedCategories.includes(category.id)}
            onSelect={handleCategorySelect}
          />
        ))}
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-orange text-white rounded-md hover:bg-opacity-80 transition-colors"
      >
        Save
      </button>
    </form>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CategoryList;
