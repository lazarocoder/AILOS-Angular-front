export interface IFiliacao {
  id: number;
  mae: string;
  pai: string;
}

export class Filiacao implements IFiliacao {
  id: number;
  mae: string;
  pai: string;

  constructor(rawData: IFiliacao) {
    this.id = rawData.id;
    this.mae = rawData.mae;
    this.pai = rawData.pai;
  }
}

export const publicParentageMock: IFiliacao = {
  id: 3,
  mae: 'Sophia Tereza',
  pai: 'Luan Kaique Carlos Eduardo Aragão'
};
