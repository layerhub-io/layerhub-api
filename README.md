# Server

Backend application for design editor. It provides Rest Endpoints for working with templates: Create, Update, Delete, Download, etc.

## How to start

Before starting server, create `.env` file. Required fields are provided in `.env.sample.`
Start in development mode using the following commands.

```sh
# install dependencies
pnpm i
# start development server
pnpm dev
```

## Endpoints

### Templates

```
POST    /templates
PUT     /templates/:id
DELETE  /templates/:id
GET     /templates
GET     /templates/:id

```

### Uploads

```
POST /uploads
PUT /uploads/:id
DELETE /uploads/:id
GET /uploads
```
