import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomaPage";
import { Authentication } from "./pages/Authentication";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/authentication" element={<Authentication />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
