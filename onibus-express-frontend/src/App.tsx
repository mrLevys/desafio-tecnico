import {
  Routes,
  Route,
} from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";

import { SearchPage } from "./pages/SearchPage";
import { SeatSelectionPage } from "./pages/SeatSelectionPage";
import { PassengerPage } from "./pages/PassengerPage";
import { SuccessPage } from "./pages/SuccessPage";
import { ReservationLookupPage } from "./pages/ReservationLookupPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
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
        
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;