import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home } from './Pages/Home';
import Sorteio from './Pages/Sorteio';

export const AppRoutes = () => {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
};

export default AppRoutes;
