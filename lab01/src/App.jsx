import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Directory from './pages/Directory';
import EmployeeDetail from './pages/EmployeeDetail';
import ManageEmployee from './pages/ManageEmployee';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/directory/:id" element={<EmployeeDetail />} />
        <Route path="/manage" element={<ManageEmployee />} />
      </Routes>
    </Layout>
  );
}

export default App;
