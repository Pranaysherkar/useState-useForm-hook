import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";
function App() {
  const [users,setUser]=useState([]);
  const formHandler =(data)=>{
setUser([...users,data])
  };
  const cardRemover=(id)=>{
setUser(()=>users.filter((items,index)=>index!==id))
  }
  return (
    <div className="w-full relative h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards cardRemover={cardRemover} users={users} />
        <Form formHandler={formHandler} />
      </div>
    </div>
  );
}

export default App;
