FROM node:alpine3.19

WORKDIR /app

EXPOSE 3000

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build
RUN npm install serve

CMD npx serve -s dist

