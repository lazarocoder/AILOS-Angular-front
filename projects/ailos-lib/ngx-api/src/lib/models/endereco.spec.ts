import { IEndereco, publicAddressMock } from './endereco';

const enderecoMock: IEndereco = publicAddressMock;

describe('Tests EnderecoModel', () => {
  it('should test IEndereco with value', () => {
    const enderecoModel: IEndereco = {
      id: enderecoMock.id,
      cep: enderecoMock.cep,
      logradouro: enderecoMock.logradouro,
      numero: enderecoMock.numero,
      bairro: enderecoMock.bairro,
      cidade: enderecoMock.cidade,
      estado: enderecoMock.estado
    };
    expect(enderecoModel.id).toEqual(enderecoMock.id);
    expect(enderecoModel.cep).toEqual(enderecoMock.cep);
    expect(enderecoModel.logradouro).toEqual(enderecoMock.logradouro);
    expect(enderecoModel.numero).toEqual(enderecoMock.numero);
    expect(enderecoModel.bairro).toEqual(enderecoMock.bairro);
    expect(enderecoModel.cidade).toEqual(enderecoMock.cidade);
    expect(enderecoModel.estado).toEqual(enderecoMock.estado);
  });
});
