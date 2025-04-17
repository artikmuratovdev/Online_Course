import { useState } from "react";
import MainPage from "./Components/MainPage"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import { useNavigate } from "react-router-dom";

const App = () => {
  const [selected, setSelected] = useState('Bosh sahifa');
  const navigate = useNavigate();
  
  const select = (name: string , tag:string) => {
    setSelected(name);
    navigate(tag)
  };
  return (
    <div className={`grid grid-flow-col grid-cols-[250px_1fr] grid-rows-[80px_1fr] p-2 gap-x-3 bg-gray-800 text-white `}>
      <Sidebar selector={select} selected={selected}  />
      <Navbar />
      <MainPage selector={select} />
    </div>
  )
}

export default App
