export function computarVoto(filme, nota) {
  filme.avaliacoes.push(nota);
  return filme;
}

export function analisarFilme(filme) {
  const quantidadeVotos = filme.avaliacoes.length;

  const somaNotas = filme.avaliacoes.reduce(
    (total, nota) => total + nota,
    0
  );

  const media = Math.round(somaNotas / quantidadeVotos)


  let classificacao;

  if (media >= 4) {
    classificacao = "Filme recomendado"
  } else if (media >= 3) {
    classificacao = "Filme razoável"
  } else {
    classificacao = "Filme ruim"
  }

  return {
    nome: filme.nome,
    quantidadeVotos,
    media,
    classificacao
  };
}

export function avaliarFilmes(filmes) {
  return filmes.map(analisarFilme);
}