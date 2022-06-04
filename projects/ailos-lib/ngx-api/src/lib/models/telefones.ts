export interface ITelefones {
  id: number;
  fixo: string;
  celular: string;
}

export class Telefones implements ITelefones {
  id: number;
  fixo: string;
  celular: string;

  constructor(rawData: ITelefones) {
    this.id = rawData.id;
    this.fixo = rawData.fixo;
    this.celular = rawData.celular;
  }
}

export const publicPhonesMock: ITelefones = {
  id: 3,
  fixo: '(98) 2644-1633',
  celular: '(98) 99671-5373'
};
