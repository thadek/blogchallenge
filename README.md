# Warmup Challenge Alkemy

#### 1) Installation
```
npm install
```

#### 2) dotenv file:

```
DB_USER=
DB_PASS=
DB_NAME=
PORT=
```

#### 3) Run db:create, migrations and finally seeds.
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
#### 4) Run.
```
npm run dev
```

## Important:
/posts GET endpoint can receive a page query param (localhost:3000/posts?page=0)

### Endpoints:
#### GET,POST,PATCH,DELETE
/posts /posts/:id 

#### GET,POST,PATCH,DELETE
/categories /categories/:id
