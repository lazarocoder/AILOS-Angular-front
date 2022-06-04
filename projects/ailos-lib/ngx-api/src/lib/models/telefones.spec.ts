import { ITelefones, publicPhonesMock } from './telefones';

const telefonesMock: ITelefones = publicPhonesMock;

describe('Tests TelefonesModel', () => {
  it('should test ITelefones with value', () => {
    const telefonesModel: ITelefones = {
      id: telefonesMock.id,
      fixo: telefonesMock.fixo,
      celular: telefonesMock.celular
    };
    expect(telefonesModel.id).toEqual(telefonesMock.id);
    expect(telefonesModel.fixo).toEqual(telefonesMock.fixo);
    expect(telefonesModel.celular).toEqual(telefonesMock.celular);
  });
});
