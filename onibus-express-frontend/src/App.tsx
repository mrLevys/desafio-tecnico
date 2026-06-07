import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/assentos" />
        <Route path="/passageiro" />
        <Route path="/sucesso" />
        <Route path="/consulta" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
