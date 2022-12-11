FROM node:16-alpine


RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /app
COPY . /app
RUN npm install
COPY ./app/wait-for-it.sh /usr/local
RUN chmod +x /usr/local/wait-for-it.sh

EXPOSE 8000

CMD ["npm", "start"]
