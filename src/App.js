import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ChatPage from './pages/ChatPage/ChatPage';
import Homepage from './pages/Homepage/Homepage';


function App() {
  return (
  <>
  <div className="App">
  <Routes>
    <Route path='/'
    element={<Homepage/>}
    />
    <Route path='/chats'
    element={<ChatPage/>}
    />
    </Routes>
    </div>
  </>
  );
}

export default App;
