import PropTypes from 'prop-types';

function Category({ category, selected, onChange }) {
  return (
    <label
      htmlFor={`category-${category.id}`}
      className={`px-4 py-2 rounded-md cursor-pointer transition-colors ${
        selected ? 'bg-orange text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      <input
        type="checkbox"
        id={`category-${category.id}`}
        value={category.id}
        checked={selected}
        onChange={onChange}
        className="sr-only"
      />
      {category.name}
    </label>
  );
}

export default Category;

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
