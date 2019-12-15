import React from "react";
import Card from "./Card";

const Cardlist = ({ people }) => {
  return (
    <div>
      {people.map((user, i) => {
        return (
          <Card
            key={people[i].id}
            id={people[i].id}
            name={people[i].name}
            email={people[i].email}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
