import {
  Pool,
  type PoolClient,
  type QueryResult,
  type QueryResultRow,
} from "pg";

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "Unvercitey",
  password: "Arkoo1549",
  port: Number.parseInt(process.env.DB_PORT || "5432", 10),
});

export function query<T extends QueryResultRow>(
  text: string,
  values: (string | number | Date | null)[] = [],
): Promise<QueryResult<T>> {
  return pool.query<T>(text, values);
}

export async function connectToPostgres(): Promise<void> {
  try {
    const client: PoolClient = await pool.connect();
    console.log("✓ Successfully connected to PostgreSQL database");
    client.release();
  } catch (error) {
    console.error("✗ Error connecting to PostgreSQL:", error);
    throw error;
  }
}
