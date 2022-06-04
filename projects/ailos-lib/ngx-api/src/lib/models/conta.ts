export declare type Instituicoes =
  'Bradesco' |
  'Banco do Brasil' |
  'Santander' |
  'Itaú' |
  'Inter' |
  'Nu Pagamentos';

export interface IConta {
  id: number;
  numero: string;
  agencia: string;
  instituicao: Instituicoes;
}

export class Conta implements IConta {
  id: number;
  numero: string;
  agencia: string;
  instituicao: Instituicoes;

  constructor(rawData: IConta) {
    this.id = rawData.id;
    this.numero = rawData.numero;
    this.agencia = rawData.agencia;
    this.instituicao = rawData.instituicao;
  }
}

export const publicAccountMock: IConta = {
  id: 3,
  numero: '65057-4',
  agencia: '1378',
  instituicao: 'Itaú'
};
