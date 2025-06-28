import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as funcoes from './codigoTestes.js';

describe('Testes da disciplina - fundamentos JS', () => {
  
  it('QUANDO nome for "Pantera", DEVE retornar "PANTERA"', () => {
    expect(funcoes.geradorDeTagsDeIdentificacao('Pantera')).to.equal('PANTERA');
  });

  it('QUANDO idade = 1 + porte = "M", DEVE permitir adoção', () => {
    expect(funcoes.verificarSePodeSerAdotado(1, 'M')).to.be.true;
    expect(funcoes.verificarSePodeSerAdotado(1, 'm')).to.be.true; // Case insensitive
  });

  it('QUANDO peso = 14.5, DEVE retornar 4350g de ração', () => {
    expect(funcoes.calcularConsumoDeRacao('Pitoco', 1, 14.5)).to.equal(4350);
  });

  it('QUANDO porte = "pequeno", DEVE retornar atividade correta', () => {
    expect(funcoes.decidirTipoDeAtividadePorPorte('pequeno')).to.equal('brincar dentro de casa');
    expect(funcoes.decidirTipoDeAtividadePorPorte('PEQUENO')).to.equal('brincar dentro de casa');
  });

  it('QUANDO buscar dado assíncrono, DEVE retornar "Pipoca"', async () => {
  const resultado = await funcoes.buscarDadoAsync();
  expect(resultado).to.equal('Pipoca');
});

  // Testes de erro
  it('QUANDO nome não for string, DEVE lançar erro', () => {
    expect(() => funcoes.geradorDeTagsDeIdentificacao(123)).to.throw();
  });
});