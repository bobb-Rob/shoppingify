import PropTypes from 'prop-types';
import CategoryList from './CategoryList';

function WelcomePage({ username, categories }) {
  const selectedCategoriesSubmit = (selectedCategories) => {
    console.log(selectedCategories);
  };

  return (
    <div className="bg-gray-100 h-screen">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Shoppingify,
            {' '}
            {username}
            !
          </h1>
          <p className="text-gray-600 mb-8">Thank you for signing up! To get started with this app, please select your default categories below:</p>
          <CategoryList categories={categories} onSubmit={selectedCategoriesSubmit} />
        </div>
      </main>
    </div>
  );
}

WelcomePage.propTypes = {
  username: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default WelcomePage;
