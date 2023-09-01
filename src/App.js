import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<div></div>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
