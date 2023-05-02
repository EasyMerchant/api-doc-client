# Dockerfile prod

FROM node:16-alpine

# Installing libvips-dev for sharp Compatability
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
WORKDIR /srv
COPY ./package.json ./package-lock.json ./
ENV PATH /srv/node_modules/.bin:$PATH
RUN npm install
WORKDIR /srv/app
COPY ./ .
EXPOSE 3000
CMD ["npm", "run", "dev"]