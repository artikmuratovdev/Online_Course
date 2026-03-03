import { useState } from "react";
import MainPage from "./Components/MainPage"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import { useNavigate } from "react-router-dom";

const App = () => {
  const [selected, setSelected] = useState('Bosh sahifa');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  const select = (name: string , tag:string) => {
    setSelected(name);
    navigate(tag)
  };
  return (
    <div className={`${darkMode ? 'dark' : ''} ${sidebarOpen ? 'grid-cols-[250px_1fr]' : 'grid-cols-[1fr]'} grid grid-flow-col grid-rows-[80px_1fr] p-2 gap-x-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white`}>
      {sidebarOpen && <Sidebar selector={select} selected={selected} />}
      <Navbar toggleSidebar={() => setSidebarOpen(prev => !prev)} toggleDark={() => setDarkMode(prev => !prev)} darkMode={darkMode} />
      <MainPage selector={select} />
    </div>
  )
}

export default App
