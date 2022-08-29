FROM node:18-slim

WORKDIR /usr/src/app

COPY . .

ENV NODE_OPTIONS --max-old-space-size=4096

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build

CMD [ "pnpm", "start" ]