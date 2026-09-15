import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import RawDocs from './pages/RawDocs';
import Tools from './pages/Tools';
import RPoint from './pages/RPoint';
import KhaoThi from './pages/KhaoThi';
import PhongThi from './pages/PhongThi';
import SinhVien from './pages/SinhVien';
import RankGvTg from './pages/RankGvTg';
import Onboarding from './pages/Onboarding';
import LarkGuide from './pages/LarkGuide';
import KPIMaster from './pages/KPIMaster';

function App() {
  return (
    <AppProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/raw-docs" element={<RawDocs />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/rpoint" element={<RPoint />} />
          <Route path="/khao-thi" element={<KhaoThi />} />
          <Route path="/phong-thi" element={<PhongThi />} />
          <Route path="/sinh-vien" element={<SinhVien />} />
          <Route path="/rank-gvtg" element={<RankGvTg />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/lark-guide" element={<LarkGuide />} />
          <Route path="/kpi-master" element={<KPIMaster />} />
        </Routes>
      </MainLayout>
    </AppProvider>
  );
}

export default App;
