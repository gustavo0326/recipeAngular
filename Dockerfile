### STAGE 1: Build ###
FROM node:16-alpine3.11 AS build
WORKDIR /projects/recipeAngular/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /projects/recipeAngular/dist/resturant /usr/share/nginx/html
