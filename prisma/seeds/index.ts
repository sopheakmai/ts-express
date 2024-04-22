import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()

export default async function seedData() {
  try {
    await prisma.user.create({
      data: {
        email: 'monycuteboy@gmail.com',
      },
    });

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
