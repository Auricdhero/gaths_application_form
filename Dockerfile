FROM node:12

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

RUN npm run generate

EXPOSE 3000
CMD ["npm", "start"]