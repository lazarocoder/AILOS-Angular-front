import { IFiliacao, publicParentageMock } from './filiacao';

const filiacaoMock: IFiliacao = publicParentageMock;

describe('Tests FiliacaoModel', () => {
  it('should test IFiliacao with value', () => {
    const filiacaoModel: IFiliacao = {
      id: filiacaoMock.id,
      mae: filiacaoMock.mae,
      pai: filiacaoMock.pai
    };
    expect(filiacaoModel.id).toEqual(filiacaoMock.id);
    expect(filiacaoModel.mae).toEqual(filiacaoMock.mae);
    expect(filiacaoModel.pai).toEqual(filiacaoMock.pai);
  });
});
