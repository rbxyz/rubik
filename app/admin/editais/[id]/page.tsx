"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditarEdital({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [edital, setEdital] = useState({
    titulo: "",
    descricao: "",
    pdfUrl: "",
  });

  useEffect(() => {
    if (params.id !== "novo") {
      setEdital({
        titulo: `Edital ${params.id}/2023`,
        descricao: "Descrição do edital...",
        pdfUrl: "/caminho/para/pdf",
      });
    }
  }, [params.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do edital:", edital);
    router.push("/admin/editais");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        {params.id === "novo" ? "Novo Edital" : "Editar Edital"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="titulo"
            className="block text-sm font-medium text-gray-700"
          >
            Título
          </label>
          <input
            type="text"
            id="titulo"
            value={edital.titulo}
            onChange={(e) => setEdital({ ...edital, titulo: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="descricao"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição
          </label>
          <textarea
            id="descricao"
            value={edital.descricao}
            onChange={(e) =>
              setEdital({ ...edital, descricao: e.target.value })
            }
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="pdfUrl"
            className="block text-sm font-medium text-gray-700"
          >
            URL do PDF
          </label>
          <input
            type="text"
            id="pdfUrl"
            value={edital.pdfUrl}
            onChange={(e) => setEdital({ ...edital, pdfUrl: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
