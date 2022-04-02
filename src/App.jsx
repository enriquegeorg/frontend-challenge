import { BrowserRouter ,Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Users } from './pages/Users';
import Header from './components/Layout/Header';
import { UserEdit } from './pages/UserEdit';

import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />}  />
            <Route path="/users/:id" element={<UserEdit />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;