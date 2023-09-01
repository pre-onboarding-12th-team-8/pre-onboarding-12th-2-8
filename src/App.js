import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Issues } from "./pages/Issues/Issues";
import { DetailIssue } from "./pages/Issue/DetailIssue";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<div></div>}></Route>
          <Route path="/issues" element={<Issues />}></Route>
          <Route path="/issues/:id" element={<DetailIssue />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
