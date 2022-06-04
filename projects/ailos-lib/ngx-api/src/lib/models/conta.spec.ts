import { IConta, publicAccountMock } from './conta';

const contaMock: IConta = publicAccountMock;

describe('Tests ContaModel', () => {
  it('should test IConta with value', () => {
    const contaModel: IConta = {
      id: contaMock.id,
      numero: contaMock.numero,
      agencia: contaMock.agencia,
      instituicao: contaMock.instituicao
    };
    expect(contaModel.id).toEqual(contaMock.id);
    expect(contaModel.numero).toEqual(contaMock.numero);
    expect(contaModel.agencia).toEqual(contaMock.agencia);
    expect(contaModel.instituicao).toEqual(contaMock.instituicao);
  });
});
