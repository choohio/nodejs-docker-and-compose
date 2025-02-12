FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . ./
RUN npm run build

FROM nginx:latest as runner
WORKDIR /app
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
