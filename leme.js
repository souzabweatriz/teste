const { Client } = require('pg');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

async function main() {
  await client.connect();
  const res = await client.query('SELECT * FROM public.users');
  console.log(res.rows);
  await client.end();
}

main();