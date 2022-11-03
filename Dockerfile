
FROM node:16.13.1-alpine3.14

WORKDIR /app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY ./ ./

RUN npm install
RUN npm run build

CMD ["npm", "start"]
