import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// Queries the database and returns all funds in the database
export async function allFunds() {
  try {
    return prisma.fund.findMany({
      include: {
        employees: true,
        vendors: true
      }
    })
  } catch (error) {
    console.error('Error querying funds:', error); 
    throw error;
  }

}

// Queries the database and returns specific charity based on fund id
export async function queryCharity(fundid) {
  try {
    return prisma.fund.findUnique({
      where: {
        fund_id: Number(fundid),
      }, include: {
        transactions: true,
        vendors: true,
        employees: true
      }
    })
  }
  catch (error) {
    console.error('Error querying charity:', error);
    throw error;
  }
}