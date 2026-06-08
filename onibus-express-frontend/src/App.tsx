import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage";
import { PassengerPage } from "./pages/PassengerPage";
import { ReservationLookupPage } from "./pages/ReservationLookupPage";
import { SeatSelectionPage } from "./pages/SeatSelectionPage";
import { SuccessPage } from "./pages/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
        element={<SearchPage />}
      />

      <Route
        path="/assentos"
        element={
          <SeatSelectionPage />
        }
      />

      <Route
        path="/passageiro"
        element={
          <PassengerPage />
        }
      />

      <Route
        path="/sucesso"
        element={<SuccessPage />}
      />

      <Route
        path="/reserva"
        element={
          <ReservationLookupPage />
        }
      />
      </Routes>
    </BrowserRouter>
  )
}

export default App
