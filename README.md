# Projeto de Lembretes

Este é um projeto inspirado no layout do aplicativo de Lembretes do iPhone, desenvolvido em React com TypeScript e utilizando diversas ferramentas modernas para garantir qualidade e padronização de código.

## Funcionalidades

- **Gerenciamento de Lembretes**: Criação, edição e exclusão de lembretes com interface inspirada no app de Lembretes do iPhone.
- **Validação e Tipagem com Zod**: A biblioteca Zod é utilizada para validação de dados e geração de tipagens, garantindo a segurança dos dados no frontend.
- **Testes Automatizados**: Testes unitários e de integração escritos com Vitest e Testing Library, localizados na pasta `_tests_`.
- **Padronização de Commits**: Husky e Commitlint estão configurados para padronizar os commits de acordo com boas práticas.

## Tecnologias e Ferramentas

- **React e TypeScript**: Estrutura principal do projeto, combinando a flexibilidade do React com a segurança do TypeScript.
- **Zod**: Para validação de dados e geração de tipos.
- **Vitest e Testing Library**: Testes rápidos e eficientes para garantir a funcionalidade e usabilidade do projeto.
- **Husky e Commitlint**: Para padronização de commits e automatização de verificações no momento do commit.

## Scripts Disponíveis

Na raiz do projeto, você pode executar os seguintes comandos:

| Script                | Descrição                                                       |
|-----------------------|-----------------------------------------------------------------|
| `npm run dev`         | Inicia o servidor de desenvolvimento usando Vite.              |
| `npm run build`       | Compila o projeto para produção.                               |
| `npm run preview`     | Previsualiza a build de produção.                              |
| `npm run test:unit`   | Executa todos os testes com Vitest.                            |
| `npm run lint`        | Executa a verificação de linting para manter o código limpo.   |
| `npm run format`      | Formata o código usando Prettier para padronização.            |
| `npm run commit`      | Inicia um prompt interativo para criação de commits padronizados.|

## Estrutura de Pastas

- **src/**: Código-fonte principal.
- **_tests_/**: Local onde estão armazenados os testes.
- **public/**: Arquivos estáticos.
- **scripts/**: Scripts auxiliares, se aplicável.

## Testes

Para garantir a qualidade do código, foram criados testes unitários e de integração com as seguintes ferramentas:

- **Vitest**: Framework de testes rápido e moderno, com ótima integração com o TypeScript.
- **Testing Library**: Biblioteca de utilidades para testes de componentes React, garantindo uma boa experiência de usuário e acessibilidade.

Execute os testes com:
npm run test

## Instalação

- git clone <URL_DO_REPOSITORIO>
- npm install
- npm run dev

