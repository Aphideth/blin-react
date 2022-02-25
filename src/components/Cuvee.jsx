import React from "react";

const Cuvee = ({ cuvee }) => {
  return (
    <div>
      <h3>{cuvee.name}</h3>
      <div className="container_image">
        <img
          className="bottle_image"
          src={cuvee.image}
          alt={`bouteille ${cuvee.name}`}
        ></img>
        <img
          className="composition_image"
          src={cuvee.composition}
          alt={`composition ${cuvee.name}`}
        />
      </div>
      <p>{cuvee.description}</p>
    </div>
  );
};

export default Cuvee;
