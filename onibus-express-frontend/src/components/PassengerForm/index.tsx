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

  const [errors, setErrors] =
  useState({
    name: "",
    cpf: "",
    email: "",
  });

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();

        const validationErrors = {
          name: "",
          cpf: "",
          email: "",
        };

        if (!name.trim()) {
          validationErrors.name =
            "Nome obrigatório";
        }

        if (
          !/^\d{11}$/.test(
            cpf.replace(/\D/g, "")
          )
        ) {
          validationErrors.cpf =
            "CPF inválido";
        }

        if (
          !/\S+@\S+\.\S+/.test(email)
        ) {
          validationErrors.email =
            "Email inválido";
        }

        setErrors(validationErrors);

        const hasErrors =
          Object.values(
            validationErrors
          ).some(Boolean);

        if (hasErrors) {
          return;
        }

        onSubmit({
          name: name.trim(),
          cpf: cpf.trim(),
          email: email.trim(),
        });
      }}
    >
      <label htmlFor="name">
        Nome Completo
      </label>

      <input
        id="name"
        placeholder="Nome"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="w-full rounded border p-3"
      />
      {
        errors.name && (
          <p>{errors.name}</p>
        )
      }

      <label htmlFor="cpf">
        CPF
      </label>

      <input
        id="cpf"
        placeholder="CPF"
        value={cpf}
        onChange={(e) =>
          setCpf(e.target.value)
        }
        className="w-full rounded border p-3"
      />

      {errors.cpf && (
        <p className="text-sm text-red-600">
          {errors.cpf}
        </p>
      )}

      <label htmlFor="email">
        E-mail
      </label>

      <input
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="w-full rounded border p-3"
      />

      {errors.email && (
        <p className="text-sm text-red-600">
          {errors.email}
        </p>
      )}

      <button
        type="submit"
        className="rounded bg-green-600 px-4 py-2 text-white"
      >
        Confirmar
      </button>
      
    </form>    
  );
}