FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

# EXPOSE ${PORT}

CMD ["npm", "start"]