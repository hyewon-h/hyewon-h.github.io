import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TestPage" element={<TestPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
