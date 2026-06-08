import { useState } from "react";

interface PassengerFormProps {
  onSubmit: (
    passenger: {
      name: string;
      cpf: string;
      email: string;
    }
  ) => void;
}

export function PassengerForm({
  onSubmit,
}: PassengerFormProps) {
  const [name, setName] =
    useState("");

  const [cpf, setCpf] =
    useState("");

  const [email, setEmail] =
    useState("");

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit({
          name,
          cpf,
          email,
        });
      }}
    >
      <input
        placeholder="Nome"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="w-full rounded border p-3"
      />

      <input
        placeholder="CPF"
        value={cpf}
        onChange={(e) =>
          setCpf(e.target.value)
        }
        className="w-full rounded border p-3"
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="w-full rounded border p-3"
      />

      <button
        type="submit"
        className="rounded bg-green-600 px-4 py-2 text-white"
      >
        Confirmar
      </button>
    </form>
  );
}