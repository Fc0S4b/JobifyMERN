import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Landing, Error } from './pages';
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from './pages/dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>dashboard</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
