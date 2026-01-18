import { Navigate, Route, Routes } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import PDFPage from "../pages/PDFPage";
import ProjectPage from "../pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pdf/:id" element={<PDFPage />} />
      <Route path="/project/:id" element={<ProjectPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
