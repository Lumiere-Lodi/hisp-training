FROM node:18.16.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3001

ENV NODE_ENV=development

CMD ["yarn", "start"]