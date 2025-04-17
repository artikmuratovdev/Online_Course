import { Route, Routes } from 'react-router-dom';
import Courses from './Main/Courses';
import Main from './Main/Main';
import Projects from './Main/Projects';
const MainPage = ({selector}:{selector: (name: string, tag: string) => void}) => {
  return (
    <Routes>
      <Route path='/' element={<Main selector={selector} />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    
  );
};

export default MainPage;
