import React, { useEffect, useState } from "react";
import "./Interview.css";

function Interview() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();

    setProducts(data.products);
    setAllProducts(data.products);
  };

  const handleSearch = async () => {
    if (search.trim() === "") {
      alert("Search field can't be empty");
      return;
    }

    const response = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );

    const data = await response.json();

    setProducts(data.products);
    setAllProducts(data.products);
    setCurrentPage(1);
  };

  const resetProducts = () => {
    setProducts(allProducts);
    setSearch("");
    setSort("");
    setBrand("");
    setCurrentPage(1);
  };

  const handleSort = (value) => {
    setSort(value);

    let sorted = [...products];

    if (value === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (value === "rating-asc") {
      sorted.sort((a, b) => a.rating - b.rating);
    } else if (value === "rating-desc") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setProducts(sorted);
  };

  const handleBrandFilter = (value) => {
    setBrand(value);

    if (value === "") {
      setProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter(
      (product) => product.brand === value
    );

    setProducts(filtered);
    setCurrentPage(1);
  };

  const brands = [...new Set(allProducts.map((p) => p.brand))];

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container">
      <h1>Zepto Products</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>

        <button onClick={fetchProducts}>All Products</button>

        <button onClick={resetProducts}>Reset</button>

        <select
          value={sort}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price Low → High</option>
          <option value="price-desc">Price High → Low</option>
          <option value="rating-asc">Rating Low → High</option>
          <option value="rating-desc">Rating High → Low</option>
        </select>

        <select
          value={brand}
          onChange={(e) => handleBrandFilter(e.target.value)}
        >
          <option value="">All Brands</option>

          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="products">
        {currentProducts.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <p>
              <b>Brand:</b> {product.brand}
            </p>

            <p>
              <b>Category:</b> {product.category}
            </p>

            <p>
              ⭐ {product.rating}
            </p>

            <h2>₹ {product.price}</h2>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Interview;