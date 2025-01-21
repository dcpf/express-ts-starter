## Express with TypeScript Starter

Starter scaffolding for Express with TypeScript and example routes for HTML views and API endpoints.

### Comes with:
- cookie-parser
- cors
- dotenv
- eslint
- express
- express-promise-router
- helmet
- jest
- morgan
- prettier
- supertest
- typescript

### Project Structure

```
├── config
│   └── .env.dev
├── data
│   └── users.json
└── src
    ├── database
    │   └── userStore.ts
    ├── error
    │   └── ApiError.ts
    ├── model
    │   └── user.ts
    ├── public
    │   └── stylesheets
    │       └── styles.css
    ├── routes
    │   ├── api
    │   │   └── users.ts
    │   ├── view
    │   │   └── home.ts
    │   ├── apiRouter.ts
    │   └── viewRouter.ts
    ├── service
    │   └── userService.ts
    ├── views
    │   ├── error.ejs
    │   └── home.ejs
    ├── app.ts
    └── server.ts
```

### Scripts

#### Install:

```
$ yarn install
```

#### Clean install:

```
$ yarn clean-install
```

#### Start in dev mode:

```
$ yarn dev-start
```

#### Start in dev mode with hot-deploy:

```
$ yarn dev-start:hot
```

#### Run eslint:

```
$ yarn lint
```

#### Run prettier check:

```
$ yarn prettier
```

#### Run unit tests:

```
$ yarn test
```

#### Run unit tests in 'hot' mode:

```
$ yarn test:hot
```

#### Run type check:

```
$ yarn type-check
```
