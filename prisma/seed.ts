import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.user.upsert({
    where: { username: "barsava-admin" },
    update: {},
    create: {
      username: "barsava-admin",
      password: "barsava-admin@1234",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
