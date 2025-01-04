import { getEditalById } from "@/services/editalService";
import { Button } from "@/components/ui/button";

interface EditalProps {
  params: {
    id: string;
  };
}

export default async function DetalheEdital({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id, 10);
  const edital = await getEditalById(id);

  if (!edital) {
    return <div>Edital não encontrado</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4">{edital.titulo}</h1>
      <p className="text-gray-600 mb-6">{edital.descricao}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Visualizar PDF</h2>
        <div className="border rounded-lg overflow-hidden">
          <iframe src={`${edital.pdfUrl}#toolbar=0`} className="w-full h-96" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Button asChild>
          <a
            href={edital.pdfUrl}
            download
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300 text-center"
          >
            Download PDF
          </a>
        </Button>
        <Button asChild>
          <a
            href={`/editais/${params.id}/inscricao`}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 text-center"
          >
            Inscrever-se
          </a>
        </Button>
      </div>
    </div>
  );
}
