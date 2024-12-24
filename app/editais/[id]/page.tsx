import Link from "next/link";

// Simulação de dados de um edital específico
const edital = {
  id: 1,
  titulo: "Edital 001/2023",
  descricao: "Processo seletivo para estágio",
  pdfUrl: "/caminho-para-o-pdf/edital001-2023.pdf",
};

export default function DetalheEdital({ params }: { params: { id: string } }) {
  // Na implementação real, você buscaria os dados do edital com base no ID
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{edital.titulo}</h1>
      <p className="text-gray-600 mb-6">{edital.descricao}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Visualizar PDF</h2>
        <iframe
          src={`${edital.pdfUrl}#toolbar=0`}
          className="w-full h-96 border"
        />
      </div>

      <div className="flex space-x-4">
        <a
          href={edital.pdfUrl}
          download
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Download PDF
        </a>
        <Link
          href={`/editais/${params.id}/inscricao`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Inscrever-se
        </Link>
      </div>
    </div>
  );
}
