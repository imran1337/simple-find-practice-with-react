import React, { useContext } from "react";
import { categoriesHandler } from './../App';

const CompB = () => {
  const categoriesCount = useContext(categoriesHandler);
  return (
    <div>
      <h1>Hello CompB {categoriesCount}</h1>
    </div>
  );
};

export default CompB;