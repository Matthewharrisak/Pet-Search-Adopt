import { className } from "postcss-selector-parser";
import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <hi> No Pets Found</hi>
      ) : (
        pets.map(pet => (
          <Pet
            animal={pet.type}
            key={pet.name}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
