import { IEndereco } from './endereco';
import { ITelefones } from './telefones';
import { IConta } from './conta';
import { IFiliacao } from './filiacao';

export interface IPessoa {
  id: number;
  nome: string;
  cpf: string;
  idade: number;
  data_nasc: Date;
  sexo: boolean;
  email: string;
  situacao: boolean;
  conta: IConta;
  filiacao: IFiliacao;
  endereco: IEndereco;
  telefones: ITelefones;
}

export class Pessoa implements IPessoa {
  id: number;
  nome: string;
  cpf: string;
  idade: number;
  data_nasc: Date;
  sexo: boolean;
  email: string;
  situacao: boolean;
  conta: IConta;
  filiacao: IFiliacao;
  endereco: IEndereco;
  telefones: ITelefones;

  constructor(rawData: IPessoa) {
    this.id = rawData.id;
    this.nome = rawData.nome;
    this.cpf = rawData.cpf;
    this.idade = rawData.idade;
    this.data_nasc = rawData.data_nasc;
    this.sexo = rawData.sexo;
    this.email = rawData.email;
    this.situacao = rawData.situacao;
    this.conta = rawData.conta;
    this.filiacao = rawData.filiacao;
    this.endereco = rawData.endereco;
    this.telefones = rawData.telefones;
  }
}

export const publicPeopleMock: IPessoa = {
  id: 3,
  nome: 'Miguel Fernando Jorge Aragão',
  idade: 79,
  cpf: '98971589604',
  data_nasc: new Date(1942, 1, 19),
  sexo: true,
  email: 'mmiguelfernandojorgearagao@gmail.com',
  situacao: true,
  conta: {
    id: 3,
    numero: '65057-4',
    agencia: '1378',
    instituicao: 'Itaú'
  },
  filiacao: {
    id: 3,
    mae: 'Sophia Tereza',
    pai: 'Luan Kaique Carlos Eduardo Aragão'
  },
  endereco: {
    id: 3,
    cep: '65910-390',
    logradouro: 'Rua Juruna',
    numero: 419,
    bairro: 'Vila Redenção I',
    cidade: 'Imperatriz',
    estado: 'MA'
  },
  telefones: {
    id: 3,
    fixo: '(98) 2644-1633',
    celular: '(98) 99671-5373'
  }
};
