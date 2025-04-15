import { getTableColumns, Table } from 'drizzle-orm';

export default function selectTableColumns<T extends Table>(
  table: T,
  columns: (keyof T['_']['columns'])[],
) {
  const cols = { ...getTableColumns(table) };

  for (const key in cols) {
    if (!columns.includes(key)) delete cols[key];
  }

  return cols;
}
