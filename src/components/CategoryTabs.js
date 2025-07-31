import React from "react";

const CategoryTabs = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="d-flex justify-content-center border-bottom mb-4">
      <ul className="nav nav-tabs">
        {categories.map((cat) => (
          <li className="nav-item" key={cat}>
            <button
              className={`nav-link ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTabs;
