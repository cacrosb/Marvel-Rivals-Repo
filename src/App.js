import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CharacterGrid from './components/CharacterGrid/CharacterGrid';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Make sure this route renders the CharacterGrid component */}
        <Route path="/characters" element={<CharacterGrid />} />
        
        {/* Route for individual character detail */}
        <Route path="/character/:id" element={<CharacterDetail />} />
        
        {/* Other routes like news or forum can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
