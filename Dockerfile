FROM node:18-alpine

WORKDIR .
ADD . .

RUN npm install

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]