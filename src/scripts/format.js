// Formato numérico español: 138.850 · coma decimal.
// No usamos Intl porque es-ES omite el separador en cifras de 4 dígitos
// (2100 → "2100") y aquí queremos consistencia financiera: 2.100.
export function fmt(n) {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
