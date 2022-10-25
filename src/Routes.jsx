import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home } from './Pages/Home';

export const AppRoutes = () => {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
};

export default AppRoutes;
