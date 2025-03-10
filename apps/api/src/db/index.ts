import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from './schema';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
    const user = await  db.select().from(usersTable)
    console.log(user);
    
}

main().catch(console.error);