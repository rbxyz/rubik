import Link from "next/link";

// Simulação de dados de editais
const editais = [
  {
    id: 1,
    titulo: "Edital 001/2023",
    descricao: "Processo seletivo para estágio em Tecnologia da Informação",
  },
  {
    id: 2,
    titulo: "Edital 002/2023",
    descricao: "Concurso público para Professor de Matemática",
  },
  {
    id: 3,
    titulo: "Edital 003/2023",
    descricao: "Chamada para projetos de pesquisa em Sustentabilidade",
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Editais Disponíveis</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {editais.map((edital) => (
          <div
            key={edital.id}
            className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{edital.titulo}</h2>
            <p className="text-gray-600 mb-4">{edital.descricao}</p>
            <Link
              href={`/editais/${edital.id}`}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
