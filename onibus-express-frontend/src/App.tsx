import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/assentos" />
        <Route path="/passageiro" />
        <Route path="/sucesso" />
        <Route path="/consulta" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
