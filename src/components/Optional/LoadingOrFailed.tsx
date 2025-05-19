"use client";

import { IconLoader } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function LoadingOrFailed() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFailed(true), 30000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-700 space-y-4">
      {!failed ? (
        <>
          <IconLoader size={100} className="animate-spin text-blue-600 dark:text-yellow-300" />
          <p className="text-sm text-gray-500 dark:text-gray-200">Carregando...</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold dark:text-yellow-300">Página não encontrada</h2>
          <p className="text-sm text-gray-500 dark:text-gray-200">
            Não conseguimos encontrar o conteúdo solicitado.
          </p>
        </>
      )}
    </div>
  );
}
