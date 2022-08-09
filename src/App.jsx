import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Stories from './pages/stories';
import './App.css'
import AddStory from './pages/addStory'
import ViewDetails from './pages/viewDetails';
import UserLogin from './pages/login';

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stories />} />
        <Route path="addStory" element={<AddStory />} />
        <Route path="ViewDetails" element={<ViewDetails />} />
        <Route path="Login" element={<UserLogin />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
