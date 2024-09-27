import "./App.css";
import "./myreset.css";

import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/features/SideBar";
import CalendarPage from "./pages/CalendarPage";
import TodoListPage from "./pages/TodoListPage";
import NewsPage from "./pages/NewsPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/todoList" element={<TodoListPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Router>
      {/* <Calendar calendarEvents={eventsData} /> */}
    </div>
  );
}

