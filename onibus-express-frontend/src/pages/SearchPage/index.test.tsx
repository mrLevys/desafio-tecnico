import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { SearchPage } from "./index";

import {
  routesService,
} from "../../services/routesServices";

import {
  tripsService,
} from "../../services/tripServices";

jest.mock(
  "../../services/routesServices"
);

jest.mock(
  "../../services/tripServices"
);

describe(
  "SearchPage",
  () => {
    it(
      "deve buscar viagens",
      async () => {
        const user =
          userEvent.setup();

        (
          routesService.getAll as jest.Mock
        ).mockResolvedValue([
          {
            id: 1,
            origin:
              "São Paulo",
            destination:
              "Rio de Janeiro",
            duration: "6h",
          },
        ]);

        (
          tripsService.search as jest.Mock
        ).mockResolvedValue([
          {
            id: 1,
            origin:
              "São Paulo",
            destination:
              "Rio de Janeiro",
            departureDate:
              "2026-06-15",
            departureTime:
              "08:00",
            price: 120,
            availableSeats:
              40,
            occupiedSeats:
              [1, 2],
          },
        ]);

        render(
          <SearchPage />
        );

        await waitFor(() =>
          expect(
            routesService.getAll
          ).toHaveBeenCalled()
        );

        const buscar =
          screen.getByRole(
            "button",
            {
              name:
                /buscar/i,
            }
          );

        await user.click(
          buscar
        );

        await waitFor(() =>
          expect(
            tripsService.search
          ).toHaveBeenCalled()
        );

        expect(
          screen.getByText(
            /rio de janeiro/i
          )
        ).toBeInTheDocument();
      }
    );
  }
);