FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]
