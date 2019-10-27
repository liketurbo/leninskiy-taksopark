# Stage 1
FROM node

WORKDIR /usr/app

COPY ./package.json ./
RUN yarn

COPY ./ ./

RUN yarn build

# Stage 2
FROM nginx:alpine

COPY ./nginx /etc/nginx/conf.d
COPY --from=0 /usr/app/public /usr/share/nginx/app