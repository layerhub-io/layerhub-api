FROM node:18-alpine as builder
RUN npm i pnpm --location global
WORKDIR /app
COPY . .
RUN pnpm i
RUN pnpm build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/dist/ ./dist/
# COPY --from=builder /app/.env ./

# ENV NODE_ENV "production"

CMD [ "node", "dist/src/main.js"]