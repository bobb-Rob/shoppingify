import PropTypes from 'prop-types';

function Category({ category, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category.id)}
      className={`px-4 py-2 rounded-md cursor-pointer transition-colors ${
        selected ? 'bg-orange text-white' : 'bg-gray-200 text-gray-700'
      }`}
    >
      {category.name}
    </button>
  );
}

export default Category;

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
