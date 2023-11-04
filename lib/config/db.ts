import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

const poolConnection = mysql.createPool({
  user: 'root',
  password: '123',
  database: 'budget',
  host: '127.0.0.1'
})

export const db = drizzle(poolConnection)