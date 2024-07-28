FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build
RUN npx prisma generate

EXPOSE 8080

CMD ["npm", "run", "serve"]
