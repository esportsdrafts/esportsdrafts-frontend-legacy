
FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ARG VERSION

LABEL Name="esportsdrafts-frontend-dev" \
    Version="${VERSION}"

# NOTE: THIS IS FOR DEV ONLY, PRODUCTION NEEDS DIFFERENT IMAGE
CMD [ "npm", "run", "serve"]
