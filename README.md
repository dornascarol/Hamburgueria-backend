<h1> Backend da Hamburgueria :hamburger:🛒 </h1>
<br>

<h2> Este foi o projeto que aprendi no curso do DevClub </h2>
<p> Usuário pode se cadastrar na aplicação, escolher os pedidos e verificar o carrinho de compras. </p>

<h2> Introdução </h2>
Aplicação com intenção de simular um sistema de compras em um estabelecimento alimentício. O usuário pode se cadastrar e logar com seus dados de e-mail e senha. Depois de logado e com o token autenticado, a página inicial com os produtos da loja fica visível para escolher variedades de hambúrgueres e complementos. Por fim, pode clicar no carrinho e realizar a compra. 

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
* Multer
* JWT (JSON Web Token)
* Mongoose
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

Biblioteca <a href="https://github.com/expressjs/multer" target="_blank" > Multer </a> na versão 1.4.5-1ts.1

:small_orange_diamond: `yarn add multer`

~

Biblioteca <a href="https://yarnpkg.com/package?name=jsonwebtoken" target="_blank"> JWT </a> na versão 9.0.2

:small_orange_diamond: `yarn add jsonwebtoken`

~

Biblioteca <a href="https://yarnpkg.com/package?name=mongoose" target="_blank"> Mongoose </a> na versão 7.6.1

:small_orange_diamond: `yarn add mongoose`

~

## Dependências de desenvolvimento
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

- Para rodar o banco de dados relacional PostgreSQL:
```
docker start codeburguer-postgres
```

- Para derrubar este banco de dados relacional:
```
docker stop codeburguer-postgres
```

- Utilizei o Insomnia para realizar as requisições desejadas.
  

- Para rodar o banco de dados não relacional MongoDB:
```
docker start mongo
```

- Para derrubar este banco de dados não relacional:
```
docker stop mongo
```

## Endpoints
<p> Caminho da URL: http://localhost:3000 </p>

| Método | URL            | Descrição                                                                                                                                    |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------                                       |
| POST   | /users         | Cria um usuário usando as informações enviadas dentro do arquivo `request.body`.                                                             |
| POST   | /sessions      | Verifica se o e-mail e senha correspondem com as informações do usuário cadastrado no banco de dados.                                        |
| POST   | /products      | Cria um produto usando as informações enviadas dentro do arquivo `request.body`. E fazer o upload do arquivo que espero receber do Insomnia. |
| GET    | /products      | Procura todos os produtos no banco de dados da tabela `products`. E retorna um JSON da lista com todos os dados dos produtos.                |
| POST   | /categories    | Cria uma categoria usando a informação enviada dentro do arquivo `request.body` com token.                                                   |
| GET    | /categories    | Procura todas as categorias no banco de dados da tabela `categories`. E retorna um JSON da lista com todos os dados das categorias.          |
| POST   | /orders        | Cria um pedido usando as informações enviadas dentro do arquivo `request.body` com token atualizado.                                         |


## Middlewares
Serve como interceptador. 

Assim que o usuário tentar acessar a rota, faz uma validação da informação se está correta ou se está incorreta.

```js
middlewares() {
    this.app.use(express.json())
    this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')))
  }
```
~

```js
routes() {
    this.app.use(routes)
  }
```
~

##### Usando JWT:

```js
export default(request, response, next) => {
    const authToken = request.headers.authorization
```

- Se o usuário não mandar um _token_:

  - Responde status HTTP com o código `401` (Unauthorized)
  - Retorna o seguinte JSON: `{ error: 'Token não fornecido' }`

- Se o usuário mandar um _token_ errado:

  - Responde status HTTP com o código `401` (Unauthorized)
  - Retorna o seguinte JSON: `{ error: 'Token inválido' }`

- Se o usuário mandar um _token_ válido:

  - Retorna o JSON com todas as informações dos produtos da tabela do banco de dados. Acesso autorizado para a rota.
 
~

## Migrations
Serve para criações de tabelas para o banco de dados. E para modificá-las.

Precisa estar, primeiramente, com o Docker rodando. 
E em seguida, precisa rodar a Migration. 

- Criação da Tabela de Usuários:
  - id
  - name
  - email
  - password_hash
  - admin
  - created_at
  - updated_at

 ~

 - Criação da Tabela de Produtos:
   - id
   - name
   - price
   - category
   - path
   - created_at
   - updated_at

~

- Criação da Tabela de Categorias:
   - id
   - name
   - created_at
   - updated_at

~

- Deletar campo na tabela:
  - Remover coluna _category_ que está na Tabela de Produtos

~  

- Criar campo na tabela:
  - Adicionar coluna _category_id_ na Tabela de Produtos
 
~
  
## Controllers
Padrão do objeto que espero receber no Insomnia.

##### Schema do User para criação do usuários:

```js
name: Yup.string().required(),
email: Yup.string().email().required(),
password: Yup.string().required().min(6),
admin: Yup.boolean(),
```

- Se encontrar algum dado _inválido_:

  - Responde status HTTP com o código `400` (Bad Request)
  - Retorna o(s) motivo(s) do(s) erro(s) no formato JSON: `{ error: err.errors }`

- Se encontrar um _email_ já existente:

  - Responde status HTTP com o código `400` (Bad Request)
  - Retorna o seguinte JSON: `{ error: 'E-mail já cadastrado' }`
 
- Criando com sucesso um _usuário_:

  - Responde status HTTP com o código `201` (Created)
  - Retorna o seguinte JSON: `{ id: user.id, name, email, admin  }`
    
~

##### Schema do Session para fazer o login do usuário:

```js
email: Yup.string().email().required(),
password: Yup.string().required(),
```

- Se não encontrar o _email_ ou _senha_ do usuário:

  - Responde status HTTP com o código `400` (Bad Request)
  - Retorna o seguinte JSON: `{ error: 'Email ou senha incorreto' }`

- Encontrando com sucesso _email_ e _senha_ do usuário:

  - Responde status HTTP com o código `200` (OK)
  - Retorna o seguinte JSON: `{id: user.id, email, name: user.name, admin: user.admin, token: jwt.sign }`
    
~

##### Schema do Product para criação de produtos:

```js
name: Yup.string().required(),
price: Yup.number().required(),
category_id: Yup.number().required(),

```

- Se encontrar algum dado _inválido_:

    - Responde status HTTP com o código `400` (Bad Request)
    - Retorna o(s) motivo(s) do(s) erro(s) no formato JSON: `{ error: err.errors }`
 
- Criando com sucesso um _produto_:

  - Responde status HTTP com o código `200` (OK)
  - Retorna o seguinte JSON: `{ id, name, price, category_id, path, updated_at, created_at }`
    
- Encontrando todos os _produtos_ cadastrados:
  
    - Responde status HTTP com o código `200` (OK)
    - Retorna o seguinte JSON: `{ url, id, name, price, path, updated_at, created_at, category_id: category: { id, name } }`
       
~

##### Schema do Category para criação de categorias:

```js
name: Yup.string().required(),

```

- Se encontrar algum dado _inválido_:

    - Responde status HTTP com o código `400` (Bad Request)
    - Retorna o(s) motivo(s) do(s) erro(s) no formato JSON: `{ error: err.errors }`
      
- Se encontrar alguma _categoria_ repetida:

    - Responde status HTTP com o código `400` (Bad Request)
    - Retorna o erro no formato JSON: `{ error: 'Categoria já existe' }`
 
- Criando com sucesso uma _categoria_:

  - Responde status HTTP com o código `200` (OK)
  - Retorna o seguinte JSON: `{ name, id }`
 
~

##### Schema do Order para criação de pedidos:

```js
products: Yup.array().required().of(
                Yup.object().shape({
                    id: Yup.number().required(),
                    quantity: Yup.number().required(),
                })
            )
```

- Se encontrar algum dado _inválido_:

    - Responde status HTTP com o código `400` (Bad Request)
    - Retorna o(s) motivo(s) do(s) erro(s) no formato JSON: `{ error: err.errors }`
 
- Criando com sucesso um _pedido_:

  - Responde status HTTP com o código `201` (Created)
  - Retorna o seguinte JSON: `{ id: product.id, name: product.name, price: product.price, category: product.category.name, url: product.url, quantity: request.body.products[productIndex].quantity }`

~

## Models

Responsável pela leitura e escrita de dados. Auxiliar na interface da aplicação com o banco de dados.

##### Método static init no User

```js
super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            admin: Sequelize.BOOLEAN,
        },
        {
            sequelize,
        })
```

~

##### Método static init no Product

```js
super.init(
            {
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `http://localhost:3000/product-file/${this.path}`
                },
            },
        },
        {
            sequelize,
        })
```

~

##### Método static init no Category

```js
super.init(
            {
            name: Sequelize.STRING,
        },
        {
            sequelize,
        })
```

~

##### Método static associate no Product

```js
static associate(models){
        this.belongsTo(models.Category, { 
            foreignKey: 'category_id', 
            as: 'category',
        })
    }
```

~

## Status do projeto
:construction: O projeto está em andamento. 
