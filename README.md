<h1> Backend da Hamburgueria :hamburger:🛒 </h1>
<br>

<h2> Este foi o projeto que aprendi no curso do DevClub </h2>
<p> Usuário pode se cadastrar na aplicação, escolher os pedidos e verificar o carrinho de compras. </p>

<h2> Introdução </h2>
<p> O usuário vai poder se cadastrar e logar na aplicação com seus dados de e-mail e senha. Depois de logado, ele pode escolher um hambúrguer e complementos. Por fim, o usuário pode clicar no carrinho e realizar a compra. </p>

## Tecnologias utilizadas
* VS Code
* Yarn
* Node.JS
* Express.JS
* 

## Ferramentas
Na aplicação foi utilizado o <a href="https://nodejs.org/en/download" target="_blank" > Node.JS </a>  na versão 18.14.0 em LTS.

~

O <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable"> Yarn </a> na versão 1.22.19

:small_orange_diamond: `npm install -g yarn` ou `sudo npm install -g yarn` 

~

## Dependências 
Framework <a href="https://www.npmjs.com/package/express" target="_blank" > Express </a> na versão 4.18.2 

:small_orange_diamond: `yarn add express`

~

## Dependência de desenvolvimento
O <a href="https://classic.yarnpkg.com/en/package/nodemon"> Nodemon </a> na versão 3.0.1

:small_orange_diamond: `yarn add nodemon -D`
  
Criado um script no `package.json` para o nodemon: "dev".

~

O <a href="https://yarnpkg.com/package?name=sucrase" target="_blank"> Sucrase </a> na versão 3.33.0

:small_orange_diamond: `yarn add sucrase -D`

~

## Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo.  
Pra inicar escreva no terminal:
```
npm init -y
```
Após instaladas as dependências, dê o comando seguinte para rodar a aplicação:
```
yarn dev
```
Parar de rodar o servidor: no terminal clicar nas teclas de "Ctrl" e "C".

Para debugar:
```
yarn debug
```

Utilizei o Insomnia para realizar as requisições desejadas.

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

## Status do projeto
:construction: O projeto está em andamento. 
