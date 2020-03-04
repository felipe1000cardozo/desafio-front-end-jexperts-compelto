# Desafio JExperts

[Link para a página.](https://jexperts-challange-complete.netlify.com/)

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto é o resultado do desafio prático proposto pela JExperts.
"O desafio consiste na criação de um aplicação web simples para cadastro de usuários (CRUD) com autenticação."

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [React JS](http://facebook.github.io/react/) - O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
- [Create React App](https://github.com/facebook/create-react-app) - Para gerar o template/configurações iniciais para o desenvolvimento em React.
- [Redux](https://redux.js.org/) - Biblioteca JavaScript de código aberto para gerenciar o estado da aplicação.
- [React Redux](https://react-redux.js.org/) - Ligação oficial de React para Redux.
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Utilizado para persistência de estados no armazenamento local.
- [React Icons](https://react-icons.netlify.com/#/) - Utilizado para adicionar bibliotecas populares de ícones ao projeto.
- [Styled Components](https://styled-components.com/) - Biblioteca para React e React Native que permite utilizar estilos ao nível de componente na aplicação.
- [Bootstrap 4](https://getbootstrap.com/) - O Bootstrap é uma ferramenta gratuita para desenvolvimento HTML, CSS e JS.
- [Material-UI](https://material-ui.com/) - Biblioteca de components estilizados para React.
- [JSON Web Tokens](https://jwt.io/) - Padrão aberto que define um método compacto e seguro para transmissão de informações.

<!-- GETTING STARTED -->

## Começando

Para rodar a aplicação basta rodar o comando "yarn start" na pasta do projeto ou então o comando "yarn build" para gerar os arquivos estáticos.

Debugger para decodificar o JWT [jwt.io](https://jwt.io/#debugger) key: strepxej

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
├── src/
│   ├── components/
│   │   └── Alert/
│   │       └── index.jsx
│   │   └── EditUser/
│   │       └── index.jsx
│   │   └── NewUser/
│   │       └── index.jsx
│   │   └── UserList/
│   │       └── index.jsx
│   ├── store/
│   │   ├── modules/
│   │   	├── users/
│   │   		├── actions.js
│   │ 			└── reducer.js
│   │   	└── rootReducer.js
│   │   └── index.js
│   ├── styles/
│   │ 	├── appStyle.js
│   │ 	└── global.js
│   ├── utils/
│   │   ├── emailAlreadyExist.js
│   │   ├── emptyUserFiels.js
│   │   ├── validateEmail.js
│   │   ├── validateUser.js
│   ├── App.js
│   └── index.js
```

## Contato

felipe1000cardozo@hotmail.com
(48) 984960284
