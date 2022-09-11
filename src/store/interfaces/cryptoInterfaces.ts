export interface ICrypto {
  title: string;
  logo: string;
  description: string;
  team: number;
  value: number;
  ICO: Date;
  id: string;
}

export interface NewOrModifyCrypto {
  title: string;
  logo: string;
  description: string;
  team: number;
  value: number;
  ICO: Date;
  id?: string;
}

export type Crypto = ICrypto[];
