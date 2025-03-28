-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Fund" (
    "fund_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fund_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Employee" (
    "employee_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "fundId" INTEGER NOT NULL,
    CONSTRAINT "Employee_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "Fund" ("fund_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vendor" (
    "vendor_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "fundId" INTEGER NOT NULL,
    CONSTRAINT "Vendor_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "Fund" ("fund_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transaction" (
    "transaction_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timestamp" DATETIME NOT NULL,
    "amount" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "receiver" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "fundId" INTEGER NOT NULL,
    CONSTRAINT "Transaction_fundId_fkey" FOREIGN KEY ("fundId") REFERENCES "Fund" ("fund_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
