import assert from 'node:assert';
import { describe, it } from 'mocha';
import { expect } from 'chai';

import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from './codigoTestes.js';

describe('Testes da disciplina - fundamentos JS', () => {
  
  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    const resultado = geradorDeTagsDeIdentificacao('Pantera');
    assert.strictEqual(resultado, 'PANTERA');
    // Alternativa com Chai:
    expect(resultado).to.equal('PANTERA');
  });

  it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    expect(verificarSePodeSerAdotado(1, 'M')).to.be.true; // Mais legível com Chai
  });

  it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    const consumo = calcularConsumoDeRacao('Pitoco', 1, 14.5);
    assert.strictEqual(consumo, 4350);
  });

  it('QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada', () => {
    const atividade = decidirTipoDeAtividadePorPorte('pequeno');
    expect(atividade).to.equal('brincar dentro de casa');
  });

  it('QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona', async () => {
    await expect(buscarDadoAsync()).to.eventually.equal('Pipoca'); // Teste assíncrono com Chai
  });

});