// lib/db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '@/drizzle/schema';

const pool = new Pool({ connectionString: process.env.NILEDB_URL });
export const db = drizzle(pool, { schema });
