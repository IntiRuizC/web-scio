FROM node:22.4.0-alpine3.20

WORKDIR /app

COPY package*.json ./
RUN npm install
VOLUME /app/node_modules
EXPOSE 3001

CMD ["npm", "run", "dev"]