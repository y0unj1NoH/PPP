import "./App.css";
import "./myreset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/features/SideBar";
import Calendar from "./pages/Calendar";
import TodoList from "./pages/TodoList";
import News from "./pages/News";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" exact component={Calendar} />
          <Route path="/todoList" component={TodoList} />
          <Route path="/news" component={News} />
        </Routes>
      </Router>
    </div>
  );
}

