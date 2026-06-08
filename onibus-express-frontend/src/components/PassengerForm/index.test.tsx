import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { PassengerForm } from "./index";

describe(
  "PassengerForm",
  () => {
    it(
      "deve validar campos obrigatórios",
      async () => {
        const user =
          userEvent.setup();

        const onSubmit =
          jest.fn();

        render(
          <PassengerForm
            onSubmit={
              onSubmit
            }
          />
        );

        await user.click(
          screen.getByRole(
            "button",
            {
              name:
                /confirmar/i,
            }
          )
        );

        expect(
          screen.getByText(
            /nome obrigatório/i
          )
        ).toBeInTheDocument();

        expect(
          onSubmit
        ).not.toHaveBeenCalled();
      }
    );

    it(
      "deve validar cpf",
      async () => {
        const user =
          userEvent.setup();

        render(
          <PassengerForm
            onSubmit={
              jest.fn()
            }
          />
        );

        await user.type(
          screen.getByPlaceholderText(
            /cpf/i
          ),
          "123"
        );

        await user.click(
          screen.getByRole(
            "button",
            {
              name:
                /confirmar/i,
            }
          )
        );

        expect(
          screen.getByText(
            /cpf inválido/i
          )
        ).toBeInTheDocument();
      }
    );

    it(
      "deve validar email",
      async () => {
        const user =
          userEvent.setup();

        render(
          <PassengerForm
            onSubmit={
              jest.fn()
            }
          />
        );

        await user.type(
          screen.getByPlaceholderText(
            /email/i
          ),
          "teste"
        );

        await user.click(
          screen.getByRole(
            "button",
            {
              name:
                /confirmar/i,
            }
          )
        );

        expect(
          screen.getByText(
            /email inválido/i
          )
        ).toBeInTheDocument();
      }
    );
  }
);