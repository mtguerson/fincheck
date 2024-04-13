import { httpClient } from "../httpClient";

interface meResonse {
  name: string;
  email: string;
}

export async function me() {
  const { data } = await httpClient.get<meResonse>('/users/me');

  return data;
}
