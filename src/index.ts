export interface Case {
  id: string;
}
export interface ExizentCasesApiClient {
  get: { cases: Case[] };
}

export function ExizentCasesApiClient(): ExizentCasesApiClient {
  return {
    get: { cases: [{ id: "1" }] },
  };
}
