import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;