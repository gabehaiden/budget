import { char, date, double, int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  user_id: int('user_id').primaryKey().autoincrement(),
  username: varchar('username', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 255 }).notNull(),
  created_at: timestamp('created_at').defaultNow()
})

export const clients = mysqlTable('clients', {
  client_id: int('client_id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  adress: varchar('adress', { length: 255 }).notNull(),
  city: varchar('city', { length: 255 }).notNull(),
  state: char('state', { length: 2 }).notNull(),
  phone_number: varchar('phone_number', { length: 20 }).notNull()
})

export const products = mysqlTable('products', {
  product_id: int('product_id').primaryKey().autoincrement(),
  description: varchar('description', { length: 255 }).notNull(),
  barcode: int('barcode'),
  price: double('price').notNull(),
  cost: double('cost')
})

export const sales = mysqlTable('sales', {
  sale_id: int('sale_id').primaryKey().autoincrement(),
  budget_id: int('budget_id').references(() => budget.budget_id),
  product_id: int('product_id').references(() => products.product_id),
  quantity: double('quantity').notNull(),
  date: date('date').notNull()
})

export const budget = mysqlTable('budget', {
  budget_id: int('budget_id').primaryKey().autoincrement(),
  client_id: int('client_id').references(() => clients.client_id).notNull(),
  created_at: timestamp('created_at').defaultNow(),
  deadline: date('date', { mode: 'date' }).notNull()
})

export const budget_products = mysqlTable('budget_products', {
  budget_id: int('budget_id').primaryKey().references(() => budget.budget_id),
  product_id: int('product_id').primaryKey().references(() => products.product_id)
})

