import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import DatePicker from './DatePicker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/date-picker'element={<DatePicker/>}/>
      </Routes>
    </Router>
  );
}

export default App;
