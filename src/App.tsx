import { Route, Routes, Navigate } from 'react-router-dom';
import { Issues } from './pages/Issues/Issues';
import './App.css'
import { Header } from './common/components/Header/Header';
import { IssueDetails } from './pages/IssueDetails/IssueDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/issues" />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/issues/:issueId" element={<IssueDetails />} />
      </Routes>
    </div>
  );
}

export default App;
