import { IPessoa, publicPeopleMock } from './pessoa';

const pessoaMock: IPessoa = publicPeopleMock;

describe('Tests PessoaModel', () => {
  it('should test IPessoa with value', () => {
    const pessoaModel: IPessoa = {
      id: pessoaMock.id,
      nome: pessoaMock.nome,
      cpf: pessoaMock.cpf,
      idade: pessoaMock.idade,
      data_nasc: pessoaMock.data_nasc,
      sexo: pessoaMock.sexo,
      email: pessoaMock.email,
      situacao: pessoaMock.situacao,
      conta: pessoaMock.conta,
      filiacao: pessoaMock.filiacao,
      endereco: pessoaMock.endereco,
      telefones: pessoaMock.telefones
    };
    expect(pessoaModel.id).toEqual(pessoaMock.id);
    expect(pessoaModel.nome).toEqual(pessoaMock.nome);
    expect(pessoaModel.cpf).toEqual(pessoaMock.cpf);
    expect(pessoaModel.idade).toEqual(pessoaMock.idade);
    expect(pessoaModel.data_nasc).toEqual(pessoaMock.data_nasc);
    expect(pessoaModel.sexo).toEqual(pessoaMock.sexo);
    expect(pessoaModel.email).toEqual(pessoaMock.email);
    expect(pessoaModel.situacao).toEqual(pessoaMock.situacao);
    expect(pessoaModel.conta).toEqual(pessoaMock.conta);
    expect(pessoaModel.filiacao).toEqual(pessoaMock.filiacao);
    expect(pessoaModel.endereco).toEqual(pessoaMock.endereco);
    expect(pessoaModel.telefones).toEqual(pessoaMock.telefones);
  });
});
