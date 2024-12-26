import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Criação de usuário admin com email obrigatório
  const hashedPassword = await hash('123', 10);

  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      email: 'admin@example.com',
    },
  });

  console.log({ admin });

  const edital = await prisma.edital.create({
    data: {
      titulo: 'Edital de Teste',
      descricao: 'Este é um edital de teste para o Rubik Hub.',
      pdfUrl: 'https://exemplo.com/edital-teste.pdf',
      dataInicio: new Date('2024-01-01'),
      dataFim: new Date('2024-12-31'),
    },
  });

  console.log({ edital });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
