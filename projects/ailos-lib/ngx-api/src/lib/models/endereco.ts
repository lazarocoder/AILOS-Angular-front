export interface IEndereco {
  id: number;
  cep: string;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
}

export class Endereco implements IEndereco {
  id: number;
  cep: string;
  logradouro: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;

  constructor(rawData: IEndereco) {
    this.id = rawData.id;
    this.cep = rawData.cep;
    this.logradouro = rawData.logradouro;
    this.numero = rawData.numero;
    this.bairro = rawData.bairro;
    this.cidade = rawData.cidade;
    this.estado = rawData.estado;
  }
}

export const publicAddressMock: IEndereco = {
  id: 3,
  cep: '65910-390',
  logradouro: 'Rua Juruna',
  numero: 419,
  bairro: 'Vila Redenção I',
  cidade: 'Imperatriz',
  estado: 'MA'
};
