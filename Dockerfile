FROM node:16 as builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:16
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server/package.json ./server/package.json
COPY --from=builder /app/web/package.json ./web/package.json
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
RUN yarn install --frozen-lockfile --production
USER node

CMD ["node", "dist/index.js"]
