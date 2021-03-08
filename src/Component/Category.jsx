import React, { useContext, useEffect, useState } from "react";
import CategoryDetail from "./CategoryDetail";
import { categoriesHandler } from "./../App";
const productsList = [
  { id: 1, name: "Lenovo", category: "laptop" },
  { id: 2, name: "Asus", category: "laptop" },
  { id: 3, name: "HP", category: "laptop" },
  { id: 4, name: "Dell", category: "laptop" },
  { id: 5, name: "Samsung", category: "mobile" },
  { id: 6, name: "Nokia", category: "mobile" },
  { id: 7, name: "Vivo", category: "mobile" },
  { id: 8, name: "Apple", category: "mobile" },
  { id: 9, name: "Huawei", category: "mobile" },
  { id: 10, name: "Sony", category: "mobile" },
  { id: 11, name: "HTC", category: "mobile" },
  { id: 12, name: "Motorola", category: "mobile" },
  { id: 13, name: "Lenovo", category: "mobile" },
  { id: 14, name: "Canon", category: "camera" },
  { id: 15, name: "Nikon", category: "camera" },
  { id: 16, name: "Sony", category: "camera" },
  { id: 17, name: "Fujifilm", category: "camera" },
  { id: 18, name: "Panasonic", category: "camera" },
  { id: 19, name: "Olympus", category: "camera" },
  { id: 20, name: "GoPro", category: "camera" },
];

const Category = () => {
  const [categorie] = useContext(categoriesHandler);

  console.log({ categorie });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filterProducts = productsList.filter(
      (pd) => pd.category.toLowerCase() === categorie.toLowerCase()
    );
    setProducts(filterProducts);
  }, [categorie]);

  return (
    <div>
      <h4 className="mb-3">
        Your Select Category: <span className="text-success">{categorie}</span>{" "}
      </h4>
      {products.length > 0 ? (
        <>
          <h4>Products</h4>
          <div className="container d-flex flex-wrap justify-content-center">
            <CategoryDetail filteredPorducts={products} />
          </div>
        </>
      ) : (
        <h1 className="mt-5 text-danger">Products not found!</h1>
      )}
    </div>
  );
};

export default Category;
