FROM node:12.13-alpine As development

# set a directory for the app
WORKDIR /usr/src/app

# copy files packagejson to the container
COPY package*.json ./

# install dependencies
RUN npm install --only=development

# copy all the files to the container

COPY . .

# run the command BUILD

RUN npm build

# production

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]

