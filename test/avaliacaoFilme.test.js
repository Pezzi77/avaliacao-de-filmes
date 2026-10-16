import assert from "node:assert";
import { analisarFilme, avaliarFilmes } from "../src/avaliacaoFilme.js";

describe("Sistema de Votação de Filmes", () => {
  it('ct01 - deve computar e classificar "Minha mãe é uma peça" como o melhor (recomendado)', () => {
    const filme = {
      nome: "Minha mãe é uma peça",
      avaliacoes: [5, 5, 4, 5, 5]
    };

    const resultado = analisarFilme(filme)

    assert.equal(resultado.nome, "Minha mãe é uma peça")
    assert.equal(resultado.classificacao, "Filme recomendado")
  });

  it('ct02 - deve computar e classificar "Se eu fosse você" com média 3 (razoável)', () => {
    const filme = {
      nome: "Se eu fosse você",
      avaliacoes: [3, 3, 3]
    };

    const resultado = analisarFilme(filme)

    assert.equal(resultado.nome,"Se eu fosse você")
    assert.equal(resultado.media, 3)
    assert.equal(resultado.classificacao, "Filme razoável")
  });

  it('ct03 - deve computar e classificar "Saneamento Básico" como ruim', () => {
    const filme = {
      nome: "Saneamento Básico",
      avaliacoes: [1, 2, 2]
    };

    const resultado = analisarFilme(filme);

    assert.equal(resultado.nome, "Saneamento Básico")
    assert.equal(resultado.classificacao, "Filme ruim")
  });

  it("A lista completa de votação na ordem correta", () => {
    const Votacao = [
      { nome: "Minha mãe é uma peça", avaliacoes: [5, 5, 4, 5, 5] },
      { nome: "Se eu fosse você", avaliacoes: [3, 3, 3] },
      { nome: "Saneamento Básico", avaliacoes: [1, 2, 2] }
    ];

    const resultados = avaliarFilmes(Votacao)

    assert.equal(resultados.length, 3)
    
     
    assert.equal(resultados[0].nome, "Minha mãe é uma peça");
    assert.equal(resultados[0].classificacao, "Filme recomendado");

    assert.equal(resultados[1].nome, "Se eu fosse você")
    assert.equal(resultados[1].media, 3)
    assert.equal(resultados[1].classificacao, "Filme razoável")

    assert.equal(resultados[2].nome, "Saneamento Básico")
    assert.equal(resultados[2].classificacao, "Filme ruim")
  })
})