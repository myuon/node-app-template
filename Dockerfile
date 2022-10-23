FROM node:16
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build
USER node

ENV NODE_ENV production
CMD ["node", "dist/index.js"]
