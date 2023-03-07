import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import categories from './categories';
/* eslint-disable */

function WelcomePage({ username }) {
  const selectedCategoriesSubmit = (selectedCategories) => {
    console.log(selectedCategories);
  }

  return (
    <div className="bg-gray-100 h-screen">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="font-bold text-2xl text-gray-800">Shoppingify</Link>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-gray-600">Welcome, {username}!</span>
              <Link to="/logout" className="rounded-md bg-red-600 text-white px-4 py-2">Logout</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold mb-4">Welcome to Shoppingify, {username}!</h1>
          <p className="text-gray-600 mb-8">Thank you for signing up! To get started with MyApp, please select a category below:</p>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
          </div> */}
          <CategoryList categories={categories} onSubmit={selectedCategoriesSubmit} />
        </div>
      </main>
    </div>
  );
}

export default WelcomePage;
