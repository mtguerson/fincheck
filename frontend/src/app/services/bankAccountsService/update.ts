import { httpClient } from '../httpClient'

export interface UpdateBankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
}

export async function update(params: UpdateBankAccountParams) {
  const { data } = await httpClient.put('/bank-accounts', params)

  return data
}
