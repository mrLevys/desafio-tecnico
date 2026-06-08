import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="bg-blue-700 text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          🚌 OniBus Express
        </h1>

        <nav>
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline"
                    : ""
                }
              >
                Buscar
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/reserva"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline"
                    : ""
                }
              >
                Minhas Reservas
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}