import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import { Issues } from "./pages/Issues/Issues";
import { DetailIssue } from "./pages/Issue/DetailIssue";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/issues" element={<Issues />}></Route>
          <Route path="/issues/:id" element={<DetailIssue />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
