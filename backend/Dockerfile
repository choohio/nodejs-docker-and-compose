FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app
RUN npm install -g pm2
COPY --from=builder /app/package*.json ./
RUN npm i
COPY --from=builder /app/dist ./dist/
CMD ["pm2-runtime", "./dist/main.js"]