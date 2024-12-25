"use client";

import { useState } from "react";

type Campo = {
  id: string;
  tipo: "texto" | "email" | "numero" | "data";
  label: string;
  obrigatorio: boolean;
};

type FormularioInscricaoProps = {
  campos: Campo[];
  onSubmit: (dados: Record<string, string>) => void;
};

export default function FormularioInscricao({
  campos,
  onSubmit,
}: FormularioInscricaoProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {campos.map((campo) => (
        <div key={campo.id}>
          <label
            htmlFor={campo.id}
            className="block text-sm font-medium text-gray-700"
          >
            {campo.label}
          </label>
          <input
            type={campo.tipo}
            id={campo.id}
            name={campo.id}
            required={campo.obrigatorio}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Enviar Inscrição
      </button>
    </form>
  );
}
