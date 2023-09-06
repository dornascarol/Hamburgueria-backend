<h1> Backend da Hamburgueria :hamburger:🛒 </h1>
<br>

<h2> Este foi o projeto que aprendi no curso do DevClub </h2>
<p> Usuário pode se cadastrar na aplicação, escolher os pedidos e verificar o carrinho de compras. </p>

<h2> Introdução </h2>
Aplicação com intenção de simular um sistema de compras em um estabelecimento alimentício. O usuário pode se cadastrar e logar com seus dados de e-mail e senha. Depois de logado, ele escolhe uma variedade de hambúrgueres e complementos. Por fim, o usuário pode clicar no carrinho e realizar a compra. 

Além de um painel administrativo onde o representante do estabelecimento consegue ver todos os pedidos e seus status. 

## Tecnologias utilizadas
* VS Code
* Insomnia
* Yarn
* Node.JS
* Express.JS
* Docker
* PostgreSQL
* Postbird
* Sequelize (ORM)
* UUID (v4)
* Yup
* Bcrypt
* 

## Ferramentas
Na aplicação foi utilizado o <a href="https://nodejs.org/en/download" target="_blank" > Node.JS </a>  na versão 18.14.0 em LTS.

~

O <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable" target="_blank" > Yarn </a> na versão 1.22.19

:small_orange_diamond: `npm install -g yarn` ou `sudo npm install -g yarn` 

~

O <a href="https://www.docker.com/get-started/" target="_blank" > Docker </a> na configuração para computador 4.21.1 e versão 24.0.2


~

O <a href="https://github.com/Paxa/postbird" target="_blank"> Postbird </a> na versão instalada em Postbird.Setup.0.8.4.exe

~

O <a href="https://sequelize.org/docs/v6/getting-started/" target="_blank"> Sequelize </a> na versão 6.32.1

:small_orange_diamond: `yarn add sequelize`

~

Foi usado o programa <a href="https://insomnia.rest/download" target="_blank" > Insomnia </a> para testar as requisições das rotas simulando o Front-end.

~

## Dependências 
Framework <a href="https://yarnpkg.com/package?name=express" target="_blank" > Express </a> na versão 4.18.2 

:small_orange_diamond: `yarn add express`

~

Biblioteca <a href="https://yarnpkg.com/package?name=uuidv4" target="_blank" > UUID </a> do tipo v.4 e na versão 9.0.0

:small_orange_diamond: `yarn add uuid`

~

Biblioteca <a href="https://github.com/jquense/yup" target="_blank"> Yup </a> na versão 1.2.0

:small_orange_diamond: `yarn add yup`

~

Biblioteca <a href="https://yarnpkg.com/package?name=bcrypt" target="_blank"> Bcrypt </a> na versão 5.1.0 

:small_orange_diamond: `yarn add bcrypt`

~

## Dependência de desenvolvimento
O <a href="https://classic.yarnpkg.com/en/package/nodemon" target="_blank" > Nodemon </a> na versão 3.0.1

:small_orange_diamond: `yarn add nodemon -D`
  
Criado um script no `package.json` para o nodemon: "dev".

~

O <a href="https://yarnpkg.com/package?name=sucrase" target="_blank"> Sucrase </a> na versão 3.33.0

:small_orange_diamond: `yarn add sucrase -D`

~

O <a href="https://yarnpkg.com/package?name=eslint" target="_blank"> Eslint </a> na versão 8.0.1

:small_orange_diamond: `yarn add eslint -D`

~

O <a href="https://yarnpkg.com/package?name=prettier" target="_blank"> Prettier </a> nas versões 8.8.0 e 5.0.0

:small_orange_diamond: `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

~

O <a href="https://yarnpkg.com/package?name=sequelize-cli" target="_blank"> Sequelize-cli </a> na versão 6.6.1

:small_orange_diamond: `yarn add sequelize-cli -D`

~

## Rodando o projeto
- Para rodar o repositório é necessário clonar o mesmo.
  
- Pra inicar escreva no terminal:
```
npm init -y
```

- Após instaladas as dependências, dê o comando seguinte para rodar a aplicação do servidor:
```
yarn dev
```

- Parar de rodar o servidor: no terminal clicar nas teclas de "Ctrl" e "C".

- Para debugar:
```
yarn debug
```

- Para usar o Sequelize com o PostgreSQL, precisa instalar:
```
yarn add pg pg-hstore
```

- Para rodar a Migration:
```
yarn sequelize db:migrate
```

- Para desfazer todas as Migrations:
```
yarn sequelize db:migrate:undo:all
```

- Para rodar o banco de dados:
```
docker start codeburguer-postgres
```

- Utilizei o Insomnia para realizar as requisições desejadas.

## Middlewares
```js
middlewares() {
    this.app.use(express.json())
    this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')))
  }
```
e
```js
routes() {
    this.app.use(routes)
  }
```
## Migrations
Criações de tabelas para o banco de dados. 

Precisa estar, primeiramente, com o Docker rodando. 

- Tabela de Usuários:
  - id
  - name
  - email
  - password_hash
  - admin
  - created_at
  - updated_at
 
## Controllers
Padrão do objeto que espero receber no Insomnia.
- Schema do UserController.

```js
name: Yup.string().required(),
email: Yup.string().email().required(),
password: Yup.string().required().min(6),
admin: Yup.boolean(),
```

## Status do projeto
:construction: O projeto está em andamento. 
