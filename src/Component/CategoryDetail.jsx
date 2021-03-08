import React from "react";

const CategoryDetail = ({filteredPorducts}) => {
  const pdStyle = {
    border: '1px solid green',
    width: '300px',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '20px',
  }
  return (
    <>
      {filteredPorducts.map(pd => {
        const {id,name,category} = pd
        return <div key={id} style={pdStyle} className="shadow rounded">
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
      })}
    </>
  );
};

export default CategoryDetail;