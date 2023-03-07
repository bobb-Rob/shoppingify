import { useState } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

function CategoryList({ categories, onSubmit }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (event) => {
    const categoryId = parseInt(event.target.value, 2);
    if (event.target.checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId),
      );
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
            onChange={handleCheckboxChange}
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
