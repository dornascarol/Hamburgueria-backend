<h1> Burger Shop Backend :hamburger:🛒 </h1>
<br>

<h2> This was the project I learned in the DevClub course </h2>
<p> User can register in the application, choose orders and check the shopping cart. </p>

<h2> Introduction </h2>
Application intended to simulate a purchasing system in a food establishment. The user can register and log in with their email and password. After logging in and authenticating the token, the home page with the store's products becomes visible to choose varieties of burgers and toppings. Finally, the user can click on the shopping cart.

In addition to an administrative panel where the establishment representative can see all orders and their updated status.

## Technologies used
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
* MongoDB Compass
  
  

## Tools
The application used <a href="https://nodejs.org/en/download" target="_blank" > Node.JS</a>  version 18.14.0 in LTS.

~

<a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable" target="_blank" > Yarn</a> in version 1.22.19

:small_orange_diamond: `npm install -g yarn` or `sudo npm install -g yarn` 

~

<a href="https://www.docker.com/get-started/" target="_blank" > Docker</a> in the configuration for computer 4.21.1 and version 24.0.2


~

The <a href="https://github.com/Paxa/postbird" target="_blank"> Postbird</a> in the version installed at Postbird.Setup.0.8.4.exe

~

<a href="https://sequelize.org/docs/v6/getting-started/" target="_blank"> Sequelize</a> in version 6.32.1

:small_orange_diamond: `yarn add sequelize`

~

The program <a href="https://insomnia.rest/download" target="_blank" > Insomnia</a> was used to test route requests by simulating the Front-end.

~

The <a href="https://www.mongodb.com/try/download/compass" target="_blank" > MongoDB Compass</a> (GUI) in Computer Setup version 1.40.4 (Stable).

~

## Dependencies
Framework <a href="https://yarnpkg.com/package?name=express" target="_blank" > Express</a> in version 4.18.2

:small_orange_diamond: `yarn add express`

~

Library <a href="https://yarnpkg.com/package?name=uuidv4" target="_blank" > UUID</a> of type v.4 and in version 9.0.0

:small_orange_diamond: `yarn add uuid`

~

<a href="https://github.com/jquense/yup" target="_blank"> Yup</a> library in version 1.2.0

:small_orange_diamond: `yarn add yup`

~

<a href="https://yarnpkg.com/package?name=bcrypt" target="_blank"> Bcrypt</a> library in version 5.1.0

:small_orange_diamond: `yarn add bcrypt`

~

Library <a href="https://github.com/expressjs/multer" target="_blank" > Multer</a> in version 1.4.5-1ts.1

:small_orange_diamond: `yarn add multer`

~

<a href="https://yarnpkg.com/package?name=jsonwebtoken" target="_blank"> JWT</a> library in version 9.0.2

:small_orange_diamond: `yarn add jsonwebtoken`

~

<a href="https://yarnpkg.com/package?name=mongoose" target="_blank"> Mongoose</a> library in version 7.6.1

:small_orange_diamond: `yarn add mongoose`

~

## Development dependencies
<a href="https://classic.yarnpkg.com/en/package/nodemon" target="_blank" > Nodemon</a> in version 3.0.1

:small_orange_diamond: `yarn add nodemon -D`
  
Created a script in `package.json` for nodemon: "dev".

~

<a href="https://yarnpkg.com/package?name=sucrase" target="_blank"> Sucrase</a> in version 3.33.0

:small_orange_diamond: `yarn add sucrase -D`

~

<a href="https://yarnpkg.com/package?name=eslint" target="_blank"> Eslint</a> in version 8.0.1

:small_orange_diamond: `yarn add eslint -D`

~

<a href="https://yarnpkg.com/package?name=prettier" target="_blank"> Prettier</a> in versions 8.8.0 and 5.0.0

:small_orange_diamond: `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D`

~

<a href="https://yarnpkg.com/package?name=sequelize-cli" target="_blank"> Sequelize-cli</a> in version 6.6.1

:small_orange_diamond: `yarn add sequelize-cli -D`

~

## Running the project
- To run the repository it is necessary to clone it.
  
- To start, type in the terminal:
```
npm init -y
```

- After installing the dependencies, issue the following command to run the server application:
```
yarn dev
```

- Stop running the server: in the terminal, click the "Ctrl" and "C" keys.
  

- To debug:
```
yarn debug
```

- To use Sequelize with PostgreSQL, you need to install:
```
yarn add pg pg-hstore
```

- To run Migration:
```
yarn sequelize db:migrate
```

- To undo all Migrations:
```
yarn sequelize db:migrate:undo:all
```

- To run the PostgreSQL relational database:
```
docker start codeburguer-postgres
```

- To bring down the PostgreSQL relational database:
```
docker stop codeburguer-postgres
```

- I used Insomnia to perform the desired requests.
  

- To run the MongoDB non-relational database:
```
docker start mongo
```

- To take down the MongoDB non-relational database:
```
docker stop mongo
```
~

## Endpoints
<p> URL path: http://localhost:3000 </p>

| Method | URL             | Description                                                                                                                                                                   |
| ------ | --------------  | ------------------------------------------------------------------------------------------------------                                                                        |
| POST   | /users          | Create a user using the information sent within the `request.body` file.                                                                                                      |
| POST   | /sessions       | Check whether the email and password match the user information registered in the database.                                                                                   |
| POST   | /products       | Create a product using the information sent inside the `request.body` file. And uploads the file received from Insomnia.                                                      |
| GET    | /products       | Searche for all products in the database in the `products` table. And returns a JSON list with all product data.                                                              |
| POST   | /categories     | Create a category using the information sent inside the `request.body` file with token. And uploads the file received from Insomnia.                                          |
| GET    | /categories     | Searche for all categories in the database in the `categories` table. And returns a JSON list with all category data.                                                         |
| POST   | /orders         | Create a request using the information sent inside the `request.body` file with updated token.                                                                                |
| GET    | /orders         | Searche for all orders in the database. Without the body and with an updated token. And returns a JSON of the list with information about `user, products and status`.        |
| PUT    | /orders/:id     | Update the specific order status, from the id, using the `request.body` file. And responds with a success message.                                                            |
| PUT    | /products/:id   | Update some specific request data, from the id, using the `request.body` file. Uploads the file received from Insomnia (if available). And responds with a success message.   |
| PUT    | /categories/:id | Update some category-specific data, from the id, using the `request.body` file. Uploads the file received from Insomnia (if available). And responds with a success message.  | 


## Middlewares
Serves as an interceptor.

As soon as the user tries to access the route, the information is validated to see if it is correct or incorrect.

```js
middlewares() {
    this.app.use(express.json())
    this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')))

    this.app.use('/category-file', express.static(resolve(__dirname, '..', 'uploads')))
  }
```
~

```js
routes() {
    this.app.use(routes)
  }
```
~

##### Using JWT:

```js
export default(request, response, next) => {
    const authToken = request.headers.authorization
```

- If the user does not send a _token_:

  - Respond to HTTP status with code `401` (Unauthorized)
  - Return the following JSON: `{ error: 'Token not provided' }`
    
- If the user sends a wrong _token_:

  - Respond to HTTP status with code `401` (Unauthorized)
  - Return the following JSON: `{ error: 'Invalid token' }`

- If the user sends a valid _token_:

  - Return the JSON with all the product information from the database table. Authorized access for the route.
 
~

## Migrations
It is used to create tables for the database and to modify them.

First, you need to have Docker running. 
And then you need to run Migration. 

- Creating the User Table:
  - id
  - name
  - email
  - password_hash
  - admin
  - created_at
  - updated_at

 ~

 - Creating the Product Table:
   - id
   - name
   - price
   - category
   - path
   - created_at
   - updated_at

~

- Creating the Category Table:
   - id
   - name
   - path
   - created_at
   - updated_at

~

- Delete field in table:
  - Remove _category_ column from Products Table

~  

- Create field in table:
  - Add _category_id_ column in Products Table
 
~

- Add field to table:
  - Add _offer_ column in Products Table

~

- Add field to table:
  - Add _path_ column in Categories Table

~

## Controllers
Pattern of the object I expect to receive in Insomnia.

##### User Schema for creating users:

```js
name: Yup.string().required(),
email: Yup.string().email().required(),
password: Yup.string().required().min(6),
admin: Yup.boolean(),
```

- If you find any _invalid_ data:

  - Respond to HTTP status with code `400` (Bad Request)
  - Return the error reason(s) in JSON format: `{ error: err.errors }`

- If you find an existing _email_:

  - Respond to HTTP status with code `400` (Bad Request)
  - Return the following JSON: `{ error: 'Email already registered' }`
 
- Successfully creating a _user_:

  - Respond to HTTP status with code `201` (Created)
  - Return the following JSON: `{ id: user.id, name, email, admin }`
    
~

##### Session Schema for user login:

```js
email: Yup.string().email().required(),
password: Yup.string().required(),
```

- If you can't find the user's _email_ or _password_:

  - Respond to HTTP status with code `400` (Bad Request)
  - Return the following JSON: `{ error: 'Incorrect email or password' }`

- Successfully finding user's _email_ and _password_:

  - Respond to HTTP status with code `200` (OK)
  - Return the following JSON: `{id: user.id, email, name: user.name, admin: user.admin, token: jwt.sign }`
    
~

##### Product Schema for creating products:  

```js
name: Yup.string().required(),
price: Yup.number().required(),
category_id: Yup.number().required(),
offer: Yup.boolean(),

```

- If you find any _invalid_ data:

    - Respond to HTTP status with code `400` (Bad Request)
    - Return the error reason(s) in JSON format: `{ error: err.errors }`
 
- Successfully creating a _product_:

  - Respond to HTTP status with code `200` (OK)
  - Return the following JSON: `{ id, name, price, category_id, path, updated_at, created_at, offer }`
    
- Finding all registered _products_:
  
    - Respond to HTTP status with code `200` (OK)
    - Return the following JSON: `{ url, id, name, price, path, updated_at, created_at, category_id: category: { id, name }, offer }`

- If you encounter a user that is not _admin_:

  - Respond to HTTP status with code `401` (Unauthorized)
           
~

##### Category Schema for creating categories:

```js
name: Yup.string().required(),

```

- If you find any _invalid_ data:

    - Respond to HTTP status with code `400` (Bad Request)
    - Return the error reason(s) in JSON format: `{ error: err.errors }`
      
- If you find any repeated _categories_:

    - Respond to HTTP status with code `400` (Bad Request)
    - Return the error in JSON format: `{ error: 'Category already exists' }`
 
- Successfully creating a _category_:

  - Respond to HTTP status with code `200` (OK)
  - Return the following JSON: `{ name, id }`

- If you encounter a user that is not _admin_:

  - Respond to HTTP status with code `401` (Unauthorized)
       
~

##### Order Schema for creating orders:

```js
products: Yup.array().required().of(
                Yup.object().shape({
                    id: Yup.number().required(),
                    quantity: Yup.number().required(),
                })
            )
```

- If you find any _invalid_ data:

    - Respond to HTTP status with code `400` (Bad Request)
    - Return the error reason(s) in JSON format: `{ error: err.errors }`
 
- Successfully creating an _order_:

  - Respond to HTTP status with code `201` (Created)
  - Return the following JSON: `{ id: product.id, name: product.name, price: product.price, category: product.category.name, url: product.url, quantity: request.body.products[productIndex].quantity }`

- If you encounter a user that is not _admin_:

  - Responds to HTTP status with code `401` (Unauthorized)
    
~

##### Product Schema for product updates:

```js
name: Yup.string(),
price: Yup.number(),
category_id: Yup.number(),
offer: Yup.boolean(),

```

- If you find any _invalid_ data:

    - Respond to HTTP status with code `400` (Bad Request)
    - Return the error reason(s) in JSON format: `{ error: err.errors }`
 
- Successfully changing a _product_:

  - Respond to HTTP status with code `200` (OK)

- If you encounter a user that is not _admin_:

  - Respond to HTTP status with code `401` (Unauthorized)

- If you can't find a _product_ by ID:
  
    - Respond to HTTP status with code `401` (Unauthorized)
    - Return the following JSON: `{ error: 'Please check that your product ID is correct' }`
      
~

##### Category Schema for category updates:

```js
name: Yup.string(),

```

- If you find any _invalid_ data:

    - Respond to HTTP status with code `400` (Bad Request)
    - Return the error reason(s) in JSON format: `{ error: err.errors }`
      
- If you can't find any _category_ by ID:

    - Respond to HTTP status with code `401` (Unauthorized)
    - Return the error in JSON format: `{ error: 'Please check that your category ID is correct' }`
 
- Successfully changing a _category_:

  - Respond to HTTP status with code `200` (OK)

- If you encounter a user that is not _admin_:

  - Respond to HTTP status with code `401` (Unauthorized)
       
~

## Models

Responsible for reading and writing data. Assist in the application's interface with the database.

##### Static init method in User

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

##### Static init method on Product

```js
super.init(
            {
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            path: Sequelize.STRING,
            offer: Sequelize.BOOLEAN,
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

##### Static init method in Category

```js
super.init(
            {
            name: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `http://localhost:3000/category-file/${this.path}`
                },
            },
        },
        {
            sequelize,
        })
```

~

##### Static associate method on Product

```js
static associate(models){
        this.belongsTo(models.Category, { 
            foreignKey: 'category_id', 
            as: 'category',
        })
    }
```

~

## Project status
:heavy_check_mark: Back-end application completed. 
