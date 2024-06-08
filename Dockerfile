FROM node:slim
WORKDIR /app
COPY ./package.json /app/package.json
RUN yarn
COPY . /app
RUN yarn build
CMD yarn start
