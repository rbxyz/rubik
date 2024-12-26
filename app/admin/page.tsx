import Link from "next/link";

const editais = [
  { id: 1, titulo: "Edital 001/2023", status: "Publicado" },
  { id: 2, titulo: "Edital 002/2023", status: "Rascunho" },
  { id: 3, titulo: "Edital 003/2023", status: "Publicado" },
];

export default function GerenciarEditais() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gerenciar Editais</h1>
        <Link
          href="/admin/editais/novo"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Novo Edital
        </Link>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Título</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          {editais.map((edital) => (
            <tr key={edital.id}>
              <td className="py-2 px-4 border-b">{edital.id}</td>
              <td className="py-2 px-4 border-b">{edital.titulo}</td>
              <td className="py-2 px-4 border-b">{edital.status}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  href={`/admin/editais/${edital.id}`}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Editar
                </Link>
                <button className="text-red-500 hover:underline">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
