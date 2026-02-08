import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import MovieDetail from './MovieDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;