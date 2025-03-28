
import fs from 'fs';
import 'dotenv/config';
import { parse } from 'csv-parse';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await importFunds();
  await importEmployees();
  await importVendors();
  await importTransactions();
}

// Insert Fund Data
async function importFunds() {
  const parser = fs
    .createReadStream('backend/data/funds.csv')
    .pipe(parse({ columns: true, trim: true }));

  for await (const row of parser) {
    await prisma.fund.create({
      data: {
        fund_name: row['fund_name'],
        description: row['description'],
        image: row['image'],
      },
    });
  }
}

// Insert Employee Data
async function importEmployees() {
  const parser = fs
    .createReadStream('backend/data/employees.csv')
    .pipe(parse({ columns: true, trim: true }));

  for await (const row of parser) {
    await prisma.employee.create({
      data: {
        name: row['name'],
        role: row['role'],
        salary: parseInt(row['salary']) || 0,
        email: row['email'],
        fundId: parseInt(row['fund_id']),
      },
    });
  }
}


// Insert Vendor Data
async function importVendors() {
  const parser = fs
    .createReadStream('backend/data/vendors.csv')
    .pipe(parse({ columns: true, trim: true }));

  for await (const row of parser) {
    console.log('Vendor row:', row);
    await prisma.vendor.create({
      data: {
        name: row['vendor_name'],
        contactInfo: row['email'],
        fundId: parseInt(row['fund_id']),
      },
    });
  }
}

// Insert Transaction Data
async function importTransactions() {
  const parser = fs
    .createReadStream('backend/data/transactions.csv')
    .pipe(parse({ columns: true, trim: true }));

  for await (const row of parser) {
    await prisma.transaction.create({
      data: {
        timestamp: new Date(row['Timestamp']), // Convert to Date object
        amount: parseFloat(row['Amount']) || 0,
        currency: row['Currency'],
        sender: row['SenderInfo'],
        receiver: row['ReceiverInfo'],
        type: row['TransactionType'],
        fundId: parseInt(row['fund_id']),
      },
    });
  }
}

main()
  .then(() => {
    console.log('All imports finished without error.');
  })
  .catch((err) => {
    console.error('Error importing data:', err);
  });