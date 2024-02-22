import React from "react";

function Card({user,cardRemover,id}) {
  return (
 <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-3">
    <div className="image w-[6vw] h-[6vw] rounded-full bg-slate-200 overflow-hidden">
        <img className="object-cover object-top h-full w-full" src={user.image} alt="" />
    </div>
    <h1 className="my-2 text-xl  font-semibold">{user.name}</h1>
    <h3 className="opacity-65 text-sm font-semibold  text-blue-500">{user.email}</h3>
    <p className="text-center text-sm font-semibold mt-1 ">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minus
      quae incidunt.
    </p>
    <button onClick={()=>cardRemover(id)} className="bg-red-500 p-2 rounded-md mt-2 text-sm text-white" >Remove it</button>
  </div>
  );
}

export default Card;
