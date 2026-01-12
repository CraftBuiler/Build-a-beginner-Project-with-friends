FROM node:22

WORKDIR /my-app

COPY package.json package.json-lock.json ./

RUN npm install

COPY . .

EXPOSE 5713

CMD ["npm", "run", "dev"]