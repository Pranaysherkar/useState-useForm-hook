import React from "react";
import Card from "./Card";
function Cards({ users,cardRemover }) {
  return (
    <div className="w-full h-80 p-4 bg-zinc-300 rounded-lg overflow-auto flex flex-wrap justify-center gap-4">
      {users.map((items, index) => {
        return<Card user={items} key={index} cardRemover={cardRemover} id={index}/>
      })}
    </div>
  );
}

export default Cards;
