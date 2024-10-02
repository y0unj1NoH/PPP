import "./App.css";
import "./myreset.css";

import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/SideBar";
import CalendarPage from "./pages/CalendarPage";
import TodoListPage from "./pages/TodoListPage";
import NewsPage from "./pages/NewsPage";
import styled from "@emotion/styled";

const Main = styled.div`
  /* border: 1px solid purple; */
  width: 100%;
  max-width: calc(100vw - 300px);
  padding: 16px 32px;
`;

export default function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Main>
          <Routes>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/todoList" element={<TodoListPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </Main>
      </Router>
    </div>
  );
}

