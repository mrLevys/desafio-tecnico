import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="mt-4">
        Página não encontrada
      </p>

      <Link
        to="/"
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Voltar
      </Link>
    </div>
  );
}