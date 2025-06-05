export type Debt = {
  id?: string;
  debtorName: string;
  description?: string;
  value: number;
  date?: string;
  status?: 'pending' | 'paid';
}