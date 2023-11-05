import MainAbout from './pages/about/MainAbout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainInvest from './pages/invest/MainInvest';
import MainSocial from './pages/social-impact/MainSocial';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path="/" element={<MainAbout />} />
              <Route path="/about" element={<MainAbout />} />
              <Route path="/social-impact" element={<MainSocial />} />
              <Route path="/invest" element={<MainInvest />} />
            </Routes>
    </Router>
    </div>
  );
}

export default App;