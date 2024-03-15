
import './App.css';
import Board from "./board/Board.js";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/notice/list" element={<Board />}>

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
