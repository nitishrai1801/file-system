
FROM node:16.13.1-alpine3.14

WORKDIR /app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY ./ ./

RUN npm install
RUN npm run build
# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.8.0/wait /wait
# RUN chmod +x /wait
CMD ["npm", "start"]



# FROM node:16.13.1-alpine3.14

# WORKDIR /usr/src/app

# COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

# COPY ./ ./

# RUN npm install
# RUN npm run build
# COPY ./build ./build
# CMD ["npm", "start"]








# FROM node:16.13.1-alpine3.14


# WORKDIR /app

# COPY package.json ./


# COPY . .


# RUN npm install
# RUN npm run build

# CMD ["npm", "start"]