FROM node:10

COPY build build

EXPOSE 8000

RUN npm install -g serve

ENTRYPOINT serve -s build