# Avaliação de Filmes

Projeto em JavaScript para avaliar filmes com base nas notas recebidas e classificar o resultado final.

## Objetivo

O sistema calcula a média das avaliações de cada filme e retorna uma classificação com base nessa média:

- 4 ou mais: Filme recomendado
- 3 a 3,9: Filme razoável
- abaixo de 3: Filme ruim

## Funcionalidades

- Adicionar uma nova avaliação a um filme
- Calcular a média das notas
- Identificar a quantidade de votos
- Classificar o filme conforme a média geral
- Avaliar uma lista completa de filmes

## Estrutura do projeto

```text
avaliacao-de-filmes/
├── src/
│   └── avaliacaoFilme.js
├── test/
│   └── avaliacaoFilme.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Arquivos principais

### src/avaliacaoFilme.js

Contém as funções principais do sistema:

- `computarVoto(filme, nota)`: adiciona uma nota à lista de avaliações de um filme
- `analisarFilme(filme)`: calcula a média, quantidade de votos e classificação
- `avaliarFilmes(filmes)`: aplica a análise a um conjunto de filmes

### test/avaliacaoFilme.test.js

Arquivo de testes com cenários para validar:

- filme recomendado
- filme razoável
- filme ruim
- lista completa de avaliações

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Execute os testes:

```bash
npm test
```

## Tecnologias

- JavaScript
- Node.js
- Mocha


## Observações

Este projeto foi desenvolvido como uma aplicação simples de prática para lógica de programação e manipulação de arrays/objetos em JavaScript.
