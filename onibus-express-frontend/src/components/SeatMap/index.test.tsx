import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { SeatMap } from "./index";

describe("SeatMap", () => {
  it(
    "deve permitir selecionar assento livre",
    async () => {
      const user =
        userEvent.setup();

      const onSelectSeat =
        jest.fn();

      render(
        <SeatMap
          occupiedSeats={[1, 2, 3]}
          selectedSeat={null}
          onSelectSeat={
            onSelectSeat
          }
        />
      );

      const seat =
        screen.getByRole(
          "button",
          {
            name: "10",
          }
        );

      await user.click(seat);

      expect(
        onSelectSeat
      ).toHaveBeenCalledWith(
        10
      );
    }
  );

  it(
    "não deve permitir selecionar assento ocupado",
    async () => {
      const user =
        userEvent.setup();

      const onSelectSeat =
        jest.fn();

      render(
        <SeatMap
          occupiedSeats={[1, 2, 3]}
          selectedSeat={null}
          onSelectSeat={
            onSelectSeat
          }
        />
      );

      const seat =
        screen.getByRole(
          "button",
          {
            name: "1",
          }
        );

      expect(seat).toBeDisabled();

      await user.click(seat);

      expect(
        onSelectSeat
      ).not.toHaveBeenCalled();
    }
  );
});