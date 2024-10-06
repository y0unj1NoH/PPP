import "./myreset.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Sidebar from "./components/layout/SideBar";
import CalendarPage from "./pages/CalendarPage";
import TodoListPage from "./pages/TodoListPage";
import NewsPage from "./pages/NewsPage";

const Main = styled.div`
  width: 100%;
  max-width: calc(100vw - 300px);
  // 부모 따라서 연계해서 같이 주어야 적용됨
  height: 100vh;
  padding: 16px 32px;

  overflow: auto;
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

