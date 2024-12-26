import prisma from '@/lib/prisma';

// Busca todos os editais
export const getEditais = async () => {
  return await prisma.edital.findMany();
};

// Busca um edital pelo ID
export const getEditalById = async (id: number) => {
  return await prisma.edital.findUnique({
    where: { id },
  });
};

// Cria um novo edital
export const createEdital = async (data: {
  titulo: string;
  descricao: string;
  pdfUrl: string;
  dataInicio: Date;
  dataFim: Date;
}) => {
  return await prisma.edital.create({
    data: {
      titulo: data.titulo,
      descricao: data.descricao,
      pdfUrl: data.pdfUrl,
      dataInicio: data.dataInicio,
      dataFim: data.dataFim,
      status: "ativo", // Valor padrão, mas pode ser personalizado
    },
  });
};

// Atualiza um edital existente
export const updateEdital = async (
  id: number,
  data: {
    titulo?: string;
    descricao?: string;
    pdfUrl?: string;
    dataInicio?: Date;
    dataFim?: Date;
    status?: string;
  }
) => {
  return await prisma.edital.update({
    where: { id },
    data,
  });
};

// Deleta um edital pelo ID
export const deleteEdital = async (id: number) => {
  return await prisma.edital.delete({
    where: { id },
  });
};
