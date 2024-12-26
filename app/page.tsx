import Link from "next/link";
import { getEditais } from "@/services/editalService";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

export default async function Home() {
  const editais = await getEditais();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Rubik Hub</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {editais.map(
          (edital: {
            id: Key | null | undefined;
            titulo:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
            descricao:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
          }) => (
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
          )
        )}
      </div>
    </div>
  );
}
