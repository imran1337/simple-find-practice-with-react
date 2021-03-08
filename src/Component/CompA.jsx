import React, { useContext } from "react";
import Category from "./Category";
import { categoriesHandler } from "./../App";

const CompA = () => {
  const [categoriesCount, setCategories] = useContext(categoriesHandler);

  return (
    <div className="border text-center m-3">
      <h1 className="mb-4">You searched: "{categoriesCount}"</h1>
      <div className="my-3">
        <button
          className="btn btn-outline-danger"
          onClick={() => setCategories("Imran Khan")}
        >
          My Name
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => setCategories("mobile")}
        >
          Mobile
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => setCategories("camera")}
        >
          Camera
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => setCategories("laptop")}
        >
          Laptop
        </button>
      </div>
      <Category />
    </div>
  );
};

export default CompA;
